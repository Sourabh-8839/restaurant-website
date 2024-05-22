const Button = ({ name, className, onClick }) => {
  return (
    <button
      className={`${className} bg-white bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3 `}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
