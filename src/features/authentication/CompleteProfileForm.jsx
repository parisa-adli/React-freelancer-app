import { useState } from "react";
import Textfield from "../../ui/Textfield";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

      if (+user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "💫" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <Textfield
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <Textfield
            label="ایمیل"
            name="email"
            register={register}
            required
            validationSchema={{
              required: "ایمیل ضروری است",
            }}
            errors={errors}
          />
          <div className="flex items-center justify-center gap-x-10">
            <RadioInput
              label="کارفرما"
              name="role"
              id="OWNER"
              value="OWNER"
              register={register}
              checked={watch("role") === "OWNER"}
              validationSchema={{
                required: "انتخاب نقش ضروری است",
              }}
              errors={errors}
            />
            <RadioInput
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              register={register}
              onChange={(e) => setRole(e.target.value)}
              checked={watch("role") === "FREELANCER"}
              validationSchema={{
                required: "انتخاب نقش ضروری است",
              }}
              errors={errors}
            />
          </div>
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </form>
      </div>
    </div>
  );
}
export default CompleteProfileForm;
