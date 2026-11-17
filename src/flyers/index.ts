import type { ComponentType } from "react";
import Flyer1 from "./Flyer1";
import Flyer2 from "./Flyer2";
import Flyer3 from "./Flyer3";
import Flyer4 from "./Flyer4";
import Flyer5 from "./Flyer5";
import Flyer6 from "./Flyer6";
import Flyer7 from "./Flyer7";
import Flyer8 from "./Flyer8";
import Flyer9 from "./Flyer9";
import Flyer10 from "./Flyer10";
import { type FormatId, type PlatformId } from "./formats";

export type FlyerMeta = {
  id: string;
  slug: string;
  title: string;
  hook: string;
  palette: string[];
  captions: Record<PlatformId, string>;
  Component: ComponentType<{ format?: FormatId; platform?: PlatformId }>;
};

export const FLYERS: FlyerMeta[] = [
  {
    id: "f1",
    slug: "el-desafio",
    title: "El Desafío IA",
    hook: "Convocatoria principal",
    palette: ["#0a1a6b", "#22d3ee"],
    captions: {
      tiktok:
        "POV: Estás en 5to año en el Estado Lara y puedes hacer tu proyecto con Inteligencia Artificial GRATIS 🤖🇻🇪 Buscamos a 4 chamos con visión. Link al WhatsApp en perfil (0422-0501646) 📲 Comparte con tu squad #Lara #Barquisimeto #5toAño #IA #Venezuela #fyp",
      instagram:
        "¡Atención Estado Lara! 🇻🇪🤖 Abrimos la convocatoria para 4 jóvenes con visión que quieran hacer su Proyecto de 5to Año de bachillerato con Inteligencia Artificial.\n\n✨ Participación 100% GRATUITA.\n📲 Escríbenos al DM (@lochitaclub) o vía WhatsApp al 0422-0501646.\n\nGuarda este post y compártelo en tus stories 🚀\n\n#Lara #Barquisimeto #Cabudare #IA #InteligenciaArtificial #5toAño #BachilleratoVenezuela #LochitaClub",
      facebook:
        "¡Atención Estado Lara! 🇻🇪🤖 Buscamos a 4 jóvenes con visión para su Proyecto de 5to Año de bachillerato enfocado en Inteligencia Artificial. Participación 100% gratuita. ¡Escríbenos hoy mismo por WhatsApp al 0422-0501646 o a lochitaclub@gmail.com! Cupos limitados. Comparte con quien esté en 5to año 🚀",
    },
    Component: Flyer1,
  },
  {
    id: "f2",
    slug: "eres-de-5to-anio",
    title: "¿Eres de 5to año?",
    hook: "Pregunta directa para parar el scroll",
    palette: ["#4c1d95", "#e879f9"],
    captions: {
      tiktok:
        "¿Todavía sin tema para el proyecto de grado? 🤯 Hazlo con IA y sé el más top de tu liceo. Solo 4 cupos en Lara, 100% gratis. WhatsApp 0422-0501646 o DM 🔥 #Barquisimeto #Cabudare #Bachilleres #IA #Viral #fyp",
      instagram:
        "¿Estás en 5to año y aún no tienes tema para tu proyecto de grado? 💡 Conviértelo en un proyecto de Inteligencia Artificial que destaque en tu liceo.\n\n🎁 Totalmente GRATIS para 4 estudiantes en Lara.\n📩 Escríbenos al DM o directo al link de WhatsApp en bio: 0422-0501646.\n\nEtiqueta a tu amigo que necesita ver esto 👇\n\n#BarquisimetoLara #EducacionVenezuela #JovenesLara #Bachilleres2025 #IAVenezuela",
      facebook:
        "¿Estás en 5to año y aún no sabes qué hacer para tu proyecto de grado? 💡 Conviértelo en un proyecto de Inteligencia Artificial que destaque. Totalmente gratuito para 4 jóvenes en el Estado Lara. Contáctanos al 0422-0501646 📲",
    },
    Component: Flyer2,
  },
  {
    id: "f3",
    slug: "aprende-ia",
    title: "Aprende IA en Lara",
    hook: "Foco en aprendizaje y tecnología",
    palette: ["#032a24", "#fde047"],
    captions: {
      tiktok:
        "Aprende IA gratis en Lara para tu proyecto de 5to año 🧠✨ No te quedes atrás, el futuro es ahora. Solo 4 cupos disponibles. Escríbenos al WhatsApp 0422-0501646 📲 #LaraTech #Barquisimeto #InteligenciaArtificial #5toAño #fyp",
      instagram:
        "El futuro no se espera, ¡se programa! 🧠⚡ Si eres estudiante de 5to año en el Estado Lara, puedes ser parte del equipo de 4 jóvenes que desarrollará su proyecto con IA.\n\n✅ 0 Costo · 100% Gratuito\n✅ Asesoría y acompañamiento\n✅ WhatsApp: 0422-0501646\n\n¡Escríbenos al DM antes de que se agoten los cupos! 📲\n\n#InteligenciaArtificialLara #BarquisimetoCity #LaraTech #VenezuelaTech",
      facebook:
        "La Inteligencia Artificial está transformando el mundo, ¡y en Lara también! 🧠✨ Buscamos a 4 estudiantes de 5to año que quieran aprender y desarrollar su proyecto con IA. Totalmente gratuito. WhatsApp: 0422-0501646 | Correo: lochitaclub@gmail.com",
    },
    Component: Flyer3,
  },
  {
    id: "f4",
    slug: "solo-4-cupos",
    title: "Solo 4 cupos",
    hook: "Exclusividad y urgencia",
    palette: ["#050b2e", "#fb923c"],
    captions: {
      tiktok:
        "🚨 SOLO 4 CUPOS EN TODO EL ESTADO LARA. ¿Vas a ser tú? Proyecto de 5to año con Inteligencia Artificial 100% GRATIS. No te quedes fuera: WhatsApp 0422-0501646 🏃💨 #Urgente #Lara #Barquisimeto #ChamosVenezuela #fyp",
      instagram:
        "⚠️ SOLO 4 CUPOS DISPONIBLES EN TODO EL ESTADO LARA.\n\n¿Serás tú uno de los 4 jóvenes seleccionados para este desafío de Inteligencia Artificial?\n\n📍 Estado Lara\n🎓 5to año de bachillerato\n🆓 Totalmente gratuito\n\nNo dejes pasar la oportunidad. Escríbenos ya al WhatsApp 0422-0501646 o envíanos un DM 💬\n\n#Barquisimeto #LaraVenezuela #OportunidadEstudiantes #DesafioIA",
      facebook:
        "⚠️ SOLO 4 CUPOS DISPONIBLES. ¿Serás uno de los 4 jóvenes seleccionados en Lara para este desafío de Inteligencia Artificial? 5to año de bachillerato. 100% gratuito. No te quedes por fuera: WhatsApp 0422-0501646.",
    },
    Component: Flyer4,
  },
  {
    id: "f5",
    slug: "lara-venezuela",
    title: "Lara se conecta",
    hook: "Orgullo regional larense",
    palette: ["#00247d", "#ffcc00"],
    captions: {
      tiktok:
        "De Barquisimeto pal' mundo entero 🌵🇻🇪 Lara se conecta con la IA. Si estás en 5to año esto es para ti. Totalmente gratuito. Escríbenos al WhatsApp 0422-0501646 🎶 #NaGuara #Barquisimeto #Lara #Venezuela #OrgulloLarense #fyp",
      instagram:
        "De Barquisimeto pal' mundo entero 🌵🎶 Lara se conecta con el futuro de la Inteligencia Artificial.\n\nBuscamos a 4 estudiantes con visión de 5to año de cualquier liceo de nuestro estado.\n\n💛💙❤️ Gratuito de principio a fin.\n📲 Comunícate al WhatsApp: 0422-0501646 o escríbenos al DM.\n\n¡Comparte este post para apoyar el talento joven larense! 🇻🇪\n\n#BarquisimetoEmprende #GenteDeLara #NaGuara #LaraConectada #IAVenezuela",
      facebook:
        "De Barquisimeto y todo el Estado Lara pal' mundo 🌎🇻🇪 Lara se conecta con el futuro: abrimos convocatoria para 4 jóvenes de 5to año para su Proyecto con IA. Es totalmente gratuito. Escríbenos al 0422-0501646.",
    },
    Component: Flyer5,
  },
  {
    id: "f6",
    slug: "de-la-idea-al-proyecto",
    title: "De la idea al proyecto",
    hook: "3 sencillos pasos",
    palette: ["#06261f", "#34d399"],
    captions: {
      tiktok:
        "El tutorial que tu promo de 5to año necesitaba 👇 1. Escríbenos 2. Únete al team de 4 3. Haz tu proyecto con IA. Cero costo. WhatsApp 0422-0501646 📲 #Tutorial #ProyectosLara #5toAño #Liceistas #fyp",
      instagram:
        "3 pasos para hacer el proyecto de 5to año más innovador de tu institución:\n\n1️⃣ Escríbenos por WhatsApp o envíanos un DM\n2️⃣ Forma parte del equipo de 4 jóvenes con visión\n3️⃣ Desarrolla tu proyecto con Inteligencia Artificial\n\nTotalmente gratuito. Cupos limitados.\nWhatsApp: 0422-0501646 📲\n\n#PasoAPaso #ProyectosEscolares #BachilleratoLara #TalentoLarense",
      facebook:
        "Participar es muy fácil: 1️⃣ Escríbenos por WhatsApp o correo. 2️⃣ Únete al equipo de 4 jóvenes con visión. 3️⃣ Crea tu Proyecto de 5to Año con IA. ¡Todo gratuito! Contáctanos hoy: 0422-0501646.",
    },
    Component: Flyer6,
  },
  {
    id: "f7",
    slug: "escribenos",
    title: "¿Listo para el desafío?",
    hook: "Llamada a la acción inmediata",
    palette: ["#04210f", "#25d366"],
    captions: {
      tiktok:
        "¿Listo para el desafío de IA en Lara? 🚀 Da el salto hoy. Escríbenos directo al WhatsApp 0422-0501646 o déjanos un DM. 4 cupos · 5to año · Gratis #DesafioIA #Lara #Barquisimeto #Promo2025 #fyp",
      instagram:
        "¿Listo para dar el salto hacia la Inteligencia Artificial? 🚀\n\nNo necesitas experiencia previa avanzada, solo ganas de aprender y estar en 5to año en el Estado Lara.\n\n📲 Escríbenos al WhatsApp: 0422-0501646\n📩 O déjanos un mensaje directo al DM\n\n¡Totalmente gratuito! Solo 4 lugares.\n\n#DesafioIA #LaraVenezuela #JovenesEmprendedores #BachilleresLara #LochitaClub",
      facebook:
        "¿Listo para el desafío de IA en Lara? 📲 Da el primer paso hoy. Escríbenos directamente por WhatsApp al 0422-0501646 o a lochitaclub@gmail.com. Proyecto de 5to año, 4 jóvenes con visión, sin ningún costo.",
    },
    Component: Flyer7,
  },
  {
    id: "f8",
    slug: "proyecto-ganador",
    title: "¡Proyecto Ganador!",
    hook: "El proyecto de grado más destacado",
    palette: ["#071330", "#22d3ee"],
    captions: {
      tiktok:
        "El trofeo de tu promoción se gana con Inteligencia Artificial 🏆🤖 Buscamos a 4 chamos con visión en el Estado Lara para su Proyecto de 5to Año. ¡Totalmente GRATIS! WhatsApp: 0422-0501646 📲 #Ganador #ProyectoDeGrado #Lara #Barquisimeto #PromoLara #fyp",
      instagram:
        "¡Haz que tu proyecto de 5to año sea el más premiado de tu liceo! 🏆✨\n\nDesarrolla una solución real con Inteligencia Artificial con el apoyo de expertos.\n\n📍 Estado Lara\n🎯 Solo 4 cupos\n🆓 100% Gratuito\n📲 Contáctanos: 0422-0501646 o al DM @lochitaclub\n\n#ProyectoGanador #BachilleresLara #BarquisimetoTech #IAVenezuela",
      facebook:
        "¡Conviértete en el referente de tu liceo! 🏆 Buscamos a 4 jóvenes con visión para desarrollar el Proyecto de 5to Año más innovador con Inteligencia Artificial en el Estado Lara. Totalmente gratuito. Escríbenos al 0422-0501646.",
    },
    Component: Flyer8,
  },
  {
    id: "f9",
    slug: "arma-tu-equipo",
    title: "Arma tu Equipo",
    hook: "Cyberpunk dúo / trabajo en equipo",
    palette: ["#120328", "#fe2c55"],
    captions: {
      tiktok:
        "El dúo dinámico que va a romper la feria científica con IA 👾⚡ 4 jóvenes con visión para su proyecto de 5to año en Lara. Escríbenos al WhatsApp 0422-0501646 ¡Es gratis! #SquadGoals #Cyberpunk #Barquisimeto #IA #5toAño #fyp",
      instagram:
        "El trabajo en equipo lo es todo 🤝⚡ Buscamos a 4 estudiantes de 5to año que quieran unir fuerzas para crear un proyecto de grado épico con IA en el Estado Lara.\n\nTotalmente gratuito.\nWhatsApp: 0422-0501646 | DM: @lochitaclub\n\nEtiqueta a tu compañero de proyecto 👇\n\n#TeamWork #JovenesLara #Promo2025 #IA",
      facebook:
        "Arma tu equipo para el proyecto de 5to año más innovador del Estado Lara con Inteligencia Artificial. Convocatoria abierta para 4 jóvenes con visión. Totalmente gratuito. WhatsApp 0422-0501646.",
    },
    Component: Flyer9,
  },
  {
    id: "f10",
    slug: "de-lara-pal-mundo",
    title: "De Lara Pal' Mundo",
    hook: "Futuro, smartphone y visión global",
    palette: ["#16062a", "#fde047"],
    captions: {
      tiktok:
        "Desde Lara para el mundo entero 🌎📱 La tecnología del futuro la programas tú en tu 5to año. 4 chamos con visión, cero costo, full aprendizaje con IA. WhatsApp: 0422-0501646 🔥 #Viral #Lara #Barquisimeto #VenezuelaTech #fyp #IA",
      instagram:
        "El talento del Estado Lara tiene alcance global 🌎✨ Si estás en 5to año de bachillerato, este es el momento de proyectarte con Inteligencia Artificial.\n\nBuscamos a 4 jóvenes con visión. Totalmente gratuito.\n📲 WhatsApp: 0422-0501646 | DM @lochitaclub\n\n#DeLaraPalMundo #TalentoLarense #Barquisimeto #InnovacionVenezuela",
      facebook:
        "De Lara para el mundo: abrimos la convocatoria para 4 jóvenes con visión que quieran desarrollar su Proyecto de 5to Año con Inteligencia Artificial. Gratuito. WhatsApp 0422-0501646.",
    },
    Component: Flyer10,
  },
];
