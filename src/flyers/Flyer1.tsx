import bg from "../assets/flyer1.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Fade, FitText, FlyerShell, IgLine, MailLine, Seal, WaLine } from "./shared";

/* 01 · El Desafío — azul marino y cian */
export default function Flyer1({
  format = "portrait",
  platform = "instagram",
}: {
  format?: FormatId;
  platform?: PlatformId;
}) {
  const isIg = platform === "instagram";

  if (format === "story") {
    // 1080 x 1920 (Vertical 9:16)
    return (
      <FlyerShell bg={bg} format="story" position="center 70%">
        <Fade side="top" height={600} rgb="3,7,36" strength={0.96} />
        <Fade side="bottom" height={520} rgb="3,7,36" strength={0.92} />

        <div className="ts absolute inset-x-0 top-0 px-10 pt-20 text-center">
          <span className="inline-block rounded-full border border-cyan-400/60 bg-cyan-950/80 px-6 py-2 text-[24px] font-extrabold uppercase tracking-[0.25em] text-cyan-300">
            {isIg ? "Instagram Convocatoria · Lara" : "Estado Lara · Venezuela"}
          </span>
          <FitText max={108} className="mt-6 font-black leading-none">
            ¡ÚNETE AL DESAFÍO!
          </FitText>
          <FitText max={84} className="mt-4 font-black leading-none text-cyan-300">
            ¡IA EN LARA, VENEZUELA!
          </FitText>
          <p className="mt-6 text-[44px] font-extrabold leading-[1.15] text-white">
            Buscamos a 4 jóvenes con visión
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <Seal size={220} className="absolute" style={{ left: 540 - 110, top: 1220 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[8px] border-cyan-400 bg-[#dcdcff] px-8 pb-10 pt-6 text-center text-[#0a0f45]">
          <p className="text-[34px] font-extrabold leading-[1.2]">
            Si estás en 5to año en el Estado Lara y quieres ser parte, ¡escríbenos hoy mismo!
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-1">
            <WaLine size={46} className="text-[#0a0f45]" />
            {isIg ? <IgLine size={42} /> : <MailLine size={42} className="text-[#0a0f45]" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628 (Horizontal 1.91:1)
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 40%">
        <Fade side="left" height={680} rgb="3,7,36" strength={0.97} />
        <Fade side="right" height={320} rgb="3,7,36" strength={0.6} />

        <div className="ts absolute inset-y-0 left-0 flex w-[700px] flex-col justify-between p-8">
          <div>
            <span className="inline-block rounded-full border border-cyan-400/60 bg-cyan-950/80 px-4 py-1 text-[17px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
              Estado Lara · 5to Año
            </span>
            <FitText max={68} align="left" className="mt-3 font-black leading-none">
              ¡ÚNETE AL DESAFÍO IA!
            </FitText>
            <p className="mt-2 text-[26px] font-bold leading-tight text-cyan-100">
              Buscamos a <b className="text-cyan-300">4 jóvenes con visión</b> para su Proyecto de 5to Año
            </p>
          </div>

          <div className="rounded-2xl border-2 border-cyan-400/50 bg-[#06123b]/95 p-3">
            <WaLine size={28} className="text-white" />
            {isIg ? <IgLine size={26} /> : <MailLine size={26} className="mt-1 text-white" />}
          </div>
        </div>

        <Seal size={150} className="absolute right-8 top-8" />
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 - Formato REY de Instagram Feed)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 95%">
        <Fade side="top" height={450} rgb="3,7,36" strength={0.96} />
        <Fade side="bottom" height={340} rgb="3,7,36" strength={0.85} />

        <div className="ts absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-950/70 px-5 py-1 text-[20px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
            {isIg ? "Instagram Feed · Estado Lara" : "Estado Lara · Venezuela"}
          </span>
          <FitText max={98} className="mt-3 font-black leading-none">
            ¡ÚNETE AL DESAFÍO!
          </FitText>
          <FitText max={74} className="mt-3 font-black leading-none text-cyan-300">
            ¡IA EN LARA, VENEZUELA!
          </FitText>
          <p className="mt-4 text-[38px] font-extrabold leading-[1.12]">
            Buscamos a 4 jóvenes con visión
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <Seal size={190} className="absolute" style={{ left: 540 - 95, top: 820 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[7px] border-cyan-400 bg-[#dcdcff] px-6 pb-6 pt-4 text-center text-[#0a0f45]">
          <p className="text-[29px] font-extrabold leading-[1.15]">
            Si estás en 5to año en el Estado Lara y quieres ser parte, ¡escríbenos!
          </p>
          <div className="mt-3 flex flex-col items-center justify-center gap-1">
            <WaLine size={40} className="text-[#0a0f45]" />
            {isIg ? <IgLine size={37} /> : <MailLine size={37} className="text-[#0a0f45]" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 100%">
      <Fade side="top" height={390} rgb="3,7,36" strength={0.96} />
      <Fade side="bottom" height={280} rgb="3,7,36" strength={0.8} />

      <div className="ts absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-950/70 px-5 py-1 text-[18px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
          Estado Lara · Venezuela
        </span>
        <FitText max={88} className="mt-2 font-black leading-none">
          ¡ÚNETE AL DESAFÍO!
        </FitText>
        <FitText max={68} className="mt-2 font-black leading-none text-cyan-300">
          ¡IA EN LARA, VENEZUELA!
        </FitText>
        <p className="mt-3 text-[34px] font-extrabold leading-[1.12]">
          Buscamos a 4 jóvenes con visión
          <br />
          para su Proyecto de 5to Año
        </p>
      </div>

      <Seal size={180} className="absolute" style={{ left: 540 - 90, top: 620 }} />

      <div className="absolute inset-x-0 bottom-0 border-t-[6px] border-cyan-400 bg-[#dcdcff] px-6 pb-4 pt-3.5 text-center text-[#0a0f45]">
        <p className="text-[27px] font-extrabold leading-[1.15]">
          Si estás en 5to año en el Estado Lara y quieres ser parte, ¡escríbenos!
        </p>
        <div className="mt-2 flex flex-col items-center justify-center gap-0.5">
          <WaLine size={37} className="text-[#0a0f45]" />
          {isIg ? <IgLine size={33} /> : <MailLine size={34} className="text-[#0a0f45]" />}
        </div>
      </div>
    </FlyerShell>
  );
}
