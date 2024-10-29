type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};
function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-[9px] sm:text-xs md:text-sm px-2  py-1 bg-gray-300 text-black rounded  cursor-pointer transition-all duration-300 hover:bg-gray-400 "
    >
      {children}
    </button>
  );
}

export default Button;
