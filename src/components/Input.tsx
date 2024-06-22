import { ComponentPropsWithoutRef } from "react";

type InputPropTypes = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, ...props }: InputPropTypes) {
  return (
  <p>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" {...props} />
  </p>
)}
