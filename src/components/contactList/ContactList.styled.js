import styled from 'styled-components'


export const ListItemPhone = styled.li`
font-family:'Montserrat';
font-size:14px;
color:#5a5a5a;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
span{
    width: 125px;
    display: inline-block;
    margin-bottom: 15px;
}
span:nth-child(2){
    width: 80px;
}
button{
    height: 20px;
    font-family:'Montserrat',
    sans-serif;border:2px solid #78788c;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
}
`