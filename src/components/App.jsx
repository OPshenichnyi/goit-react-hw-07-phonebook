// import { useEffect } from "react"
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
import { Wrapper } from "./App.styled"




export const App = () => {
 
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
