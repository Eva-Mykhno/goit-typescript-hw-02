import s from "./ImageCard.module.css";

const ImageCard = ({ data, handleOpenModal }) => {
  return (
    <div className={s.card}>
      <img
        src={data.urls.small}
        alt={data.description}
        onClick={() => {
          handleOpenModal(data.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
