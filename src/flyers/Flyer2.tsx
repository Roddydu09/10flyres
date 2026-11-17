import { FaCircleCheck } from "react-icons/fa6";
import bg from "../assets/flyer2.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, WaLine } from "./shared";

/* 02 · ¿Eres de 5to año? — violeta y magenta */
export default function Flyer2({
  format = "portrait",
  platform = "instagram",
}: {
  format?: FormatId;
  platform?: PlatformId;
}) {
  const isIg = platform === "instagram";

  if (format === "story") {
    // 1080 x 1920
    return (
      <FlyerShell bg={bg} format="story" position="center 10%">
        <Fade side="top" height={320} rgb="12,3,46" strength={0.85} />
        <Fade side="bottom" height={820} rgb="12,3,46" strength={0.98} />

        <div className="absolute left-8 right-8 top-16 flex items-center justify-between">
          <span className="rounded-full border border-cyan-400/60 bg-[#12063d]/80 px-5 py-2 text-[20px] font-extrabold uppercase tracking-widest text-cyan-300">
            Inteligencia Artificial
          </span>
          <span className="rounded-full border-2 border-fuchsia-300 bg-fuchsia-600 px-5 py-2 text-[20px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg">
            Estado Lara
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-10 pb-16 text-center">
          <FitText max={130} className="ts font-display uppercase leading-[1]">
            ¿Eres de 5to año?
          </FitText>
          <FitText max={110} className="ts mt-2 font-display uppercase leading-[1] text-fuchsia-400">
            Tu proyecto con IA
          </FitText>

          <p className="ts mx-auto mt-5 max-w-[900px] text-[36px] font-semibold leading-[1.3] text-violet-100">
            Buscamos a <b className="text-cyan-300">4 jóvenes con visión</b> para su Proyecto de 5to Año
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Chip className="bg-yellow-300 px-7 py-3 text-[26px] text-[#1a0b4d]">
              <FaCircleCheck /> Totalmente gratuito
            </Chip>
            <Chip className="border-2 border-cyan-300 px-7 py-3 text-[26px] text-cyan-200">
              Solo 4 cupos
            </Chip>
          </div>

          <div className="mt-8 rounded-[32px] border-2 border-fuchsia-400/60 bg-[#1b0a55]/95 px-8 py-5">
            <WaLine size={44} />
            {isIg ? <IgLine size={40} className="mt-2" /> : <MailLine size={42} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 20%">
        <Fade side="left" height={700} rgb="12,3,46" strength={0.96} />
        <Fade side="right" height={280} rgb="12,3,46" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[700px] flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border-2 border-fuchsia-300 bg-fuchsia-600 px-3.5 py-1 text-[15px] font-extrabold uppercase tracking-wider text-white">
                Estado Lara
              </span>
              <Chip className="bg-yellow-300 px-3.5 py-1 text-[15px] text-[#1a0b4d]">
                Totalmente gratuito
              </Chip>
            </div>
            <FitText max={80} align="left" className="mt-3 font-display uppercase leading-tight">
              ¿Eres de 5to año?
            </FitText>
            <FitText max={68} align="left" className="font-display uppercase leading-tight text-fuchsia-400">
              Tu proyecto con IA
            </FitText>
            <p className="mt-2 text-[23px] font-semibold text-violet-100">
              Buscamos a <b className="text-cyan-300">4 jóvenes con visión</b> en Lara
            </p>
          </div>

          <div className="rounded-2xl border-2 border-fuchsia-400/60 bg-[#1b0a55]/95 p-3">
            <WaLine size={28} />
            {isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Feed Instagram)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 10%">
        <Fade side="top" height={260} rgb="12,3,46" strength={0.75} />
        <Fade side="bottom" height={680} rgb="12,3,46" strength={0.98} />

        <div className="absolute right-8 top-8 rounded-full border-2 border-fuchsia-300 bg-fuchsia-600 px-6 py-2.5 text-[21px] font-extrabold uppercase tracking-[0.16em] shadow-lg">
          Estado Lara · Venezuela
        </div>

        <div className="absolute inset-x-0 bottom-0 px-9 pb-9 text-center">
          <FitText max={114} className="ts font-display uppercase leading-[1.02]">
            ¿Eres de 5to año?
          </FitText>
          <FitText max={96} className="ts font-display uppercase leading-[1.05] text-fuchsia-400">
            Tu proyecto con IA
          </FitText>

          <p className="ts mx-auto mt-3 max-w-[850px] text-[31px] font-semibold leading-[1.25] text-violet-100">
            Buscamos a <b className="text-cyan-300">4 jóvenes con visión</b> para su Proyecto de 5to Año
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <Chip className="bg-yellow-300 text-[23px] text-[#1a0b4d]">
              <FaCircleCheck /> Totalmente gratuito
            </Chip>
            <Chip className="border-2 border-cyan-300 text-[23px] text-cyan-200">Solo 4 cupos</Chip>
          </div>

          <div className="mt-5 rounded-[28px] border-2 border-fuchsia-400/60 bg-[#1b0a55]/95 px-7 py-4">
            <WaLine size={38} />
            {isIg ? <IgLine size={35} className="mt-1.5" /> : <MailLine size={35} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 10%">
      <Fade side="top" height={200} rgb="12,3,46" strength={0.6} />
      <Fade side="bottom" height={580} rgb="12,3,46" strength={0.97} />

      <div className="absolute right-7 top-7 rounded-full border-2 border-fuchsia-300 bg-fuchsia-600 px-5 py-2 text-[19px] font-extrabold uppercase tracking-[0.16em] shadow-lg">
        Estado Lara · Venezuela
      </div>

      <div className="absolute inset-x-0 bottom-0 px-8 pb-7 text-center">
        <FitText max={98} className="ts font-display uppercase leading-[1.02]">
          ¿Eres de 5to año?
        </FitText>
        <FitText max={84} className="ts font-display uppercase leading-[1.05] text-fuchsia-400">
          Tu proyecto con IA
        </FitText>

        <p className="ts mx-auto mt-2 max-w-[820px] text-[28px] font-semibold leading-[1.2] text-violet-100">
          Buscamos a <b className="text-cyan-300">4 jóvenes con visión</b> para su Proyecto de 5to Año
        </p>

        <div className="mt-3 flex justify-center gap-3">
          <Chip className="bg-yellow-300 text-[21px] text-[#1a0b4d]">
            <FaCircleCheck /> Totalmente gratuito
          </Chip>
          <Chip className="border-2 border-cyan-300 text-[21px] text-cyan-200">Solo 4 cupos</Chip>
        </div>

        <div className="mt-4 rounded-[24px] border-2 border-fuchsia-400/60 bg-[#1b0a55]/95 px-6 py-3.5">
          <WaLine size={35} />
          {isIg ? <IgLine size={32} className="mt-1" /> : <MailLine size={33} />}
        </div>
      </div>
    </FlyerShell>
  );
}
