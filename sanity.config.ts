import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import SanityNavbar from "./components/SanityNavbar";
import Logo from "./components/Logo";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  studio: {
    components: {
      logo: Logo,
      navbar: SanityNavbar,
    },
  },
});
