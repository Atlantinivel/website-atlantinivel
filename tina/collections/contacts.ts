import { Collection } from "tinacms";

export const ContactsCollection: Collection = {
  name: "contacts",
  label: "Conatcts",
  path: "content/contacts",
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
  ],
};
