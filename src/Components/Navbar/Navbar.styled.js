import styled from "styled-components";

export const Nav = styled.div`
background:#fefefe;
margin-bottom:5rem;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);


` 

export const Wrap = styled.div`
    width:100%;
    margin:auto;
    /* background:rgba(26, 26, 26, 0.9); */
    display:flex;
    justify-content:space-between;

    .logo-div{
        display:flex;
        align-items:center;
        margin-left:3rem !important;

        .logo{
            align-self:center;
           
        }
    }
    


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