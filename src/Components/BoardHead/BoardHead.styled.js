import styled from "styled-components";



export const Board = styled.div`
    border-bottom: 2px solid #f5f5f5;
    
`


export const Wrap = styled.div`


    .head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:2rem 4rem;

        h4{
            font-size: 1.8rem;
            text-transform:capitalize
        }

        button{
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
        }
    }


    .tab{
        padding: 0 2rem;
        padding-bottom:1rem;

        a{
            position:relative;
            margin-right:2rem;
            padding-bottom:1rem;
            text-transform:capitalize;

            &:active::after{
                content:'';
                position:absolute;
                bottom:0;
                left:0;
                height:2px;
                background:#FFA000;
                width:100%;
            }

            &:focus::after{
                content:'';
                position:absolute;
                bottom:0;
                left:0;
                height:2px;
                background:#FFA000;
                width:100%;
            }
            
        }

        .active::after{
                content:'';
                position:absolute;
                bottom:0;
                left:0;
                height:2px;
                background:#FFA000;
                width:100%;
            }

        
    }
`