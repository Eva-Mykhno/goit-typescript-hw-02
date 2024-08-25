import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, handleCloseModal, imageUrl }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: "0",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "80vw",
      maxHeight: "80vh",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}>
      <div>
        <button className={s.button} type="button" onClick={handleCloseModal}>
          <IoIosCloseCircleOutline size={25} />
        </button>

        <img src={imageUrl} />
      </div>
    </Modal>
  );
};

export default ImageModal;
