import { Collection } from "tinacms";

export const MainCollection: Collection = {
  name: "main",
  label: "main",
  path: "content/main",
  fields: [
    {
      type: "object",
      name: "carouselData",
      label: "CarouselData",
      list: true,  // This allows the field to be a repeatable list
      fields: [
        {
          type: "string",
          name: "image",
          label: "Image",
        },
        {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "desc",
            label: "Description",
          },
      ],
    },
  ],
};