// ---------------------------------------------------------------------------
// KAD Bygg AB — central site configuration (single source of truth)
// All company facts below are real and confirmed (Bolagsverket / kadbygg.se).
// ---------------------------------------------------------------------------

export const company = {
  name: "KAD Bygg AB",
  shortName: "KAD Bygg",
  legalName: "KAD Bygg AB",
  orgNr: "559375-5175",
  founded: 2022,
  employees: 13,
  tagline: "Vi erbjuder förstklassiga bygg- och renoveringstjänster som överträffar dina förväntningar.",
  phone: "073-551 07 25",
  phoneHref: "tel:+46735510725",
  email: "info@kadbygg.se",
  emailHref: "mailto:info@kadbygg.se",
  url: "https://kadbygg.se",
  address: {
    street: "Västgötaresan 46",
    postalCode: "757 54",
    city: "Uppsala",
    country: "Sverige",
    countryCode: "SE",
  },
  // Approximate coordinates for Uppsala (used in LocalBusiness schema).
  geo: { lat: 59.8586, lng: 17.6389 },
  serviceAreas: [
    "Uppsala",
    "Knivsta",
    "Enköping",
    "Storvreta",
    "Sigtuna",
    "Stockholm",
  ],
  openingHours: "Mån–Fre 07:00–17:00",
  social: {
    linkedin: "https://se.linkedin.com/company/kadbyggab",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Hem", href: "/" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  { label: "Omdömen", href: "/omdomen" },
  { label: "Kontakt", href: "/kontakt" },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "bygga-hus",
    title: "Bygga hus",
    short: "Nybyggnation, tillbyggnad och komplementbyggnader.",
    description:
      "Vi bygger nytt från grund till färdigt hus – villor, tillbyggnader, förråd och komplementbyggnader. Med egen stomkompetens och noggrann projektledning levererar vi täta, energieffektiva konstruktioner i hela byggprocessen.",
    image: "/images/projects/bygga-hus-4.jpg",
    highlights: [
      "Nyproduktion av villor och flerbostadshus",
      "Till- och påbyggnader",
      "Stomresning i trä och stål",
      "Komplementbyggnader, carportar och förråd",
    ],
  },
  {
    slug: "tak",
    title: "Tak",
    short: "Takstolar, takläggning och taksäkerhet.",
    description:
      "Från takstolar och underlagstak till färdig takläggning med betong- och tegelpannor. Vi arbetar med både nyproduktion och takbyten och säkerställer ett tätt, hållbart tak som klarar det svenska klimatet.",
    image: "/images/projects/tak-1.jpeg",
    highlights: [
      "Takstolar och bärande konstruktion",
      "Läkt, underlagstak och tätskikt",
      "Betong- och tegelpannor",
      "Taksäkerhet och plåtdetaljer",
    ],
  },
  {
    slug: "fasad",
    title: "Fasad",
    short: "Träfasad, panel och fasadsystem.",
    description:
      "Vi monterar fasader med hög precision – från stående och liggande träpanel till hela fasadsystem på flerbostadshus. Snygga, väderskyddade fasader som lyfter byggnadens uttryck och håller i decennier.",
    image: "/images/projects/fasad-1.jpeg",
    highlights: [
      "Stående och liggande träpanel",
      "Fasadsystem för flerbostadshus",
      "Läkt, luftspalt och vindskydd",
      "Detaljer kring balkonger och fönster",
    ],
  },
  {
    slug: "fonster-och-dorr",
    title: "Fönster & dörr",
    short: "Montering av fönster, dörrar och takfönster.",
    description:
      "Vi monterar och byter fönster, ytterdörrar, säkerhetsdörrar och takfönster med korrekt drevning och tätning. Resultatet blir energieffektivt, ljudisolerat och snyggt – varje gång i våg och lod.",
    image: "/images/projects/fonster-1.jpeg",
    highlights: [
      "Fönster och fönsterpartier",
      "Ytter- och säkerhetsdörrar",
      "Takfönster och takluckor",
      "Drevning, tätning och justering",
    ],
  },
  {
    slug: "gips-och-regelarbete",
    title: "Gips & regelarbete",
    short: "Regelstommar, gipsväggar och innertak.",
    description:
      "Vi reser regelstommar i trä och stål, drar fram för el och VVS samt monterar gips för väggar och innertak. En rak, slät grund för måleri och kakel – byggt enligt branschens standarder.",
    image: "/images/projects/gips-4.jpeg",
    highlights: [
      "Regelstommar i trä och stål",
      "Innerväggar och rumsindelning",
      "Gipsmontage för vägg och tak",
      "Förberedelse för el och VVS",
    ],
  },
  {
    slug: "golvlaggning",
    title: "Golvläggning",
    short: "Parkett, trägolv och undergolv.",
    description:
      "Vi lägger parkett och trägolv med rätt underlag och fukt­skydd för ett tyst, jämnt och hållbart golv. Snygga avslut mot lister och trösklar, både i nyproduktion och vid renovering.",
    image: "/images/projects/golv-1.jpeg",
    highlights: [
      "Parkett och trägolv",
      "Underlag och fuktskydd",
      "Lister, trösklar och avslut",
      "Nyproduktion och renovering",
    ],
  },
  {
    slug: "koksmontering",
    title: "Köksmontering",
    short: "Komplett montering av kök och inredning.",
    description:
      "Vi monterar kök från stomme till färdig bänkskiva, luckor och vitvaror – med kakel, belysning och exakta anslutningar. Ett funktionellt och hållbart kök som sitter rätt ner i minsta detalj.",
    image: "/images/projects/kok-1.jpeg",
    highlights: [
      "Stommar, luckor och bänkskivor",
      "Montering av vitvaror",
      "Kakel och stänkskydd",
      "Belysning och anslutningar",
    ],
  },
  {
    slug: "badrum",
    title: "Badrum",
    short: "Våtrum, kakel och inredning.",
    description:
      "Vi bygger och renoverar badrum och våtrum med fackmässig tätning, kakel och klinker samt montering av kommod, spegelskåp och inredning. Snyggt, tätt och byggt för att hålla.",
    image: "/images/projects/badrum-1.jpeg",
    highlights: [
      "Tätskikt och våtrumsarbete",
      "Kakel och klinker",
      "Kommod, spegelskåp och inredning",
      "Renovering och nyproduktion",
    ],
  },
  {
    slug: "byggkomplettering",
    title: "Byggkomplettering",
    short: "Inredningssnickerier och färdigställande.",
    description:
      "Vi färdigställer bostaden med garderober, skjutdörrar, hyllsystem, innerdörrar och måttanpassade snickerier. Den sista finishen som gör ett bygge inflyttningsklart.",
    image: "/images/projects/bygg-komplettering-2.jpeg",
    highlights: [
      "Garderober och skjutdörrar",
      "Hyllsystem och förvaring",
      "Innerdörrar och foder",
      "Måttanpassade snickerier",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects (gallery). Categories map to the service slugs above.
// ---------------------------------------------------------------------------

export type ProjectCategory = {
  slug: string;
  label: string;
};

export const projectCategories: ProjectCategory[] = [
  { slug: "alla", label: "Alla projekt" },
  { slug: "bygga-hus", label: "Bygga hus" },
  { slug: "tak", label: "Tak" },
  { slug: "fasad", label: "Fasad" },
  { slug: "fonster-och-dorr", label: "Fönster & dörr" },
  { slug: "gips-och-regelarbete", label: "Gips" },
  { slug: "golvlaggning", label: "Golvläggning" },
  { slug: "koksmontering", label: "Kök" },
  { slug: "badrum", label: "Badrum" },
  { slug: "byggkomplettering", label: "Byggkomplettering" },
];

export type Project = {
  id: string;
  title: string;
  category: string; // matches ProjectCategory.slug (not "alla")
  categoryLabel: string;
  location: string;
  image: string;
  alt: string;
  description: string;
};

export const projects: Project[] = [
  // Bygga hus
  {
    id: "bh-1",
    title: "Nybyggnation i trästomme",
    category: "bygga-hus",
    categoryLabel: "Bygga hus",
    location: "Uppsala",
    image: "/images/projects/bygga-hus-1.jpg",
    alt: "Nybyggd byggnad i trästomme med vindskyddsskivor och ställning.",
    description:
      "Stomresning och vindskydd för en ny byggnad – tät och redo för fasad.",
  },
  {
    id: "bh-2",
    title: "Tillbyggnad med stomme och fönster",
    category: "bygga-hus",
    categoryLabel: "Bygga hus",
    location: "Uppsala län",
    image: "/images/projects/bygga-hus-2.jpg",
    alt: "Tillbyggnad i trästomme med nya fönster och isolering.",
    description:
      "Tillbyggnad där vi rest stomme, monterat fönster och isolerat.",
  },
  {
    id: "bh-3",
    title: "Komplementbyggnad och carport",
    category: "bygga-hus",
    categoryLabel: "Bygga hus",
    location: "Uppsala",
    image: "/images/projects/bygga-hus-3.jpg",
    alt: "Färdig svartklädd carport och förrådsbyggnad på innergård.",
    description:
      "Färdigställd komplementbyggnad med carport på en bostadsgård.",
  },
  {
    id: "bh-4",
    title: "Ny byggnad med stående panel",
    category: "bygga-hus",
    categoryLabel: "Bygga hus",
    location: "Uppsala",
    image: "/images/projects/bygga-hus-4.jpg",
    alt: "Nybyggd enplansbyggnad med grå stående träpanel och plåttak.",
    description:
      "Ny byggnad med komplett stående panel, plåttak och öppningar.",
  },
  {
    id: "bh-5",
    title: "Gårdshus i bostadsprojekt",
    category: "bygga-hus",
    categoryLabel: "Bygga hus",
    location: "Uppsala",
    image: "/images/projects/bygga-hus-5.jpg",
    alt: "Färdigt mörkgrått gårdshus i ett större bostadsprojekt.",
    description:
      "Komplementbyggnad färdigställd som del av ett större bostadsprojekt.",
  },
  // Tak
  {
    id: "tak-1",
    title: "Takläggning med betongpannor",
    category: "tak",
    categoryLabel: "Tak",
    location: "Uppsala",
    image: "/images/projects/tak-1.jpeg",
    alt: "Takläggning med läkt och betongpannor på flerbostadshus.",
    description: "Läkt och takpannor läggs på ett tak i ett stadsprojekt.",
  },
  {
    id: "tak-2",
    title: "Takstolar och bärande konstruktion",
    category: "tak",
    categoryLabel: "Tak",
    location: "Uppsala",
    image: "/images/projects/tak-2.jpeg",
    alt: "Resning av takstolar i C24-virke med spikplåtar.",
    description: "Takstolar reses och förankras för en ny takkonstruktion.",
  },
  {
    id: "tak-3",
    title: "Nockpannor och detaljer",
    category: "tak",
    categoryLabel: "Tak",
    location: "Uppsala",
    image: "/images/projects/tak-3.jpeg",
    alt: "Detalj av tegelpannor och nockpanna på färdigt tak.",
    description: "Noggrant utförda detaljer kring nock och takfot.",
  },
  {
    id: "tak-5",
    title: "Massivträ takbjälklag",
    category: "tak",
    categoryLabel: "Tak",
    location: "Uppsala",
    image: "/images/projects/tak-5.jpeg",
    alt: "Takbjälklag i massivträ ovanpå byggnad med ställning.",
    description: "Rent och stabilt takbjälklag i massivträ.",
  },
  {
    id: "tak-6",
    title: "Isolering och ångspärr",
    category: "tak",
    categoryLabel: "Tak",
    location: "Uppsala",
    image: "/images/projects/tak-6.jpeg",
    alt: "Takbjälkar med Isover ångspärr och isolering.",
    description: "Isolering och ångspärr monteras i takkonstruktionen.",
  },
  // Fasad
  {
    id: "fasad-2",
    title: "Fasadarbete på högt trähus",
    category: "fasad",
    categoryLabel: "Fasad",
    location: "Uppsala",
    image: "/images/projects/tak-4.jpeg",
    alt: "Högt flervåningshus i trä med fasadskivor under montering och byggkran.",
    description:
      "Fasadmontage högt upp på ett flervånings trähus, moment för moment.",
  },
  {
    id: "fasad-1",
    title: "Träfasad på flerbostadshus",
    category: "fasad",
    categoryLabel: "Fasad",
    location: "Uppsala",
    image: "/images/projects/fasad-1.jpeg",
    alt: "Detalj av målad stående träpanel på en fasad.",
    description: "Stående träpanel monterad med jämna, raka linjer.",
  },
  // Fönster & dörr
  {
    id: "fonster-1",
    title: "Fönsterpartier i nyproduktion",
    category: "fonster-och-dorr",
    categoryLabel: "Fönster & dörr",
    location: "Uppsala",
    image: "/images/projects/fonster-1.jpeg",
    alt: "Stort bronsfärgat fönsterparti monterat i fasad.",
    description: "Stora fönsterpartier monterade och tätade i fasad.",
  },
  {
    id: "fonster-2",
    title: "Takfönster och tätskikt",
    category: "fonster-och-dorr",
    categoryLabel: "Fönster & dörr",
    location: "Uppsala",
    image: "/images/projects/fonster-2.jpeg",
    alt: "Takfönster monterat i tätskikt på platt tak.",
    description: "Takfönster monterat med korrekt anslutning mot tätskikt.",
  },
  // Gips
  {
    id: "gips-4",
    title: "Regelstomme och rumsindelning",
    category: "gips-och-regelarbete",
    categoryLabel: "Gips",
    location: "Uppsala",
    image: "/images/projects/gips-4.jpeg",
    alt: "Regelstomme i stål och trä för rumsindelning i lägenhet.",
    description: "Regelverk rest för rumsindelning, klart för installationer.",
  },
  {
    id: "gips-3",
    title: "Gipsade väggar",
    category: "gips-och-regelarbete",
    categoryLabel: "Gips",
    location: "Uppsala",
    image: "/images/projects/gips-3.jpeg",
    alt: "Färdigmonterade gipsväggar redo för spackling.",
    description: "Gipsväggar monterade och skruvade, redo för spackling.",
  },
  {
    id: "gips-1",
    title: "Korridor med stomme och gips",
    category: "gips-och-regelarbete",
    categoryLabel: "Gips",
    location: "Uppsala",
    image: "/images/projects/gips-1.jpeg",
    alt: "Korridor med stålregelstomme och monterad gips.",
    description: "Korridor där stomme och gips byggs upp parallellt.",
  },
  {
    id: "gips-2",
    title: "Innertak och nedpendlat undertak",
    category: "gips-och-regelarbete",
    categoryLabel: "Gips",
    location: "Uppsala",
    image: "/images/projects/gips-2.jpeg",
    alt: "Reglar och bärverk för nedpendlat gipsundertak.",
    description: "Bärverk rest för ett jämnt och stabilt gipsundertak.",
  },
  {
    id: "gips-5",
    title: "Gipsmontage i lägenhet",
    category: "gips-och-regelarbete",
    categoryLabel: "Gips",
    location: "Uppsala",
    image: "/images/projects/gips-5.jpeg",
    alt: "Gipsskivor monterade på regelvägg i en lägenhet.",
    description: "Väggar kläs med gips, redo för spackel och målning.",
  },
  // Golv
  {
    id: "golv-1",
    title: "Ekparkett i bostad",
    category: "golvlaggning",
    categoryLabel: "Golvläggning",
    location: "Uppsala",
    image: "/images/projects/golv-1.jpeg",
    alt: "Färdiglagd ekparkett i ett rum med vit list.",
    description: "Ekparkett lagd med fina avslut mot vägg och list.",
  },
  {
    id: "golv-4",
    title: "Parkett i lägenhet",
    category: "golvlaggning",
    categoryLabel: "Golvläggning",
    location: "Uppsala",
    image: "/images/projects/golv-4.jpeg",
    alt: "Nylagd parkett i lägenhet med stort fönster.",
    description: "Ljus parkett lagd i en nyproducerad lägenhet.",
  },
  {
    id: "golv-3",
    title: "Köksgolv i parkett",
    category: "golvlaggning",
    categoryLabel: "Golvläggning",
    location: "Uppsala",
    image: "/images/projects/golv-3.jpeg",
    alt: "Parkettgolv lagt genom ett kök runt vitvaror.",
    description: "Parkett lagd genom köket med exakta anpassningar.",
  },
  // Kök
  {
    id: "kok-5",
    title: "Färdigmonterat kök",
    category: "koksmontering",
    categoryLabel: "Kök",
    location: "Uppsala",
    image: "/images/projects/kok-5.jpeg",
    alt: "Färdigt kök med vitvaror, kakel och parkettgolv.",
    description: "Komplett kök med vitvaror, kakel och nylagt golv.",
  },
  {
    id: "kok-1",
    title: "Köksmontering i lägenhet",
    category: "koksmontering",
    categoryLabel: "Kök",
    location: "Uppsala",
    image: "/images/projects/kok-1.jpeg",
    alt: "Köksmontering med över- och underskåp och kakel.",
    description: "Kök monterat med över- och underskåp samt stänkskydd.",
  },
  {
    id: "kok-4",
    title: "Kök under snedtak",
    category: "koksmontering",
    categoryLabel: "Kök",
    location: "Uppsala",
    image: "/images/projects/kok-4.jpeg",
    alt: "Kök monterat under snedtak med takfönster.",
    description: "Kök anpassat och monterat under ett snedtak med takfönster.",
  },
  {
    id: "kok-3",
    title: "Köksmontering under arbete",
    category: "koksmontering",
    categoryLabel: "Kök",
    location: "Uppsala",
    image: "/images/projects/kok-3.jpeg",
    alt: "Kök under montering med uppsatta skåp och maskerade bänkskivor.",
    description: "Skåp på plats och bänkskivor maskade inför sista finishen.",
  },
  // Badrum
  {
    id: "badrum-1",
    title: "Kaklat badrum med inredning",
    category: "badrum",
    categoryLabel: "Badrum",
    location: "Uppsala",
    image: "/images/projects/badrum-1.jpeg",
    alt: "Kaklat badrum med kommod, spegelskåp och hyllor.",
    description: "Badrum med kakel, kommod, spegelskåp och förvaring.",
  },
  // Byggkomplettering
  {
    id: "bk-2",
    title: "Skjutdörrsgarderob",
    category: "byggkomplettering",
    categoryLabel: "Byggkomplettering",
    location: "Uppsala",
    image: "/images/projects/bygg-komplettering-2.jpeg",
    alt: "Skjutdörrsgarderob med hyllsystem och trådbackar.",
    description: "Garderob med skjutdörrar och måttanpassat hyllsystem.",
  },
  {
    id: "bk-1",
    title: "Garderob och innerdörr",
    category: "byggkomplettering",
    categoryLabel: "Byggkomplettering",
    location: "Uppsala",
    image: "/images/projects/bygg-komplettering-1.jpeg",
    alt: "Inbyggd garderob med hatthylla och klädstång samt innerdörr.",
    description: "Inbyggd garderob med hatthylla, klädstång och innerdörr.",
  },
];

// ---------------------------------------------------------------------------
// Why choose KAD Bygg
// ---------------------------------------------------------------------------

export type Reason = { title: string; text: string };

export const reasons: Reason[] = [
  {
    title: "Bredd i en och samma entreprenör",
    text: "Från stomme och tak till kök, golv och badrum – vi täcker hela byggprocessen utan att du behöver koordinera flera företag.",
  },
  {
    title: "Hantverk in i minsta detalj",
    text: "Vi mäter, monterar och avslutar med precision. Raka linjer, täta konstruktioner och en finish som håller över tid.",
  },
  {
    title: "Trygghet och ordning",
    text: "Registrerat aktiebolag i Uppsala med ett erfaret arbetslag, tydlig kommunikation och en arbetsplats vi håller ren och säker.",
  },
  {
    title: "Lokalt förankrade",
    text: "Vi finns i Uppsala med omnejd och är snabbt på plats – med god kännedom om lokala förutsättningar och krav.",
  },
];

// ---------------------------------------------------------------------------
// Process steps
// ---------------------------------------------------------------------------

export type Step = { number: string; title: string; text: string };

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Kontakt & behov",
    text: "Du hör av dig och berättar om ditt projekt. Vi lyssnar in behov, önskemål och förutsättningar.",
  },
  {
    number: "02",
    title: "Platsbesök & offert",
    text: "Vi tittar på plats, går igenom omfattning och lämnar en tydlig offert utan dolda kostnader.",
  },
  {
    number: "03",
    title: "Planering",
    text: "Vi planerar tidsplan, material och resurser så att arbetet flyter smidigt från start till mål.",
  },
  {
    number: "04",
    title: "Utförande & överlämning",
    text: "Vi bygger med omsorg, städar efter oss och går igenom resultatet tillsammans med dig.",
  },
];
