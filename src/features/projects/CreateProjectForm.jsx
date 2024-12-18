import { useForm } from "react-hook-form";
import Textfield from "../../ui/Textfield";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
            message: "طول عنوان باید بیشتر از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
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
