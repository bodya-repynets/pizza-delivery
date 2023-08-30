import { type SchemaTypeDefinition } from "sanity";
import pizza from "@/schemas/pizza";
import drink from "@/schemas/drink";
import burger from "@/schemas/burger";
import salad from "@/schemas/salad";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pizza, drink, burger, salad],
};
