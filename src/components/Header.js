import React from 'react'
import {useStateValue} from '../StateProvider'
function Header() {
    const [{user,age},dispatch] = useStateValue()
    const setAge = () => {
        dispatch({
            type: "SET_AGE",
            age: 5
        })
    }
    return (
        <div>
        {!user && <h1>Guest</h1>} 
        {user && <h1>{user}{age}</h1>}  

        <button onClick={setAge}>Set age</button> 
        </div>

    )
}

export default Header
