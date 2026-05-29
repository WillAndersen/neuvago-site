type AdminTextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function AdminTextInput({
  label,
  value,
  onChange,
  placeholder,
}: AdminTextInputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#1f1f1c]">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1f1f1c] outline-none transition focus:border-black/20"
      />
    </label>
  );
}
