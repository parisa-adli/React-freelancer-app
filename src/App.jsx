import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;

// auth
// Task #1 : auth user via OTP : one-time-password
// 1. form -> getOTP -> input + button => phoneNumber => send OTP
// 2. form -> checkOTP -> request -> (otp, phoneNumber)

// request =>
// 1. axios (useState, useEffect)
// 2. useFetch (data, loading, error) : custom hook
// 3. react-query => redux alternative (remote states), fetch(get), mutate(post)

// folder structure project
// features => instead components folder
// project => (components, hooks, context, ...)
// proposal
// authentication
// category
// users
