import { Link } from "react-router-dom";

const Button = ({
  title,
  style,
  path,
}: {
  title: string;
  style: string;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className={
        "flex justify-center w-full font-[500] text-[16px] rounded-sm py-2 my-1 cursor-pointer " +
        style
      }
    >
      {title}
    </Link>
  );
};

export default Button;
