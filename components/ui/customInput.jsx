export default function CustomInput({
  type = "text",
  id = "",
  name = "",
  value = "",
  onChange = () => {},
  readOnly = false,
  dir = "rtl",
  textAlign="right",placeholder=""
  
}) {
  return (
    <input
      className={` border border-border-muted p-2.5 rounded w-full max-w-[372px] focus:outline-none
    focus:ring-0
    focus:border-border-muted text-${textAlign}`}
      type={type}
      id={id}
      dir={dir}
      name={name}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
