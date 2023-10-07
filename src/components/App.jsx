import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
import { Wrapper } from "./App.styled"
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchContacts } from "./redux/operations";






export const App = () => {

  const dispath = useDispatch();
  useEffect(() => {
   dispath(fetchContacts())
  }, [dispath])

  return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm>
        </ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Wrapper>
  )
}
