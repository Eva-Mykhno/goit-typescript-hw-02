import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type DataImage = {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type Props = {
  handleOpenModal: () => void;
  results: DataImage;
};

const ImageGallery = ({ results, handleOpenModal }: Props) => {
  return (
    <ul className={s.gallery}>
      {results.map((result) => (
        <li key={result.id}>
          <ImageCard data={result} handleOpenModal={handleOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
