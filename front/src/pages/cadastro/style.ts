import styled from "styled-components"

export const TopCadastro = styled.div`

display: flex;
justify-content: space-between;
width: 100% ;
max-width: 390px;
margin: 0 auto;
margin-top: 10px;

align-items: center;


h2{
    color:red;
    font-size: 17px;
    padding: 10px;
    background-color: #212529;
}`


export const StyledCadastro = styled.div`

box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
width: 100%;
max-width: 390px;
margin: 0 auto;
display: flex;
flex-direction: column;
margin-top: 1rem;
height: 770px;
background-color: #212529;
color: #ffffff;
text-align: center;
justify-content: space-evenly;



h2{
    font-size: 16px;
     color:  #F8F9FA;
}


form{
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    max-width: 440px;
    max-height: 100%;

}

p{
    font-size: 12px;
    color:red;
}

input,select{
  background-color:  #343B41;
  color: #868E96;

}

button{
    background-color: red;
    color: #ffffff;
    font-size: 10px;
}

label{
    display: flex;
    text-align: left;
    font-size: 9px;
}

small{
    font-size: 9px;
    color: #868E96;
}
`

