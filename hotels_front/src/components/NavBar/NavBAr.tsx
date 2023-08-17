import {MouseEventHandler} from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import {NAVBAR} from "../NavBar/types"

const NavBar = ()=>{
    const navigate: NavigateFunction = useNavigate()

    const handleClick:MouseEventHandler<HTMLButtonElement>  = (event)=>{
        event.preventDefault()
        const {value} = event.target as HTMLInputElement
       navigate(`/${value}`)
    }

    return(
        <div >
           {NAVBAR && NAVBAR.map((e)=>{
            return(
                <button key={e.id} value={e.name} onClick={handleClick}>{e.name}</button>
            )
           })}
           <input placeholder="search" />
        </div>
    )
}

export default NavBar;