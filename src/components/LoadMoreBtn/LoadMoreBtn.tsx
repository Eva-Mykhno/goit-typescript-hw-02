import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <div>
      <button className={s.button} type="button" onClick={onClick}>
        Load More...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
