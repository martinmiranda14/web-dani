export const ui = {
  es: {
    // Nav
    "nav.bio": "Biografía",
    "nav.trajectory": "Trayectoria",
    "nav.achievements": "Logros",
    "nav.profile": "Perfil",
    "nav.alimapu": "Alimapu",
    "nav.contact": "Contacto",

    // Hero
    "hero.eyebrow": "Directora de Orquesta · Violinista · Profesora · Gestora Cultural",
    "hero.subtitle": "La música que acerca mundos",
    "hero.location": "Valparaíso, Chile",
    "hero.scroll": "Descubrir",

    // Section labels
    "tray.label": "Trayectoria",
    "logros.heading": 'Logros que <em>resuenan</em><br>más allá del escenario',
    "roles.label": "Perfil profesional",
    "roles.heading": 'Áreas de <span>especialización</span>',
    "alimapu.label": "Proyecto estrella",
    "contacto.label": "Contacto",
    "contacto.intro": "Para proyectos, colaboraciones o clases de música",

    // Footer
    "footer.tagline": "Directora de Orquesta · Violinista · Profesora · Gestora Cultural · Valparaíso, Chile",
    "footer.quote": '"La música como puente<br>entre el arte y la comunidad."',
    "footer.copyright": '&copy; 2026 Todos los derechos reservados. Desarrollado con IA por <a href="https://www.martinmiranda.org" target="_blank" rel="noopener noreferrer">martinmiranda.org</a>',

    // Meta
    "meta.title": "Danitza Villarroel Orrego — Directora de Orquesta",
    "meta.description": "Danitza Villarroel Orrego — Directora de orquesta, violinista, profesora y gestora cultural de Valparaíso, Chile.",
  },

  en: {
    // Nav
    "nav.bio": "Biography",
    "nav.trajectory": "Career",
    "nav.achievements": "Achievements",
    "nav.profile": "Profile",
    "nav.alimapu": "Alimapu",
    "nav.contact": "Contact",

    // Hero
    "hero.eyebrow": "Orchestra Conductor · Violinist · Teacher · Cultural Manager",
    "hero.subtitle": "Music that brings worlds together",
    "hero.location": "Valparaíso, Chile",
    "hero.scroll": "Discover",

    // Section labels
    "tray.label": "Career",
    "logros.heading": 'Achievements that <em>resonate</em><br>beyond the stage',
    "roles.label": "Professional profile",
    "roles.heading": 'Areas of <span>expertise</span>',
    "alimapu.label": "Flagship project",
    "contacto.label": "Contact",
    "contacto.intro": "For projects, collaborations, or music lessons",

    // Footer
    "footer.tagline": "Orchestra Conductor · Violinist · Teacher · Cultural Manager · Valparaíso, Chile",
    "footer.quote": '"Music as a bridge<br>between art and community."',
    "footer.copyright": '&copy; 2026 All rights reserved. Developed with AI by <a href="https://www.martinmiranda.org" target="_blank" rel="noopener noreferrer">martinmiranda.org</a>',

    // Meta
    "meta.title": "Danitza Villarroel Orrego — Orchestra Conductor",
    "meta.description": "Danitza Villarroel Orrego — Orchestra conductor, violinist, teacher, and cultural manager from Valparaíso, Chile.",
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.es;

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui.es[key] ?? key;
}
