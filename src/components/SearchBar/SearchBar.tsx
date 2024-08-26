import s from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

type Props = {
  setQuery: (query: string) => void;
};

type FormValues = {
  query: string;
};

const SearchBar = ({ setQuery }: Props) => {
  const initialValues: FormValues = {
    query: "",
  };

  const handleSubmit = (values: FormValues) => {
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
