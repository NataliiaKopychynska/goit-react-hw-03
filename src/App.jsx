import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";

const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsLS = window.localStorage.getItem("contacts");
    return contactsLS ? JSON.parse(contactsLS) : contactList;
  });
  const [findQuery, setFindQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = (id) => {
    // const newArr = contacts.filter((item) => item.id !== id);
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addContacts = (values, actions) => {
    const newContact = {
      id: `id-${Date.now()}`,
      name: values.nameContact,
      number: values.numberContact,
    };
    setContacts((prev) => [...prev, newContact]);
    actions.resetForm();
  };

  const findContact = (e) => {
    const valueWord = e.target.value.toLowerCase();
    setFindQuery(valueWord);
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(findQuery)
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <div className="contain-date">
        <div>
          <SearchBox onFind={findContact} />
          <ContactForm addContacts={addContacts} />
        </div>
        <ContactList
          contactList={filterContacts}
          onDeleteContact={deleteContacts}
        />
      </div>
    </div>
  );
}

export default App;
