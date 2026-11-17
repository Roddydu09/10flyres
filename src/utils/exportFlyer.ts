import { getFontEmbedCSS, toPng } from "html-to-image";
import JSZip from "jszip";
import { ALL_FORMAT_CONFIGS, type FormatId, type PlatformId } from "../flyers/formats";

let fontCss: Promise<string> | null = null;

/**
 * Convierte un flyer (identificado por data-flyer) a PNG con sus dimensiones nativas del formato activo.
 */
export async function flyerToPng(id: string, format: FormatId = "portrait"): Promise<string> {
  const node = document.querySelector<HTMLElement>(`[data-flyer="${id}"]`);
  if (!node) throw new Error(`No se encontró el flyer ${id}`);
  await document.fonts?.ready;
  fontCss ??= getFontEmbedCSS(node);
  const fontEmbedCSS = await fontCss;
  const cfg = ALL_FORMAT_CONFIGS[format] || ALL_FORMAT_CONFIGS.square;
  return toPng(node, {
    width: cfg.width,
    height: cfg.height,
    pixelRatio: 1,
    cacheBust: false,
    fontEmbedCSS,
    style: { transform: "none", top: "0", left: "0" },
  });
}

function saveHref(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function downloadFlyer(id: string, filename: string, format: FormatId = "portrait") {
  const dataUrl = await flyerToPng(id, format);
  saveHref(dataUrl, filename);
}

export async function downloadAllAsZip(
  items: { id: string; filename: string }[],
  format: FormatId = "portrait",
  platform: PlatformId = "instagram",
  onProgress?: (done: number, total: number) => void
) {
  const zip = new JSZip();
  let done = 0;
  for (const it of items) {
    const dataUrl = await flyerToPng(it.id, format);
    zip.file(it.filename, dataUrl.split(",")[1], { base64: true });
    done += 1;
    onProgress?.(done, items.length);
  }
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  saveHref(url, `flyers-ia-lara-${platform}-${format}.zip`);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
