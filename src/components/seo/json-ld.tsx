type JsonLdItem = Record<string, unknown> | null | undefined;

type JsonLdProps = {
  data: JsonLdItem | readonly JsonLdItem[];
  idPrefix?: string;
};

export function JsonLd({ data, idPrefix = "structured-data" }: JsonLdProps) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (item): item is Record<string, unknown> => Boolean(item)
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => (
        <script
          key={`${idPrefix}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
