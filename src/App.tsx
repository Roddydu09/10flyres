import { useCallback, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import {
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiDownload,
  FiInfo,
  FiLayers,
  FiPackage,
  FiShare2,
  FiSmartphone,
  FiSquare,
  FiX,
  FiZoomIn,
} from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FlyerFrame } from "./components/FlyerFrame";
import { FLYERS, type FlyerMeta } from "./flyers";
import {
  ALL_FORMAT_CONFIGS,
  PLATFORM_FORMATS,
  type FormatConfig,
  type FormatId,
  type PlatformId,
} from "./flyers/formats";
import { EMAIL, INSTAGRAM_HANDLE, PHONE, PHONE_INTL, TIKTOK_HANDLE } from "./flyers/shared";
import { downloadAllAsZip, downloadFlyer } from "./utils/exportFlyer";

const fileName = (f: FlyerMeta, i: number, platform: PlatformId, format: FormatId) =>
  `${platform}-${format}-flyer-${String(i + 1).padStart(2, "0")}-${f.slug}.png`;

export default function App() {
  const [platform, setPlatform] = useState<PlatformId>("tiktok");
  const [selectedFormat, setSelectedFormat] = useState<FormatId>("story");
  const [open, setOpen] = useState<number | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [copiedCaption, setCopiedCaption] = useState<number | null>(null);

  // Al cambiar de plataforma, cambiar al formato recomendado por defecto
  const handlePlatformChange = (p: PlatformId) => {
    setPlatform(p);
    if (p === "tiktok") {
      setSelectedFormat("story"); // 9:16 nativo para TikTok
    } else if (p === "instagram") {
      setSelectedFormat("portrait"); // 4:5 es el rey de Instagram Feed
    } else {
      setSelectedFormat("square"); // 1:1 es el clásico de Facebook
    }
  };

  const currentFormats = PLATFORM_FORMATS[platform];
  const currentCfg: FormatConfig =
    currentFormats[selectedFormat] || ALL_FORMAT_CONFIGS[selectedFormat] || ALL_FORMAT_CONFIGS.story;

  const run = useCallback(async (key: string, job: () => Promise<void>) => {
    setError("");
    setBusy(key);
    try {
      await job();
    } catch (e) {
      console.error(e);
      setError("No se pudo generar la imagen. Inténtalo de nuevo.");
    } finally {
      setBusy(null);
      setProgress("");
    }
  }, []);

  const downloadOne = (i: number, fmt: FormatId = selectedFormat) =>
    run(`${FLYERS[i].id}-${platform}-${fmt}`, () =>
      downloadFlyer(FLYERS[i].id, fileName(FLYERS[i], i, platform, fmt), fmt)
    );

  const downloadAll = () =>
    run(`all-${platform}-${selectedFormat}`, () =>
      downloadAllAsZip(
        FLYERS.map((f, i) => ({ id: f.id, filename: fileName(f, i, platform, selectedFormat) })),
        selectedFormat,
        platform,
        (d: number, t: number) => setProgress(`${d}/${t}`)
      )
    );

  const copyCaption = (i: number) => {
    const text = FLYERS[i].captions[platform];
    navigator.clipboard?.writeText(text);
    setCopiedCaption(i);
    setTimeout(() => setCopiedCaption(null), 2500);
  };

  /* Teclado en la vista ampliada */
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % FLYERS.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + FLYERS.length) % FLYERS.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isTiktok = platform === "tiktok";
  const isInstagram = platform === "instagram";

  return (
    <div className="min-h-screen bg-[#060817] text-white">
      {/* Fondo decorativo dinámico según red social */}
      <div
        className="pointer-events-none fixed inset-0 -z-0 opacity-70 transition-all duration-700"
        style={{
          background: isTiktok
            ? "radial-gradient(60% 40% at 15% 0%, rgba(37,244,238,.22), transparent 70%), radial-gradient(50% 40% at 85% 10%, rgba(254,44,85,.25), transparent 70%), radial-gradient(40% 30% at 50% 100%, rgba(18,3,40,.3), transparent 70%)"
            : isInstagram
            ? "radial-gradient(60% 40% at 20% 0%, rgba(225,48,108,.22), transparent 70%), radial-gradient(50% 40% at 85% 10%, rgba(131,58,180,.25), transparent 70%), radial-gradient(40% 30% at 50% 100%, rgba(247,119,55,.18), transparent 70%)"
            : "radial-gradient(60% 40% at 20% 0%, rgba(24,119,242,.22), transparent 70%), radial-gradient(50% 40% at 85% 10%, rgba(34,211,238,.18), transparent 70%), radial-gradient(40% 30% at 50% 100%, rgba(168,85,247,.15), transparent 70%)",
        }}
      />

      <header className="relative mx-auto max-w-[1500px] px-5 pb-6 pt-10 sm:px-8">
        {/* PESTAÑAS DE PLATAFORMA (TIKTOK vs INSTAGRAM vs FACEBOOK) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center rounded-2xl border border-white/15 bg-white/[0.05] p-1.5 backdrop-blur-md">
            {/* Botón TikTok */}
            <button
              onClick={() => handlePlatformChange("tiktok")}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                isTiktok
                  ? "bg-black text-white border border-[#25F4EE]/60 shadow-[0_0_20px_rgba(37,244,238,0.45)]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <FaTiktok className="text-base text-[#FE2C55]" />
              <span className="text-white">Para TikTok</span>
              <span className="rounded-full bg-[#25F4EE]/20 text-[#25F4EE] px-2 py-0.5 text-[10px] font-bold">
                10 Flyers
              </span>
            </button>

            {/* Botón Instagram */}
            <button
              onClick={() => handlePlatformChange("instagram")}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                isInstagram
                  ? "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg shadow-pink-500/25"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <FaInstagram className="text-base" />
              <span>Para Instagram</span>
            </button>

            {/* Botón Facebook */}
            <button
              onClick={() => handlePlatformChange("facebook")}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                !isTiktok && !isInstagram
                  ? "bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <FaFacebook className="text-base" />
              <span>Para Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#25F4EE]" />
            <span>Desafío IA · Estado Lara · 5to Año</span>
          </div>
        </div>

        {/* TITULAR DINÁMICO */}
        <h1 className="mt-6 max-w-4xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          10 Flyers para{" "}
          <span
            className={
              isTiktok
                ? "bg-gradient-to-r from-[#25F4EE] via-white to-[#FE2C55] bg-clip-text text-transparent"
                : isInstagram
                ? "bg-gradient-to-r from-[#F77737] via-[#FD1D1D] to-[#833AB4] bg-clip-text text-transparent"
                : "text-[#4ea2ff]"
            }
          >
            {isTiktok ? "TikTok" : isInstagram ? "Instagram" : "Facebook"}
          </span>
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base lg:text-lg">
          Misma temática: <b>4 jóvenes con visión · Proyecto de 5to Año · Estado Lara · 100% Gratuito</b>.
          {isTiktok
            ? " Adaptados al formato vertical 9:16 nativo para fotos de TikTok / carruseles virales, con estética cyberpunk, ganchos 'POV' y hashtags optimizados para el fyp."
            : isInstagram
            ? " Optimizados para formato vertical 4:5 (el más visto en el feed), historias 9:16 y cuadrículas 1:1, con botón para copiar captions con hashtags y DM."
            : " Con proporciones oficiales para el muro de Facebook (1:1), reels (9:16) y anuncios (1.91:1) listos para grupos locales."}
        </p>

        {/* SELECTOR DE FORMATOS SEGÚN PLATAFORMA */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <FiLayers className={isTiktok ? "text-[#25F4EE]" : isInstagram ? "text-pink-400" : "text-cyan-400"} />
              <span>Formato de publicación ({isTiktok ? "TikTok" : isInstagram ? "Instagram" : "Facebook"}):</span>
            </div>
            <div className="text-xs text-slate-400">
              Resolución activa:{" "}
              <b className={isTiktok ? "text-[#25F4EE]" : isInstagram ? "text-pink-300" : "text-cyan-300"}>
                {currentCfg.width} × {currentCfg.height} px
              </b>{" "}
              ({currentCfg.ratioBadge})
            </div>
          </div>

          <div
            className={`mt-3 grid grid-cols-1 gap-2.5 ${
              Object.keys(currentFormats).length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {(Object.keys(currentFormats) as FormatId[]).map((fid) => {
              const cfg = currentFormats[fid];
              const isSelected = selectedFormat === fid;
              const Icon =
                fid === "story"
                  ? FiLayers
                  : fid === "portrait"
                  ? FiSmartphone
                  : fid === "square"
                  ? FiSquare
                  : FiShare2;

              return (
                <button
                  key={fid}
                  onClick={() => setSelectedFormat(fid)}
                  className={`group relative flex items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                    isSelected
                      ? isTiktok
                        ? "border-[#25F4EE] bg-[#25F4EE]/15 shadow-lg shadow-[#25F4EE]/20"
                        : isInstagram
                        ? "border-pink-500 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 shadow-lg shadow-pink-500/10"
                        : "border-[#1877F2] bg-[#1877F2]/20 shadow-lg shadow-[#1877F2]/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      isSelected
                        ? isTiktok
                          ? "bg-black text-[#25F4EE] border border-[#25F4EE]"
                          : isInstagram
                          ? "bg-gradient-to-br from-pink-500 to-orange-500 text-white"
                          : "bg-[#1877F2] text-white"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-extrabold text-white">
                        {cfg.label}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                          isSelected
                            ? isTiktok
                              ? "bg-[#25F4EE] text-black"
                              : isInstagram
                              ? "bg-pink-500 text-white"
                              : "bg-[#1877F2] text-white"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {cfg.ratioBadge}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-xs text-slate-300">{cfg.sublabel}</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {cfg.width} × {cfg.height} px
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <FiInfo className={`${isTiktok ? "text-[#25F4EE]" : isInstagram ? "text-pink-400" : "text-cyan-400"} shrink-0`} />
            <span>
              {currentCfg.description} — <i>Recomendado para: {currentCfg.recommendedFor}</i>
            </span>
          </div>
        </div>

        {/* ACCIONES GLOBALES */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={downloadAll}
            disabled={busy !== null}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-lg transition disabled:cursor-wait disabled:opacity-60 ${
              isTiktok
                ? "bg-black border border-[#25F4EE] text-[#25F4EE] hover:bg-[#25F4EE] hover:text-black shadow-[0_0_20px_rgba(37,244,238,0.4)]"
                : isInstagram
                ? "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:brightness-110 shadow-pink-500/25"
                : "bg-[#1877F2] hover:bg-[#166fe5] shadow-[#1877F2]/30"
            }`}
          >
            <FiPackage className="text-lg" />
            {busy === `all-${platform}-${selectedFormat}`
              ? `Generando ${progress || "…"}`
              : `Descargar los 10 en ${currentCfg.ratioBadge} (ZIP)`}
          </button>
          <a
            href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
              `Hola, vi la convocatoria en ${
                isTiktok ? "TikTok" : isInstagram ? "Instagram" : "Facebook"
              } para el Desafío de IA en Lara de 5to año y quiero información.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#25D366]/20"
          >
            <FaWhatsapp className="text-lg text-[#25D366]" /> {PHONE}
          </a>
          {isTiktok ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#25F4EE]/40 bg-black/60 px-4 py-3 text-sm font-bold text-[#25F4EE]">
              <FaTiktok className="text-[#FE2C55]" /> {TIKTOK_HANDLE}
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200">
              <FaInstagram className="text-pink-400" /> {INSTAGRAM_HANDLE}
            </span>
          )}
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Postulación Desafío IA Lara - 5to Año")}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10"
          >
            <SiGmail className="text-base text-[#EA4335]" /> {EMAIL}
          </a>
        </div>
        {error && <p className="mt-4 text-sm font-semibold text-red-300">{error}</p>}
      </header>

      {/* GRILLA DE LOS 10 FLYERS */}
      <main className="relative mx-auto max-w-[1500px] px-5 pb-20 sm:px-8">
        <div
          className={`grid gap-6 ${
            selectedFormat === "story"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : selectedFormat === "horizontal"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {FLYERS.map((f, i) => {
            const C = f.Component;
            const isCopied = copiedCaption === i;
            return (
              <article
                key={f.id}
                className={`group flex flex-col justify-between rounded-3xl bg-white/[0.04] p-3 ring-1 transition duration-300 ${
                  isTiktok
                    ? "ring-white/10 hover:ring-[#25F4EE]/60"
                    : isInstagram
                    ? "ring-white/10 hover:ring-pink-500/50"
                    : "ring-white/10 hover:ring-[#1877F2]/50"
                }`}
              >
                <div>
                  <button
                    onClick={() => setOpen(i)}
                    aria-label={`Ver flyer ${i + 1} en grande`}
                    className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-2xl shadow-black/60 transition duration-300 group-hover:-translate-y-0.5"
                  >
                    <FlyerFrame id={f.id} format={selectedFormat}>
                      <C format={selectedFormat} platform={platform} />
                    </FlyerFrame>
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100">
                      <FiZoomIn />
                    </span>
                    <span
                      className={`absolute left-3 top-3 rounded-full backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white ${
                        isTiktok
                          ? "bg-black/90 border border-[#25F4EE]/60 text-[#25F4EE]"
                          : isInstagram
                          ? "bg-gradient-to-r from-[#833AB4] to-[#FD1D1D]"
                          : "bg-[#1877F2]/90"
                      }`}
                    >
                      {isTiktok ? "TIKTOK" : isInstagram ? "IG" : "FB"} · {currentCfg.ratioBadge}
                    </span>
                  </button>

                  <div className="mt-3 px-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        <span
                          className="h-2.5 w-2.5 rounded-full ring-1 ring-white/30"
                          style={{ background: `linear-gradient(135deg, ${f.palette[0]}, ${f.palette[1]})` }}
                        />
                        Flyer {String(i + 1).padStart(2, "0")}
                      </div>
                      <span className="text-[11px] text-slate-400">
                        {currentCfg.width}×{currentCfg.height}
                      </span>
                    </div>
                    <h3 className="mt-0.5 text-base font-extrabold text-white">{f.title}</h3>
                    <p className="text-xs text-slate-400">{f.hook}</p>
                  </div>
                </div>

                {/* ACCIONES DEL FLYER */}
                <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => downloadOne(i)}
                      disabled={busy !== null}
                      title={`Descargar PNG para ${platform} (${currentCfg.width}x${currentCfg.height})`}
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition disabled:cursor-wait disabled:opacity-50 ${
                        isTiktok
                          ? "bg-white/10 hover:bg-[#25F4EE] hover:text-black font-extrabold"
                          : isInstagram
                          ? "bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500"
                          : "bg-white/10 hover:bg-[#1877F2]"
                      }`}
                    >
                      {busy === `${f.id}-${platform}-${selectedFormat}` ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      ) : (
                        <>
                          <FiDownload className="text-sm" />
                          <span>Descargar PNG</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => copyCaption(i)}
                      title={`Copiar texto viral para ${platform}`}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                        isCopied
                          ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                          : "border-white/15 bg-white/[0.04] text-slate-300 hover:border-white/30 hover:bg-white/10"
                      }`}
                    >
                      {isCopied ? <FiCheck className="text-sm" /> : <FiCopy className="text-sm" />}
                      <span className="hidden sm:inline">
                        {isCopied ? "Copiado" : isTiktok ? "Copy TT" : isInstagram ? "Copy IG" : "Copy FB"}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {/* TARJETA DE TIPS SEGÚN PLATAFORMA */}
          <aside
            className={`flex flex-col justify-between rounded-3xl p-6 ring-1 ring-white/10 ${
              isTiktok
                ? "bg-gradient-to-br from-[#25F4EE]/15 via-black to-[#FE2C55]/20 border border-[#25F4EE]/30"
                : isInstagram
                ? "bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-orange-900/20"
                : "bg-gradient-to-br from-[#1877F2]/20 via-indigo-600/15 to-cyan-500/15"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                {isTiktok ? (
                  <>
                    <FaTiktok className="text-lg text-[#FE2C55]" />
                    <span className="text-[#25F4EE]">Estrategia TikTok Viral</span>
                  </>
                ) : isInstagram ? (
                  <>
                    <FaInstagram className="text-lg text-pink-400" />
                    <span className="text-pink-300">Tips de Instagram</span>
                  </>
                ) : (
                  <>
                    <FaFacebook className="text-lg text-[#1877F2]" />
                    <span className="text-[#4ea2ff]">Tips de Facebook</span>
                  </>
                )}
              </div>
              <h2 className="mt-2 text-xl font-black">
                {isTiktok ? "Cómo viralizar en TikTok" : isInstagram ? "Estrategia para Instagram" : "Cómo publicar en Facebook"}
              </h2>
              {isTiktok ? (
                <ul className="mt-3 space-y-2.5 text-xs text-slate-200">
                  <li>
                    📸 <b>Publica en Modo Foto / Carrusel:</b> El formato carrusel de TikTok (9:16) tiene actualmente más alcance orgánico que muchos vídeos normales.
                  </li>
                  <li>
                    🎵 <b>Añade sonido en tendencia:</b> Pon un audio viral o trend venezolano suave de fondo mientras la gente desliza las fotos.
                  </li>
                  <li>
                    🔗 <b>WhatsApp en Bio:</b> Pon el enlace a <b className="text-[#25F4EE]">{PHONE}</b> en la descripción de tu perfil de TikTok.
                  </li>
                  <li>
                    💬 <b>Usa el botón "Copy TT":</b> Incluye hashtags clave como #Lara #Barquisimeto #5toAño #IA #fyp.
                  </li>
                </ul>
              ) : isInstagram ? (
                <ul className="mt-3 space-y-2.5 text-xs text-slate-200">
                  <li>
                    📱 <b>Usa el formato 4:5 (1080×1350):</b> Abarca más espacio vertical que el cuadrado.
                  </li>
                  <li>
                    🚀 <b>Stories 9:16 con sticker:</b> Sticker de enlace a WhatsApp.
                  </li>
                  <li>
                    💬 <b>Hashtags locales:</b> #Barquisimeto #Cabudare #Lara #5toAño.
                  </li>
                </ul>
              ) : (
                <ul className="mt-3 space-y-2.5 text-xs text-slate-200">
                  <li>📌 <b>Publica en grupos</b> de Barquisimeto, Cabudare y liceos.</li>
                  <li>🕒 <b>Mejores horarios:</b> 12:00 m a 2:00 pm y 7:00 pm a 9:30 pm.</li>
                </ul>
              )}
            </div>

            <div className="mt-5 space-y-2 text-xs">
              <a
                href={`https://wa.me/${PHONE_INTL}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 font-extrabold text-[#04210f]"
              >
                <FaWhatsapp className="text-base" /> WhatsApp: {PHONE}
              </a>
              {isTiktok ? (
                <div className="flex items-center justify-center gap-2 rounded-xl bg-black border border-[#25F4EE]/50 px-4 py-2 text-[#25F4EE] font-bold">
                  <FaTiktok className="text-[#FE2C55]" /> TikTok: {TIKTOK_HANDLE}
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-slate-200 font-bold">
                  <FaInstagram className="text-pink-400" /> DM: {INSTAGRAM_HANDLE}
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      {/* VISTA AMPLIADA / MODAL */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-white/20"
          >
            <FiX />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + FLYERS.length) % FLYERS.length);
            }}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/20 sm:left-6"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % FLYERS.length);
            }}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/20 sm:right-6"
          >
            <FiChevronRight />
          </button>

          <div
            className="flex flex-col items-center gap-3 max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              style={{
                width:
                  selectedFormat === "story"
                    ? "min(75vw, calc((100vh - 160px) * 0.5625))"
                    : selectedFormat === "horizontal"
                    ? "min(92vw, calc((100vh - 160px) * 1.91))"
                    : selectedFormat === "portrait"
                    ? "min(78vw, calc((100vh - 160px) * 0.8))"
                    : "min(82vw, calc(100vh - 160px))",
              }}
            >
              <FlyerFrame id={`modal-${FLYERS[open].id}`} format={selectedFormat}>
                {(() => {
                  const C = FLYERS[open].Component;
                  return <C format={selectedFormat} platform={platform} />;
                })()}
              </FlyerFrame>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <span className="font-bold text-slate-200">
                {open + 1} / {FLYERS.length} · {FLYERS[open].title} ({isTiktok ? "TikTok" : isInstagram ? "Instagram" : "Facebook"} ·{" "}
                {currentCfg.ratioBadge})
              </span>
              <button
                onClick={() => downloadOne(open)}
                disabled={busy !== null}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-extrabold text-white disabled:opacity-60 ${
                  isTiktok
                    ? "bg-black border border-[#25F4EE] text-[#25F4EE] hover:bg-[#25F4EE] hover:text-black shadow-[0_0_15px_rgba(37,244,238,0.4)]"
                    : isInstagram
                    ? "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                    : "bg-[#1877F2]"
                }`}
              >
                <FiDownload /> Descargar PNG ({currentCfg.width}x{currentCfg.height})
              </button>
              <button
                onClick={() => copyCaption(open)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-bold text-slate-200 hover:bg-white/20"
              >
                {copiedCaption === open ? <FiCheck /> : <FiCopy />}
                <span>
                  {copiedCaption === open
                    ? "Texto copiado"
                    : `Copiar copy ${isTiktok ? "TikTok" : isInstagram ? "Instagram" : "Facebook"}`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
