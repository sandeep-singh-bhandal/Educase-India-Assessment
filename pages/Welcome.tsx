import Button from "../components/Button";
import { WelcomePageData } from "../config/data";
const Welcome = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-end border-2 border-[#EBEBEB] hover:border-[#6C25FF] transition-all duration-300 w-1/4 h-full bg-[#F7F8F9] p-5 font-medium ">
        <h1 className="text-[28px] text-[#1d2226] mb-1 font-[600]">
          {WelcomePageData.title}
        </h1>
        <p className="text-[18px] text-[#74777B] leading-[26px] mb-5 font-[400]">
          {WelcomePageData.description}
        </p>
        {WelcomePageData.buttons.map(
          ({ bgColor, color, title, path }, index) => (
            <Button
              bgColor={bgColor}
              color={color}
              title={title}
              key={index}
              path={path}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Welcome;
