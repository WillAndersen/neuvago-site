import { allSiteAssets, type SiteAsset } from "@/content/assets";

type AdminAssetReferenceProps = {
  title?: string;
  categories?: Array<SiteAsset["category"]>;
};

export function AdminAssetReference({
  title = "Available assets",
  categories,
}: AdminAssetReferenceProps) {
  const assets = categories?.length
    ? allSiteAssets.filter((asset) => categories.includes(asset.category))
    : allSiteAssets;

  return (
    <section className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1f1f1c]">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
          Copy the <span className="font-medium">src</span> value into image fields.
          Use the label and notes to choose the right asset.
        </p>
      </div>

      <div className="space-y-4">
        {assets.map((asset) => (
          <div
            key={asset.key}
            className="rounded-[1rem] border border-black/5 bg-[#f7f4ef] p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-[#1f1f1c]">
                {asset.category}
              </span>
              <span className="text-sm font-medium text-[#1f1f1c]">
                {asset.label}
              </span>
            </div>

            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#8a847b]">
              Key
            </p>
            <p className="mt-1 text-sm text-[#1f1f1c]">{asset.key}</p>

            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#8a847b]">
              Src
            </p>
            <p className="mt-1 break-all rounded-lg bg-white px-3 py-2 text-sm text-[#1f1f1c]">
              {asset.src}
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#8a847b]">
              Alt
            </p>
            <p className="mt-1 text-sm text-[#5f5a52]">{asset.alt}</p>

            {asset.notes ? (
              <>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#8a847b]">
                  Notes
                </p>
                <p className="mt-1 text-sm text-[#5f5a52]">{asset.notes}</p>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
