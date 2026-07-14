export const CONTACT_TOPICS = [
  "senseBox:basic Klassenset",
  "senseBox:edu S2 Klassenset",
  "senseBox Fortbildungen",
  "Kooperation",
  "Allgemeine Anfrage",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
