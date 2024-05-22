const Button = ({ name, px, py, onClick }) => {
  return (
    <button
      className={`bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-${
        py ? py : 2
      } px-${px ? px : 4} rounded-full flex items-center gap-3`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
