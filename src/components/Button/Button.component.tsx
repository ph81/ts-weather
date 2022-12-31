interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button = ({ title, className, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
