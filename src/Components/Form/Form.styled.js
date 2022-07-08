import styled from "styled-components"

export const Wrap = styled.div`
    background:url('/images/stripe.svg');
    background-color:#F5F5F5;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center center;
    box-sizing:border-box;
`

export const Forms = styled.div`
    padding-top:4rem;
    padding-bottom:7rem;
    

    .flex-input{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:20px;
    }
    

    .form-wrap{
        width:90%;
        margin:auto;
        background: #FEFEFE;
        box-shadow: 0px 26.8762px 94.0668px 13.4381px rgba(0, 0, 0, 0.05);
        padding:3rem 2rem;
        border-radius:6px;


        form{

            h3{
                margin-bottom: 4rem;
                font-size: 2rem;
                font-weight:600;
            }
            p{
                margin-bottom: 2rem;
                
            }

            .input-box{
                margin-bottom: 2rem;
                
                input{
                    outline:none;
                    border:1px solid #D2D2D2 ;
                    line-height:3rem;
                    padding:0.7rem 1rem;
                    border-radius:.3rem;
                    width:100%;
                    

                    &:focus{
                        /* border: 1px solid red !important; */
                        box-shadow: rgb(255, 160, 0) 0px 0px 0px 1px inset, rgb(255 160 0 / 10%) 0px 0px 0px 3px;
                    }
                    &:active{
                        /* border: 1px solid red !important; */
                        box-shadow: rgb(255, 160, 0) 0px 0px 0px 1px inset, rgb(255 160 0 / 10%) 0px 0px 0px 3px;                    }
                    
                }
            }
        }


        @media only screen and (min-width: 900px) {
            width:35%;
            padding:5rem 4rem;
;        }

    }

    
`