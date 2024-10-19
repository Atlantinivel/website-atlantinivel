/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Post Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Publication Date",
      required: true,
    },
    {
      type: "image",
      name: "featuredImage",
      label: "Featured Image",
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "sections",
      label: "Content Sections",
      ui: {
        itemProps: (item) => {
          return { label: item?.sectionTitle || "Section" };
        },
      },
      fields: [
        {
          type: "string",
          name: "sectionTitle",
          label: "Section Title",
        },
        {
          type: "rich-text",
          name: "content",
          label: "Section Content",
        },
      ],
    },
    {
      type: "object",
      list: true,
      name: "additionalImages",
      label: "Additional Images",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "caption",
          label: "Caption",
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
