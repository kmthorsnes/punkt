// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  status?: string;
  tabs?: [{ title: string; href: string }];
  element?: Object;
  showStatus?: boolean;
};

export enum AllowedComponentStatus {
  BACKLOG = "Backlog",
  IARBEID = "I arbeid",
  PUBLISERT = "Publisert",
}

export type ComponentStatusCollection = {
  name: string;
  figma: AllowedComponentStatus;
  css: AllowedComponentStatus;
  react: AllowedComponentStatus;
  vue: AllowedComponentStatus;
  dokumentasjon: AllowedComponentStatus;
};

export function validateComponentStatus(
  objectToValidate: any
): objectToValidate is ComponentStatusCollection {
  return (
    typeof objectToValidate.name === "string" &&
    Object.values(AllowedComponentStatus).includes(objectToValidate.figma) &&
    Object.values(AllowedComponentStatus).includes(objectToValidate.css) &&
    Object.values(AllowedComponentStatus).includes(objectToValidate.react) &&
    Object.values(AllowedComponentStatus).includes(objectToValidate.vue) &&
    Object.values(AllowedComponentStatus).includes(
      objectToValidate.dokumentasjon
    )
  );
}
