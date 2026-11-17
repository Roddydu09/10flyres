import bg from "../assets/flyer3.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Fade, FitText, FlyerShell, IgLine, MailLine, Seal, WaLine } from "./shared";

/* 03 · Aprende IA — verde bosque y dorado */
export default function Flyer3({
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
      <FlyerShell bg={bg} format="story" position="center 20%">
        <Fade side="top" height={520} rgb="2,26,22" strength={0.96} />
        <Fade side="bottom" height={450} rgb="2,26,22" strength={0.94} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <span className="inline-block rounded-full border border-yellow-400/50 bg-[#021a16]/80 px-6 py-2 text-[22px] font-extrabold uppercase tracking-[0.25em] text-yellow-300">
            {isIg ? "Instagram Convocatoria · Lara" : "Convocatoria 5to Año · Lara"}
          </span>
          <FitText max={124} className="ts mt-6 font-display uppercase leading-none text-yellow-300">
            Aprende IA en Lara
          </FitText>
          <p className="ts mt-5 text-[40px] font-extrabold leading-[1.2] text-emerald-100">
            Buscamos a <span className="text-yellow-300">4 jóvenes con visión</span>
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <Seal size={210} className="absolute" style={{ left: 50, top: 1100 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[8px] border-yellow-300 bg-[#032a24] px-8 pb-12 pt-6 text-center">
          <div className="text-[28px] font-extrabold tracking-[0.3em] text-yellow-300">
            ¡ESCRÍBENOS HOY MISMO!
          </div>
          <WaLine size={46} className="mt-3" />
          {isIg ? <IgLine size={42} className="mt-1" /> : <MailLine size={44} className="mt-1" />}
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 25%">
        <Fade side="left" height={680} rgb="2,26,22" strength={0.97} />
        <Fade side="right" height={260} rgb="2,26,22" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[680px] flex-col justify-between p-8">
          <div>
            <span className="inline-block rounded-full border border-yellow-400/50 bg-[#021a16]/80 px-4 py-1 text-[15px] font-extrabold uppercase tracking-widest text-yellow-300">
              Estado Lara · Proyecto 5to Año
            </span>
            <FitText max={74} align="left" className="mt-3 font-display uppercase leading-none text-yellow-300">
              Aprende IA en Lara
            </FitText>
            <p className="mt-2 text-[24px] font-extrabold text-emerald-100">
              Buscamos a <span className="text-yellow-300">4 jóvenes con visión</span>
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400/50 bg-[#021f1a]/95 p-3">
            <WaLine size={28} />
            {isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>

        <Seal size={150} className="absolute right-8 top-8" />
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Instagram)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 15%">
        <Fade side="top" height={400} rgb="2,26,22" strength={0.96} />
        <Fade side="bottom" height={360} rgb="2,26,22" strength={0.92} />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <span className="inline-block rounded-full border border-yellow-400/50 bg-[#021a16]/80 px-5 py-1 text-[19px] font-extrabold uppercase tracking-[0.2em] text-yellow-300">
            {isIg ? "Instagram Feed · Estado Lara" : "Estado Lara · Proyecto 5to Año"}
          </span>
          <FitText max={110} className="ts mt-3 font-display uppercase leading-none text-yellow-300">
            Aprende IA en Lara
          </FitText>
          <p className="ts mt-3 text-[35px] font-extrabold leading-[1.15]">
            Buscamos a <span className="text-yellow-300">4 jóvenes con visión</span>
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <Seal size={190} className="absolute" style={{ left: 36, top: 760 }} />

        <div className="absolute inset-x-0 bottom-0 border-t-[7px] border-yellow-300 bg-[#032a24] px-6 pb-6 pt-4 text-center">
          <div className="text-[25px] font-extrabold tracking-[0.3em] text-yellow-300">
            ¡ESCRÍBENOS HOY MISMO!
          </div>
          <WaLine size={42} className="mt-2" />
          {isIg ? <IgLine size={38} className="mt-1" /> : <MailLine size={40} className="mt-0.5" />}
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 10%">
      <Fade side="top" height={340} rgb="2,26,22" strength={0.95} />
      <Fade side="bottom" height={280} rgb="2,26,22" strength={0.9} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <span className="inline-block rounded-full border border-yellow-400/50 bg-[#021a16]/80 px-5 py-1 text-[17px] font-extrabold uppercase tracking-[0.2em] text-yellow-300">
          Estado Lara · Proyecto 5to Año
        </span>
        <FitText max={98} className="ts mt-2 font-display uppercase leading-none text-yellow-300">
          Aprende IA en Lara
        </FitText>
        <p className="ts mt-3 text-[31px] font-extrabold leading-[1.12]">
          Buscamos a <span className="text-yellow-300">4 jóvenes con visión</span>
          <br />
          para su Proyecto de 5to Año
        </p>
      </div>

      <Seal size={180} className="absolute" style={{ left: 32, top: 580 }} />

      <div className="absolute inset-x-0 bottom-0 border-t-[6px] border-yellow-300 bg-[#032a24] px-6 pb-4 pt-3 text-center">
        <div className="text-[22px] font-extrabold tracking-[0.3em] text-yellow-300">
          ¡ESCRÍBENOS HOY MISMO!
        </div>
        <WaLine size={38} className="mt-1.5" />
        {isIg ? <IgLine size={34} className="mt-0.5" /> : <MailLine size={36} />}
      </div>
    </FlyerShell>
  );
}
