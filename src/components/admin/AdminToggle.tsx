type AdminToggleProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function AdminToggle({
  label,
  checked,
  onChange,
}: AdminToggleProps) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-xl border border-black/5 bg-white/60 px-4 py-3">
      <span className="text-sm font-medium text-[#1f1f1c]">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-black/20"
      />
    </label>
  );
}
