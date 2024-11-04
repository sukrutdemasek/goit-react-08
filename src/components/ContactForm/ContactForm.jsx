import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContactAsync } from "../../redux/contacts/operations";
import "./ContactForm.css";

const validationParams = Yup.object({
  name: Yup.string()
    .min(3, "Name should contain at least 3 characters")
    .max(50, "Name should contain no more than 50 characters")
    .required("Name is necessary"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers allowed")
    .min(3, "Phone number should contain at least 3 characters")
    .max(50, "Phone number should contain no more than 50 characters")
    .required("Phone number is necessary"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactAsync(values));
    resetForm();
  };
  return (
    <div className="searchForm">
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationParams}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="formInput">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage component="div" name="name" />
            </div>
            <div className="formInput">
              <label htmlFor="number">Phone number:</label>
              <Field type="text" name="number" />
              <ErrorMessage component="div" name="number" />
            </div>
            <button type="submit" className="addButton">
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
