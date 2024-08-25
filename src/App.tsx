import { useState, useEffect } from "react";
import fetchImages from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetchImages(query, page);

        setResults((prev) =>
          page === 1 ? response.results : [...prev, ...response.results]
        );

        setTotal(response.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery), setResults([]), setPage(1);
  };

  const handleOpenModal = (image) => {
    setModal({ isOpen: true, imageUrl: image });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, imageUrl: null });
  };

  return (
    <div className="s.app">
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery results={results} handleOpenModal={handleOpenModal} />
      {total > page && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        handleCloseModal={handleCloseModal}
        imageUrl={modal.imageUrl}
        isOpen={modal.isOpen}
      />
    </div>
  );
};

export default App;
