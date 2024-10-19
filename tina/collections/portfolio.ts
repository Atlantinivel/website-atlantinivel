import { Collection } from "tinacms";

export const PortfolioCollection: Collection = {
  name: "portfolio",
  label: "Portfolio",
  path: "content/portfolio",
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