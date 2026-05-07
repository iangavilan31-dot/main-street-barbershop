import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "EN" | "ES";

type Dict = Record<string, { EN: string; ES: string }>;

export const T: Dict = {
  navStory: { EN: "Story", ES: "Historia" },
  navServices: { EN: "Services", ES: "Servicios" },
  navTeam: { EN: "Barbers", ES: "Barberos" },
  navGallery: { EN: "Gallery", ES: "Galería" },
  navVisit: { EN: "Visit", ES: "Visítanos" },
  navContact: { EN: "Contact", ES: "Contacto" },
  bookChair: { EN: "Book a Chair", ES: "Reserva tu silla" },
  reserveChair: { EN: "Reserve a chair", ES: "Reserva una silla" },
  theMenu: { EN: "The menu", ES: "El menú" },
  openNow: { EN: "Open now", ES: "Abierto ahora" },
  since: { EN: "Bergenfield, NJ · Since 2004", ES: "Bergenfield, NJ · Desde 2004" },
  heroWord1: { EN: "MAIN", ES: "MAIN" },
  heroWord2: { EN: "STREET", ES: "STREET" },
  heroWord3: { EN: "BARBERSHOP", ES: "BARBERSHOP" },
  heroBlurb: {
    EN: "Twenty-one years on the block. Four chairs, one master barber per chair, and the kind of cut you don't have to explain twice.",
    ES: "Veintiún años en la cuadra. Cuatro sillas, un maestro barbero por silla, y el tipo de corte que no hay que explicar dos veces.",
  },
  heroSubline: { EN: "Bergenfield, New Jersey · Est. 2004", ES: "Bergenfield, Nueva Jersey · Est. 2004" },
  yearsStanding: { EN: "Years standing", ES: "Años abiertos" },
  reviewsSubLine: { EN: "Across 700+ reviews", ES: "En más de 700 reseñas" },
  masterBarbers: { EN: "Master barbers", ES: "Maestros barberos" },
  scrollStory: { EN: "Scroll · the story", ES: "Desliza · la historia" },
  storyEyebrow: { EN: "The Story", ES: "La Historia" },
  storyHeadingPart1: { EN: "Twenty-one years of", ES: "Veintiún años de" },
  storyShowingUp: { EN: "showing up", ES: "estar presentes" },
  storyHeadingPart2: { EN: "chair-side, on Main Street.", ES: "en la silla, en Main Street." },
  storyP1: {
    EN: "Eddie opened the doors in 2004 with two chairs, a borrowed cash drawer, and a single rule taped to the mirror. Treat the chair like a sermon, not a shift. Two decades later the rule still hangs there, the chairs have multiplied to four, and the Bergenfield kids who came in for their first cut now bring their own.",
    ES: "Eddie abrió las puertas en 2004 con dos sillas, una caja prestada y una sola regla pegada al espejo. Trata la silla como un sermón, no un turno. Dos décadas después la regla sigue ahí, las sillas son ahora cuatro, y los chicos de Bergenfield que vinieron a su primer corte ahora traen a los suyos.",
  },
  storyP2: {
    EN: "We're not stylists. We don't book in 15-minute slots, we don't upsell, and we don't rush. A skin fade takes as long as a skin fade takes. A hot-towel shave is a 45-minute ceremony. The shop is loud when there's a game on, quiet when there isn't, and never anywhere in between.",
    ES: "No somos estilistas. No reservamos en bloques de 15 minutos, no vendemos extras, no apuramos. Un skin fade dura lo que dura. Una afeitada con toalla caliente es una ceremonia de 45 minutos. El barber es ruidoso cuando hay juego, silencioso cuando no, y nunca a medio camino.",
  },
  pullQuote: { EN: "Treat the chair like a sermon, not a shift.", ES: "Trata la silla como un sermón, no un turno." },
  servicesEyebrow: { EN: "The Menu", ES: "El Menú" },
  servicesHeading: { EN: "The menu, ", ES: "El menú, " },
  servicesItalic: { EN: "uncomplicated.", ES: "sin complicar." },
  servicesBlurb: {
    EN: "Six services, all priced like an honest day's work. Every chair-time begins with a consult, ends with a finish, and is held by the same master barber start to end.",
    ES: "Seis servicios, todos con precios de un día honesto de trabajo. Cada turno empieza con una consulta, termina con un acabado, y lo lleva el mismo maestro barbero de principio a fin.",
  },
  servicesNote: {
    EN: "Add-ons: straight-razor neck (+$8) · gray blending (+$10) · paraffin beard mask (+$12). Walk-ins welcome. Appointments still beat the line.",
    ES: "Extras: cuello con navaja (+$8) · cubrir canas (+$10) · mascarilla de parafina para barba (+$12). Walk-ins bienvenidos. La cita gana a la fila.",
  },
  bookChairBtn: { EN: "Book a chair", ES: "Reservar silla" },
  teamEyebrow: { EN: "The Barbers", ES: "Los Barberos" },
  teamHeading1: { EN: "Four men. Four chairs.", ES: "Cuatro hombres. Cuatro sillas." },
  teamHeading2: { EN: "One standard.", ES: "Un solo estándar." },
  teamBlurb: {
    EN: "Pick a barber, pick a chair, pick a time. Or walk in and we'll match you. Either way, you're in good hands.",
    ES: "Elige barbero, silla y hora. O entra y te asignamos. De cualquier forma, estás en buenas manos.",
  },
  bookWith: { EN: "Book with", ES: "Reservar con" },
  galleryEyebrow: { EN: "The Work", ES: "El Trabajo" },
  galleryHeading1: { EN: "Plates from", ES: "Postales desde" },
  galleryHeading2: { EN: "the chair.", ES: "la silla." },
  galleryBlurb: {
    EN: "A rolling record of the work, the room, and the regulars. New cuts up every week. The rest live on Instagram.",
    ES: "Un registro continuo del trabajo, el lugar y los habituales. Cortes nuevos cada semana. El resto vive en Instagram.",
  },
  reviewsEyebrow: { EN: "The Word", ES: "La Palabra" },
  reviewsHeading1: { EN: "Reputation, kept on", ES: "Reputación, hecha en" },
  reviewsHeading2: { EN: "the same block.", ES: "la misma cuadra." },
  reviewsCount: { EN: "700+ reviews · Google & Yelp", ES: "700+ reseñas · Google y Yelp" },
  visitEyebrow: { EN: "The Visit", ES: "La Visita" },
  visitHeading1: { EN: "Find the chair on", ES: "Encuentra la silla en" },
  visitHeading2: { EN: "Main Street.", ES: "Main Street." },
  visitBlurb: {
    EN: "Two doors down from the diner. Look for the brass pole and the red awning. We're easy to find. Harder to leave.",
    ES: "Dos puertas más allá del diner. Busca el poste y el toldo rojo. Fácil de encontrar. Difícil de irse.",
  },
  hours: { EN: "Hours", ES: "Horario" },
  reservations: { EN: "Reservations", ES: "Reservaciones" },
  callShop: { EN: "Call the shop", ES: "Llama al barber" },
  dmUs: { EN: "DM us", ES: "Escríbenos" },
  callBlurb: {
    EN: "Call to book a chair. It's how we've always done it. Same-day appointments usually open by mid-afternoon.",
    ES: "Llama para reservar. Siempre lo hicimos así. Las citas del día suelen abrirse a media tarde.",
  },
  walkIns: { EN: "Walk-ins", ES: "Sin cita" },
  welcome: { EN: "Welcome", ES: "Bienvenido" },
  parking: { EN: "Parking", ES: "Estacionamiento" },
  onMain: { EN: "On Main", ES: "En Main" },
  cashCard: { EN: "Cash & Card", ES: "Efectivo y tarjeta" },
  accepted: { EN: "Accepted", ES: "Aceptado" },
  visit: { EN: "Visit", ES: "Visítanos" },
  reach: { EN: "Reach", ES: "Contacto" },
  follow: { EN: "Follow", ES: "Síguenos" },
  today: { EN: "Today", ES: "Hoy" },
  closed: { EN: "Closed", ES: "Cerrado" },
  tagline: { EN: "Cut sharp · Live sharper", ES: "Corte fino · Vida más fina" },
  madeOnMain: { EN: "Made on Main · Bergenfield, NJ", ES: "Hecho en Main · Bergenfield, NJ" },
  allRights: { EN: "All rights reserved", ES: "Todos los derechos reservados" },
  marqueeWords: {
    EN: "Hot Towel Shave · Skin Fades · Classic Tapers · Beard Sculpting · Father & Son · Walk-Ins Welcome · Established 2004 · Bergenfield, NJ",
    ES: "Afeitada con toalla · Skin fades · Tapers clásicos · Esculpido de barba · Padre e hijo · Sin cita bienvenidos · Establecido 2004 · Bergenfield, NJ",
  },
  // Service names
  s1: { EN: "The Main Street Cut", ES: "El Corte de Main Street" },
  s2: { EN: "Skin Fade", ES: "Skin Fade" },
  s3: { EN: "Beard Sculpt", ES: "Esculpido de Barba" },
  s4: { EN: "Hot Towel Shave", ES: "Afeitada con Toalla" },
  s5: { EN: "Father & Son", ES: "Padre e Hijo" },
  s6: { EN: "The Kid's Cut", ES: "El Corte del Niño" },
  s1d: {
    EN: "A precision haircut tailored to your face and lifestyle. Includes consultation, hot towel, and a finish with classic pomade or matte clay.",
    ES: "Un corte de precisión adaptado a tu rostro y estilo de vida. Incluye consulta, toalla caliente y acabado con pomada clásica o arcilla mate.",
  },
  s2d: {
    EN: "Razor-tight bald fade with seamless gradients, sharp line-up, and a precise neck shave finish.",
    ES: "Bald fade preciso con degradados perfectos, line-up afilado y acabado de cuello con navaja.",
  },
  s3d: {
    EN: "Beard shaping, trim, and contouring with straight-razor detail. Hot towel and beard oil included.",
    ES: "Forma, recorte y contorno de barba con detalle de navaja. Toalla caliente y aceite de barba incluidos.",
  },
  s4d: {
    EN: "The full ritual. Pre-shave oil, lathered straight razor, hot and cold towels, balm finish. Old-world quiet.",
    ES: "El ritual completo. Aceite pre-afeitado, navaja con espuma, toallas calientes y frías, acabado con bálsamo. Silencio del viejo mundo.",
  },
  s5d: {
    EN: "Two cuts, side by side. Walking out with the same line is a tradition since 2004.",
    ES: "Dos cortes, lado a lado. Salir con la misma línea es tradición desde 2004.",
  },
  s6d: {
    EN: "Patient cuts for the little ones (10 & under). Bubblegum optional, shape-up included.",
    ES: "Cortes pacientes para los pequeños (10 años y menos). Chicle opcional, line-up incluido.",
  },
  // Roles
  rOwner: { EN: "Master Barber · Owner", ES: "Maestro Barbero · Dueño" },
  rSenior: { EN: "Senior Barber", ES: "Barbero Senior" },
  rBarber: { EN: "Barber", ES: "Barbero" },
  rApprentice: { EN: "Apprentice", ES: "Aprendiz" },
  yrs: { EN: "yrs", ES: "años" },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof T) => string }>({
  lang: "EN",
  setLang: () => {},
  t: (k) => T[k]?.EN ?? "",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "EN";
    const saved = window.localStorage?.getItem("ms-lang") as Lang | null;
    return saved ?? "EN";
  });
  useEffect(() => {
    try { window.localStorage?.setItem("ms-lang", lang); } catch {}
    document.documentElement.lang = lang === "ES" ? "es" : "en";
  }, [lang]);
  const t = (k: keyof typeof T) => T[k]?.[lang] ?? T[k]?.EN ?? "";
  return <Ctx.Provider value={{ lang, setLang: setLangState, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
