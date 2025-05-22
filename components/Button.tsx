import { useNavigate } from "react-router-dom";

const Button = ({
  title,
  style,
  type,
  path,
}: {
  title: string;
  style: string;
  type?: "submit" | "button";
  path: string;
}) => {
  const navigate = useNavigate();
  return type === 'submit' ? (
    <button
      type={type}
      className={`flex justify-center w-full font-[500] text-[16px] rounded-sm py-2 my-1 cursor-pointer ${style}`}
    >
      {title}
    </button>
  ) : (
    <button
      onClick={() => navigate(path)}
      className={
        "flex justify-center w-full font-[500] text-[16px] rounded-sm py-2 my-1 cursor-pointer " +
        style
      }
    >
      {title}
    </button>
  );
};

export default Button;
