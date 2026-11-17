import bg from "../assets/flyer10.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, TikTokBadge, TikTokLine, WaLine } from "./shared";

/* 10 · De Lara para el Mundo — smartphone proyector, atardecer y futuro */
export default function Flyer10({
  format = "story",
  platform = "tiktok",
}: {
  format?: FormatId;
  platform?: PlatformId;
}) {
  const isTiktok = platform === "tiktok";
  const isIg = platform === "instagram";

  if (format === "story") {
    // 1080 x 1920 (TikTok 9:16 nativo)
    return (
      <FlyerShell bg={bg} format="story" position="center 15%">
        <Fade side="top" height={520} rgb="22,6,42" strength={0.96} />
        <Fade side="bottom" height={560} rgb="22,6,42" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <div className="flex justify-center">
            {isTiktok ? (
              <TikTokBadge />
            ) : (
              <span className="rounded-full border border-yellow-400/60 bg-amber-950/80 px-6 py-2 text-[22px] font-extrabold uppercase tracking-[0.25em] text-yellow-300">
                Estado Lara · Venezuela
              </span>
            )}
          </div>
          <FitText max={118} className="ts mt-5 font-display uppercase leading-none text-yellow-300">
            De Lara Pal' Mundo
          </FitText>
          <FitText max={84} className="ts mt-2 font-display uppercase leading-none text-white">
            Tu Futuro es Hoy
          </FitText>
          <p className="ts mt-4 text-[38px] font-bold text-slate-100">
            4 Jóvenes con Visión · Proyecto con IA
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t-[8px] border-yellow-400 bg-[#16062a] px-8 pb-14 pt-6 text-center">
          <Chip className="bg-yellow-400 text-[24px] text-[#16062a]">100% Gratuito · 5to Año</Chip>
          <p className="ts mt-3 text-[30px] font-extrabold uppercase text-yellow-200">
            ¡Escríbenos hoy mismo!
          </p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <WaLine size={44} />
            {isTiktok ? <TikTokLine size={40} /> : isIg ? <IgLine size={40} /> : <MailLine size={40} />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 20%">
        <Fade side="left" height={720} rgb="22,6,42" strength={0.96} />
        <Fade side="right" height={260} rgb="22,6,42" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[720px] flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-2">
              <Chip className="bg-yellow-400 px-3.5 py-1 text-[15px] text-[#16062a]">
                100% Gratuito
              </Chip>
              <Chip className="border-2 border-yellow-300 px-3.5 py-1 text-[15px] text-yellow-200">
                Lara · 5to Año
              </Chip>
            </div>
            <FitText max={74} align="left" className="mt-2 font-display uppercase leading-none text-yellow-300">
              De Lara Pal' Mundo con IA
            </FitText>
            <p className="mt-2 text-[23px] font-bold text-slate-100">
              Buscamos a 4 jóvenes con visión para su Proyecto de Grado
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400/50 bg-[#16062a]/95 p-3">
            <WaLine size={28} />
            {isTiktok ? <TikTokLine size={26} className="mt-1" /> : isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350
    return (
      <FlyerShell bg={bg} format="portrait" position="center 15%">
        <Fade side="top" height={390} rgb="22,6,42" strength={0.95} />
        <Fade side="bottom" height={440} rgb="22,6,42" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <div className="flex justify-center">
            {isTiktok ? (
              <TikTokBadge />
            ) : (
              <Chip className="bg-yellow-400 py-1.5 text-[20px] text-[#16062a]">
                Estado Lara · 5to Año · Gratuito
              </Chip>
            )}
          </div>
          <FitText max={108} className="ts mt-3 font-display uppercase leading-none text-yellow-300">
            De Lara Pal' Mundo
          </FitText>
          <FitText max={80} className="ts mt-1.5 font-display uppercase leading-none text-white">
            Tu Futuro es Hoy
          </FitText>
          <p className="ts mt-2 text-[30px] font-bold text-slate-100">
            4 Jóvenes con Visión · Proyecto con IA
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t-[7px] border-yellow-400 bg-[#16062a] px-6 pb-7 pt-4 text-center">
          <WaLine size={40} />
          <div className="mt-2">
            {isTiktok ? <TikTokLine size={36} /> : isIg ? <IgLine size={36} /> : <MailLine size={36} />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 15%">
      <Fade side="top" height={320} rgb="22,6,42" strength={0.94} />
      <Fade side="bottom" height={340} rgb="22,6,42" strength={0.96} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <div className="flex justify-center">
          {isTiktok ? (
            <TikTokBadge />
          ) : (
            <Chip className="bg-yellow-400 py-1 text-[17px] text-[#16062a]">
              Lara · 5to año · Gratuito
            </Chip>
          )}
        </div>
        <FitText max={90} className="ts mt-2 font-display uppercase leading-none text-yellow-300">
          De Lara Pal' Mundo con IA
        </FitText>
        <p className="ts mt-2 text-[28px] font-bold text-slate-100">
          4 jóvenes con visión para su Proyecto de 5to Año
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t-[6px] border-yellow-400 bg-[#16062a] px-6 pb-5 pt-3.5 text-center">
        <WaLine size={37} />
        <div className="mt-1">
          {isTiktok ? <TikTokLine size={33} /> : isIg ? <IgLine size={33} /> : <MailLine size={34} />}
        </div>
      </div>
    </FlyerShell>
  );
}
