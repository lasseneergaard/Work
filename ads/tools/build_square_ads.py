from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(BASE, "images")
OUT = os.path.join(BASE, "out")
os.makedirs(OUT, exist_ok=True)

S = 1080
NAVY = (14, 20, 44)
NAVY2 = (22, 30, 62)
BLUE = (143, 210, 242)
TEAL = (43, 178, 166)
WHITE = (255, 255, 255)
GREY = (170, 178, 200)

ANTON = os.path.join(BASE, "fonts", "Anton.ttf")
INTER = "/usr/share/fonts/opentype/inter/Inter-{}.otf"
RISK = "Trading involves risk. Only trade with money you can afford to lose."


def f_anton(sz): return ImageFont.truetype(ANTON, sz)
def f_inter(w, sz): return ImageFont.truetype(INTER.format(w), sz)


def logo(height, color=BLUE):
    src = Image.open(os.path.join(BASE, "work", "logo5.png")).convert("L")
    bg, fg = 26, 205
    a = src.point(lambda v: max(0, min(255, int((v - bg) * 255 / (fg - bg)))))
    bbox = a.point(lambda v: 255 if v > 40 else 0).getbbox()
    a = a.crop(bbox)
    im = Image.new("RGBA", a.size, color + (255,))
    im.putalpha(a)
    w = int(im.width * height / im.height)
    return im.resize((w, height), Image.LANCZOS)


def text_w(d, txt, font):
    b = d.textbbox((0, 0), txt, font=font)
    return b[2] - b[0]


def fit(d, txt, maker, start, maxw):
    sz = start
    while sz > 10 and text_w(d, txt, maker(sz)) > maxw:
        sz -= 2
    return maker(sz)


def shadow_text(base, xy, txt, font, fill=WHITE, anchor="la", blur=8, alpha=170):
    sh = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).text((xy[0], xy[1] + 3), txt, font=font, fill=(0, 0, 0, alpha), anchor=anchor)
    sh = sh.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(sh)
    ImageDraw.Draw(base).text(xy, txt, font=font, fill=fill, anchor=anchor)


def vfade(w, h, top_solid, bottom_solid, fade):
    """Alpha mask: opaque photo in middle, fading to transparent at top/bottom edges."""
    m = Image.new("L", (w, h), 255)
    d = ImageDraw.Draw(m)
    for i in range(fade):
        v = int(255 * i / fade)
        if top_solid: d.line([(0, i), (w, i)], fill=v)
        if bottom_solid: d.line([(0, h - 1 - i), (w, h - 1 - i)], fill=v)
    return m


def place_photo(canvas, src, box, dest_y, dest_h, fade=90, dest_x=0, dest_w=S, fade_top=True, fade_bottom=True):
    im = src if isinstance(src, Image.Image) else Image.open(src).convert("RGB")
    x0, y0, x1, _ = box
    y1 = y0 + round((x1 - x0) * dest_h / dest_w)
    ph = im.crop((x0, y0, x1, y1)).resize((dest_w, dest_h), Image.LANCZOS)
    mask = vfade(dest_w, dest_h, fade_top, fade_bottom, fade)
    canvas.paste(ph, (dest_x, dest_y), mask)


