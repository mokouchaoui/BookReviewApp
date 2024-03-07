import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface FieldProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder: string;
  type: string;
  step?: string;
  errors: FieldErrors<TFieldValues>;
}

const Field = <TFieldValues extends FieldValues>({
  register,
  name,
  placeholder,
  type,
  step,
  errors,
}: FieldProps<TFieldValues>) => {
  const inputProps: { className: string; "aria-invalid"?: boolean } = {
    className: "form-control",
  };

  if (errors[name]) {
    inputProps.className += " is-invalid";
    inputProps["aria-invalid"] = true;
  }

  if (!errors[name]) {
    inputProps.className += " is-valid";
  }

  return (
    <div className="form-group">
      <label className="form-control-label" htmlFor={name}>
        {name}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        step={step}
        {...inputProps}
        {...register(name, {
          required: "Required",
          valueAsNumber: type === "number",
        })}
      />
      {errors[name] && (
        <div className="invalid-feedback">{String(errors[name]?.message) || ""}</div>
      )}
    </div>
  );
};

export default Field;