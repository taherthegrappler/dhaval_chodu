'use client'
import Link from "next/link"
import { useEffect, useState } from "react"


const UserPage =()=>{
    const [users,setuser]=useState([])
    console.log(users)
    useEffect(()=>{
       async function fetchUsers(){
        const data = await fetch('https://dummyjson.com/users')
        setuser(await data.json())
       }
       fetchUsers()
    },[]) 
    return(
        <div>
            
            <h1>Users</h1>

            {
                users &&users.users && users.users.map((item)=>(
                    <Link href={`/users/${item.id}`} key={item.id}>
                        <div>
                            {item.firstName}  
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserPage