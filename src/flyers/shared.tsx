import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { cn } from "../utils/cn";
import { ALL_FORMAT_CONFIGS, type FormatId, type PlatformId } from "./formats";

export const PHONE = "0422-0501646";
export const PHONE_INTL = "584220501646";
export const EMAIL = "lochitaclub@gmail.com";
export const INSTAGRAM_HANDLE = "@lochitaclub";
export const TIKTOK_HANDLE = "@lochitaclub";

/* ---------- Base del flyer adaptable ---------- */
export function FlyerShell({
  bg,
  format = "story",
  position = "center",
  overlay,
  className,
  children,
}: {
  bg: string;
  format?: FormatId;
  position?: string;
  overlay?: string;
  className?: string;
  children: ReactNode;
}) {
  const cfg = ALL_FORMAT_CONFIGS[format] || ALL_FORMAT_CONFIGS.story;
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#050a28] font-body text-white select-none",
        className
      )}
      style={{
        width: cfg.width,
        height: cfg.height,
      }}
    >
      <img
        src={bg}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlay }}
        />
      )}
      {children}
    </div>
  );
}

/* ---------- Degradado para dar lectura al texto ---------- */
export function Fade({
  side,
  height,
  rgb,
  strength = 0.94,
}: {
  side: "top" | "bottom" | "left" | "right";
  height: number | string;
  rgb: string;
  strength?: number;
}) {
  const dirMap = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
  };
  const dir = dirMap[side];

  const posClass = {
    top: "top-0 inset-x-0",
    bottom: "bottom-0 inset-x-0",
    left: "left-0 inset-y-0",
    right: "right-0 inset-y-0",
  }[side];

  const sizeStyle: CSSProperties =
    side === "top" || side === "bottom"
      ? { height }
      : { width: height };

  return (
    <div
      className={cn("pointer-events-none absolute", posClass)}
      style={{
        ...sizeStyle,
        background: `linear-gradient(${dir}, rgba(${rgb},${strength}) 0%, rgba(${rgb},${(strength * 0.88).toFixed(2)}) 40%, rgba(${rgb},${(strength * 0.4).toFixed(2)}) 75%, rgba(${rgb},0) 100%)`,
      }}
    />
  );
}

