import { removeContact } from "components/redux/contactSlice";
import { ListItemPhone } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";

const listContacts = (listPhone, filter) => {
    
    if (filter.length === 0) {
        return listPhone
    }
    return listPhone.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
}


export const ContactList = () => {
    const dispatch = useDispatch() 
    const filter = useSelector(state => state.fillter.find) 
    const listPhoneBook = useSelector(state => state.contacts.contacts)
    const FiltredList = listContacts(listPhoneBook, filter)

    function getIdxPhone(value) {        
        const index = listPhoneBook.findIndex(user => user.id === value)
        dispatch(removeContact(index))
    }

    return (
        <ul>
            {FiltredList.map(({ id, name, number }) => (
                <ListItemPhone key={id}>
                    <span>{name}:</span>
                    <span> {number}</span>
                    <button
                        type="button"
                        value={id}
                        onClick={(e) => getIdxPhone(e.target.value) }
                    >Delete</button>
                </ListItemPhone>
            ))}
        </ul>
    )
}