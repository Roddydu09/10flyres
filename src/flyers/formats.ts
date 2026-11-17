export type PlatformId = "tiktok" | "instagram" | "facebook";

export type FormatId = "story" | "portrait" | "square" | "horizontal";

export interface FormatConfig {
  id: FormatId;
  label: string;
  sublabel: string;
  ratioBadge: string;
  width: number;
  height: number;
  aspectRatio: string;
  description: string;
  recommendedFor: string;
}

export const PLATFORM_FORMATS: Record<PlatformId, Record<string, FormatConfig>> = {
  tiktok: {
    story: {
      id: "story",
      label: "TikTok Video / Slide (9:16)",
      sublabel: "Pantalla vertical completa (1080×1920)",
      ratioBadge: "9:16",
      width: 1080,
      height: 1920,
      aspectRatio: "9 / 16",
      description: "Formato vertical nativo de TikTok (modo carrusel de fotos / portada de vídeo). Diseñado respetando las zonas seguras (lado derecho con botones de like/comentarios y parte inferior con el caption).",
      recommendedFor: "TikTok Fotos/Carrusel, Portada de Video, TikTok Stories",
    },
    portrait: {
      id: "portrait",
      label: "Vertical Compacto (4:5)",
      sublabel: "Post vertical alternativo (1080×1350)",
      ratioBadge: "4:5",
      width: 1080,
      height: 1350,
      aspectRatio: "4 / 5",
      description: "Excelente para publicaciones compartidas entre TikTok e Instagram.",
      recommendedFor: "TikTok Feed / Cross-posting",
    },
    square: {
      id: "square",
      label: "Cuadrado (1:1)",
      sublabel: "Miniatura / Perfil (1080×1080)",
      ratioBadge: "1:1",
      width: 1080,
      height: 1080,
      aspectRatio: "1 / 1",
      description: "Formato simétrico para miniatura de perfil.",
      recommendedFor: "Miniaturas de perfil TikTok",
    },
  },
  instagram: {
    portrait: {
      id: "portrait",
      label: "Feed Vertical (4:5)",
      sublabel: "El Rey de Instagram (1080×1350)",
      ratioBadge: "4:5",
      width: 1080,
      height: 1350,
      aspectRatio: "4 / 5",
      description: "Es el formato más efectivo en Instagram: ocupa 25% más pantalla vertical que el cuadrado, logrando mayor retención y clics.",
      recommendedFor: "Feed de Instagram, Carruseles, Anuncios",
    },
    square: {
      id: "square",
      label: "Feed Cuadrado (1:1)",
      sublabel: "Clásico para Feed & Grilla (1080×1080)",
      ratioBadge: "1:1",
      width: 1080,
      height: 1080,
      aspectRatio: "1 / 1",
      description: "El formato clásico de Instagram. Queda 100% simétrico en la cuadrícula del perfil.",
      recommendedFor: "Grilla del perfil, Feed tradicional",
    },
    story: {
      id: "story",
      label: "Stories & Reels (9:16)",
      sublabel: "Pantalla completa vertical (1080×1920)",
      ratioBadge: "9:16",
      width: 1080,
      height: 1920,
      aspectRatio: "9 / 16",
      description: "Stories con áreas seguras para stickers interactivos ('Tu Turno', enlace a WhatsApp) y Reels de Instagram.",
      recommendedFor: "Instagram Stories, Reels, Estados",
    },
  },
  facebook: {
    square: {
      id: "square",
      label: "Post Cuadrado (1:1)",
      sublabel: "Muro de Facebook & Grupos (1080×1080)",
      ratioBadge: "1:1",
      width: 1080,
      height: 1080,
      aspectRatio: "1 / 1",
      description: "Estándar oficial para el feed de noticias de Facebook y publicaciones compartidas en grupos.",
      recommendedFor: "Muro de Facebook, Grupos, Marketplace",
    },
    story: {
      id: "story",
      label: "Historia / Reels (9:16)",
      sublabel: "Historias en pantalla completa (1080×1920)",
      ratioBadge: "9:16",
      width: 1080,
      height: 1920,
      aspectRatio: "9 / 16",
      description: "Pantalla vertical completa para Facebook Stories y Reels en teléfonos móviles.",
      recommendedFor: "Facebook Stories, Reels",
    },
    horizontal: {
      id: "horizontal",
      label: "Horizontal / Portada (1.91:1)",
      sublabel: "Eventos & Enlaces Web (1200×628)",
      ratioBadge: "1.91:1",
      width: 1200,
      height: 628,
      aspectRatio: "1200 / 628",
      description: "Proporción horizontal oficial de Meta para Facebook Ads, portada de eventos y publicaciones con enlace.",
      recommendedFor: "Facebook Ads, Encabezados, Eventos",
    },
  },
};

export const ALL_FORMAT_CONFIGS: Record<FormatId, FormatConfig> = {
  story: PLATFORM_FORMATS.tiktok.story,
  portrait: PLATFORM_FORMATS.instagram.portrait,
  square: PLATFORM_FORMATS.instagram.square,
  horizontal: PLATFORM_FORMATS.facebook.horizontal,
};
