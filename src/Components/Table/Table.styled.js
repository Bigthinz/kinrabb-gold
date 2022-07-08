import styled from "styled-components";



export const Wrap = styled.div`
    margin-top:3rem;

table, tr {
  border: 1px solid #D9D9D9;
}

table{
    width:100%;
    border-collapse: collapse;
   
    /* border-collapse: collapse; */
    /* border:2px solid red; */

    tr{
       
        td:nth-child(1){
            width:30%;
            color:#3C4A56;
        }

        td:nth-child(2){
            font-weight:500;
            text-transform:uppercase;
        }

        &:hover{
            background-color: #FCFAFE !important;
        }

    }

 
    tr:nth-child(even) {
                background-color: #fff;
                
              }
               tr:nth-child(odd) {
                background-color:  #FCFAFE;
              }
               th {
                color: white;
                background-color: #66B7AC;
                
               
              }


             
           
              

    
              th, td {
                padding: 2.7rem;
              }


}

`