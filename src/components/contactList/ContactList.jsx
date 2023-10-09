
import { deleteContact } from "components/redux/operations";
import { ListItemPhone } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "components/redux/selectors";

const listContacts = (listPhone, filter) => {
    
    if (filter.length === 0) {
        return listPhone
    }
    return listPhone.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
}


export const ContactList = () => {
    const dispatch = useDispatch() 
    const filter = useSelector(getFilter) 
    const listPhoneBook = useSelector(getContacts)
    const FiltredList = listContacts(listPhoneBook, filter)
 

    return (
        <ul>
            {FiltredList.map(({ id, name, phone }) => (
                <ListItemPhone key={id}>
                    <span>{name}:</span>
                    <span> {phone}</span>
                    <button
                        type="button"
                        value={id}
                        onClick={(e) => dispatch(deleteContact(e.target.value))}
                    >Delete</button>
                </ListItemPhone>
            ))}
        </ul>
    )
}