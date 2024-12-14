import SentOTPForm from "../features/authentication/SentOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SentOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
}

export default Auth;

// auth ? 1 : 2
// 1. sentOTP
// 2. checkOTP
