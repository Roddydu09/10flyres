import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ALL_FORMAT_CONFIGS, type FormatId } from "../flyers/formats";
import { cn } from "../utils/cn";

/**
 * Muestra un flyer con las dimensiones del formato seleccionado (portrait 4:5, square 1:1, story 9:16, horizontal 1.91:1)
 * escalado de forma fluida al ancho de su contenedor.
 */
export function FlyerFrame({
  id,
  format = "portrait",
  children,
  className,
}: {
  id: string;
  format?: FormatId;
  children: ReactNode;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const cfg = ALL_FORMAT_CONFIGS[format] || ALL_FORMAT_CONFIGS.square;
  const [scale, setScale] = useState(0.4);

  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / cfg.width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cfg.width, format]);

  return (
    <div
      ref={wrap}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: cfg.aspectRatio }}
    >
      <div
        data-flyer={id}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: cfg.width,
          height: cfg.height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
