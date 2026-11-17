import bg from "../assets/flyer8.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, Seal, TikTokBadge, TikTokLine, WaLine } from "./shared";

/* 08 · ¡Tu Proyecto Ganador con IA! — cian neón, naranja y trofeo */
export default function Flyer8({
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
      <FlyerShell bg={bg} format="story" position="center 20%">
        <Fade side="top" height={520} rgb="3,8,32" strength={0.96} />
        <Fade side="bottom" height={560} rgb="3,8,32" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <div className="flex justify-center">
            {isTiktok ? (
              <TikTokBadge />
            ) : (
              <span className="rounded-full border border-cyan-400/60 bg-cyan-950/80 px-6 py-2 text-[22px] font-extrabold uppercase tracking-[0.25em] text-cyan-300">
                Estado Lara · 5to Año
              </span>
            )}
          </div>
          <FitText max={118} className="ts mt-5 font-display uppercase leading-none text-cyan-300">
            ¡Proyecto Ganador!
          </FitText>
          <FitText max={88} className="ts mt-2 font-display uppercase leading-none text-white">
            Tu Grado con IA
          </FitText>
          <p className="ts mt-4 text-[38px] font-bold text-slate-100">
            Buscamos a <span className="text-cyan-300">4 jóvenes con visión</span> en Lara
          </p>
        </div>

        <Seal size={210} className="absolute" style={{ left: 540 - 105, top: 1140 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[8px] border-cyan-400 bg-[#071330] px-8 pb-14 pt-6 text-center">
          <p className="ts text-[30px] font-extrabold uppercase text-cyan-200">
            ¡Sé 1 de los 4 seleccionados!
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
        <Fade side="left" height={720} rgb="3,8,32" strength={0.96} />
        <Fade side="right" height={260} rgb="3,8,32" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[720px] flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-2">
              <Chip className="bg-cyan-400 px-3.5 py-1 text-[15px] text-[#031524]">
                Totalmente gratuito
              </Chip>
              <Chip className="border-2 border-cyan-300 px-3.5 py-1 text-[15px] text-cyan-200">
                Lara · 5to Año
              </Chip>
            </div>
            <FitText max={74} align="left" className="mt-2 font-display uppercase leading-none text-cyan-300">
              ¡Proyecto Ganador con IA!
            </FitText>
            <p className="mt-2 text-[23px] font-bold text-slate-100">
              Buscamos a 4 jóvenes con visión para su Proyecto de Grado
            </p>
          </div>

          <div className="rounded-2xl border-2 border-cyan-400/50 bg-[#071330]/95 p-3">
            <WaLine size={28} />
            {isTiktok ? <TikTokLine size={26} className="mt-1" /> : isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
        <Seal size={150} className="absolute right-8 top-8" />
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350
    return (
      <FlyerShell bg={bg} format="portrait" position="center 20%">
        <Fade side="top" height={380} rgb="3,8,32" strength={0.95} />
        <Fade side="bottom" height={440} rgb="3,8,32" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <div className="flex justify-center">
            {isTiktok ? (
              <TikTokBadge />
            ) : (
              <Chip className="bg-cyan-400 py-1.5 text-[20px] text-[#031524]">
                Estado Lara · 5to año · Gratuito
              </Chip>
            )}
          </div>
          <FitText max={108} className="ts mt-3 font-display uppercase leading-none text-cyan-300">
            ¡Proyecto Ganador!
          </FitText>
          <FitText max={80} className="ts mt-1.5 font-display uppercase leading-none text-white">
            Tu Grado con IA
          </FitText>
          <p className="ts mt-2 text-[30px] font-bold text-slate-100">
            Buscamos a 4 jóvenes con visión en Lara
          </p>
        </div>

        <Seal size={180} className="absolute" style={{ left: 540 - 90, top: 780 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[7px] border-cyan-400 bg-[#071330] px-6 pb-7 pt-4 text-center">
          <WaLine size={40} />
          <div className="mt-1.5">
            {isTiktok ? <TikTokLine size={36} /> : isIg ? <IgLine size={36} /> : <MailLine size={36} />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 20%">
      <Fade side="top" height={320} rgb="3,8,32" strength={0.94} />
      <Fade side="bottom" height={340} rgb="3,8,32" strength={0.96} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <div className="flex justify-center">
          {isTiktok ? (
            <TikTokBadge />
          ) : (
            <Chip className="bg-cyan-400 py-1 text-[17px] text-[#031524]">
              Lara · 5to año · Gratuito
            </Chip>
          )}
        </div>
        <FitText max={92} className="ts mt-2 font-display uppercase leading-none text-cyan-300">
          ¡Proyecto Ganador con IA!
        </FitText>
        <p className="ts mt-2 text-[28px] font-bold text-slate-100">
          Buscamos a 4 jóvenes con visión en Lara
        </p>
      </div>

      <Seal size={160} className="absolute" style={{ left: 540 - 80, top: 580 }} />

      <div className="absolute inset-x-0 bottom-0 border-t-[6px] border-cyan-400 bg-[#071330] px-6 pb-5 pt-3.5 text-center">
        <WaLine size={37} />
        <div className="mt-1">
          {isTiktok ? <TikTokLine size={33} /> : isIg ? <IgLine size={33} /> : <MailLine size={34} />}
        </div>
      </div>
    </FlyerShell>
  );
}
