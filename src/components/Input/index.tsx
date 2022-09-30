import { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className="input-block">
      <input type="text" id={name} {...rest} />
    </div>
  );
}
