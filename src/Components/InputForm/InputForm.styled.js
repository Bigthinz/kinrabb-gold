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

    

    .flex-input{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:20px;
    }
    

   


       

            .input-box{
                margin-bottom: 2rem;

                p{
                    margin-bottom:.5rem !important;
                    text-transform:capitalize;
                    /* font-size: 1.2rem !important; */
                    /* font-weight:500; */
                    
                }
                
                input{
                    outline:none;
                    border:1px solid #D2D2D2 ;
                    line-height:2.5rem;
                    padding:0.7rem 1rem;
                    border-radius:.3rem;
                    width:100%;

                    &:hover{
                    border:1px solid #E8E8E7 ;

                    transition:.2s ease-in-out;

                    }
                    

                    &:focus{
                        /* border: 1px solid red !important; */
                        box-shadow: rgb(255, 160, 0) 0px 0px 0px 1px inset, rgb(255 160 0 / 10%) 0px 0px 0px 3px;
                    }
                    &:active{
                        /* border: 1px solid red !important; */
                        box-shadow: rgb(255, 160, 0) 0px 0px 0px 1px inset, rgb(255 160 0 / 10%) 0px 0px 0px 3px;                    }
                    
                }
            
        


        @media only screen and (min-width: 900px) {
            /* width:35%; */
            /* padding:5rem 4rem; */
       }

    }

    
`