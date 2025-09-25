import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormControls({ formControls = [], formData = {}, setFormData = () => {} }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function renderControl(control) {
    const commonProps = {
      id: control.name,
      name: control.name,
      placeholder: control.placeholder,
      onChange: handleChange,
      value: formData?.[control.name] ?? "",
    };

    if (control.type === "textarea") {
      return (
        <textarea
          {...commonProps}
          className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      );
    }

    if (control.type === "select") {
      return (
        <select
          {...commonProps}
          className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            {control.label}
          </option>
          {control.options?.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    return <Input {...commonProps} type={control.type || "text"} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((control) => (
        <div key={control.name} className="space-y-1">
          {control.label ? <Label htmlFor={control.name}>{control.label}</Label> : null}
          {renderControl(control)}
        </div>
      ))}
    </div>
  );
}