import AppLogo from "./AppLogo";
import LoginForm from "./LoginForm";

const LoginPage = () => {

  return (
    <div className="relative top-40">
      <div className=" mx-auto grid gap-6 w-[350px] ">
        <div className="flex text-right">
          <div className="w-1/2">
            <AppLogo />
          </div>
          <div className="flex flex-col ">
            <p className="text-black text-4xl font-bold">Login</p>
            <p className="text-black ">Enter your email & password to login into your account</p>
          </div>
        </div>
        <LoginForm />
        <div className=" text-center text-black mt-4">
          Design and developed by Saifur &copy; 2025
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
