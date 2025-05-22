import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpPageData } from "../config/data";
import Button from "../components/Button";

const SignUp = () => {
  const [selected, setSelected] = useState("yes");
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
        className="flex flex-col justify-between border-2 border-[#EBEBEB] hover:border-[#6C25FF] transition-all duration-300 w-96 h-full bg-[#F7F8F9] p-5"
      >
        <div>
          <h1 className="text-[28px] w-2/3 text-[#1d2226] mb-8 font-[600]">
            {SignUpPageData.title}
          </h1>

          {SignUpPageData.fields.map((label: string, index: number) => (
            <div className="relative w-full mt-4" key={index}>
              <input
                required
                name={`field${index}`}
                className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 mb-4 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              />
              <label className="absolute left-2 -top-3 bg-[#F7F8F9] pl-1 pr-5 text-[#6C25FF] text-[13px]">
                {label}
                <span className="text-[#DD4A3D]">*</span>
              </label>
            </div>
          ))}

          <p className="mt-4">{SignUpPageData.question}</p>
          <div className="flex items-center space-x-6">
            {["yes", "no"].map((option) => (
              <label key={option} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  required
                  name="radio" // group the radios properly
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected === option ? "border-[#6C25FF]" : "border-gray-400"
                  }`}
                >
                  {selected === option && (
                    <div className="w-2.5 h-2.5 bg-[#6C25FF] rounded-full"></div>
                  )}
                </div>
                <span className="ml-2 capitalize text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <Button
            title="Create Account"
            style="text-white bg-[#6C25FF]"
            type="submit"
            path='/user'
          />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
