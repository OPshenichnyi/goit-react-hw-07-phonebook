import styled from 'styled-components'
import { Form, Field} from 'formik';


export const WrapperForm = styled(Form)`



label{
  display:block;
  margin:28px 0 0;
  font-size:14px;
  color:#5a5a5a  
}

button{
    padding:8px 12px;
    margin:8px 0 0;
    font-family:'Montserrat',
    sans-serif;border:2px solid #78788c;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
}
`
export const CssInput = styled(Field)`
width:100%;
padding:10px;
box-sizing:border-box;
background:none;
outline:none;
resize:none;
border:0;
font-family:'Montserrat';
border-bottom:2px solid #bebed2;
`