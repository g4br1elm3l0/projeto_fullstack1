import styled from "styled-components";

export const DashConteiner = styled.div`

    background-color:#000000;
    color: white;
    height: 100vh;

header{
    width:100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background-color: #121214;
    align-items: center;

    div{
        height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
flex-direction: row;
    background-color: #121214;
    align-items: center
    }

    button{
        display: flex;
        margin-top: 10px;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 12px;
        width: 55px;
        height: 32px;
    }
}

img{
    height: 16px;
    width: 80px;
}

button{
    background-color: #212529;
    color: white;
    margin-top: 5px;
}

div{
   background-color: #121214;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   width:100%;
   height: 131px;
}

h1{
    font-size: 18px;
    color: white;
}

small{
    font-size: 12px ;

    color: #868E96;
}

p{
    font-size: 16px;

    }

.helo{
width: 80%;
margin: 0 auto;
    }

.techTop{
    width: 80%;
    margin: 0 auto;
    display: flex;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2{
        color:white;
        font-size: 16px
    }

    button{
        font-size: 20px;
       padding: 0px 7px;
    }
}

.ulConteiner{
    height: 430px;

.botao-x{
    border-radius: 4px;
    color: #FFFFFF;
    margin: 0;
}
    li{
        background-color: #121214;

        min-height: 50px;
        align-items: center;
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 1rem;
        border-radius: 5px;

        h2{
            color: #F8F9FA;
            font-size: 14px;
            font-weight: 700;
            margin-left: 5px;
        }

        div{
            height: 100%;
            width: 50%;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            align-items: center;



            p{
                margin: 0;
                color: #868E96;
                font-size: 12px;
            }
            button{
             height: 20px;
             margin: 0;
        }
        }


    }
}

 @media (min-width: 768px){

    max-width: 850px;
    margin: 0 auto;

    header{
        margin-bottom: 0;
        width: 80%;
        margin-top: 1rem;
    }

div{
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 20px;
    margin: 0 auto;
}

li{
    column-gap: 280px;
}

.helo{
    justify-content: space-between;
}

.ulConteiner{
    flex-direction: column;
}

 }
`

export const Ul = styled.ul`
background-color: #212529;
overflow-y: auto;
margin-top: 1rem;
display: flex;
flex-direction: column;
row-gap: 10px;
width: 80%;
margin: 0 auto;
height: 300px;
`

