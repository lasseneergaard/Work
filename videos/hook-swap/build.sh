#!/usr/bin/env bash
# Builds the 4 hook-swap variants: new 0-~5s opening + original body from the 7.53s scene cut ("Ça c'est toi").
# Usage: ./build.sh   (run from anywhere; needs ffmpeg + node/playwright)
set -euo pipefail
cd "$(dirname "$0")"

SRC=../source/C245-01_V1_KP_TOF_VID_UGC_FR_FRT-FRT_PDP_2.mp4
NAME=C245-01_V1_KP_TOF_VID_UGC_FR_FRT-FRT_PDP_2
OUT=../output
OV=build/overlays
BODY_START=7.5333   # scene cut + speech pause right before "Ça c'est toi"
mkdir -p "$OUT" build

node overlays.js "$OV" >/dev/null

# Common output normalisation for every segment before concat.
V_NORM="scale=720:1280:flags=lanczos,setsar=1,fps=30,format=yuv420p"
A_NORM="aresample=44100,aformat=sample_fmts=fltp:channel_layouts=stereo"
ENC=(-c:v libx264 -preset slow -crf 18 -profile:v high -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart)

# Joins hook graph output [hv][ha] with the untouched body and encodes.
# $1 = output suffix, $2 = extra -i inputs (array name), $3 = filter graph producing [hv][ha]
build() {
  local suffix=$1; shift
  local -n inputs=$1; shift
  local graph=$1
  ffmpeg -v error -y -i "$SRC" "${inputs[@]}" -filter_complex "
    $graph;
    [0:v]trim=start=$BODY_START,setpts=PTS-STARTPTS,$V_NORM[bv];
    [0:a]atrim=start=$BODY_START,asetpts=PTS-STARTPTS,$A_NORM,afade=t=in:d=0.01[ba];
    [hv][ha][bv][ba]concat=n=2:v=1:a=1[v][a]" \
    -map "[v]" -map "[a]" "${ENC[@]}" "$OUT/${NAME}_HOOK-${suffix}.mp4"
  echo "built $OUT/${NAME}_HOOK-${suffix}.mp4"
}

# A - Mattress receipt: original symptom + "pas de ton matelas" lines (2.03-7.53s), receipt + INUTILE stamp.
IN_A=(-loop 1 -t 8 -i "$OV/A_head.png" -loop 1 -t 8 -i "$OV/A_receipt.png" -loop 1 -t 8 -i "$OV/A_stamp.png")
build A-MATTRESS-RECEIPT IN_A "
  [0:v]trim=2.0333:7.5333,setpts=PTS-STARTPTS,$V_NORM[s];
  [s][1:v]overlay=shortest=1[o1];
  [o1][2:v]overlay=shortest=1:enable='lt(t,3.4)'[o2];
  [o2][3:v]overlay=shortest=1:enable='between(t,0.9,3.4)'[hv];
  [0:a]atrim=2.0333:7.5333,asetpts=PTS-STARTPTS,$A_NORM,afade=t=out:st=5.49:d=0.01[ha]"

# B - Pillow fight: existing "oreiller mal adapté" wrestle shot (35.63-38.00s) as the pattern interrupt.
IN_B=(-loop 1 -t 8 -i "$OV/B_head1.png" -loop 1 -t 8 -i "$OV/B_head2.png")
build B-PILLOW-FIGHT IN_B "
  [0:v]trim=35.6333:38.0,setpts=PTS-STARTPTS,$V_NORM[s];
  [s][1:v]overlay=shortest=1[o1];
  [o1][2:v]overlay=shortest=1:enable='gte(t,1.0)'[hv];
  [0:a]atrim=35.6333:38.0,asetpts=PTS-STARTPTS,$A_NORM,afade=t=out:st=2.35:d=0.01[ha]"

# C - Finger-leg close-up: 1.5x crop of the demo's result shot (11.73-14.70s, "ton bassin pivote,
#     et ta colonne perd son alignement naturel") with its own audio, as a flash-forward before 7.53s.
IN_C=(-loop 1 -t 8 -i "$OV/C_marker.png" -loop 1 -t 8 -i "$OV/C_head.png")
build C-FINGER-LEG IN_C "
  [0:v]trim=11.7333:14.7,setpts=PTS-STARTPTS,crop=480:853:120:50,$V_NORM,unsharp=5:5:0.6[s];
  [s][1:v]overlay=shortest=1:enable='gte(t,0.3)'[o1];
  [o1][2:v]overlay=shortest=1[hv];
  [0:a]atrim=11.7333:14.7,asetpts=PTS-STARTPTS,$A_NORM,afade=t=out:st=2.95:d=0.015[ha]"

# D - Senior / vouvoiement: slow push-in on a still of the presenter holding the pillow (53.0s),
#     text-led in "vous", soft whooshes on each text change (no "tu" voice in the hook).
D_LEN=5.0
ffmpeg -v error -y -ss 53.0 -i "$SRC" -frames:v 1 build/D_still.png
IN_D=(-loop 1 -t $D_LEN -framerate 30 -i build/D_still.png -loop 1 -t 8 -i "$OV/D_badge.png" -loop 1 -t 8 -i "$OV/D_top1.png" -loop 1 -t 8 -i "$OV/D_top2.png" -loop 1 -t 8 -i "$OV/D_top3.png"
      -f lavfi -t $D_LEN -i "anoisesrc=color=pink:amplitude=0.5:r=44100")
build D-SENIOR-VOUS IN_D "
  [1:v]scale=1440:2560,zoompan=z='1+0.03*on/($D_LEN*30)':x='iw/2-(iw/zoom/2)':y='ih*0.42-(ih/zoom*0.42)':d=1:s=720x1280:fps=30,$V_NORM[s];
  [s][2:v]overlay=shortest=1[o1];
  [o1][3:v]overlay=shortest=1:enable='lt(t,1.3)'[o2];
  [o2][4:v]overlay=shortest=1:enable='between(t,1.3,2.8)'[o3];
  [o3][5:v]overlay=shortest=1:enable='gte(t,2.8)'[hv];
  [6:a]highpass=f=400,lowpass=f=3500,volume='2.5*(between(t,0,0.35)*sin(PI*t/0.35)+between(t,1.3,1.65)*sin(PI*(t-1.3)/0.35)+between(t,2.8,3.15)*sin(PI*(t-2.8)/0.35))':eval=frame,
       aecho=0.6:0.4:60:0.3,$A_NORM,atrim=duration=$D_LEN[ha]"

echo done
