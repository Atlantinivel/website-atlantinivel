/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Portfolio",
  name: "portfolio",
  path: "content/portfolio",

  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
    },
    {
      type: "image",
      name: "mainImage",
      label: "Main Image",
      required: true,
    },
    {
      type: "string",
      name: "client",
      label: "Client",
    },
    {
      type: "string",
      name: "location",
      label: "Location",
    },
    {
      type: "datetime",
      name: "startDate",
      label: "Construction Start Date",
    },
    {
      type: "datetime",
      name: "endDate",
      label: "Construction End Date",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        { label: "Cultura", value: "cultura" },
        { label: "Indústria", value: "indutria" },
        { label: "Comércio/serviços", value: "comercioservicos" },
        { label: "Ambiente", value: "ambiente" },
        { label: "Demolições", value: "demolicoes" },
        { label: "Desporto/educação", value: "desportoeducacao" },
        { label: "Habitação", value: "habitação" },
        { label: "Hotelaria", value: "hotelaria" },
        { label: "Urbanismo", value: "urbanismo" },
        { label: "Saúde", value: "saude" },
      ],
    },
    {
      type: "object",
      name: "gallery",
      label: "Image Gallery",
      list: true,
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
      return `/portfolio/${document._sys.filename}`;
    },
  },
};
