import { IoMdAdd } from "react-icons/io";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};
function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-gray-300 text-black rounded flex cursor-pointer transition-all duration-300 hover:bg-gray-400 items-center"
    >
      {children}
      <span className="ml-2">
        <IoMdAdd />
      </span>
    </button>
  );
}

export default Button;