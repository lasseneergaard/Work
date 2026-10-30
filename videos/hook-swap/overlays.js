// Renders the hook overlay graphics as transparent 720x1280 PNGs.
// Usage: node overlays.js <out_dir>
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const out = process.argv[2] || path.join(__dirname, 'build', 'overlays');
fs.mkdirSync(out, { recursive: true });

const base = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 720px; height: 1280px; background: transparent; overflow: hidden;
    font-family: 'Inter', sans-serif; }
  .abs { position: absolute; }
  .box { background: #fff; color: #111; font-weight: 800; text-align: center;
    border-radius: 14px; padding: 14px 20px; line-height: 1.18; text-transform: uppercase;
    box-shadow: 0 6px 24px rgba(0,0,0,.25); }
  .red { background: #E3262B; color: #fff; }
  .cap { color: #fff; font-weight: 900; text-transform: uppercase; text-align: center;
    line-height: 1.15; -webkit-text-stroke: 2px #000; paint-order: stroke fill;
    text-shadow: 0 3px 6px rgba(0,0,0,.6); }
`;

const overlays = {
  // All text sits inside the centred 4:5 safe area (y 190-1090) so Meta's 4:5 crop keeps it.
  // --- Hook A: mattress receipt ---
  // Covers the original "Tu dors sur le côté ?" banner (y 850-920) in the same spot.
  A_head: `<div class="abs box" style="left:60px;right:60px;top:796px;height:134px;display:flex;flex-direction:column;justify-content:center;font-size:24px;padding:10px 14px;border-radius:10px">
      <div>Tu as dépensé +800&nbsp;€ dans un nouveau matelas…<br>et ton dos te fait toujours mal&nbsp;?</div></div>`,
  A_receipt: `<div class="abs" style="left:24px;top:360px;width:250px;transform:rotate(-8deg);
      background:#fbfaf6;border-radius:6px;padding:18px 16px 20px;box-shadow:0 14px 40px rgba(0,0,0,.45);
      font-family:'DejaVu Sans Mono',monospace;color:#222;font-size:13px;line-height:1.5">
      <div style="text-align:center;font-weight:700;font-size:20px;letter-spacing:3px">FACTURE</div>
      <div style="text-align:center;font-size:10px;color:#666;margin-bottom:8px">N° 2024-08174 · 14/03</div>
      <div style="border-top:1px dashed #999;margin:6px 0"></div>
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:14px"><span>Matelas<br>Orthopédique</span><span style="align-self:end">1 200 €</span></div>
      <div style="display:flex;justify-content:space-between;color:#555"><span>Livraison</span><span>offerte</span></div>
      <div style="border-top:1px dashed #999;margin:8px 0"></div>
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px"><span>TOTAL TTC</span><span>1 200,00 €</span></div>
      <div style="text-align:center;font-size:10px;color:#777;margin-top:10px">Merci de votre achat</div>
    </div>`,
  A_stamp: `<div class="abs" style="left:30px;top:455px;transform:rotate(-20deg);border:6px solid #E3262B;
      color:#E3262B;font-weight:900;font-size:48px;letter-spacing:3px;padding:2px 14px;border-radius:10px;
      background:rgba(255,255,255,.2)">INUTILE</div>`,

  // --- Hook B: pillow fight ---
  B_head1: `<div class="abs box" style="left:50px;right:50px;top:780px;font-size:26px;padding:12px 16px">
      Tu passes tes nuits à te battre avec ton oreiller pour caler tes genoux&nbsp;?</div>`,
  B_head2: `<div class="abs box red" style="left:170px;right:170px;top:620px;font-size:32px;padding:10px 14px;transform:rotate(-3deg)">Arrête tout de suite.</div>`,

  // --- Hook C: finger-leg close-up (1.5x crop of 11.73-14.70s, original captions cropped out) ---
  C_marker: `<svg class="abs" style="left:0;top:0" width="720" height="1280" viewBox="0 0 720 1280">
      <path transform="translate(0,153)" d="M70 560 C 40 420, 300 360, 500 375 C 700 390, 720 560, 600 640 C 470 720, 170 720, 95 640 C 70 610, 75 585, 105 572"
        fill="none" stroke="#E3262B" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>
      <path d="M520 893 L 505 853 M505 853 L 492 881 M505 853 L 530 869" fill="none" stroke="#E3262B"
        stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="abs box red" style="left:400px;top:880px;font-size:24px;padding:8px 12px;transform:rotate(-4deg)">Ton bassin pivote</div>`,
  C_head: `<div class="abs box" style="left:40px;right:40px;top:944px;font-size:28px;padding:12px 16px">
      Si tu dors sur le côté, voilà pourquoi ta sciatique te lance dès 7h du matin</div>`,

  // --- Hook D: senior / vouvoiement ---
  // Badge covers the original caption (y 950-1060 after the push-in).
  D_badge: `<div class="abs" style="left:60px;right:60px;top:928px;height:152px;background:#0F2A44;color:#fff;border-radius:14px;
      padding:30px 10px 0;text-align:center;font-weight:800;font-size:32px;letter-spacing:1px;line-height:1.15;
      box-shadow:0 6px 24px rgba(0,0,0,.3)">DORMEURS SUR LE CÔTÉ<br><span style="font-size:26px;font-weight:700;color:#BFD7EE">(45 ANS ET +)</span></div>`,
  D_top1: `<div class="abs box" style="left:60px;right:60px;bottom:372px;font-size:28px;padding:12px 16px">Si vous dormez sur le côté…</div>`,
  D_top2: `<div class="abs box" style="left:50px;right:50px;bottom:372px;font-size:27px;padding:12px 16px">
      …et que vous avez des douleurs lombaires ou des gênes dans la hanche</div>`,
  D_top3: `<div class="abs box" style="left:50px;right:50px;bottom:372px;font-size:27px;padding:12px 16px">
      Le problème ne vient pas de votre literie, mais de l'angle de vos genoux.<br>
      <span style="color:#E3262B">Regardez ceci&nbsp;:</span></div>`,
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } });
  for (const [name, body] of Object.entries(overlays)) {
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${base}</style></head><body>${body}</body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(out, `${name}.png`), omitBackground: true });
  }
  await browser.close();
  console.log(`rendered ${Object.keys(overlays).length} overlays to ${out}`);
})();
