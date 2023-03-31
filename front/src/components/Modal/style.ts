import styled from "styled-components";

export const StyledModal = styled.div`

flex-direction: column;
    background-color: #00000090;
    width: 100vw;
    height: 100%;

    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .topModal{
        display: flex;
        width: 246px;
        height: 40px;
        border-radius: 5px;
        align-items: center;
        align-content: center;
        text-align: center;
        background-color: #343B41;
        justify-content: space-around;
    }

    h3{
        color:#F8F9FA;
        font-size: 11px;
    }

    small{
        color: #868E96;
        font-size: 16px;

    }



    form{
        background-color: #212529;
        width: 246px;
        justify-content: space-evenly;
        height: 280px;
        max-width: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;



        label{
        display: flex;
        color: #F8F9FA;
        width: 80%;
        font-size: 9px;
        row-gap: 10px;
        flex-direction: column;


    }

}
        input{
                width: 100%;
                margin: 0 auto;
                background-color: #343B41;
                border: 1px solid white;
                font-size: 13px;
         }

        select{
            width: 100%;
            margin: 0 auto;
            padding: 10px;
            font-size: 13px;
            background-color: #343B41;
        }

        button{
        background-color: #FF577F;
        width: 80%;
        color: #ffffff;
        }

`