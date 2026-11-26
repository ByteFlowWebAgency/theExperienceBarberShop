import React from "react";

/**
 * Renders schema.org structured data. `<` is escaped so content can never
 * close the script tag early.
 */
export default function JsonLd({ data }: Readonly<{ data: object }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, String.raw`<`),
      }}
    />
  );
}
