import bg from "../assets/flyer4.jpg";
import { cn } from "../utils/cn";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, WaLine } from "./shared";

/* 04 · Solo 4 cupos — azul eléctrico y naranja */
export default function Flyer4({
  format = "portrait",
  platform = "instagram",
}: {
  format?: FormatId;
  platform?: PlatformId;
}) {
  const isIg = platform === "instagram";

  if (format === "story") {
    // 1080 x 1920
    const SLOTS_STORY = [120, 360, 600, 840];
    return (
      <FlyerShell bg={bg} format="story" position="center 30%">
        <Fade side="top" height={520} rgb="3,6,30" strength={0.96} />
        <Fade side="bottom" height={520} rgb="3,6,30" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <span className="inline-block rounded-full border border-orange-400/60 bg-[#140600]/70 px-6 py-2 text-[22px] font-extrabold uppercase tracking-[0.25em] text-orange-300">
            {isIg ? "Instagram Story · Estado Lara" : "Convocatoria Exclusiva · Estado Lara"}
          </span>
          <FitText max={170} className="ts mt-6 font-display uppercase leading-none">
            <span className="text-orange-400">Solo 4</span> cupos
          </FitText>
          <FitText max={44} className="ts mt-4 font-extrabold uppercase leading-none text-cyan-200">
            ¿Serás uno de los 4 jóvenes con visión?
          </FitText>
        </div>

        <div className="absolute flex w-[140px] justify-center" style={{ left: SLOTS_STORY[2] - 70, top: 960 }}>
          <div className="rounded-full bg-orange-400 px-5 py-1.5 text-[24px] font-extrabold text-[#1a0a00]">
            ¿TÚ?
          </div>
        </div>
        {SLOTS_STORY.map((x, i) => (
          <div
            key={x}
            className={cn(
              "absolute flex h-[76px] w-[76px] items-center justify-center rounded-full border-[4px] font-display text-[40px]",
              i === 2
                ? "border-orange-200 bg-orange-500 text-white shadow-[0_0_35px_rgba(255,140,0,0.95)]"
                : "border-cyan-300 bg-[#04204f]/85 text-cyan-200 shadow-[0_0_24px_rgba(0,200,255,0.7)]"
            )}
            style={{ left: x - 38, top: 1010 }}
          >
            {i + 1}
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 border-t-[8px] border-orange-400 bg-[#050b2e] px-8 pb-12 pt-6 text-center">
          <div className="flex justify-center gap-4">
            <Chip className="bg-orange-400 text-[24px] text-[#1a0a00]">Totalmente gratuito</Chip>
            <Chip className="border-2 border-cyan-300 text-[24px] text-cyan-200">5to año · Estado Lara</Chip>
          </div>
          <WaLine size={46} className="mt-4" />
          {isIg ? <IgLine size={42} className="mt-1" /> : <MailLine size={44} className="mt-1" />}
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 50%">
        <Fade side="left" height={700} rgb="3,6,30" strength={0.96} />
        <Fade side="right" height={260} rgb="3,6,30" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[700px] flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-2">
              <Chip className="bg-orange-400 px-3.5 py-1 text-[15px] text-[#1a0a00]">
                Totalmente gratuito
              </Chip>
              <Chip className="border-2 border-cyan-300 px-3.5 py-1 text-[15px] text-cyan-200">
                Lara · 5to Año
              </Chip>
            </div>
            <FitText max={90} align="left" className="mt-3 font-display uppercase leading-none">
              <span className="text-orange-400">Solo 4</span> cupos
            </FitText>
            <p className="mt-2 text-[23px] font-bold text-cyan-200">
              ¿Serás uno de los 4 jóvenes con visión para su Proyecto de IA?
            </p>
          </div>

          <div className="rounded-2xl border-2 border-orange-400/60 bg-[#050b2e]/95 p-3">
            <WaLine size={28} />
            {isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Instagram)
    const SLOTS_PORT = [150, 390, 630, 870];
    return (
      <FlyerShell bg={bg} format="portrait" position="center 30%">
        <Fade side="top" height={390} rgb="3,6,30" strength={0.94} />
        <Fade side="bottom" height={380} rgb="3,6,30" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <span className="inline-block rounded-full border border-orange-400/60 bg-[#140600]/70 px-5 py-1 text-[18px] font-extrabold uppercase tracking-widest text-orange-300">
            {isIg ? "Instagram Convocatoria · Estado Lara" : "Estado Lara · 5to Año"}
          </span>
          <FitText max={150} className="ts mt-3 font-display uppercase leading-none">
            <span className="text-orange-400">Solo 4</span> cupos
          </FitText>
          <FitText max={38} className="ts mt-3 font-extrabold uppercase leading-none text-cyan-200">
            ¿Serás uno de los 4 jóvenes con visión?
          </FitText>
        </div>

        <div className="absolute flex w-[130px] justify-center" style={{ left: SLOTS_PORT[2] - 65, top: 680 }}>
          <div className="rounded-full bg-orange-400 px-4 py-1 text-[22px] font-extrabold text-[#1a0a00]">
            ¿TÚ?
          </div>
        </div>
        {SLOTS_PORT.map((x, i) => (
          <div
            key={x}
            className={cn(
              "absolute flex h-[70px] w-[70px] items-center justify-center rounded-full border-[3px] font-display text-[36px]",
              i === 2
                ? "border-orange-200 bg-orange-500 text-white shadow-[0_0_30px_rgba(255,140,0,0.9)]"
                : "border-cyan-300 bg-[#04204f]/85 text-cyan-200 shadow-[0_0_20px_rgba(0,200,255,0.6)]"
            )}
            style={{ left: x - 35, top: 730 }}
          >
            {i + 1}
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 border-t-[7px] border-orange-400 bg-[#050b2e] px-6 pb-6 pt-4 text-center">
          <div className="flex justify-center gap-3">
            <Chip className="bg-orange-400 text-[22px] text-[#1a0a00]">Totalmente gratuito</Chip>
            <Chip className="border-2 border-cyan-300 text-[22px] text-cyan-200">5to año · Estado Lara</Chip>
          </div>
          <WaLine size={40} className="mt-3" />
          {isIg ? <IgLine size={37} className="mt-1" /> : <MailLine size={38} className="mt-0.5" />}
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  const SLOTS_FEED = [150, 390, 630, 870];
  return (
    <FlyerShell bg={bg} format="square" position="center 30%">
      <Fade side="top" height={320} rgb="3,6,30" strength={0.92} />
      <Fade side="bottom" height={310} rgb="3,6,30" strength={0.95} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <span className="inline-block rounded-full border border-orange-400/60 bg-[#140600]/70 px-5 py-1 text-[17px] font-extrabold uppercase tracking-widest text-orange-300">
          Estado Lara · 5to Año
        </span>
        <FitText max={135} className="ts mt-2 font-display uppercase leading-none">
          <span className="text-orange-400">Solo 4</span> cupos
        </FitText>
        <FitText max={34} className="ts mt-2 font-extrabold uppercase leading-none text-cyan-200">
          ¿Serás uno de los 4 jóvenes con visión?
        </FitText>
      </div>

      <div className="absolute flex w-[120px] justify-center" style={{ left: SLOTS_FEED[2] - 60, top: 520 }}>
        <div className="rounded-full bg-orange-400 px-4 py-1 text-[21px] font-extrabold text-[#1a0a00]">
          ¿TÚ?
        </div>
      </div>

      {SLOTS_FEED.map((x, i) => (
        <div
          key={x}
          className={cn(
            "absolute flex h-[66px] w-[66px] items-center justify-center rounded-full border-[3px] font-display text-[34px]",
            i === 2
              ? "border-orange-200 bg-orange-500 text-white shadow-[0_0_30px_rgba(255,140,0,0.9)]"
              : "border-cyan-300 bg-[#04204f]/85 text-cyan-200 shadow-[0_0_20px_rgba(0,200,255,0.6)]"
          )}
          style={{ left: x - 33, top: 565 }}
        >
          {i + 1}
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 border-t-[6px] border-orange-400 bg-[#050b2e] px-6 pb-4 pt-3.5 text-center">
        <div className="flex justify-center gap-3">
          <Chip className="bg-orange-400 text-[21px] text-[#1a0a00]">Totalmente gratuito</Chip>
          <Chip className="border-2 border-cyan-300 text-[21px] text-cyan-200">5to año · Estado Lara</Chip>
        </div>
        <WaLine size={37} className="mt-2.5" />
        {isIg ? <IgLine size={34} className="mt-0.5" /> : <MailLine size={35} />}
      </div>
    </FlyerShell>
  );
}
