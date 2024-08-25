import s from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    const { query } = values;
    if (!query.trim()) {
      toast.error("Search field is empty. Please enter your request");
      return;
    }
    setQuery(query);
  };

  return (
    <header className={s.wrapper}>
      <Toaster position="top-right" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.container}>
          <Field
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            <FiSearch size={18} /> Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
