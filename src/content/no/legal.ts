import type { Metadata } from "next";
import { localizedHref } from "@/i18n/routes";
import type { LegalTemplateContent } from "@/components/legal/LocalizedLegalPage";

const no = (href: string) => localizedHref(href, "no");

function metadata({
 title,
 description,
 canonical,
 english,
}: {
 title: string;
 description: string;
 canonical: string;
 english: string;
}): Metadata {
 return {
 title,
 description,
 alternates: {
 canonical,
 languages: {
 "en-US": english,
 "no-NO": canonical,
 },
 },
 openGraph: {
 title,
 description,
 url: canonical,
 siteName: "Neuvago",
 locale: "no_NO",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title,
 description,
 },
 };
}

const legalRelated = [
 {
 title: "Tiltenkt bruk",
 description: "Hvordan Neuvago skal forstås, og hvilke grenser som gjelder for bruk og kommunikasjon.",
 href: no("/legal/intended-use"),
 linkLabel: "Les tiltenkt bruk",
 },
 {
 title: "Personvern",
 description: "Hvordan personopplysninger kan behandles på nettsiden, i kjøpsflyt og i kontakt med support.",
 href: no("/legal/privacy-policy"),
 linkLabel: "Les personvern",
 },
 {
 title: "Vilkår",
 description: "Vilkår for bruk av nettsiden, produktinformasjon, kjøp, ansvar og immaterielle rettigheter.",
 href: no("/legal/terms-of-service"),
 linkLabel: "Les vilkår",
 },
 {
 title: "Support",
 description: "Finn praktisk hjelp og riktig sted å starte hvis du vil forstå Neuvago bedre.",
 href: no("/support"),
 linkLabel: "Gå til support",
 },
];

