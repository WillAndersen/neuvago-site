export type EditorialEntity = {
  id: string;
  schemaType: "Person" | "Organization";
  name: string;
  role: string;
  shortBio: string;
  profilePath?: string;
  credentials?: readonly string[];
  sameAs?: readonly string[];
};

export const editorialPeople = {
  "john-willander": {
    id: "john-willander",
    schemaType: "Person",
    name: "John Willander",
    role: "Redaksjonelt ansvarlig",
    shortBio:
      "Ansvarlig for redaksjonell utvikling, kildearbeid og produktinformasjon hos Neuvago.",
    profilePath: "/no/om-oss",
  },
  "neuvago-redaksjonen": {
    id: "neuvago-redaksjonen",
    schemaType: "Organization",
    name: "Neuvago-redaksjonen",
    role: "Kildekontroll",
    shortBio:
      "Kontrollerer at kildene er identifisert, at forskningskontekst holdes adskilt fra produktpåstander, og at teksten følger Neuvagos redaksjonelle rammer.",
    profilePath: "/no/om-oss",
  },
} as const satisfies Record<string, EditorialEntity>;

export type EditorialEntityId = keyof typeof editorialPeople;

export function getEditorialEntity(id: EditorialEntityId): EditorialEntity {
  return editorialPeople[id];
}
