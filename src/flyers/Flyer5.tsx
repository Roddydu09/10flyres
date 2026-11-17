import bg from "../assets/flyer5.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { Chip, Fade, FitText, FlyerShell, IgLine, MailLine, WaLine } from "./shared";

/* 05 · Lara, Venezuela — tricolor patrio */
const TriBar = ({ className }: { className: string }) => (
  <div className={`absolute inset-x-0 flex ${className}`}>
    <i className="flex-1 bg-[#ffcc00]" />
    <i className="flex-1 bg-[#00247d]" />
    <i className="flex-1 bg-[#cf142b]" />
  </div>
);

export default function Flyer5({
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
        <Fade side="top" height={600} rgb="4,12,50" strength={0.96} />
        <Fade side="bottom" height={620} rgb="4,12,50" strength={0.96} />
        <TriBar className="top-0 h-[18px]" />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <div className="ts text-[32px] leading-none tracking-[0.5em] text-yellow-300">★★★★★★★★</div>
          <FitText max={130} className="ts mt-4 font-display uppercase leading-none">
            Lara se conecta
          </FitText>
          <FitText max={130} className="ts mt-1 font-display uppercase leading-none text-yellow-400">
            con el futuro
          </FitText>
          <p className="ts mt-5 text-[40px] font-bold leading-[1.2]">
            Buscamos a 4 jóvenes con visión
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-16 text-center">
          <Chip className="bg-yellow-400 px-8 py-3 text-[28px] text-[#0a1a5c]">
            Totalmente gratuito
          </Chip>
          <p className="ts mt-5 text-[38px] font-extrabold leading-[1.2]">
            Si estás en 5to año en el Estado Lara,
            <br />
            ¡escríbenos hoy mismo!
          </p>
          <WaLine size={46} className="mt-4" />
          {isIg ? <IgLine size={42} className="mt-1 text-yellow-300" /> : <MailLine size={44} className="mt-1" />}
        </div>
        <TriBar className="bottom-0 h-[20px]" />
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 20%">
        <Fade side="left" height={700} rgb="4,12,50" strength={0.96} />
        <Fade side="right" height={260} rgb="4,12,50" strength={0.4} />
        <TriBar className="top-0 h-[10px]" />

        <div className="ts absolute inset-y-0 left-0 flex w-[700px] flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[18px] text-yellow-300">★★★★★★★★</span>
              <Chip className="bg-yellow-400 px-3.5 py-1 text-[15px] text-[#0a1a5c]">
                Totalmente gratuito
              </Chip>
            </div>
            <FitText max={74} align="left" className="mt-2 font-display uppercase leading-none">
              Lara se conecta <span className="text-yellow-400">con el futuro</span>
            </FitText>
            <p className="mt-2 text-[23px] font-bold text-slate-100">
              Buscamos a 4 jóvenes de 5to año para su Proyecto con IA
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400/50 bg-[#071344]/95 p-3">
            <WaLine size={28} />
            {isIg ? <IgLine size={26} className="mt-1 text-yellow-300" /> : <MailLine size={26} className="mt-1" />}
          </div>
        </div>
        <TriBar className="bottom-0 h-[12px]" />
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Instagram)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 0%">
        <Fade side="top" height={450} rgb="4,12,50" strength={0.96} />
        <Fade side="bottom" height={480} rgb="4,12,50" strength={0.97} />
        <TriBar className="top-0 h-[16px]" />

        <div className="absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <div className="ts text-[26px] leading-none tracking-[0.5em] text-yellow-300">★★★★★★★★</div>
          <FitText max={112} className="ts mt-3 font-display uppercase leading-none">
            Lara se conecta
          </FitText>
          <FitText max={112} className="ts mt-1 font-display uppercase leading-none text-yellow-400">
            con el futuro
          </FitText>
          <p className="ts mt-3 text-[33px] font-bold leading-[1.18]">
            Buscamos a 4 jóvenes con visión
            <br />
            para su Proyecto de 5to Año
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-center">
          <Chip className="bg-yellow-400 text-[26px] text-[#0a1a5c]">Totalmente gratuito</Chip>
          <p className="ts mt-3 text-[31px] font-extrabold leading-[1.15]">
            Si estás en 5to año en el Estado Lara,
            <br />
            ¡escríbenos hoy mismo!
          </p>
          <WaLine size={40} className="mt-3" />
          {isIg ? <IgLine size={37} className="mt-1 text-yellow-300" /> : <MailLine size={38} className="mt-0.5" />}
        </div>
        <TriBar className="bottom-0 h-[18px]" />
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 0%">
      <Fade side="top" height={370} rgb="4,12,50" strength={0.95} />
      <Fade side="bottom" height={420} rgb="4,12,50" strength={0.96} />
      <TriBar className="top-0 h-[14px]" />

      <div className="absolute inset-x-0 top-0 px-8 pt-8 text-center">
        <div className="ts text-[24px] leading-none tracking-[0.5em] text-yellow-300">★★★★★★★★</div>
        <FitText max={100} className="ts mt-2 font-display uppercase leading-none">
          Lara se conecta
        </FitText>
        <FitText max={100} className="ts font-display uppercase leading-none text-yellow-400">
          con el futuro
        </FitText>
        <p className="ts mt-2 text-[30px] font-bold leading-[1.15]">
          Buscamos a 4 jóvenes con visión
          <br />
          para su Proyecto de 5to Año
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-center">
        <Chip className="bg-yellow-400 text-[24px] text-[#0a1a5c]">Totalmente gratuito</Chip>
        <p className="ts mt-2 text-[28px] font-extrabold leading-[1.15]">
          Si estás en 5to año en el Estado Lara,
          <br />
          ¡escríbenos hoy mismo!
        </p>
        <WaLine size={37} className="mt-2.5" />
        {isIg ? <IgLine size={33} className="mt-0.5 text-yellow-300" /> : <MailLine size={35} />}
      </div>
      <TriBar className="bottom-0 h-[16px]" />
    </FlyerShell>
  );
}