export const noLegalContent = {
 hub: {
 metadata: metadata({
 title: "Juridisk og samsvar | Neuvago",
 description:
 "Samlet juridisk informasjon for Neuvago i Norge, inkludert tiltenkt bruk, personvern og vilkår.",
 canonical: "/no/juridisk",
 english: "/legal",
 }),
 structuredDataTitle: "Juridisk og samsvar | Neuvago",
 structuredDataDescription:
 "Samlet juridisk informasjon for Neuvago i Norge, inkludert tiltenkt bruk, personvern og vilkår.",
 path: "/no/juridisk",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk og samsvar", path: "/no/juridisk" },
 ],
 eyebrow: "Juridisk og samsvar",
 title: "Tydelig juridisk informasjon for Neuvago i Norge.",
 description:
 "Denne delen samler de viktigste juridiske, personvernmessige og produktrelaterte rammene for Neuvago. Målet er at brukere skal forstå hva produktet er ment for, hvilke grenser som gjelder, og hvor de finner praktisk informasjon.",
 secondaryDescription:
 "Sidene er laget som et strukturert utgangspunkt for norsk lansering. Endelig tekst bør gjennomgås av juridisk og regulatorisk rådgiver før offentlig launch.",
 primaryCta: { label: "Les tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
 trustCard: {
 eyebrow: "Tillit og klarhet",
 title: "En ryddig struktur for produkt, personvern og vilkår",
 items: [
 { title: "Tiltenkt bruk", description: "Hva Neuvago er laget for, og hva det ikke er ment å erstatte." },
 { title: "Personvern", description: "Hvordan personopplysninger kan behandles og hvilke rettigheter brukere har." },
 { title: "Vilkår", description: "Rammer for bruk av nettside, produktinformasjon, kjøp og ansvar." },
 ],
 },
 notice: {
 title: "Lanseringsnotat",
 body:
 "Dette er norsk launch-copy og ikke juridisk rådgivning. Selskapsopplysninger, datoer, betalingsflyt, returvilkår, personvernleverandører, appdata og endelig regulatorisk posisjonering må kontrolleres før siden publiseres.",
 },
 keyPoints: [
 {
 title: "Ansvarlig kommunikasjon",
 description:
 "Neuvago bør beskrives med tydelige grenser rundt velvære, bruk, sikkerhet og hva produktet ikke er ment å gjøre.",
 },
 {
 title: "Personvern med klarhet",
 description:
 "Brukere skal forstå hvilke opplysninger som kan behandles, hvorfor de behandles, og hvordan de kan utøve rettighetene sine.",
 },
 {
 title: "Praktiske vilkår",
 description:
 "Vilkår bør dekke nettsidebruk, produktinformasjon, kjøp, betaling, levering, retur, immaterielle rettigheter og ansvarsgrenser.",
 },
 ],
 sections: [
 {
 title: "Hva denne juridiske delen dekker",
 body: [
 "Den juridiske delen samler informasjon om tiltenkt bruk, personvern, vilkår og relaterte tillits- og samsvarsgrenser.",
 "Den er ment å gjøre viktig informasjon mer tilgjengelig for brukere, samtidig som Neuvago kan holde kommunikasjon, produktbeskrivelser og sikkerhetsgrenser samlet på ett sted.",
 ],
 },
 {
 title: "Hva som må fylles inn før launch",
 body: [
 "Selskapsnavn, organisasjonsnummer, adresse, kontaktadresse, effektiv dato, returvilkår, leverandører, betalingsløsninger og eventuelle databehandlere må fylles inn eller bekreftes.",
 "Dersom appen samler inn helse- eller sensorrelaterte opplysninger, må personvernteksten oppdateres eksplisitt for den faktiske databehandlingen.",
 ],
 },
 {
 title: "Regulatorisk presisjon",
 body: [
 "Produktets endelige markedsføring må samsvare med tiltenkt bruk, produktdokumentasjon, sikkerhetsinformasjon og regulatorisk vurdering.",
 "Unngå påstander som kan forstås som diagnostikk, behandling, kurering eller forebygging av sykdom dersom slik bruk ikke er godkjent og dokumentert.",
 ],
 },
 ],
 relatedPages: legalRelated,
 finalCta: {
 eyebrow: "Neste steg",
 title: "Fortsett til tiltenkt bruk, personvern eller vilkår",
 description:
 "Start med tiltenkt bruk for produktgrensene, personvern for databehandling, eller vilkår for praktiske rammer rundt nettside og kjøp.",
 primaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
 },
 },

 intendedUse: {
 metadata: metadata({
 title: "Tiltenkt bruk | Neuvago Norge",
 description:
 "Les hvordan Neuvago er ment å brukes som del av en rolig velværerutine, og hvilke medisinske og sikkerhetsmessige grenser som gjelder.",
 canonical: "/no/juridisk/tiltenkt-bruk",
 english: "/legal/intended-use",
 }),
 structuredDataTitle: "Tiltenkt bruk | Neuvago Norge",
 structuredDataDescription:
 "Les hvordan Neuvago er ment å brukes som del av en rolig velværerutine, og hvilke medisinske og sikkerhetsmessige grenser som gjelder.",
 path: "/no/juridisk/tiltenkt-bruk",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Tiltenkt bruk", path: "/no/juridisk/tiltenkt-bruk" },
 ],
 eyebrow: "Juridisk / Tiltenkt bruk",
 title: "Tiltenkt bruk og tydelige produktgrenser.",
 description:
 "Neuvago er beskrevet som en ikke-invasiv produkt- og appopplevelse for voksne som ønsker en roligere, mer strukturert velværerutine i hverdagen.",
 secondaryDescription:
 "Denne siden forklarer hvordan Neuvago bør forstås på et overordnet nivå, og hvilke typer bruk og påstander som ikke er en del av tiltenkt bruk.",
 primaryCta: { label: "Se produktet", href: no("/product") },
 secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
 trustCard: {
 eyebrow: "Bruksramme",
 title: "Velvære, rutine og ansvarlig bruk",
 items: [
 { title: "Voksne brukere", description: "Neuvago er skrevet og posisjonert for voksne brukere med egen vurderingsevne." },
 { title: "Ikke-invasiv bruk", description: "Opplevelsen skal brukes i tråd med instruksjoner, sikkerhetsinformasjon og appveiledning." },
 { title: "Ikke medisinsk behandling", description: "Innholdet skal ikke forstås som diagnose, behandling eller medisinsk råd." },
 ],
 },
 notice: {
 title: "Viktig sikkerhets- og regulatorisk notat",
 body:
 "Denne teksten må samsvare med endelig produktdokumentasjon, brukerhåndbok, regulatorisk vurdering og faktiske claims. Ikke bruk medisinske behandlingspåstander med mindre de er uttrykkelig godkjent, dokumentert og juridisk avklart.",
 },
 keyPoints: [
 {
 title: "Generell velværebruk",
 description:
 "Neuvago er posisjonert for wellness/velværebruk: roligere rutiner, restitusjonsvaner og daglig regulering som del av en bredere velværepraksis.",
 },
 {
 title: "App-veiledet opplevelse",
 description:
 "Appen skal bidra med struktur, tydelighet og veiledning, men erstatter ikke profesjonell medisinsk vurdering.",
 },
 {
 title: "Klare grenser",
 description:
 "Neuvago skal ikke presenteres som et produkt som diagnostiserer, behandler, kurerer eller forebygger sykdom.",
 },
 ],
 sections: [
 {
 title: "Tiltenkt formål",
 body: [
 "Neuvago er ment for voksne brukere som ønsker en roligere, mer strukturert wellness-/velværerutine knyttet til stress, restitusjon, søvnforberedelse og daglig regulering.",
 "Produktet og appen er ment å brukes sammen som en kort, repeterbar opplevelse som kan passe inn i hverdagen.",
 ],
 },
 {
 title: "Ikke ment som medisinsk behandling",
 body: [
 "Neuvago er ikke ment å diagnostisere, behandle, kurere eller forebygge sykdom eller medisinske tilstander.",
 "Informasjon på nettsiden, i appen eller i annet Neuvago-materiale er generell informasjon og skal ikke tolkes som medisinsk råd.",
 "Personer med medisinske tilstander, implanterte elektroniske enheter, graviditet, epilepsi, hjerterytmeforstyrrelser eller andre relevante bekymringer bør rådføre seg med kvalifisert helsepersonell før bruk.",
 ],
 },
 {
 title: "Bruk i tråd med instruksjoner",
 body: [
 "Neuvago skal brukes i samsvar med instruksjoner, sikkerhetsinformasjon og eventuell veiledning som følger med produktet eller appen.",
 "Brukeren er ansvarlig for å stoppe bruk ved ubehag, feil bruk, uventede reaksjoner eller andre bekymringer, og for å søke medisinsk hjelp ved behov.",
 ],
 },
 {
 title: "Kommunikasjonsgrenser",
 body: [
 "Markedsføring og produktinformasjon bør holde seg innenfor velvære, rutine, opplevelse, avslapning og generell reguleringsstøtte dersom dette er den godkjente posisjoneringen.",
 "Produktet skal ikke beskrives på en måte som gir inntrykk av dokumentert behandlingseffekt for spesifikke sykdommer uten at dette er regulatorisk og vitenskapelig avklart.",
 ],
 },
 {
 title: "Endringer i dokumentasjon",
 body: [
 "Tiltenkt bruk kan oppdateres dersom produktet, appen, regulatorisk dokumentasjon, sikkerhetsinformasjon eller markedsposisjonering endres.",
 "Den til enhver tid publiserte versjonen bør gjenspeile den faktiske lanseringsstatusen for produktet i Norge.",
 ],
 },
 ],
 relatedPages: legalRelated,
 finalCta: {
 eyebrow: "Neste steg",
 title: "Les mer om personvern og vilkår",
 description:
 "Etter tiltenkt bruk bør brukere også kunne forstå hvordan data håndteres og hvilke vilkår som gjelder for nettsted, kjøp og bruk.",
 primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
 secondaryCta: { label: "Vilkår", href: no("/legal/terms-of-service") },
 },
 },

 privacy: {
 metadata: metadata({
 title: "Personvern | Neuvago Norge",
 description:
 "Les hvordan Neuvago kan behandle personopplysninger i forbindelse med nettsted, kjøp, support, nyhetsbrev, analyse og apprelaterte tjenester.",
 canonical: "/no/juridisk/personvern",
 english: "/legal/privacy-policy",
 }),
 structuredDataTitle: "Personvern | Neuvago Norge",
 structuredDataDescription:
 "Les hvordan Neuvago kan behandle personopplysninger i forbindelse med nettsted, kjøp, support, nyhetsbrev, analyse og apprelaterte tjenester.",
 path: "/no/juridisk/personvern",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Personvern", path: "/no/juridisk/personvern" },
 ],
 eyebrow: "Juridisk / Personvern",
 title: "Personvern og behandling av personopplysninger.",
 description:
 "Denne personvernsiden forklarer hvordan Neuvago kan samle inn, bruke, lagre og beskytte personopplysninger når brukere besøker nettstedet, kjøper produkter, kontakter support eller bruker relaterte tjenester.",
 secondaryDescription:
 "Teksten må tilpasses faktisk databehandling, faktiske leverandører, appfunksjoner, analyseverktøy, e-handelsoppsett og selskapets kontaktinformasjon før lansering.",
 primaryCta: { label: "Kontakt support", href: no("/support") },
 secondaryCta: { label: "Vilkår", href: no("/legal/terms-of-service") },
 trustCard: {
 eyebrow: "Personvernramme",
 title: "Tydelig informasjon om data, formål og rettigheter",
 items: [
 { title: "Hva som behandles", description: "Kontaktdata, kjøpsdata, tekniske data og eventuell apprelatert informasjon må beskrives tydelig." },
 { title: "Hvorfor det behandles", description: "Formål som kjøp, levering, support, sikkerhet, analyse og kommunikasjon må forklares." },
 { title: "Brukerrettigheter", description: "Brukere skal kunne forstå hvordan de kan be om innsyn, retting, sletting eller begrensning." },
 ],
 },
 notice: {
 title: "Må tilpasses før launch",
 body:
 "Denne siden inneholder generell norsk personvernstruktur. Fyll inn behandlingsansvarlig, kontaktadresse, eventuelt personvernombud, leverandører, datakategorier, behandlingsgrunnlag, lagringstid, overføringer, cookieverktøy og appdata før publisering.",
 },
 keyPoints: [
 {
 title: "Åpenhet",
 description:
 "Brukere skal få klar informasjon om hvilke opplysninger som behandles og hvordan de kan utøve rettighetene sine.",
 },
 {
 title: "Formålsbegrensning",
 description:
 "Personopplysninger bør bare brukes til konkrete, forklarte formål som drift, kjøp, levering, support og sikkerhet.",
 },
 {
 title: "Leverandører og overføringer",
 description:
 "Betaling, frakt, hosting, analyse, e-post og appfunksjoner kan innebære tredjepartsleverandører som må beskrives korrekt.",
 },
 ],
 sections: [
 {
 title: "Behandlingsansvarlig og kontakt",
 body: [
 "Behandlingsansvarlig: Willander AS. Organisasjonsnummer: 928 489 574. Adresse: Øvre Langgate 57, 3110 Tønsberg. Kontakt: contact@neuvago.com.",
 "Spørsmål om personvern kan sendes til contact@neuvago.com. Kontaktperson for personvern: John Willander.",
 ],
 },
 {
 title: "Personopplysninger vi kan behandle",
 body: [
 "Vi kan behandle opplysninger du oppgir selv, for eksempel navn, e-postadresse, leveringsadresse, fakturaadresse, telefonnummer, ordreopplysninger, supportmeldinger og nyhetsbrevpreferanser.",
 "Vi kan også behandle tekniske opplysninger som IP-adresse, enhetstype, nettleser, operativsystem, sider som besøkes, henvisningskilde, omtrentelig plassering basert på IP og cookie- eller analyseopplysninger.",
 "Appdata og databehandlere er ikke endelig spesifisert. Når appoppsettet er klart, må datakategorier som øktdata, enhetsdata, preferanser, kontoopplysninger og eventuelle andre personrelaterte opplysninger beskrives eksplisitt her.",
 ],
 },
 {
 title: "Formål med behandlingen",
 body: [
 "Personopplysninger kan brukes til å drifte og forbedre nettstedet, behandle bestillinger, levere produkter, håndtere betaling, gi support, sende servicemeldinger, ivareta sikkerhet og oppfylle juridiske forpliktelser.",
 "Dersom du melder deg på nyhetsbrev eller samtykker til markedsføring, kan vi bruke kontaktopplysninger til å sende produktoppdateringer, innhold og nyheter. Du kan melde deg av markedsføring når som helst.",
 ],
 },
 {
 title: "Behandlingsgrunnlag",
 body: [
 "Avhengig av situasjonen kan behandlingen bygge på avtale, samtykke, rettslig forpliktelse eller berettiget interesse der dette er tillatt etter gjeldende personvernregler.",
 "Den endelige personvernerklæringen bør koble hver hovedkategori av behandling til riktig behandlingsgrunnlag.",
 ],
 },
 {
 title: "Deling med tredjeparter",
 body: [
 "Vi selger ikke personopplysninger. Opplysninger kan deles med betrodde leverandører der det er nødvendig for drift, betaling, frakt, hosting, analyse, sikkerhet, kommunikasjon eller support.",
 "Kjent leverandør for nettbutikk og betaling er Shopify. Øvrige leverandører og databehandlere, inkludert app-, hosting-, analyse-, e-post-, support- og fraktleverandører, må dokumenteres og beskrives i tråd med faktisk oppsett før lansering.",
 ],
 },
 {
 title: "Informasjonskapsler og analyse",
 body: [
 "Nettstedet kan bruke informasjonskapsler og lignende teknologier for grunnleggende funksjonalitet, analyse, preferanser og eventuell markedsføring.",
 "Brukere bør kunne administrere valg gjennom nettleserinnstillinger og eventuelt et cookie-samtykkeverktøy dersom dette brukes.",
 ],
 },
 {
 title: "Lagring og sletting",
 body: [
 "Personopplysninger lagres bare så lenge det er nødvendig for formålene de ble samlet inn for, eller så lenge selskapet er pålagt å lagre dem etter lov, regnskap, sikkerhet eller tvisteløsning.",
 "Konkrete lagringsperioder bør fylles inn når selskapets faktiske prosesser er bekreftet.",
 ],
 },
 {
 title: "Dine rettigheter",
 body: [
 "Avhengig av gjeldende personvernregler kan du ha rett til innsyn, retting, sletting, begrensning, dataportabilitet, å protestere mot behandling og å trekke tilbake samtykke der behandlingen bygger på samtykke.",
 "Du kan også ha rett til å klage til relevant tilsynsmyndighet dersom du mener at personopplysninger behandles i strid med regelverket.",
 ],
 },
 {
 title: "Sikkerhet",
 body: [
 "Vi skal bruke rimelige tekniske og organisatoriske tiltak for å beskytte personopplysninger mot uautorisert tilgang, tap, misbruk, endring eller utlevering.",
 "Ingen metode for overføring eller lagring over internett er helt risikofri, og absolutt sikkerhet kan ikke garanteres.",
 ],
 },
 {
 title: "Endringer i personvernerklæringen",
 body: [
 "Denne personvernerklæringen kan oppdateres ved endringer i tjenester, leverandører, appfunksjoner, juridiske krav eller forretningspraksis.",
 "Ikrafttredelsesdato: 01.08.2026.",
 ],
 },
 ],
 relatedPages: legalRelated,
 finalCta: {
 eyebrow: "Neste steg",
 title: "Les vilkår eller gå tilbake til juridisk oversikt",
 description:
 "Personvern er én del av tillitslaget. Vilkår og tiltenkt bruk forklarer de praktiske og produktrelaterte rammene videre.",
 primaryCta: { label: "Les vilkår", href: no("/legal/terms-of-service") },
 secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
 },
 },

 terms: {
 metadata: metadata({
 title: "Vilkår | Neuvago Norge",
 description:
 "Les Neuvagos norske bruksvilkår for nettside, produktinformasjon, kjøp, betaling, levering, retur, ansvar og immaterielle rettigheter.",
 canonical: "/no/juridisk/vilkar",
 english: "/legal/terms-of-service",
 }),
 structuredDataTitle: "Vilkår | Neuvago Norge",
 structuredDataDescription:
 "Les Neuvagos norske bruksvilkår for nettside, produktinformasjon, kjøp, betaling, levering, retur, ansvar og immaterielle rettigheter.",
 path: "/no/juridisk/vilkar",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Vilkår", path: "/no/juridisk/vilkar" },
 ],
 eyebrow: "Juridisk / Vilkår",
 title: "Vilkår for nettsted, produktinformasjon og kjøp.",
 description:
 "Disse vilkårene beskriver rammene for bruk av Neuvago-nettstedet, produktinformasjon, kjøp, betaling, levering, retur, immaterielle rettigheter og ansvarsgrenser.",
 secondaryDescription:
 "Vilkårene er oppdatert med Willander AS som ansvarlig selskap og Shopify som nettbutikk-/betalingsplattform. Frakt, returpolicy, angrerett, reklamasjon og eventuelle garantier må fylles inn når butikkoppsettet er endelig.",
 primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
 secondaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 trustCard: {
 eyebrow: "Praktiske rammer",
 title: "Klare forventninger rundt bruk, kjøp og ansvar",
 items: [
 { title: "Nettsted", description: "Hvordan nettstedet kan brukes og hvilke begrensninger som gjelder." },
 { title: "Kjøp", description: "Bestilling, betaling, levering, retur og refusjon må samsvare med faktisk butikkoppsett." },
 { title: "Ansvar", description: "Rimelige ansvarsgrenser, produktgrenser og brukeransvar bør beskrives tydelig." },
 ],
 },
 notice: {
 title: "Må juridisk kvalitetssikres",
 body:
 "Dette er et lanseringsutkast. Selskapsinformasjon, Shopify som betalings-/nettbutikkplattform og ikrafttredelsesdato er fylt inn. Frakt, retur, angrerett, reklamasjon og eventuelle garantier må kvalitetssikres før publisering.",
 },
 keyPoints: [
 {
 title: "Bruk av nettstedet",
 description:
 "Brukere skal bruke nettstedet lovlig og ikke forsøke å forstyrre, misbruke eller få uautorisert tilgang til systemer eller data.",
 },
 {
 title: "Produkt og kjøp",
 description:
 "Produktbeskrivelser, priser, tilgjengelighet, frakt, retur og betaling må samsvare med faktisk nettbutikk og lanseringsstatus.",
 },
 {
 title: "Ansvarsgrenser",
 description:
 "Vilkår bør forklare at Neuvago ikke gir medisinsk råd, og at produktet må brukes i tråd med instruksjoner og sikkerhetsinformasjon.",
 },
 ],
 sections: [
 {
 title: "Aksept av vilkårene",
 body: [
 "Disse vilkårene gjelder for tilgang til og bruk av Neuvago-nettstedet, produktinformasjon, kjøpsflyt og relaterte tjenester.",
 "Ved å bruke nettstedet eller kjøpe produkter fra Neuvago, godtar du vilkårene som gjelder for slik bruk og slike kjøp.",
 ],
 },
 {
 title: "Selskapsinformasjon",
 body: [
 "Selskap: Willander AS. Organisasjonsnummer: 928 489 574. Adresse: Øvre Langgate 57, 3110 Tønsberg. Kontakt: contact@neuvago.com.",
 "Kontakt for vilkår og praktiske spørsmål: contact@neuvago.com.",
 ],
 },
 {
 title: "Bruk av nettstedet",
 body: [
 "Du skal bruke nettstedet på en lovlig måte og ikke forsøke å få uautorisert tilgang, forstyrre drift, hente ut data automatisk uten tillatelse eller distribuere skadelig programvare.",
 "Vi kan begrense eller avslutte tilgang dersom nettstedet misbrukes eller vilkårene brytes.",
 ],
 },
 {
 title: "Produktinformasjon",
 body: [
 "Vi forsøker å holde produktbeskrivelser, bilder, spesifikasjoner, tilgjengelighet og priser oppdaterte, men feil kan forekomme.",
 "Produktets utseende, funksjoner og spesifikasjoner kan endres som del av videre produktutvikling.",
 ],
 },
 {
 title: "Velvære- og sikkerhetsramme",
 body: [
 "Neuvago er ikke ment å erstatte medisinsk vurdering, diagnose eller behandling.",
 "Brukere skal lese og følge instruksjoner, sikkerhetsinformasjon og tiltenkt bruk før produktet tas i bruk.",
 ],
 },
 {
 title: "Bestilling og betaling",
 body: [
 "Når du legger inn en bestilling, må du oppgi korrekt og fullstendig informasjon som er nødvendig for å behandle kjøpet.",
 "Betaling håndteres gjennom Shopify og relevante betalingsleverandører i Shopify-oppsettet. Ved å sende inn betalingsinformasjon godtar du at transaksjonen behandles gjennom relevant betalingsløsning.",
 "Vi kan avvise eller kansellere bestillinger ved mistanke om svindel, feilprising, lagerfeil eller andre rimelige grunner.",
 ],
 },
 {
 title: "Levering, retur og refusjon",
 body: [
 "Leveringstider er estimater og kan påvirkes av transportør, lagerstatus, toll, helligdager eller andre forhold utenfor vår kontroll.",
 "Detaljer om retur, refusjon, angrerett, reklamasjon og eventuell garanti fylles inn når norsk salgsoppsett, fraktflyt og Shopify-konfigurasjon er endelig avklart.",
 ],
 },
 {
 title: "Immaterielle rettigheter",
 body: [
 "Alt innhold på nettstedet, inkludert tekst, bilder, grafikk, logoer, produktdesign, layout og annet materiale, er beskyttet av immaterielle rettigheter.",
 "Du kan ikke kopiere, distribuere, endre eller lage avledede verk uten skriftlig tillatelse, med mindre dette er tillatt etter lov.",
 ],
 },
 {
 title: "Tredjepartslenker og tjenester",
 body: [
 "Nettstedet kan inneholde lenker til tredjeparts nettsteder, tjenester eller betalings- og fraktleverandører.",
 "Vi er ikke ansvarlige for innhold, vilkår eller personvernpraksis hos tredjepartsleverandører, med mindre annet følger av gjeldende lov.",
 ],
 },
 {
 title: "Ansvarsbegrensning",
 body: [
 "I den grad gjeldende lov tillater det, er Neuvago ikke ansvarlig for indirekte tap, følgeskader, driftsavbrudd, tap av data, tekniske feil eller skade som oppstår som følge av feil bruk av nettsted, app eller produkt.",
 "Ansvarsbegrensninger skal ikke begrense rettigheter som ikke kan fravikes etter gjeldende forbruker- eller produktansvarsregler.",
 ],
 },
 {
 title: "Endringer i vilkårene",
 body: [
 "Vi kan oppdatere vilkårene ved endringer i produkt, tjenester, nettbutikk, juridiske krav eller forretningspraksis.",
 "Ikrafttredelsesdato: 01.08.2026.",
 ],
 },
 ],
 relatedPages: legalRelated,
 finalCta: {
 eyebrow: "Neste steg",
 title: "Gå videre til personvern eller juridisk oversikt",
 description:
 "Vilkår bør leses sammen med personvern, tiltenkt bruk og øvrig juridisk informasjon for en komplett forståelse av Neuvago-rammene.",
 primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
 secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
 },
 },

 medicalDisclaimer: {
 metadata: metadata({
 title: "Medisinsk ansvarsfraskrivelse | Neuvago Norge",
 description:
 "Les den norske medisinske ansvarsfraskrivelsen for Neuvago, inkludert grenser for informasjon, produktbruk og helserelaterte spørsmål.",
 canonical: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
 english: "/legal/medical-disclaimer",
 }),
 structuredDataTitle: "Medisinsk ansvarsfraskrivelse | Neuvago Norge",
 structuredDataDescription:
 "Les den norske medisinske ansvarsfraskrivelsen for Neuvago, inkludert grenser for informasjon, produktbruk og helserelaterte spørsmål.",
 path: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Medisinsk ansvarsfraskrivelse", path: "/no/juridisk/medisinsk-ansvarsfraskrivelse" },
 ],
 eyebrow: "Juridisk / Ansvarsfraskrivelse",
 title: "Medisinsk ansvarsfraskrivelse og tydelige bruksgrenser.",
 description:
 "Neuvago-informasjon er ment som generell produkt-, velvære- og utdanningsinformasjon. Den skal ikke forstås som medisinsk rådgivning, diagnose, behandling eller en erstatning for kontakt med kvalifisert helsepersonell.",
 secondaryDescription:
 "Denne siden bør leses sammen med tiltenkt bruk, regulatorisk informasjon og sikkerhetsinformasjon før offentlig launch.",
 primaryCta: { label: "Les tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Regulatorisk informasjon", href: no("/legal/regulatory") },
 trustCard: {
 eyebrow: "Grense for informasjon",
 title: "Informasjon, ikke medisinsk vurdering",
 items: [
 { title: "Ikke diagnose", description: "Neuvago-informasjon skal ikke brukes til å stille diagnose eller vurdere medisinske tilstander." },
 { title: "Ikke behandling", description: "Produkt og innhold er ikke ment å behandle, kurere eller forebygge sykdom med mindre slik bruk er eksplisitt godkjent og dokumentert." },
 { title: "Søk hjelp ved behov", description: "Kontakt kvalifisert helsepersonell ved symptomer, usikkerhet, medisinske spørsmål eller bekymringer." },
 ],
 },
 notice: {
 title: "Viktig før launch",
 body:
 "Denne teksten er en konservativ norsk launch-ramme. Endelig medisinsk ansvarsfraskrivelse må gjennomgås mot faktisk produktdokumentasjon, påstander, appfunksjoner, brukergruppe og regulatorisk strategi.",
 },
 keyPoints: [
 {
 title: "Ikke medisinsk rådgivning",
 description:
 "Nettside, app, supportinnhold og produktinformasjon er ikke ment som personlig medisinsk rådgivning.",
 },
 {
 title: "Ingen akutte vurderinger",
 description:
 "Neuvago skal ikke brukes til akutte symptomer, kriser eller situasjoner som krever rask medisinsk vurdering.",
 },
 {
 title: "Individuell variasjon",
 description:
 "Opplevelser og resultater kan variere, og forskning eller brukerhistorier er ikke garanti for individuell effekt.",
 },
 ],
 sections: [
 {
 title: "Ikke en erstatning for helsepersonell",
 body: [
 "Neuvago-innhold er generelt og informativt. Det er ikke ment å erstatte vurdering, diagnose, behandling eller oppfølging fra lege, psykolog, fysioterapeut eller annet kvalifisert helsepersonell.",
 "Dersom du har en medisinsk tilstand, bruker medisiner, har implantert elektronisk utstyr, er gravid, opplever ubehag eller er usikker på om produktet passer for deg, bør du rådføre deg med kvalifisert helsepersonell før bruk.",
 ],
 },
 {
 title: "Ikke ment for diagnose, behandling eller akutte situasjoner",
 body: [
 "Neuvago er ikke ment å diagnostisere, behandle, kurere, lindre eller forebygge sykdom eller medisinske tilstander med mindre slik bruk er eksplisitt godkjent, dokumentert og kommunisert gjennom riktig regulatorisk ramme.",
 "Ved akutte symptomer, smerter, alvorlig ubehag, psykisk krise eller andre situasjoner som kan kreve rask hjelp, skal du kontakte nødetater eller kvalifisert helsepersonell. Ikke bruk Neuvago som erstatning for nødvendig hjelp.",
 ],
 },
 {
 title: "Forskning og utdanningsinnhold",
 body: [
 "Neuvago kan omtale forskning om vagusnerven, autonom regulering, stressfysiologi, HRV, restitusjon og ikke-invasiv stimulering. Slik informasjon gis for utdannings- og kontekstformål.",
 "At et tema er omtalt i forskning betyr ikke at Neuvago er godkjent for samme formål, eller at en individuell bruker vil oppleve samme resultater som i en studie.",
 ],
 },
 {
 title: "Brukerens ansvar",
 body: [
 "Bruk produktet i tråd med instruksjoner, sikkerhetsinformasjon, appveiledning og eventuelle begrensninger som følger med produktet.",
 "Stopp bruk ved ubehag, irritasjon, svimmelhet, smerte eller annen bekymring. Ta kontakt med support eller helsepersonell ved behov.",
 ],
 },
 ],
 relatedPages: [
 {
 title: "Tiltenkt bruk",
 description: "Les hvordan Neuvago er ment å forstås og brukes.",
 href: no("/legal/intended-use"),
 linkLabel: "Les tiltenkt bruk",
 },
 {
 title: "Regulatorisk informasjon",
 description: "Les mer om produktposisjonering og regulatoriske grenser.",
 href: no("/legal/regulatory"),
 linkLabel: "Les regulatorisk informasjon",
 },
 {
 title: "Tillit og sikkerhet",
 description: "Se hvordan Neuvago organiserer sikkerhet, kommunikasjon og ansvarlig bruk.",
 href: no("/legal/trust-safety"),
 linkLabel: "Les tillit og sikkerhet",
 },
 {
 title: "Support",
 description: "Finn praktisk hjelp og veiledning.",
 href: no("/support"),
 linkLabel: "Gå til support",
 },
 ],
 finalCta: {
 eyebrow: "Neste steg",
 title: "Les produktgrensene sammen med tiltenkt bruk",
 description:
 "Tiltenkt bruk, regulatorisk informasjon og sikkerhetssiden gir samlet kontekst for hvordan Neuvago bør forstås.",
 primaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Tillit og sikkerhet", href: no("/legal/trust-safety") },
 },
 },

 regulatory: {
 metadata: metadata({
 title: "Regulatorisk informasjon | Neuvago Norge",
 description:
 "Les en norsk regulatorisk oversikt for Neuvago, inkludert produktposisjonering, tiltenkt formål, påstandsgrenser og markedsforskjeller.",
 canonical: "/no/juridisk/regulatorisk",
 english: "/legal/regulatory",
 }),
 structuredDataTitle: "Regulatorisk informasjon | Neuvago Norge",
 structuredDataDescription:
 "Les en norsk regulatorisk oversikt for Neuvago, inkludert produktposisjonering, tiltenkt formål, påstandsgrenser og markedsforskjeller.",
 path: "/no/juridisk/regulatorisk",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Regulatorisk informasjon", path: "/no/juridisk/regulatorisk" },
 ],
 eyebrow: "Juridisk / Regulatorisk",
 title: "Regulatorisk informasjon og ansvarlig produktposisjonering.",
 description:
 "Denne siden forklarer hvordan Neuvago bør forstås på et overordnet regulatorisk nivå, og hvorfor tiltenkt formål, markedsføringspåstander og produktdokumentasjon må henge sammen.",
 secondaryDescription:
 "Teksten er et norsk launch-utgangspunkt og må ikke tolkes som endelig regulatorisk konklusjon uten rådgivergjennomgang.",
 primaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "CE-samsvar", href: no("/legal/ce-compliance") },
 trustCard: {
 eyebrow: "Regulatorisk ramme",
 title: "Tiltenkt formål, dokumentasjon og påstander må samsvare",
 items: [
 { title: "Tiltenkt formål", description: "Produktets formål må være tydelig definert og konsistent i merking, instruksjoner og markedsføring." },
 { title: "Påstandsgrenser", description: "Kommunikasjon bør unngå medisinske påstander som ikke er dokumentert og tillatt for produktets status." },
 { title: "Markedsforskjeller", description: "EU/EØS, USA og andre markeder kan ha ulike krav, definisjoner og prosesser." },
 ],
 },
 notice: {
 title: "Regulatorisk forbehold",
 body:
 "Endelig regulatorisk status avhenger av faktisk produktdesign, teknisk dokumentasjon, appfunksjoner, bruksanvisning, påstander, marked og juridisk produsent. Denne siden skal gjennomgås før launch.",
 },
 keyPoints: [
 {
 title: "Produsentens vurdering",
 description:
 "Kvalifisering og klassifisering må vurderes av produsenten basert på tiltenkt formål og relevante regler.",
 },
 {
 title: "Claims styrer risiko",
 description:
 "Ordvalg rundt stress, søvn, regulering, HRV, behandling og helse kan påvirke regulatorisk vurdering.",
 },
 {
 title: "Dokumentasjon først",
 description:
 "Markedsføring bør støtte seg på dokumentasjon, risikovurdering, instruksjoner og sikkerhetsgrenser.",
 },
 ],
 sections: [
 {
 title: "Hva regulatorisk posisjonering betyr",
 body: [
 "Regulatorisk posisjonering handler om å definere hva produktet er, hva det er ment for, hvordan det virker, hvilke påstander som brukes, og hvilke regler som gjelder i markedet der produktet tilbys.",
 "For Neuvago betyr det at produkt, app, nettside, bruksanvisning, sikkerhetsinformasjon og supportkommunikasjon bør være konsistente.",
 ],
 },
 {
 title: "Tiltenkt formål og markedsføringspåstander",
 body: [
 "Tiltenkt formål bør være tydelig og forsiktig formulert. Markedsføring bør ikke antyde diagnose, behandling, kurering, lindring eller forebygging av sykdom dersom produktet ikke er regulatorisk godkjent og dokumentert for slike formål.",
 "Påstander om velvære, rutine, stressmestring, avslapning og daglig regulering bør gjennomgås slik at de ikke utilsiktet blir medisinske påstander.",
 ],
 },
 {
 title: "EU/EØS og andre markeder",
 body: [
 "I EU/EØS kan medisinsk utstyr være underlagt MDR, mens forbrukerelektronikk, batterier, radioutstyr, EMC, RoHS og produktsikkerhet kan være relevante avhengig av produktkonfigurasjon.",
 "USA og andre markeder kan ha andre definisjoner og compliance-rammer. Sider som omtaler FDA-status eller CE-samsvar bør derfor være markedsspesifikke og presise.",
 ],
 },
 {
 title: "Endringer etter launch",
 body: [
 "Hvis produktet, appen, algoritmer, bruksanvisning, markedsføringspåstander eller målgruppe endres, bør regulatorisk vurdering og juridisk tekst oppdateres.",
 "Det samme gjelder dersom Neuvago senere søker eller oppnår spesifikke godkjenninger, sertifiseringer eller samsvarserklæringer.",
 ],
 },
 ],
 relatedPages: [
 {
 title: "Tiltenkt bruk",
 description: "Se den mest direkte beskrivelsen av hva Neuvago er ment for.",
 href: no("/legal/intended-use"),
 linkLabel: "Les tiltenkt bruk",
 },
 {
 title: "CE-samsvar",
 description: "Les om europeisk CE-ramme og hvorfor CE ikke er det samme som medisinsk godkjenning.",
 href: no("/legal/ce-compliance"),
 linkLabel: "Les CE-samsvar",
 },
 {
 title: "FDA-status",
 description: "Les hvordan FDA-status bør kommuniseres for USA-markedet.",
 href: no("/legal/fda-status"),
 linkLabel: "Les FDA-status",
 },
 {
 title: "Medisinsk ansvarsfraskrivelse",
 description: "Se tydelige grenser for helse- og medisinsk informasjon.",
 href: no("/legal/medical-disclaimer"),
 linkLabel: "Les ansvarsfraskrivelse",
 },
 ],
 finalCta: {
 eyebrow: "Neste steg",
 title: "Knytt regulatorisk språk til tiltenkt bruk",
 description:
 "Tiltenkt bruk bør være referansepunktet for produktcopy, supporttekster, appveiledning og sikkerhetsinformasjon.",
 primaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Tillit og sikkerhet", href: no("/legal/trust-safety") },
 },
 },

 trustSafety: {
 metadata: metadata({
 title: "Tillit og sikkerhet | Neuvago Norge",
 description:
 "Les hvordan Neuvago organiserer sikkerhet, produktgrenser, ansvarlig kommunikasjon og tydelig veiledning for norske brukere.",
 canonical: "/no/juridisk/tillit-og-sikkerhet",
 english: "/legal/trust-safety",
 }),
 structuredDataTitle: "Tillit og sikkerhet | Neuvago Norge",
 structuredDataDescription:
 "Les hvordan Neuvago organiserer sikkerhet, produktgrenser, ansvarlig kommunikasjon og tydelig veiledning for norske brukere.",
 path: "/no/juridisk/tillit-og-sikkerhet",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "Tillit og sikkerhet", path: "/no/juridisk/tillit-og-sikkerhet" },
 ],
 eyebrow: "Juridisk / Tillit og sikkerhet",
 title: "Tillit bygges gjennom tydelige grenser og trygg bruk.",
 description:
 "Neuvago skal føles rolig og lett å forstå. Det samme gjelder sikkerhetsinformasjon, produktgrenser, support og kommunikasjon rundt hva produktet er ment for.",
 primaryCta: { label: "Les tiltenkt bruk", href: no("/legal/intended-use") },
 secondaryCta: { label: "Gå til support", href: no("/support") },
 trustCard: {
 eyebrow: "Tillitslag",
 title: "Sikkerhet, klarhet og ansvarlig produktkommunikasjon",
 items: [
 { title: "Trygg bruk", description: "Brukere skal få tydelig veiledning om oppstart, normal bruk, begrensninger og når de bør stoppe." },
 { title: "Ansvarlige claims", description: "Kommunikasjonen skal ikke overdrive effekt eller skape inntrykk av medisinsk behandling uten grunnlag." },
 { title: "Klar support", description: "Support skal hjelpe brukere videre uten å gi personlig medisinsk rådgivning." },
 ],
 },
 notice: {
 title: "Sikkerhetsnotat",
 body:
 "Denne siden beskriver prinsipper for tillit og sikkerhet. Konkrete sikkerhetsinstruksjoner, kontraindikasjoner, advarsler og bruksbegrensninger må samsvare med endelig produktdokumentasjon.",
 },
 keyPoints: [
 {
 title: "Produktgrenser",
 description:
 "Brukere bør lett forstå hva Neuvago er ment for, og hva det ikke er ment å gjøre.",
 },
 {
 title: "Sikker veiledning",
 description:
 "Instruksjoner for bruk, lading, oppbevaring og vedlikehold bør være enkle, praktiske og konsistente.",
 },
 {
 title: "Åpenhet over tid",
 description:
 "Endringer i produkt, app eller påstander bør følges av oppdatert informasjon til brukere.",
 },
 ],
 sections: [
 {
 title: "Ansvarlig design",
 body: [
 "Neuvago bør designes og kommuniseres slik at brukeren forstår hvordan opplevelsen starter, hva som forventes, og hvordan produktet passer inn i en rolig daglig rutine.",
 "Sikkerhet handler ikke bare om tekniske krav, men også om hvor lett det er å forstå riktig bruk, begrensninger og når man bør la være å bruke produktet.",
 ],
 },
 {
 title: "Kommunikasjon uten overdrivelse",
 body: [
 "Neuvago kan bygge på forskning og utdanningsinnhold, men produktkommunikasjon må skille mellom bred vitenskapelig kontekst og spesifikke påstander om produktet.",
 "Claims bør være nøkterne, dokumenterbare og i samsvar med tiltenkt bruk, regulatorisk vurdering og faktiske app-/produktfunksjoner.",
 ],
 },
 {
 title: "Praktisk sikkerhet i hverdagen",
 body: [
 "Brukere bør følge instruksjoner for lading, oppbevaring, rengjøring, materialkontakt og daglig håndtering. Produktet bør ikke brukes dersom det er skadet eller oppleves ubehagelig.",
 "Eventuelle advarsler for implantert elektronisk utstyr, graviditet, hudirritasjon, underliggende tilstander eller sensitivitet for elektrisk stimulering må være tydelige i endelig dokumentasjon.",
 ],
 },
 {
 title: "Supportens rolle",
 body: [
 "Support kan hjelpe med produktforståelse, praktisk bruk, navigasjon, kjøp og tekniske spørsmål. Support bør ikke gi personlig medisinsk rådgivning.",
 "Ved medisinske spørsmål, symptomer eller bekymringer bør brukeren henvises til kvalifisert helsepersonell.",
 ],
 },
 ],
 relatedPages: [
 {
 title: "Medisinsk ansvarsfraskrivelse",
 description: "Se grensene for medisinsk informasjon og bruk.",
 href: no("/legal/medical-disclaimer"),
 linkLabel: "Les ansvarsfraskrivelse",
 },
 {
 title: "Regulatorisk informasjon",
 description: "Se hvordan produktposisjonering og påstander bør forstås.",
 href: no("/legal/regulatory"),
 linkLabel: "Les regulatorisk informasjon",
 },
 {
 title: "Personvern",
 description: "Se hvordan personopplysninger og databehandling bør forklares.",
 href: no("/legal/privacy-policy"),
 linkLabel: "Les personvern",
 },
 {
 title: "Support",
 description: "Finn praktisk hjelp og riktig sted å starte.",
 href: no("/support"),
 linkLabel: "Gå til support",
 },
 ],
 finalCta: {
 eyebrow: "Neste steg",
 title: "Fortsett til support eller tiltenkt bruk",
 description:
 "Support gir praktisk hjelp, mens tiltenkt bruk gir den tydeligste rammen for hva Neuvago er laget for.",
 primaryCta: { label: "Gå til support", href: no("/support") },
 secondaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
 },
 },

 ceCompliance: {
 metadata: metadata({
 title: "CE-samsvar | Neuvago Norge",
 description:
 "Les om CE-samsvar, europeisk markedsramme og hvilke forbehold som gjelder for Neuvago før endelig produktlaunch.",
 canonical: "/no/juridisk/ce-samsvar",
 english: "/legal/ce-compliance",
 }),
 structuredDataTitle: "CE-samsvar | Neuvago Norge",
 structuredDataDescription:
 "Les om CE-samsvar, europeisk markedsramme og hvilke forbehold som gjelder for Neuvago før endelig produktlaunch.",
 path: "/no/juridisk/ce-samsvar",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "CE-samsvar", path: "/no/juridisk/ce-samsvar" },
 ],
 eyebrow: "Juridisk / CE-samsvar",
 title: "CE-samsvar og europeisk markedsramme.",
 description:
 "CE-merking er en europeisk samsvarsramme for produktkategorier som omfattes av harmoniserte EU-regler. For Neuvago må relevante krav vurderes mot faktisk produktdesign, marked og tiltenkt formål.",
 secondaryDescription:
 "Denne siden er en forklarende launch-side, ikke en endelig EU-samsvarserklæring.",
 primaryCta: { label: "Regulatorisk informasjon", href: no("/legal/regulatory") },
 secondaryCta: { label: "Tillit og sikkerhet", href: no("/legal/trust-safety") },
 trustCard: {
 eyebrow: "Europeisk ramme",
 title: "CE krever riktig regelverk, dokumentasjon og samsvarsvurdering",
 items: [
 { title: "Ikke alle produkter", description: "CE-merking gjelder bare produkter som omfattes av EU-regler som krever CE-merking." },
 { title: "Produsentansvar", description: "Produsenten må identifisere relevante regler, dokumentere samsvar og sikre riktig merking." },
 { title: "Flere regelverk", description: "Elektronikk, batteri, radioteknologi, EMC, RoHS, sikkerhet og eventuelt medisinsk utstyr kan være relevante avhengig av produktet." },
 ],
 },
 notice: {
 title: "CE-forbehold",
 body:
 "CE-samsvar for Neuvago er under ferdigstillelse. Ikke publiser formuleringer som antyder endelig CE-status, sertifisering eller medisinsk godkjenning før dokumentasjonen er ferdig. Oppdater siden med EU-samsvarserklæring, relevante regelverk, dokumentreferanser og ansvarlig økonomisk aktør når dette er klart.",
 },
 keyPoints: [
 {
 title: "CE er samsvar, ikke kvalitetstempel",
 description:
 "CE-merking uttrykker produsentens samsvar med relevante EU-krav, ikke en generell anbefaling eller helsegodkjenning.",
 },
 {
 title: "Gjelder relevante produktregler",
 description:
 "Hvilke regler som gjelder avhenger av produktets komponenter, funksjon, kommunikasjonsteknologi og tiltenkte bruk.",
 },
 {
 title: "Dokumentasjon må ligge bak",
 description:
 "Teknisk dokumentasjon, risikovurdering, tester, bruksanvisning og samsvarserklæring bør være kontrollert før offentlig lansering.",
 },
 ],
 sections: [
 {
 title: "Hva CE-merking betyr",
 body: [
 "CE-merking brukes for produkter som omfattes av harmoniserte EU-regler som krever slik merking. Produsenten angir med CE-merkingen at produktet oppfyller relevante krav for å bringes i omsetning i EU/EØS.",
 "CE-merking er ikke det samme som at en myndighet nødvendigvis har godkjent produktet, og det er ikke et generelt kvalitetsstempel eller en medisinsk effektpåstand.",
 ],
 },
 {
 title: "Relevante områder for Neuvago",
 body: [
 "Avhengig av endelig produktkonfigurasjon kan områder som elektrisk sikkerhet, elektromagnetisk kompatibilitet, radioutstyr, RoHS, batterisikkerhet, produktsikkerhet, miljøkrav og medisinsk utstyr-vurdering være relevante.",
 "Hvilke krav som gjelder må avgjøres av faktisk produktdesign, tiltenkt formål, markedsføringspåstander og hvilke markeder produktet tilbys i.",
 ],
 },
 {
 title: "Før CE-relatert språk publiseres",
 body: [
 "Før Neuvago omtaler CE-status offentlig som ferdigstilt, bør selskapet bekrefte relevante EU-regler, ansvarlig produsent/økonomisk aktør, teknisk dokumentasjon, EU-samsvarserklæring, dokumentreferanser og eventuell involvering av tredjepart eller meldt organ.",
 "Dersom produktet ikke er klart for en bestemt CE-status, bør siden bruke forklarende språk og tydelige forbehold fremfor absolutte påstander.",
 ],
 },
 {
 title: "Forholdet til medisinsk utstyr",
 body: [
 "Dersom produktet får et medisinsk tiltenkt formål eller medisinske påstander, kan medisinsk utstyr-regelverket bli relevant. Da må kvalifisering, klassifisering, klinisk vurdering, dokumentasjon og samsvarsvurdering håndteres deretter.",
 "Dette må vurderes separat fra generell forbrukerelektronikk og velværeposisjonering.",
 ],
 },
 ],
 relatedPages: [
 {
 title: "Regulatorisk informasjon",
 description: "Se bredere regulatorisk ramme for Neuvago.",
 href: no("/legal/regulatory"),
 linkLabel: "Les regulatorisk informasjon",
 },
 {
 title: "Tiltenkt bruk",
 description: "Se hvordan produktets formål bør forstås.",
 href: no("/legal/intended-use"),
 linkLabel: "Les tiltenkt bruk",
 },
 {
 title: "Tillit og sikkerhet",
 description: "Se sikkerhets- og kommunikasjonsprinsipper.",
 href: no("/legal/trust-safety"),
 linkLabel: "Les tillit og sikkerhet",
 },
 {
 title: "FDA-status",
 description: "Se egen side for USA-markedet.",
 href: no("/legal/fda-status"),
 linkLabel: "Les FDA-status",
 },
 ],
 finalCta: {
 eyebrow: "Neste steg",
 title: "Koble CE-språk til faktisk produktdokumentasjon",
 description:
 "CE-siden bør oppdateres med EU-samsvarserklæring, dokumentreferanser og endelig samsvarsinformasjon når dette er klart.",
 primaryCta: { label: "Regulatorisk informasjon", href: no("/legal/regulatory") },
 secondaryCta: { label: "Tillit og sikkerhet", href: no("/legal/trust-safety") },
 },
 },

 fdaStatus: {
 metadata: metadata({
 title: "FDA-status | Neuvago Norge",
 description:
 "Les hvordan Neuvago omtaler FDA-status, USA-posisjonering og grenser mellom generell velvære og medisinske påstander.",
 canonical: "/no/juridisk/fda-status",
 english: "/legal/fda-status",
 }),
 structuredDataTitle: "FDA-status | Neuvago Norge",
 structuredDataDescription:
 "Les hvordan Neuvago omtaler FDA-status, USA-posisjonering og grenser mellom generell velvære og medisinske påstander.",
 path: "/no/juridisk/fda-status",
 breadcrumbs: [
 { name: "Forside", path: "/no" },
 { name: "Juridisk", path: "/no/juridisk" },
 { name: "FDA-status", path: "/no/juridisk/fda-status" },
 ],
 eyebrow: "Juridisk / FDA-status",
 title: "FDA-status og USA-posisjonering.",
 description:
 "FDA-status gjelder primært USA-markedet. Denne siden forklarer hvordan Neuvago bør omtale regulatorisk status i USA uten å antyde godkjenning, klarering eller medisinsk bruk som ikke er dokumentert.",
 secondaryDescription:
 "Med mindre annet er uttrykkelig dokumentert, bør Neuvago ikke beskrives som FDA-godkjent, FDA-klarert eller FDA-autorisert.",
 primaryCta: { label: "Regulatorisk informasjon", href: no("/legal/regulatory") },
 secondaryCta: { label: "Medisinsk ansvarsfraskrivelse", href: no("/legal/medical-disclaimer") },
 trustCard: {
 eyebrow: "USA-ramme",
 title: "FDA-språk må være presist og dokumentert",
 items: [
 { title: "Ingen ubegrunnet status", description: "Ikke bruk FDA-approved, FDA-cleared eller FDA-authorized uten konkret dokumentasjon." },
 { title: "Generell velvære", description: "Velværeposisjonering må holdes adskilt fra diagnose, behandling, kurering, lindring eller forebygging av sykdom." },
 { title: "Markedsavhengig", description: "USA-tekst bør vurderes separat fra EU/EØS-tekst og norsk lanseringskommunikasjon." },
 ],
 },
 notice: {
 title: "FDA-forbehold",
 body:
 "Denne siden er en konservativ norsk forklaring av FDA-relatert språk. Den skal ikke brukes som endelig USA-compliance-tekst før produktets faktiske status, claims, appfunksjoner og lanseringsmarked er vurdert.",
 },
 keyPoints: [
 {
 title: "Ikke en norsk godkjenning",
 description:
 "FDA-status gjelder ikke som norsk eller europeisk godkjenning, og bør ikke blandes med CE/EØS-samsvar.",
 },
 {
 title: "Unngå medisinske claims",
 description:
 "USA-kommunikasjon bør unngå sykdoms- og behandlingspåstander dersom produktet er posisjonert som generell velvære.",
 },
 {
 title: "Dokumenter alt språk",
 description:
 "Alle uttrykk om FDA, general wellness, device-status eller unntak bør være basert på rådgivergjennomgang og dokumentasjon.",
 },
 ],
 sections: [
 {
 title: "Hva FDA-status betyr",
 body: [
 "FDA er USAs føderale myndighet for blant annet medisinsk utstyr. Ord som approved, cleared, authorized, registered eller listed har bestemte betydninger og bør ikke brukes uten riktig grunnlag.",
 "Dersom Neuvago ikke har en relevant FDA-godkjenning, klarering eller autorisasjon, bør nettsiden ikke antyde dette direkte eller indirekte.",
 ],
 },
 {
 title: "Generell velvære og sykdomspåstander",
 body: [
 "I USA finnes det regulatoriske skiller mellom lavrisiko produkter for generell velvære og produkter som har medisinske formål eller sykdomsrelaterte påstander.",
 "Claims om sunn livsstil, generell velvære, avslapning og rutiner må ikke gli over i diagnose, behandling, kurering, lindring eller forebygging av sykdom uten riktig regulatorisk grunnlag.",
 ],
 },
 {
 title: "Forholdet til app og data",
 body: [
 "Hvis appen gir fysiologiske målinger, anbefalinger, risikosignaler, klinisk-lignende tolkninger eller beslutningsstøtte, kan det påvirke regulatorisk vurdering i USA.",
 "Endelig tekst må derfor vurderes mot faktiske appfunksjoner, datakilder, brukergrensesnitt og markedsføringspåstander.",
 ],
 },
 {
 title: "Før USA-relatert launch",
 body: [
 "Før Neuvago lanseres i USA eller omtaler FDA-status mer konkret, bør selskapet bekrefte produktets status med kvalifisert regulatorisk rådgiver.",
 "Denne norske siden kan beholdes som en forklaring av status, men bør oppdateres dersom Neuvago senere får en spesifikk FDA-relatert regulatorisk posisjon.",
 ],
 },
 ],
 relatedPages: [
 {
 title: "Regulatorisk informasjon",
 description: "Se bredere regulatorisk kontekst for Neuvago.",
 href: no("/legal/regulatory"),
 linkLabel: "Les regulatorisk informasjon",
 },
 {
 title: "Medisinsk ansvarsfraskrivelse",
 description: "Se helse- og medisinske bruksgrenser.",
 href: no("/legal/medical-disclaimer"),
 linkLabel: "Les ansvarsfraskrivelse",
 },
 {
 title: "CE-samsvar",
 description: "Se egen side for EU/EØS og CE-rammen.",
 href: no("/legal/ce-compliance"),
 linkLabel: "Les CE-samsvar",
 },
 {
 title: "Tiltenkt bruk",
 description: "Se produktets overordnede bruksramme.",
 href: no("/legal/intended-use"),
 linkLabel: "Les tiltenkt bruk",
 },
 ],
 finalCta: {
 eyebrow: "Neste steg",
 title: "Hold FDA-språket konservativt til status er dokumentert",
 description:
 "Bruk regulatorisk informasjon og medisinsk ansvarsfraskrivelse som referansepunkt for tryggere kommunikasjon.",
 primaryCta: { label: "Regulatorisk informasjon", href: no("/legal/regulatory") },
 secondaryCta: { label: "Medisinsk ansvarsfraskrivelse", href: no("/legal/medical-disclaimer") },
 },
 },
} satisfies Record<string, LegalTemplateContent>;
