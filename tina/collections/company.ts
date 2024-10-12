import { Collection } from "tinacms";

export const CompanyCollection: Collection = {
  name: "company",
  label: "Company",
  path: "content/company",
  fields: [
    {
      type: "string",
      name: "bannerTitle",
      label: "Banner Title",
      required: true,
    },
    {
      type: "image",
      name: "bannerImage",
      label: "Banner Image",
      required: true,
    },
    {
      label: "Banner Description",
      name: "bannerDesc",
      type: "string",
      ui: {
        component: "textarea"
      },
      required:true
    }
  ],
};