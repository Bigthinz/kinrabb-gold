import React from 'react'
import { Wrap } from './Table.styled'

const Table = ({data}) => {
  return (
    <Wrap>
        <table >
        {
            data &&(
                
                data.map(item =>{
                    return (
                        
                            <tr key={item.title}>
                                <td>{item.title}</td>
                                <td>{item.value}</td>
                            </tr>
                            
                       
                    )
                })
        
            )
}
</table>
    </Wrap>
  )
}

export default Table