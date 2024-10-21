import { Collection } from "tinacms";

export const ServicesCollection: Collection = {
  name: "services",
  label: "Services",
  path: "content/services",
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
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      name: "servicesList",
      label: "Services List",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Service Name",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
  ],
};