/* ---------- Texto de una línea que se ajusta al ancho disponible ---------- */
export function FitText({
  children,
  max = 100,
  align = "center",
  className,
  style,
}: {
  children: ReactNode;
  max?: number;
  align?: "center" | "left";
  className?: string;
  style?: CSSProperties;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const o = outer.current;
      const i = inner.current;
      if (!o || !i) return;
      i.style.fontSize = `${max}px`;
      const w = i.offsetWidth;
      const avail = o.clientWidth;
      if (w > avail) i.style.fontSize = `${(max * avail) / w}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    document.fonts?.addEventListener("loadingdone", fit);
    return () => document.fonts?.removeEventListener("loadingdone", fit);
  }, [children, max]);

  return (
    <div
      ref={outer}
      className={cn("flex", align === "center" ? "justify-center" : "justify-start", className)}
      style={style}
    >
      <span ref={inner} className="whitespace-nowrap inline-block">
        {children}
      </span>
    </div>
  );
}

/* ---------- Píldora ---------- */
export function Chip({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 font-extrabold uppercase tracking-wide",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

/* ---------- Insignia TikTok con efecto Glitch Cyan/Magenta ---------- */
export function TikTokBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-black/85 backdrop-blur-md px-4 py-1.5 text-xs font-black tracking-widest text-white border border-[#25F4EE]/60 shadow-[0_0_15px_rgba(37,244,238,0.4)]",
        className
      )}
    >
      <FaTiktok className="text-sm text-[#FE2C55]" />
      <span className="text-[#25F4EE]">TIKTOK</span>
      <span className="text-slate-300">VIRAL</span>
    </div>
  );
}

/* ---------- Líneas de contacto con soporte TikTok / WhatsApp / Insta ---------- */
export function WaLine({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3 whitespace-nowrap font-extrabold", className)}
      style={{ fontSize: size }}
    >
      <FaWhatsapp style={{ width: size * 1.15, height: size * 1.15, color: "#25D366" }} />
      <span>WhatsApp: {PHONE}</span>
    </div>
  );
}

export function MailLine({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3 whitespace-nowrap font-extrabold", className)}
      style={{ fontSize: size }}
    >
      <SiGmail style={{ width: size * 1.05, height: size * 1.05, color: "#EA4335" }} />
      <span>Correo: {EMAIL}</span>
    </div>
  );
}

export function IgLine({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2.5 whitespace-nowrap font-extrabold text-[#F77737]", className)}
      style={{ fontSize: size }}
    >
      <FaInstagram style={{ width: size * 1.1, height: size * 1.1 }} />
      <span className="text-white">DM: {INSTAGRAM_HANDLE}</span>
    </div>
  );
}

export function TikTokLine({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2.5 whitespace-nowrap font-extrabold text-[#25F4EE]", className)}
      style={{ fontSize: size }}
    >
      <FaTiktok style={{ width: size * 1.05, height: size * 1.05, color: "#FE2C55" }} />
      <span className="text-white">TikTok: {TIKTOK_HANDLE}</span>
    </div>
  );
}

/* ---------- Barra de contacto adaptativa para TikTok/Instagram/Facebook ---------- */
export function ContactBar({
  platform = "tiktok",
  size = 34,
  className,
}: {
  platform?: PlatformId;
  size?: number;
  className?: string;
}) {
  if (platform === "tiktok") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-6 gap-y-2", className)}>
        <WaLine size={size} />
        <TikTokLine size={size} />
      </div>
    );
  }
  if (platform === "instagram") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-6 gap-y-2", className)}>
        <WaLine size={size} />
        <IgLine size={size} />
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col items-center justify-center gap-1", className)}>
      <WaLine size={size} />
      <MailLine size={size * 0.95} />
    </div>
  );
}

/* ---------- Sello "Totalmente gratuito" ---------- */
function starburst(points: number, inner: number, outer: number) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
}
const BURST = starburst(28, 46.5, 50);
const TAIL = "polygon(0 0,100% 0,100% 100%,50% 82%,0 100%)";

export function Seal({
  size = 200,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const s = size;
  const ring = (inset: number, bg: string, extra?: CSSProperties): CSSProperties => ({
    position: "absolute",
    inset: s * inset,
    borderRadius: "50%",
    background: bg,
    ...extra,
  });
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: s, height: s * 1.3, ...style }}>
      {/* cintas */}
      <div
        className="absolute"
        style={{
          left: s * 0.2,
          top: s * 0.6,
          width: s * 0.3,
          height: s * 0.7,
          transform: "rotate(13deg)",
          background: "linear-gradient(#c8161e,#7a0810)",
          clipPath: TAIL,
        }}
      />
      <div
        className="absolute"
        style={{
          left: s * 0.5,
          top: s * 0.6,
          width: s * 0.3,
          height: s * 0.7,
          transform: "rotate(-13deg)",
          background: "linear-gradient(#a30f17,#6a060d)",
          clipPath: TAIL,
        }}
      />
      {/* medalla */}
      <div className="absolute left-0 top-0" style={{ width: s, height: s }}>
        <div
          className="absolute inset-0"
          style={{ clipPath: BURST, background: "linear-gradient(145deg,#ffe38a,#b9760f)" }}
        />
        <div style={ring(0.05, "linear-gradient(145deg,#d3222a,#80080f)")} />
        <div style={ring(0.1, "linear-gradient(145deg,#fff2ad,#d99a1f 55%,#fff2ad)")} />
        <div
          style={ring(0.135, "radial-gradient(circle at 35% 28%,#e5393f,#a0101a 70%)", {
            boxShadow: "inset 0 0 18px rgba(0,0,0,.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <span
            className="font-extrabold uppercase text-white"
            style={{ fontSize: s * 0.085, lineHeight: 1.1, letterSpacing: "0.02em", textShadow: "0 2px 3px rgba(0,0,0,.5)" }}
          >
            Totalmente
          </span>
          <span
            className="font-display uppercase"
            style={{
              fontSize: s * 0.17,
              lineHeight: 1.05,
              color: "#ffd34a",
              textShadow: "0 2px 0 #8a5600, 0 4px 6px rgba(0,0,0,.45)",
            }}
          >
            Gratuito
          </span>
        </div>
      </div>
    </div>
  );
}
