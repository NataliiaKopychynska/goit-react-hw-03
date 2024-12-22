import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contactList, onDeleteContact }) {
  return (
    <ul className={s.containerList}>
      {contactList.map((contact) => {
        return (
          <Contact
            contactName={contact.name}
            contactNumber={contact.number}
            //   contactInfo={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}
