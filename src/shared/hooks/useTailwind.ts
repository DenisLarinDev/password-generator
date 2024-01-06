import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../../../tailwind.config.ts";

export const fullConfig = resolveConfig(tailwindConfig);
