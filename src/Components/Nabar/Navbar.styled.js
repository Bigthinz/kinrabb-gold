import styled from "styled-components";

export const Nav = styled.div`



` 

export const Wrap = styled.div`
    width:100%;
    margin:auto;
    background:rgba(26, 26, 26, 0.9);
    display:flex;
    justify-content:space-between;


` 

export const NavOptions = styled.div`
    width:60%;
    /* background:rgba(26, 26, 26, 0.9); */
    color:#fefefe;
    padding:3rem;

    display:flex;
    justify-content:space-between;
    align-items:center;

    .links{
        flex-basis: 70%;
    

        ul{
            display:flex;
            justify-content:space-between;
            align-items:center;
            text-decoration:none;

            padding:0;

            li{
                list-style:none;
            }
        }
    }

    .auth{
        flex-basis:25%;
       

        &-wrap{
            width:100%;

            span{
                margin-right:1.5rem;
            }

            span.signup{
                border: 1px solid #FFA000;
                padding:.7rem 2rem;
                /* border-radius:.3rem; */
            }
        }
    }


` 