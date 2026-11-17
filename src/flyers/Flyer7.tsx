import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import bg from "../assets/flyer7.jpg";
import { type FormatId, type PlatformId } from "./formats";
import { EMAIL, Fade, FitText, FlyerShell, INSTAGRAM_HANDLE, PHONE } from "./shared";

/* 07 · Escríbenos hoy mismo — llamada a la acción, verde neón */
export default function Flyer7({
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
        <Fade side="top" height={560} rgb="2,10,38" strength={0.96} />
        <Fade side="bottom" height={600} rgb="2,10,38" strength={0.96} />

        <div className="absolute inset-x-0 top-0 px-8 pt-20 text-center">
          <div className="ts text-[26px] font-extrabold uppercase tracking-[0.22em] text-green-300">
            {isIg ? "Instagram Convocatoria · Estado Lara" : "Jóvenes de 5to año · Estado Lara"}
          </div>
          <FitText max={130} className="ts mt-4 font-display uppercase leading-[1.02]">
            ¿Listo para
          </FitText>
          <FitText max={130} className="ts font-display uppercase leading-[1.02] text-green-400">
            el desafío?
          </FitText>
          <p className="ts mt-4 text-[34px] font-bold text-slate-200">
            Inteligencia Artificial · 4 cupos disponibles
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-16">
          <p className="ts text-center text-[42px] font-extrabold uppercase leading-none">
            ¡Escríbenos hoy mismo!
          </p>

          <div className="mt-6 flex items-center gap-6 rounded-full bg-[#25D366] px-8 py-3 text-[#04210f] shadow-[0_8px_30px_rgba(37,211,102,0.4)]">
            <FaWhatsapp style={{ width: 62, height: 62 }} />
            <div>
              <div className="text-[20px] font-extrabold uppercase leading-none tracking-[0.2em]">WhatsApp</div>
              <div className="text-[52px] font-black leading-[1.1]">{PHONE}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-6 rounded-full bg-white px-8 py-3 text-[#0a1a4a] shadow-[0_8px_30px_rgba(255,255,255,0.3)]">
            {isIg ? (
              <>
                <FaInstagram style={{ width: 56, height: 56, color: "#E1306C" }} />
                <div>
                  <div className="text-[20px] font-extrabold uppercase leading-none tracking-[0.2em]">Instagram DM</div>
                  <div className="text-[44px] font-black leading-[1.15]">{INSTAGRAM_HANDLE}</div>
                </div>
              </>
            ) : (
              <>
                <SiGmail style={{ width: 56, height: 56, color: "#EA4335" }} />
                <div>
                  <div className="text-[20px] font-extrabold uppercase leading-none tracking-[0.2em]">Correo</div>
                  <div className="text-[44px] font-black leading-[1.15]">{EMAIL}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "horizontal") {
    // 1200 x 628
    return (
      <FlyerShell bg={bg} format="horizontal" position="center 60%">
        <Fade side="left" height={720} rgb="2,10,38" strength={0.96} />
        <Fade side="right" height={260} rgb="2,10,38" strength={0.4} />

        <div className="ts absolute inset-y-0 left-0 flex w-[720px] flex-col justify-between p-8">
          <div>
            <span className="inline-block rounded-full border border-green-400/60 bg-green-950/70 px-4 py-1 text-[15px] font-extrabold uppercase tracking-widest text-green-300">
              Estado Lara · 5to Año
            </span>
            <FitText max={76} align="left" className="mt-2 font-display uppercase leading-none">
              ¿Listo para <span className="text-green-400">el desafío?</span>
            </FitText>
            <p className="mt-2 text-[23px] font-bold text-slate-200">
              Proyecto de IA · 4 Jóvenes con visión · Gratuito
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4 rounded-full bg-[#25D366] px-5 py-2 text-[#04210f]">
              <FaWhatsapp className="text-3xl" />
              <span className="text-[26px] font-black tracking-wide">WhatsApp: {PHONE}</span>
            </div>
            <div className="flex items-center gap-4 rounded-full bg-white px-5 py-2 text-[#0a1a4a]">
              {isIg ? (
                <>
                  <FaInstagram className="text-2xl text-[#E1306C]" />
                  <span className="text-[24px] font-black tracking-wide">DM: {INSTAGRAM_HANDLE}</span>
                </>
              ) : (
                <>
                  <SiGmail className="text-2xl text-[#EA4335]" />
                  <span className="text-[22px] font-black tracking-wide truncate">{EMAIL}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </FlyerShell>
    );
  }

  if (format === "portrait") {
    // 1080 x 1350 (Vertical 4:5 para Instagram)
    return (
      <FlyerShell bg={bg} format="portrait" position="center 95%">
        <Fade side="top" height={420} rgb="2,10,38" strength={0.96} />
        <Fade side="bottom" height={480} rgb="2,10,38" strength={0.97} />

        <div className="ts absolute inset-x-0 top-0 px-8 pt-9 text-center">
          <div className="text-[22px] font-extrabold uppercase tracking-[0.2em] text-green-300">
            {isIg ? "Instagram · Estado Lara" : "Jóvenes de 5to año · Estado Lara"}
          </div>
          <FitText max={114} className="mt-2 font-display uppercase leading-[1.02]">
            ¿Listo para
          </FitText>
          <FitText max={114} className="mt-1 font-display uppercase leading-[1.02] text-green-400">
            el desafío?
          </FitText>
          <p className="mt-3 text-[31px] font-bold text-slate-200">
            Inteligencia Artificial · 4 cupos disponibles
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
          <p className="ts text-center text-[34px] font-extrabold uppercase leading-none">
            ¡Escríbenos hoy mismo!
          </p>

          <div className="mt-4 flex items-center gap-4 rounded-full bg-[#25D366] px-7 py-2.5 text-[#04210f] shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
            <FaWhatsapp style={{ width: 48, height: 48 }} />
            <div>
              <div className="text-[16px] font-extrabold uppercase leading-none tracking-[0.2em]">WhatsApp</div>
              <div className="text-[42px] font-black leading-[1.1]">{PHONE}</div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4 rounded-full bg-white px-7 py-2.5 text-[#0a1a4a] shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
            {isIg ? (
              <>
                <FaInstagram style={{ width: 44, height: 44, color: "#E1306C" }} />
                <div>
                  <div className="text-[16px] font-extrabold uppercase leading-none tracking-[0.2em]">Instagram DM</div>
                  <div className="text-[38px] font-black leading-[1.15]">{INSTAGRAM_HANDLE}</div>
                </div>
              </>
            ) : (
              <>
                <SiGmail style={{ width: 44, height: 44, color: "#EA4335" }} />
                <div>
                  <div className="text-[16px] font-extrabold uppercase leading-none tracking-[0.2em]">Correo</div>
                  <div className="text-[36px] font-black leading-[1.15]">{EMAIL}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </FlyerShell>
    );
  }

  // square (1080 x 1080)
  return (
    <FlyerShell bg={bg} format="square" position="center 100%">
      <Fade side="top" height={340} rgb="2,10,38" strength={0.95} />
      <Fade side="bottom" height={400} rgb="2,10,38" strength={0.96} />

      <div className="absolute inset-x-0 top-0 px-8 pt-7 text-center">
        <div className="ts text-[21px] font-extrabold uppercase tracking-[0.18em] text-green-300">
          Jóvenes de 5to año · Estado Lara
        </div>
        <FitText max={104} className="ts mt-1.5 font-display uppercase leading-[1.02]">
          ¿Listo para
        </FitText>
        <FitText max={104} className="ts font-display uppercase leading-[1.02] text-green-400">
          el desafío?
        </FitText>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-8 pb-7">
        <p className="ts text-center text-[32px] font-extrabold uppercase leading-none">
          ¡Escríbenos hoy mismo!
        </p>

        <div className="mt-3.5 flex items-center gap-4 rounded-full bg-[#25D366] px-6 py-2 text-[#04210f] shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
          <FaWhatsapp style={{ width: 44, height: 44 }} />
          <div>
            <div className="text-[15px] font-extrabold uppercase leading-none tracking-[0.2em]">WhatsApp</div>
            <div className="text-[38px] font-black leading-[1.1]">{PHONE}</div>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-4 rounded-full bg-white px-6 py-2 text-[#0a1a4a] shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
          {isIg ? (
            <>
              <FaInstagram style={{ width: 40, height: 40, color: "#E1306C" }} />
              <div>
                <div className="text-[15px] font-extrabold uppercase leading-none tracking-[0.2em]">Instagram DM</div>
                <div className="text-[33px] font-black leading-[1.15]">{INSTAGRAM_HANDLE}</div>
              </div>
            </>
          ) : (
            <>
              <SiGmail style={{ width: 40, height: 40, color: "#EA4335" }} />
              <div>
                <div className="text-[15px] font-extrabold uppercase leading-none tracking-[0.2em]">Correo</div>
                <div className="text-[33px] font-black leading-[1.15]">{EMAIL}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </FlyerShell>
  );
}
