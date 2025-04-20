import createClient from "openapi-fetch";
import type { paths } from "@lichess-org/types";
import { writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

export const localClient = createClient<paths>({
  baseUrl: "http://localhost:8080",
  headers: {
    Authorization: `Bearer lip_bobby`,
  },
});

export const prodClient = createClient<paths>({
  baseUrl: "https://lichess.org",
});

export function example(category: string, name: string, response: any) {
  const filename = join(
    resolve(
      dirname(fileURLToPath(import.meta.url)),
      "..",
      "..",
      "doc",
      "specs",
      "examples",
    ),
    `${category}-${name}.json`,
  );
  console.log(`Writing ${filename}`);

  writeFileSync(filename, JSON.stringify(response.data, null, 2));
}
