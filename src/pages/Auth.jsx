import SentOTPForm from "../features/authentication/SentOTPForm";

function Auth() {
  return (
    <div className="w-full sm:max-w-sm">
      <SentOTPForm />
    </div>
  );
}

export default Auth;

// auth ? 1 : 2
// 1. sentOTP
// 2. checkOTP
