import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { LoginPageData } from "../config/data";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      navigate("/user");
    } else {
      form.reportValidity();
    }
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-[#EBEBEB] hover:border-[#6C25FF] transition-all duration-300 w-96 h-full bg-[#F7F8F9] p-5"
      >
        <div>
          <h1 className="text-[28px] w-2/3 text-[#1d2226] mb-2 font-[600]">
            {LoginPageData.title}
          </h1>
          <p className="text-[18px] text-[#74777B] leading-[26px] mb-8 font-[400]">
            {LoginPageData.desc}
          </p>

          {LoginPageData.fields.map((label: string, index: number) => (
            <div className="relative w-full mt-4" key={index}>
              <input
                required
                name={`field${index}`}
                className="w-full border-2 border-gray-300 rounded-md px-3 py-5 mb-4 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              />
              <label className="absolute left-2 -top-3 bg-[#F7F8F9] pl-1 pr-5 text-[#6C25FF] text-[13px]">
                {label}
                <span className="text-[#DD4A3D]">*</span>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-2">
          <Button title="Log In" style="text-white bg-[#6C25FF]" type="submit" path="/user" />
        </div>
      </form>
    </section>
  );
};

export default Login;
