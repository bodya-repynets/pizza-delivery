export default {
  name: "pizza",
  type: "document",
  title: "Pizza",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    { name: "price", type: "string", title: "Price" },
    { name: "image", type: "image" },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