def pill(canvas, cx, cy, txt, font, fill=(255, 255, 255, 38), outline=(255, 255, 255, 110), color=WHITE, padx=28, pady=14):
    d = ImageDraw.Draw(canvas)
    w = text_w(d, txt, font)
    asc, desc = font.getmetrics()
    h = asc + desc
    x0, y0 = cx - w // 2 - padx, cy - h // 2 - pady
    x1, y1 = cx + w // 2 + padx, cy + h // 2 + pady
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).rounded_rectangle([x0, y0, x1, y1], radius=(y1 - y0) // 2, fill=fill, outline=outline, width=2)
    canvas.alpha_composite(layer)
    ImageDraw.Draw(canvas).text((cx, cy), txt, font=font, fill=color, anchor="mm")
    return (x0, y0, x1, y1)


def button(canvas, box, txt, font, fill, color=NAVY, radius=18):
    d = ImageDraw.Draw(canvas)
    d.rounded_rectangle(box, radius=radius, fill=fill)
    d.text(((box[0] + box[2]) // 2, (box[1] + box[3]) // 2 + 2), txt, font=font, fill=color, anchor="mm")


def footer(canvas, cta, cta_fill=BLUE, top=900):
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, top, S, S], fill=NAVY)
    lg = logo(72)
    canvas.alpha_composite(lg, (48, top + 28))
    bx0 = 48 + lg.width + 40
    button(canvas, (bx0, top + 22, S - 48, top + 106), cta, fit(d, cta, lambda s: f_inter("ExtraBold", s), 34, S - 48 - bx0 - 50), cta_fill)
    d.text((S // 2, S - 34), RISK, font=f_inter("Medium", 20), fill=GREY, anchor="mm")


def header(canvas, h):
    ImageDraw.Draw(canvas).rectangle([0, 0, S, h], fill=NAVY)


def new():
    return Image.new("RGBA", (S, S), NAVY + (255,))


def save(c, name):
    p = os.path.join(OUT, name)
    c.convert("RGB").save(p, quality=95)
    print(p)


# ---------- Ad 1: Copy my trades (side layout) ----------
def ad1():
    c = new()
    # subtle diagonal gradient background
    g = Image.new("RGBA", (S, S))
    gd = ImageDraw.Draw(g)
    for y in range(S):
        t = y / S
        gd.line([(0, y), (S, y)], fill=(int(14 + 10 * (1 - t)), int(20 + 10 * (1 - t)), int(44 + 20 * (1 - t)), 255))
    c.alpha_composite(g)
    # Mike + phone from source (left column only, old text is on the right)
    src = Image.open(os.path.join(IMG, "1.jpg")).convert("RGB").crop((0, 0, 700, 1250))
    h = 900
    w = int(700 * h / 1250)
    src = src.resize((w, h), Image.LANCZOS)
    m = Image.new("L", (w, h), 255)
    md = ImageDraw.Draw(m)
    for i in range(140):
        md.line([(w - 1 - i, 0), (w - 1 - i, h)], fill=int(255 * i / 140))
    for i in range(80):
        v = int(255 * i / 80)
        md.line([(0, h - 1 - i), (w - 140, h - 1 - i)], fill=v)
    c.paste(src, (0, 0), m)

    d = ImageDraw.Draw(c)
    x = 520
    maxw = S - x - 44
    shadow_text(c, (x, 52), "COPY MY", fit(d, "COPY MY", f_anton, 150, maxw))
    shadow_text(c, (x, 210), "TRADES", fit(d, "TRADES", f_anton, 150, maxw))
    # teal pill
    pf = f_anton(64)
    pw = text_w(d, "FREE TO JOIN", pf)
    d.rounded_rectangle([x, 395, x + pw + 56, 485], radius=45, fill=TEAL)
    d.text((x + 28 + pw // 2, 440), "FREE TO JOIN", font=pf, fill=WHITE, anchor="mm")
    sub = f_inter("SemiBold", 30)
    d.text((x, 520), "Daily trade ideas for", font=sub, fill=WHITE)
    d.text((x, 558), "Forex • Commodities • Indices", font=sub, fill=BLUE)
    items = ["Entry, stop-loss & target", "Copy trades in one tap", "No experience needed"]
    ifont = f_inter("SemiBold", 30)
    y = 630
    for it in items:
        d.ellipse([x, y, x + 44, y + 44], outline=TEAL, width=4)
        d.line([(x + 12, y + 23), (x + 19, y + 31), (x + 33, y + 14)], fill=TEAL, width=5, joint="curve")
        d.text((x + 62, y + 22), it, font=ifont, fill=WHITE, anchor="lm")
        y += 66
    pill(c, x + 170, 852, "★ 4.9 on Trustpilot", f_inter("SemiBold", 26))
    footer(c, "JOIN NOW → ACCESS THE COMMUNITY", cta_fill=TEAL, top=910)
    # CTA text white on teal
    save(c, "ad1_copy-my-trades_1080.jpg")


# ---------- Ad 2: Trade like Mike ----------
def ad2():
    c = new()
    place_photo(c, os.path.join(IMG, "2.jpg"), (0, 440, 1408, 0), 190, 710, fade=110)
    d = ImageDraw.Draw(c)
    shadow_text(c, (S // 2, 30), "TRADE LIKE MIKE", fit(d, "TRADE LIKE MIKE", f_anton, 150, S - 90), anchor="ma")
    shadow_text(c, (S // 2, 212), "Copy professional trades in 20 minutes a day", fit(d, "Copy professional trades in 20 minutes a day", lambda s: f_inter("SemiBold", s), 40, S - 120), anchor="ma")
    pill(c, S // 2, 840, "Free to join  •  ★ 4.9 on Trustpilot", f_inter("SemiBold", 28), fill=(14, 20, 44, 170))
    footer(c, "JOIN FX TRADING VISION →")
    save(c, "ad2_trade-like-mike_1080.jpg")


# ---------- Ad 3: Your phone ----------
def ad3():
    c = new()
    src = Image.open(os.path.join(IMG, "3.jpg")).convert("RGB")
    for (bx0, by0, bx1, by1) in [(185, 455, 410, 590), (860, 655, 930, 705), (330, 600, 385, 640)]:
        pad = 60
        big = src.crop((bx0 - pad, by0 - pad, bx1 + pad, by1 + pad)).filter(ImageFilter.GaussianBlur(28))
        m = Image.new("L", big.size, 0)
        ImageDraw.Draw(m).rounded_rectangle([pad - 15, pad - 15, big.width - pad + 15, big.height - pad + 15], radius=30, fill=255)
        src.paste(big, (bx0 - pad, by0 - pad), m.filter(ImageFilter.GaussianBlur(14)))
    place_photo(c, src, (0, 395, 1408, 0), 205, 695, fade=110)
    d = ImageDraw.Draw(c)
    shadow_text(c, (S // 2, 28), "YOUR PHONE.", fit(d, "YOUR PHONE.", f_anton, 112, S - 90), anchor="ma")
    shadow_text(c, (S // 2, 150), "YOUR TRADING COMMUNITY.", fit(d, "YOUR TRADING COMMUNITY.", f_anton, 112, S - 90), fill=(64, 190, 245), anchor="ma")
    pill(c, 700, 846, "Free to join  •  ★ 4.9 Trustpilot", f_inter("SemiBold", 26), fill=(14, 20, 44, 170))
    footer(c, "JOIN FREE • START COPYING TRADES")
    save(c, "ad3_your-phone_1080.jpg")


# ---------- Ad 4: Beach interview (head & shoulders crop) ----------
def ad4():
    c = new()
    src = os.path.join(IMG, "4.jpg")
    place_photo(c, src, (40, 395, 1368, 0), 300, 375, fade=60)
    d = ImageDraw.Draw(c)
    shadow_text(c, (S // 2, 50), "COPY THE SAME TRADES", fit(d, "COPY THE SAME TRADES", f_anton, 130, S - 90), anchor="ma")
    shadow_text(c, (S // 2, 210), "Free to join  •  20 minutes a day", f_inter("SemiBold", 40), anchor="ma")
    pill(c, S // 2, 740, "★ 4.9 on Trustpilot  •  No experience needed", f_inter("SemiBold", 28), fill=(255, 255, 255, 28))
    d.text((S // 2, 828), "Daily trade ideas for Forex • Commodities • Indices", font=f_inter("SemiBold", 30), fill=BLUE, anchor="mm")
    footer(c, "JOIN THE COMMUNITY →")
    save(c, "ad4_copy-the-same-trades_1080.jpg")


# ---------- Ad 5: Free FX trades (screenshot removed) ----------
def ad5():
    c = new()
    src = os.path.join(IMG, "5.jpg")
    place_photo(c, src, (556, 520, 1408, 0), 230, 670, fade=100)
    d = ImageDraw.Draw(c)
    shadow_text(c, (S // 2, 26), "FREE FX TRADES", fit(d, "FREE FX TRADES", f_anton, 140, S - 90), anchor="ma")
    shadow_text(c, (S // 2, 190), "Copy them in one tap. No experience needed.", fit(d, "Copy them in one tap. No experience needed.", lambda s: f_inter("SemiBold", s), 38, S - 120), anchor="ma")
    pill(c, S // 2, 846, "20 minutes a day  •  ★ 4.9 on Trustpilot", f_inter("SemiBold", 28), fill=(14, 20, 44, 170))
    footer(c, "JOIN FREE • LINK BELOW")
    save(c, "ad5_free-fx-trades_1080.jpg")


for fn in sys.argv[1:] or ["ad1", "ad2", "ad3", "ad4", "ad5"]:
    globals()[fn]()
