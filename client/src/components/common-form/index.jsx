import React from "react";
import FormControls from "./form-controls";
import { Button } from "@/components/ui/button";

export default function CommonForm({
  formControls = [],
  formData = {},
  setFormData = () => {},
  buttonText = "Submit",
  handleSubmit = () => {},
}) {
  function onSubmit(event) {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}