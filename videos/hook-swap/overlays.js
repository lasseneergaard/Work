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
  // --- Hook A: mattress receipt ---
  A_head: `<div class="abs box" style="left:28px;right:28px;top:22px;font-size:37px;padding:12px 16px">
      Tu as dépensé +800&nbsp;€ dans un nouveau matelas…</div>`,
  // Same look/position as the original "Tu dors sur le côté ?" banner, which it covers.
  A_banner: `<div class="abs box" style="left:150px;right:150px;top:838px;font-size:27px;padding:10px 12px;border-radius:10px">
      Et ton dos te fait<br>toujours mal&nbsp;?</div>`,
  A_receipt: `<div class="abs" style="left:18px;top:330px;width:300px;transform:rotate(-8deg);
      background:#fbfaf6;border-radius:6px;padding:22px 20px 24px;box-shadow:0 14px 40px rgba(0,0,0,.45);
      font-family:'DejaVu Sans Mono',monospace;color:#222;font-size:15px;line-height:1.5">
      <div style="text-align:center;font-weight:700;font-size:24px;letter-spacing:3px">FACTURE</div>
      <div style="text-align:center;font-size:12px;color:#666;margin-bottom:10px">N° 2024-08174 · 14/03</div>
      <div style="border-top:1px dashed #999;margin:8px 0"></div>
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:17px"><span>Matelas<br>Orthopédique</span><span style="align-self:end">1 200 €</span></div>
      <div style="display:flex;justify-content:space-between;color:#555"><span>Livraison</span><span>offerte</span></div>
      <div style="border-top:1px dashed #999;margin:10px 0"></div>
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:18px"><span>TOTAL TTC</span><span>1 200,00 €</span></div>
      <div style="text-align:center;font-size:12px;color:#777;margin-top:12px">Merci de votre achat</div>
    </div>`,
  A_stamp: `<div class="abs" style="left:24px;top:445px;transform:rotate(-20deg);border:7px solid #E3262B;
      color:#E3262B;font-weight:900;font-size:60px;letter-spacing:4px;padding:2px 16px;border-radius:10px;
      background:rgba(255,255,255,.2)">INUTILE</div>`,

  // --- Hook B: pillow fight ---
  B_head1: `<div class="abs box" style="left:24px;right:24px;top:40px;font-size:40px">
      Tu passes tes nuits à te battre avec ton oreiller pour caler tes genoux&nbsp;?</div>`,
  B_head2: `<div class="abs box red" style="left:110px;right:110px;top:640px;font-size:46px;transform:rotate(-3deg)">Arrête tout de suite.</div>`,

  // --- Hook C: finger-leg close-up (1.5x crop of 11.73-14.70s) ---
  C_marker: `<svg class="abs" style="left:0;top:0" width="720" height="1280" viewBox="0 0 720 1280">
      <path d="M70 560 C 40 420, 300 360, 500 375 C 700 390, 720 560, 600 640 C 470 720, 170 720, 95 640 C 70 610, 75 585, 105 572"
        fill="none" stroke="#E3262B" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>
      <path d="M560 830 L 520 700 M520 700 L 503 745 M520 700 L 560 727" fill="none" stroke="#E3262B"
        stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="abs box red" style="left:380px;top:835px;font-size:34px;transform:rotate(-4deg)">Ton bassin pivote</div>`,
  C_head: `<div class="abs box" style="left:-20px;right:-20px;bottom:-16px;border-radius:0;font-size:40px;padding:16px 18px 34px">
      Si tu dors sur le côté, voilà pourquoi ta sciatique te lance dès 7h du matin</div>`,

  // --- Hook D: senior / vouvoiement ---
  D_badge: `<div class="abs" style="left:40px;right:40px;top:930px;min-height:175px;background:#0F2A44;color:#fff;border-radius:14px;
      padding:16px 10px;text-align:center;font-weight:800;font-size:42px;letter-spacing:1px;line-height:1.1;
      box-shadow:0 6px 24px rgba(0,0,0,.3)">DORMEURS SUR LE CÔTÉ<br><span style="font-size:34px;font-weight:700;color:#BFD7EE">(45 ANS ET +)</span></div>`,
  D_top1: `<div class="abs box" style="left:40px;right:40px;bottom:370px;font-size:40px">Si vous dormez sur le côté…</div>`,
  D_top2: `<div class="abs box" style="left:30px;right:30px;bottom:370px;font-size:37px">
      …et que vous avez des douleurs lombaires ou des gênes dans la hanche</div>`,
  D_top3: `<div class="abs box" style="left:30px;right:30px;bottom:370px;font-size:36px">
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
