import { useState } from "react";
import Textfield from "../../ui/Textfield";

function SentOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <Textfield
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SentOTPForm;
