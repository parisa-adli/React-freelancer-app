import { useForm } from "react-hook-form";
import Textfield from "../../ui/Textfield";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const onSubmit = (data) => console.log(data);

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Textfield
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <Textfield
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <Textfield
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
          min: {
            value: 100000,
            message: "مبلغ وارد شده نامعتبر است",
          },
          max: {
            value: 1000000000,
            message: "مبلغ وارد شده نامعتبر است",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={[]}
      />
      <div>
        <label htmlFor="tags" className="mb-2 block text-secondary-700">
          تگ
        </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
export default CreateProjectForm;

// title, desc, category, tags, budget, deadline
// input : text | number
// category => select option
// tags = multi input
// deadline => date picker

// title => 8 chrs, password : 8, Aa12%#, ... => (validation)

// validation:
// front-end : necessary, not efficient => formik, REACT-HOOK-FORM
// REACT-HOOK-FORM => (simple to learn, optimum)
// managing state, submit form, validation
// back-end : OK!
