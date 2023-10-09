import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
import { Wrapper } from "./App.styled"
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "./redux/operations";
import { getError, getIsLoading } from "./redux/selectors";






export const App = () => {
  const isLoad = useSelector(getIsLoading)
  const error = useSelector(getError)
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
      {isLoad && !error && <b>Wait request in progress...</b>}
      {error && <p>Ooops !!!: {error} (Please reload page)</p>}
        {!isLoad &&<ContactList></ContactList>}
      </Wrapper>
  )
}
