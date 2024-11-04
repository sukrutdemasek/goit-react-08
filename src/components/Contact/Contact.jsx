import { useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import "./Contact.css";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <div className="contact">
      <p className="hidden">{id}</p>
      <p className="contactName">{name}</p>
      <p className="contactNumber">{number}</p>
      <button className="contactButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
