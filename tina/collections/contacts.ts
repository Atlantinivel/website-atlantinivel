import { Collection } from "tinacms";

export const ContactsCollection: Collection = {
  name: "contacts",
  label: "Contacts",
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