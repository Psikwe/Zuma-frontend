import React from "react";
import { classNames, Icons } from "../../core/utilities";
import { Button } from "../../components/button/_component";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showNewPasswordType, setShowNewPasswordType] = React.useState(false);
  const navigate = useNavigate();

  const newPasswordToggle = () => {
    setShowNewPasswordType(!showNewPasswordType);
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate Signup API call
    console.log("Signup form submitted");
  };
  return (
    <div className="grid place-items-center duration-500 ease-in fixed z-[1] left-0 top-0 w-full mt-[8rem]">
      <form onSubmit={handleSignupSubmit}>
        <div>
          <img src={Icons.logo} className="w-10 mb-5" />
          <h4 className="label-font mb-3 text-2xl">Log into your account</h4>
          <label className="label-font">Email address</label>
          <input
            required
            className={`${classNames.input} w-[20rem]`}
            type="email"
            placeholder="Email"
            name="email"
          />
          <div className="relative mt-3">
            <label className="text-sm label-font">Password</label>
            <div className="control">
              <input
                required
                className={`${classNames.input} w-[20rem]`}
                type={showNewPasswordType ? "text" : "password"}
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="absolute top-9 right-3">
              <span onClick={newPasswordToggle} className="cursor-pointer">
                {showNewPasswordType ? (
                  <img src={Icons.eyeSlash} className="w-5" />
                ) : (
                  <img
                    src={Icons.eye}
                    style={{
                      filter: "gray",
                    }}
                    className="w-5"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <Button
          className="w-full mt-6 text-white bg-zuma p-2 rounded-lg form-wizard-submit disabled:bg-gray-200 disabled:shadow-none lg:px-20"
          disabled={isLoading}
          loading={isLoading}
          type={"submit"}
          label={"Log in"}
        />
        <small className="flex justify-center mt-3">
          Don't have an account? &nbsp;
          <span
            className="zuma-color cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </small>
      </form>
    </div>
  );
};

export default Signup;
