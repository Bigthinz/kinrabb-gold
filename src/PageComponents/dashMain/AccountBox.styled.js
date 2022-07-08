import styled from "styled-components";




export const Body = styled.div`
    box-sizing:border-box;


`


export const Wrap = styled.div`

`

export const Box = styled.div`
    border: 1px solid #CCCCCC;
    padding:3rem;

    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:2rem;

    &:hover{
        transition:.2s ease-in-out;
        border-color:#FFA000;
    }



    .account-detail{
        p:nth-child(1){
            margin-bottom:2rem;
            background:#3B4955;
            padding:.5rem 1.5rem;
            text-transform:capitalize;
            border-radius:.2rem;
            font-weight:500;
            color:#fefefe;
        }

        p{
            text-transform:uppercase;

            .amount{
                font-size:2rem;
                font-weight:500;
            }

        }
    }


    button{
            min-width:12rem;
            background:none;
            outline:none;
            padding:1.3rem;
            border: 1px solid #ccc;
            text-transform: capitalize;
            border-radius:.3rem;
            transition: .2s ease-in-out;
            cursor:pointer;

            &:hover{
                
                border-color:#FFA000;
                transform:translateY(-1px);
               
            }

            &:nth-child(1){
                margin-right:2rem;
            }

            &:nth-child(2){
                background:#FFA000;
                border-color:#FFA000;
            }
        }

`
