import { Component } from "lucide-react";

export const signInFormControls = [
  {
    name: "userEmail",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    ComponentType : "Input"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    autoComplete: "current-password",
    ComponentType : "Input"

  },
];

export const signUpFormControls = [
  {
    name: "userName",
    label: "Full name",
    type: "text",
    placeholder: "Jane Doe",
    autoComplete: "name",
    ComponentType : "Input"

  },
  {
    name: "userEmail",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    ComponentType : "Input"

  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a password",
    autoComplete: "new-password",
    ComponentType : "Input"
  },
];


