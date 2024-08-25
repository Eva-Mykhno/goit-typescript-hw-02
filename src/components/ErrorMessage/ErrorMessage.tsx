import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.error}>
      <p>Something went wrong! Try again...</p>
    </div>
  );
};

export default ErrorMessage;
