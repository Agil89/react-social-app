import s from './Paginator.module.css'
import {useState} from 'react'
import cn from 'classnames'

let Paginator = (props) =>{
    let portionSize = 10
    let pageCount=Math.ceil(props.usersCount / props.usersForEachPage)
    let pages = []
    let portionCount = Math.ceil(pageCount/portionSize)
    const [PortionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (PortionNumber-1) * portionSize + 1
    let righPortionPageNumber = PortionNumber * portionSize



    for (let i = 1;i<=pageCount;i++){
        pages.push(i)
 
    }
    return (    
        <div>
            {PortionNumber > 1 && 
            <button onClick={() =>{setPortionNumber(PortionNumber-1)}}>Prev</button>}

                {pages.filter(p =>p >= leftPortionPageNumber && p <= righPortionPageNumber)
                .map((p) =>{
                    return <span className={cn ({
                        [s.selectedPage] : props.currentPage === p
                     }, s.pageNumber) } key = {p} 
                        onClick={(e) =>{ props.onPageChanged(p) }}>{p}</span>
                })}
                {
                    portionCount > PortionNumber && 
                    <button onClick = {() =>{setPortionNumber(PortionNumber+1)}}>Next</button>
                }
        </div>
    )
}

export default Paginator;