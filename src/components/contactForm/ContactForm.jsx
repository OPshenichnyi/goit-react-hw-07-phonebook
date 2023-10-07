import { Formik,ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { CssInput, WrapperForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Must be string')
        .min(3, 'Must be at least 3 characters long')
        .required('Required'),
    phone: Yup.number().required('Required'),
});

export const ContactForm = () => {  
    const dispatch = useDispatch()
    const phoneList = useSelector(state => state.contacts.contacts)

    function chekContact(value) {
        const checkNameUser = phoneList.some(user =>
            user.name.toLowerCase() === value.name.toLowerCase())
        if (checkNameUser) {
            alert(`${value.name} is already in contacts`)
            return
        }
        dispatch(addContact(value))
    } 
    
    return (
        <Formik
            validationSchema={SignupSchema}

            initialValues={{
                name: '',
                phone: ''
            }}          

            onSubmit={(values, actions) => { 
                values.id = nanoid()
                chekContact(values)
                
                actions.resetForm(true)
            }}
        >
            <WrapperForm>
                <label htmlFor="name">Name</label>
                <br />
                <CssInput id="name" name="name" placeholder="Name" />
                <br />
                <ErrorMessage name="name" />
                <br />
                <label htmlFor="phone">Number</label>
                <CssInput id="phone" name="phone" placeholder="Phone" />
                <br />
                <ErrorMessage name="phone" />
                <br />    
                <button type="submit">Submit</button>
            </WrapperForm>
        </Formik>
    )
} 