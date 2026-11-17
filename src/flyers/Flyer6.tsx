import bg from "../assets/flyer6.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, WaLine } from "./shared";

/* 06 · De la idea al proyecto — esmeralda y azul */
const STEPS = [
  { n: 1, t: "Escríbenos", d: "Por WhatsApp o DM" },
  { n: 2, t: "Únete al equipo", d: "4 jóvenes con visión" },
  { n: 3, t: "Crea con IA", d: "Tu Proyecto de 5to Año" },
];

export default function Flyer6({
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
      <FlyerShell bg={bg} format="story" position="center 60%">
        <Fade side="top" height={520} rgb="2,12,30" strength={0.96} />
        <Fade side="bottom" height={720} rgb="2,12,30" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <Chip className="bg-emerald-400 px-6 py-2.5 text-[22px] text-[#032016]">
            {isIg ? "Instagram Story · Estado Lara" : "Estado Lara · 5to año · Gratuito"}
          </Chip>
          <FitText max={120} className="ts mt-6 font-display uppercase leading-none">
            De la idea <span className="text-emerald-300">al proyecto</span>
          </FitText>
          <p className="ts mt-4 text-[36px] font-bold text-emerald-100">
            Buscamos a 4 jóvenes con visión
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-14">
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-5 rounded-3xl border-2 border-emerald-300/70 bg-[#06261f]/95 p-5"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 font-display text-[36px] leading-none text-[#032016]">
                  {s.n}
                </div>
                <div>
                  <div className="text-[28px] font-extrabold leading-tight">{s.t}</div>
                  <div className="text-[22px] font-medium leading-tight text-emerald-200">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border-2 border-emerald-400/40 bg-[#031d16]/90 p-4">
            <WaLine size={42} />
            {isIg ? <IgLine size={38} className="mt-1" /> : <MailLine size={40} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 70%">
        <Fade side="left" height={720} rgb="2,12,30" strength={0.96} />
        <Fade side="right" height={260} rgb="2,12,30" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[720px] flex-col justify-between p-8">
          <div>
            <Chip className="bg-emerald-400 px-3.5 py-1 text-[15px] text-[#032016]">
              Lara · 5to año · Gratuito
            </Chip>
            <FitText max={76} align="left" className="mt-2 font-display uppercase leading-none">
              De la idea <span className="text-emerald-300">al proyecto</span>
            </FitText>
            <div className="mt-3 flex gap-3">
              {STEPS.map((s) => (
                <div key={s.n} className="flex-1 rounded-xl border border-emerald-300/50 bg-[#06261f]/90 p-2 text-center">
                  <div className="inline-block rounded-full bg-emerald-400 px-2 py-0.5 font-display text-[16px] text-[#032016]">
                    {s.n}
                  </div>
                  <div className="mt-1 text-[15px] font-extrabold leading-tight">{s.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-emerald-400/50 bg-[#031d16]/95 p-3">
            <WaLine size={28} />
            {isIg ? <IgLine size={26} className="mt-1" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Instagram)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 90%">
        <Fade side="top" height={360} rgb="2,12,30" strength={0.96} />
        <Fade side="bottom" height={540} rgb="2,12,30" strength={0.97} />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <Chip className="bg-emerald-400 py-1.5 text-[21px] text-[#032016]">
            {isIg ? "Instagram Convocatoria · 5to año" : "Estado Lara · 5to año · Gratuito"}
          </Chip>
          <FitText max={104} className="ts mt-3 font-display uppercase leading-none">
            De la idea <span className="text-emerald-300">al proyecto</span>
          </FitText>
          <p className="ts mt-2 text-[29px] font-bold text-emerald-100">Buscamos a 4 jóvenes con visión</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-7 pb-7">
          <div className="grid grid-cols-3 gap-3.5">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border-2 border-emerald-300/70 bg-[#06261f]/95 px-3 py-3.5 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 font-display text-[26px] leading-none text-[#032016]">
                  {s.n}
                </div>
                <div className="mt-2 text-[22px] font-extrabold leading-tight">{s.t}</div>
                <div className="mt-1 text-[16px] font-medium leading-tight text-emerald-200">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <WaLine size={40} />
            {isIg ? <IgLine size={37} className="mt-1" /> : <MailLine size={38} className="mt-0.5" />}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 100%">
      <Fade side="top" height={290} rgb="2,12,30" strength={0.95} />
      <Fade side="bottom" height={470} rgb="2,12,30" strength={0.96} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <Chip className="bg-emerald-400 py-1.5 text-[19px] text-[#032016]">
          Estado Lara · 5to año · Gratuito
        </Chip>
        <FitText max={92} className="ts mt-2 font-display uppercase leading-none">
          De la idea <span className="text-emerald-300">al proyecto</span>
        </FitText>
        <p className="ts mt-1.5 text-[26px] font-bold">Buscamos a 4 jóvenes con visión</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-7 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border-2 border-emerald-300/70 bg-[#06261f]/95 px-2.5 py-3 text-center"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 font-display text-[24px] leading-none text-[#032016]">
                {s.n}
              </div>
              <div className="mt-1.5 text-[20px] font-extrabold leading-tight">{s.t}</div>
              <div className="mt-0.5 text-[15px] font-medium leading-tight text-emerald-200">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-3.5">
          <WaLine size={37} />
          {isIg ? <IgLine size={34} className="mt-0.5" /> : <MailLine size={35} />}
        </div>
      </div>
    </FlyerShell>
  );
}
