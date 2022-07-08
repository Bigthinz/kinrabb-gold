import React from 'react'
import Link from 'next/link'
import { Board, Wrap } from './BoardHead.styled'

const BoardHead = ({title, tab, account}) => {

   

  return (
    <Board>
        <Wrap>
            <div className='head'>     
                <h4>{title}</h4>
                <Link href='/dashboard/account/open-account' passHref>
                    {
                        account === false ?  '' : <a><button>open new account</button></a>
                        // <a><button>open new account</button></a>
                    }
                </Link>
            </div>
            <div className='tab'>
                <a className='active' href='#'></a>
                {
                    tab &&
                    tab.map(item=>{
                        return(
                            <a key='item.tab' href='#'>{item}</a>
                        )
                    })
                }
                
            </div>
        </Wrap>
    </Board>
  )
}

export default BoardHead