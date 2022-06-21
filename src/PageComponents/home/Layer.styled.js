import styled from "styled-components";

export const LayerWrap = styled.div`
    /* width: 90%; */
    margin: auto;
    margin-bottom:7rem;

    .layer{
        text-align:center;
        margin-bottom:4rem;
    }
    
`
export const Frontline = styled.div`
  
    margin:auto;
    display:grid;

    @media only screen and (min-width: 600px) {
        width:80%;
        grid-template-columns: repeat(2,1fr);

    }
`


export const Signup = styled.div`
    margin-top: 5rem;
    margin:auto;
    width:85%;
    h3{
        margin: 2rem 0;
        font-size:2rem;
    }
    p{
        width:90%;
        line-height:2rem;
        
    }
`

export const Form = styled.div`
    margin-top:4rem;
    margin-bottom:7rem;

    .form-wrap{
        width:90%;
        margin:auto;
        background: #FEFEFE;
        box-shadow: 0px 26.8762px 94.0668px 13.4381px rgba(0, 0, 0, 0.05);
        padding:3rem 2rem;


        form{

            h3{
                margin-bottom: 2rem;
            }
            p{
                margin-bottom: 3rem;
                
            }

            .input-box{
                margin-bottom: 2rem;

                input{
                    outline:none;
                    border:1px solid #D2D2D2 ;
                    line-height:3rem;
                    padding:0.5rem 1rem;
                    border-radius:.3rem;
                    width:100%;
                }
            }
        }

    }

    
`

export const GetStarted = styled.div`
    margin-bottom:9rem;

    .wrap{
        width:85%;
        margin:auto;
        text-align:center;
        display:grid;


        .section-wrap{
            display:grid;
            /* width:80%; */
            margin:auto;
            

            .section-2{

                h2{
                    margin-bottom: 2rem;

                    span{
                        color:#FFA000;
                    }
                }

                p{
                    margin-bottom: 3rem;
                    line-height:2rem;
                }
            }

            @media only screen and (min-width: 600px) {
                grid-template-columns: repeat(2,1fr);
                grid-gap:8rem;
                text-align:left;
                width: 80%;

                .section-2{
                    align-self:center;

                    p{
                        line-height:2.5rem;
                    }
                }

            }
        }

        
    }
        
`

export const Policy = styled.div`
    margin-bottom:10rem;
    .wrap{
        width:85%;
        margin:auto;

        .side-img{
            display:none;
        }

        .section-1{

            h3{
                margin-bottom: 2rem;
                font-size:2rem;
                text-align:center;
            }

            .head-p{
                line-height:2rem;
                margin-bottom: 2rem;
                text-align:center;
            }

            .policy-container{
                margin-top:4rem;
                
                .policy-item{
                    display:flex;
                    margin-bottom: 2rem;

                    

                    &-text > h4{
                        margin-bottom:1rem
                    }

                    &-img{
                        margin-right:2rem;
                    }

                    p{
                        line-height:1.8rem;
                    }

                }
            }
        }


        @media only screen and (min-width: 600px) {
            display:grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap:8rem;

            .section-1{

                h3{
                    text-align:left;
                }
                p{
                    text-align:left !important;
                }
            }
          

            .side-img{
                display:block;
                width:100%;
                align-self:center;
                align-content:center
            }

            .policy-item{
                margin-bottom:5rem !important;
            }

            .policy-item-img{
                width:8rem !important;
                }

        }
    }

   
`

export const Value = styled.div`
    min-height:100vh;
    background:#0E0E0E;
    transform:skewY(-10deg);
    margin-bottom:7rem;
    padding:5rem 0;
    

    .wrap{
        width:85%;
        margin:auto;
        transform:skewY(10deg);
        

        .section-1{
            
            & > h3{
                padding-top: 5rem !important;
                color:#fefefe;
                font-size:2rem;
                line-height:3rem;
                text-align:center;
                text-transform:uppercase;
                margin-bottom: 7rem;
            }
        }

        .section-2{
            /* margin-top:4rem; */
            margin-bottom:7rem;

            &-column-1{


                .box{
                    background:#fefefe;
                    color:#0E0E0E;
                    padding:2rem;
                    border-radius:1rem;
                    margin-bottom:3rem;

                    .box-img{
                        margin-bottom:1rem;
                    }

                    h3{
                        margin-bottom: 1rem;
                        /* font-size:2rem; */
                    }

                    p{
                        /* margin-bottom: 3rem; */
                        line-height:2rem;

                    }
                }
            }
        }

        .section-2{
            /* margin-top:4rem; */
            margin-bottom:7rem;

            &-column-2{


                .box{
                    background:#fefefe;
                    color:#0E0E0E;
                    padding:3rem 2rem;
                    border-radius:1rem;
                    margin-bottom:2rem;

                    .box-img{
                        margin-bottom:1rem;
                    }

                    h3{
                        margin-bottom: 1rem;
                        /* font-size:2rem; */
                    }

                    p{
                        /* margin-bottom: 3rem; */
                        line-height:2rem;

                    }
                }
            }
        }

        
    }

    @media only screen and (min-width: 600px) {

        min-height:120vh;
        display:flex;
        align-items:center;
            .wrap{
                display:grid;
                grid-template-columns: 1fr 2fr;
                justify-content:center;
                align-items:center;
                align-content:center;
                align-self:center;
                grid-gap:8rem;


            .section-2{
                display:grid;
                grid-template-columns: repeat(2,1fr);
                align-items:center;
                grid-gap:4rem;
            }

            .section-2-column-2{
                /* transform:translateY(6rem); */
                margin-top:14rem;
            }

            .section-1 > h3{
                    font-size:2.5rem !important;
                    line-height:4rem;
                }
        }
        
    }
`


