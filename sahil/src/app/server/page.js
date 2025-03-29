import Login from "../component/Login/Login"

async function getPost (){
    const resp = await fetch('https://dummyjson.com/users')
    const result = await resp.json()
    return result.users
}



const Post = async() => {
    const users = await getPost()
  return (
    <div>
        <h1>server-side rendering</h1>
        <Login data={users}/>
    </div>
  )
}

export default Post