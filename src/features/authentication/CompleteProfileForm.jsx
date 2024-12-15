import { useState } from "react";
import Textfield from "../../ui/Textfield";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <Textfield
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => e.target.value}
          />
          <Textfield
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => e.target.value}
          />
          <div className="flex items-center justify-center gap-x-10">
            <div className="flex items-center text-secondary-600 gap-x-2">
              <input
                className="form-radio h-5 w-5 text-primary-900 focus:ring-0 focus:ring-offset-0"
                type="radio"
                name="role"
                value="OWNER"
                id="OWNER"
              />
              <label htmlFor="OWNER">کارفرما</label>
            </div>
            <div className="flex items-center text-secondary-600 gap-x-2">
              <input
                className="form-radio h-5 w-5 text-primary-900 focus:ring-0 focus:ring-offset-0"
                type="radio"
                name="role"
                value="FREELANCER"
                id="FREELANCER"
              />
              <label htmlFor="FREELANCER">فریلنسر</label>
            </div>
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfileForm;
