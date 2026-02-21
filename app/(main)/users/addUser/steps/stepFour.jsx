import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";

export default function StepFour({ formData, handleChange }) {
  return (
    <div className="border border-border-muted h-full bg=">
      <div className="bg-background-modal-header text-center font-normal p-4 text-sm text-text-tertiary">
        توضیحات خود را اضافه کنید
      </div>
      <textarea
        onChange={(e) => handleChange(["description"], e.target.value)}
        style={{ resize: "none" }}
        placeholder="نوشتن"
        name="description"
        id="description"
        className="w-full h-[90%] focus:outline-none
       p-4 placeholder:text-border-muted
    focus:ring-0"
      ></textarea>
    </div>
  );
}
