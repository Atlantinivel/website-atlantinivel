import { Collection } from "tinacms";

export const MainCollection: Collection = {
  name: "main",
  label: "main",
  path: "content/main",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "object",
      name: "banner",
      label: "Banner Section",
      fields: [
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "videoSrc",
          label: "Video Source",
        },
      ],
    },
    {
      type: "object",
      name: "contentWithImage",
      label: "Content With Image Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
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
    {
      type: "object",
      name: "stats",
      label: "Statistics Section",
      fields: [
        {
          type: "number",
          name: "teamCount",
          label: "Team Count",
        },
        {
          type: "number",
          name: "projectCount",
          label: "Project Count",
        },
        {
          type: "number",
          name: "foundingYear",
          label: "Founding Year",
        },
      ],
    },
    {
      type: "object",
      name: "services",
      label: "Services Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
        },
        {
          type: "object",
          name: "serviceList",
          label: "Service List",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Service Title",
            },
            {
              type: "string",
              name: "description",
              label: "Service Description",
            },
            {
              type: "image",
              name: "image",
              label: "Service Image",
            },
          ],
        },
      ],
    },
  ],
};
