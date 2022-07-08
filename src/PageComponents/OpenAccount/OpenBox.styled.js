import styled from "styled-components";







export const Wrap = styled.div`
    /* display:flex;
    justify-content:space-between; */

    .wrapper{
        border: 1px solid #CCCCCC;
       
        margin-bottom:2rem;

        display:flex;
        justify-content:space-between;
        position:relative;

        &:nth-child(1){
            border-color:#ffa000;
            &::after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:30px;
            height:30px;
            background-color:red;
            background:#FFA000;
            border-radius: 0 0 .3rem 0;
            }
        }

       


        .details{
            flex-basis: 30%;
            background:#f8f8f8;

            display:flex;
            align-items:center;
            padding-left:4rem;

            p{
                margin-bottom:1rem;
                position:relative;

                &::after{
                    content:'';
                    position:absolute;
                    top:60%;
                    left: -15px;
                    transform:translate(-50%,-50%);

                    width: .8rem;
                    height:.8rem;
                    border-radius:50px;
                    background:#FFA000;
                    
                }
            }
        }
    }

`


export const Body = styled.div`
    box-sizing:border-box;


`




export const Box = styled.div`
     padding:3rem;

    /* display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column; */
    



    .account-detail{
        p:nth-child(1){
            margin-bottom:1rem;
           
            padding:.5rem 0rem;
            text-transform:uppercase;
            font-weight:600;
            font-size:1.4rem;
            opacity:1;
        }

        /* .titles{
            margin-bottom:3rem !important;
        } */
        
        p{
           
            display:block;
           opacity:.8;

            

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


        .opt{
            margin-top:3rem;
        }

`
