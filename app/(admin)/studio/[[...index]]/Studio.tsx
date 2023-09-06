"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import Orders from "@/components/Orders";

export function Studio() {
  return (
    <div>
      <NextStudio config={config} />
      <Orders />
    </div>
  );
}
