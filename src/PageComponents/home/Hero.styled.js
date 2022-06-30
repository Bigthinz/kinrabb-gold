import styled from "styled-components"

export const PageHero = styled.section`

color:#333;

width:100%;
/* height:100vh; */
background-size: cover;
background-position:center center;
/* background-image:url('/images/background.jpg'); */

position:relative;
margin-bottom:7rem;

.wrap{
    position:relative;
    width:90%;
    height:100%;
    margin:auto;
}


@media only screen and (min-width: 900px) {
    background: url('/images/hero.jpg');
    background-size:cover;
    min-height:100vh;
}

`

export const BigScreen = styled.div`


.wrap{

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:2rem;

    height: 50vh;
    align-items:center;
}


`




export const HeroTitle = styled.div`
    width:100%;
   


    h1{
        font-size:3.5rem;
        font-weight:300;
        text-align:center;
        
        /* margin:auto; */
    }

    button{
        background: #FFA000;
        text-align:left;
        border:none;
        outline:none;
        max-width:15rem;
        line-height:2rem;
        padding:1rem 3rem 4rem 2rem;
        border-radius: 0 0 3rem 0;
        text-transform:capitalize;

        margin: 3em 0 2rem 0;
       

        cursor: pointer;
        
    }
`


export const HeroInfo = styled.div`

/* position:absolute;
top:40%;
left:50%;
transform:translate(-50%,-50%); */

width:100% !important;
margin:auto;

/* display:grid; */
/* grid-template-columns:repeat(2,1fr); */

/* background:red; */
/* position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%); */

`

export const HeroImg = styled.div`

    .banner{
        position:relative;
        background:#fff;
        padding: 2rem;
        width:100%;

        border-radius:1rem;
        text-align:center;
        margin-top:2rem;
        margin-bottom:2rem;
        color:#333;

        &>h3{
            margin-top:1rem;
            font-size:2rem;
            span{
                color:#FFA000;
            }
        }
    }

    button{
        padding: 2rem;
        border:none;
        outline:none;

        width:100%;
        text-transform:capitalize;
        border-radius: .5rem;
        background:linear-gradient(90deg, #FFB300 1.91%, #FFA000 100%);
    }

`