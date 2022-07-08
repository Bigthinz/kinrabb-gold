import styled from "styled-components";


export const Side = styled.div`
 


`


export const Wrap = styled.div`
    width: 70%;
    

.link-tab{
    /* margin-bottom:2rem; */
    text-align:center;
   
    height:10rem;

    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: .5rem;
    cursor:pointer;
  

    &:hover{
        background:#fff;
        
    }

    &.active{
        background:#fff;
    }

    .link-img{
        margin-bottom:1rem;
    }

    p{
        text-transform: uppercase;
        font-size: 1.2rem;
        /* font-weight:500; */
    }
}

`