import { Link } from "react-router-dom";

const Button = ({
  bgColor,
  color,
  title,
  path,
}: {
  bgColor: string;
  color: string;
  title: string;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className={`flex justify-center w-full bg-[${bgColor}] rounded-sm py-2 my-1 cursor-pointer text-[${color}]`}
    >
      {title}
    </Link>
  );
};

export default Button;