export const Features = styled.div`

    .wrap{
        width:85%;
        margin:auto;
        margin-bottom:7rem;

        h3{
            margin-bottom: 2rem;
            font-size:2rem;
            text-align:center;
            

        }

        .feature-container{
            margin-top:5rem;
            margin-bottom:6rem;
            

            .active{
                
            }

            .feature-item{
                position:relative;
                /* display:flex; */
                margin:auto;
                margin-bottom: 6rem;
                
                width:95%;
                padding:2rem;
                border: 1px solid #4D535B;
                border-radius:1rem;
                box-shadow: 0px 4px 140px 5px rgba(0, 0, 0, 0.09);
                transition:all 0.2s ease-in-out;
                

                &:hover{
                    border: 1px solid #FFB300;
                    background: #f9f9f9;
                }
                &-img{
                    margin-right:2rem;
                    width:80%;
                    margin:auto;
                }

                h4{
                    margin-bottom:4rem;
                    /* font-size:2rem; */
                    text-align:center;
                    text-transform:uppercase;

                }

                button{
                    margin-bottom:1rem;
                    /* font-size:1.5rem; */
                    width:21rem;
                    padding:2rem 2rem;
                    border-radius:30px;
                    background: #1A1A1A;
                    color:#fefefe;
                    border:none;
                    outline:none;

                    position:absolute;
                    bottom:-65px;
                    left:50%;
                    right:50%;
                    transform:translate(-50%,-50%);
                    

                }
            }

        }
    }


    @media only screen and (min-width: 600px) {
        height:100vh;
        display:flex;
        align-items:center;
        .wrap{
            margin-bottom:0;
            

            .feature-container{
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap:10rem;
            }

           
        }

    }
`

export const Action = styled.div`
    margin-bottom:7rem;
    margin-top:9rem;
    background:#fafafa;
    padding: 4rem 0;

    .wrap{
        width:85%;
        margin:auto;
        

        .section-1{
            h3{
                margin-bottom: 2rem;
                font-size:2rem;
                text-align:center;
                text-transform:capitalize;
            }

    }
    }

    @media only screen and (min-width: 600px) {

        margin-top:0;

        
        .btn{
                /* text-align:center !important; */
                /* margin:auto   !important; */
                display: inline-block !important;
                width: 10rem !important;
                
            }
    }
`

export const Banner = styled.div`
    display:none;

    @media only screen and (min-width: 600px) {
        display:block;
        
        .wrap{
            width: 90% !important;
            margin:auto;
            margin-bottom:7rem;
            width:100%;
            background: url('/images/banner.png');
            background-size:cover;
            background-repeat:no-repeat;
            height:20rem;
            border-radius: 20px;
        }

    }
`

export const Faq = styled.div`
    margin-bottom:7rem;

    padding: 4rem 0;
        
    .wrap{
        width:85%;
        margin:auto;
        

        h3{
            margin-bottom: 2rem;
            font-size:2rem;
            text-align:center;
            
        }

        .faq-tab{
        
           
            &-item{
                margin-bottom:2rem;
                padding:2rem;

                &-img{
                    text-align:center;
                    margin-bottom:2rem;
                }
                
                &-info{
                    text-align:center;
                    
                    

                    h4{
                        margin-bottom:1rem;
                        text-align:center;

                    }
                    
                    p{
                        margin:auto;
                        margin-bottom:2rem;
                        line-height:2rem;
                        text-align:center;
                        
                        width:80%;
                    }

                    a{
                        color:#ffb300;
                    }
                }

            }

        }
    }

    @media only screen and (min-width: 600px) {
        
        .wrap{
            

            .faq-tab{
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap:2rem;


                &-item{
                    display:grid;
                    grid-template-columns: 6rem 1fr;
                    

                    &-img{
                        margin-right:2rem;
                    }
                
                    h4{
                        text-align:left
                    }

                    p{
                        text-align:left;
                        width:100%;
                    }

                    .link{
                        text-align:left !important;
                    }

                    a{
                        display:inline-block;
                        text-align:left !important;
                        width:100%;
                    }
                
                }
            }
        }
    }
`


