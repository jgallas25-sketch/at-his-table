import sharp from "sharp";
import { access, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");
const force = process.argv.includes("--force");

const placeholders = [
  {
    file: "hero-woman-bible.jpg",
    width: 1600,
    height: 2000,
    title: "Sit With Jesus",
    subtitle: "Warm devotional moment · Bible · quiet time with Jesus",
    color: "#E8D5C4",
  },
  {
    file: "season-assessment.jpg",
    width: 1600,
    height: 2000,
    title: "Discover Your Season",
    subtitle: "Season assessment · thoughtful · laptop · journal",
    color: "#DDD0C0",
  },
  {
    file: "faith-planner.jpg",
    width: 1600,
    height: 2000,
    title: "Walk With Intention",
    subtitle: "Journal · Bible · planner · weekly planning",
    color: "#E5D8CA",
  },
  {
    file: "community-group.jpg",
    width: 1920,
    height: 1280,
    title: "Gather Around the Table",
    subtitle: "Small group · prayer · Bible study · coffee",
    color: "#D9CFC2",
  },
  {
    file: "testimony-journal.jpg",
    width: 1600,
    height: 2000,
    title: "Share Your Story",
    subtitle: "Journal · reflections · testimony · gratitude",
    color: "#E0D3C6",
  },
  {
    file: "women-of-every-season.jpg",
    width: 2400,
    height: 1200,
    title: "Every Season",
    subtitle: "Women of every season · one table · natural light",
    color: "#EBE2D6",
  },
];

function svgOverlay({ width, height, title, subtitle, file }) {
  const titleSize = width > 2000 ? 52 : 44;
  const subSize = 26;
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.35"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="${height - 140}" text-anchor="middle" fill="#FFFDF9" font-family="Georgia, serif" font-size="${titleSize}" font-weight="600">${title}</text>
    <text x="50%" y="${height - 88}" text-anchor="middle" fill="#FFFDF9" fill-opacity="0.9" font-family="Helvetica, Arial, sans-serif" font-size="${subSize}">${subtitle}</text>
    <text x="50%" y="${height - 40}" text-anchor="middle" fill="#FFFDF9" fill-opacity="0.65" font-family="Helvetica, Arial, sans-serif" font-size="18" letter-spacing="3">PLACEHOLDER · ${file}</text>
  </svg>`);
}

await mkdir(outDir, { recursive: true });

for (const item of placeholders) {
  const dest = path.join(outDir, item.file);

  if (!force) {
    try {
      await access(dest);
      console.log("Exists, skipping", item.file);
      continue;
    } catch {
      // file missing — generate below
    }
  }

  const base = await sharp({
    create: {
      width: item.width,
      height: item.height,
      channels: 3,
      background: item.color,
    },
  })
    .jpeg({ quality: 88 })
    .toBuffer();

  await sharp(base)
    .composite([{ input: svgOverlay(item), top: 0, left: 0 }])
    .jpeg({ quality: 88 })
    .toFile(dest);

  console.log("Created", item.file);
}
