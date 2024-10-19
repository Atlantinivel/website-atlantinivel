/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Career",
  name: "career",
  path: "content/career",

  fields: [
    {
      type: "string",
      name: "title",
      label: "Career Title",
      required: true,
    },
    {
      type: "rich-text",
      name: "description",
      label: "Career Description",
    },
    {
      type: "object",
      name: "profileDetails",
      label: "Profile Details",
      list: true,
      fields: [
        {
          type: "string",
          name: "detail",
          label: "Detail",
        },
      ],
    },
    {
      type: "object",
      name: "requirements",
      label: "Requirements",
      list: true,
      fields: [
        {
          type: "string",
          name: "requirement",
          label: "Requirement",
        },
      ],
    },
    {
      type: "object",
      name: "conditions",
      label: "Conditions",
      list: true,
      fields: [
        {
          type: "string",
          name: "condition",
          label: "Condition",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/careers/${document._sys.filename}`;
    },
  },
};
