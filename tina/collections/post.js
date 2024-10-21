/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "bannerImage",
      type: "image",
      required: true,
    },
    {
      name: "secondTitle",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
      required: true,
    },
    {
      name: "content",
      type: "rich-text",
      required: true,
    },
    {
      name: "images",
      type: "object",
      label: "Additional Images",
      list: true,
      fields: [
        {
          name: "imageList",
          type: "object",
          label: "Images",
          fields: [
            {
              name: "image",
              type: "image",
              required: true,
            },
            {
              name: "caption",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
