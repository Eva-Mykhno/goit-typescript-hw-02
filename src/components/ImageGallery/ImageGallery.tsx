import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ results, handleOpenModal }) => {
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
