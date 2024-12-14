import AuthContainer from "../features/authentication/AuthContainer";
import SendOTPForm from "../features/authentication/SendOTPForm";
// import CheckOTPForm from "../features/authentication/CheckOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <AuthContainer />
    </div>
  );
}

export default Auth;

// auth ? 1 : 2
// 1. sentOTP
// 2. checkOTP
