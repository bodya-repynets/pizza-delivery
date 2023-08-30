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
    { name: "price30cm", type: "string", title: "Price 30 cm" },
    { name: "price40cm", type: "string", title: "Price 40 cm" },
    { name: "image", type: "image" },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
