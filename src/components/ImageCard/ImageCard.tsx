import s from "./ImageCard.module.css";

type DataImage = {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type Props = {
  data: DataImage;
  handleCloseModal: () => void;
};

const ImageCard = ({ data, handleOpenModal }: Props) => {
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
