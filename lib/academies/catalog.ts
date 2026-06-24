export const academySlugs = ["panaderia", "pasteleria", "chocolateria"] as const;
export type AcademySlug = (typeof academySlugs)[number];
