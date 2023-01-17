import Link from "next/link"
import axios from "axios"

function Blog(props : any) {
    const {users} = props
  return (
    <div>
      <h1>This is the block page of my component </h1>

      <Link  href="/blog/pen" replace >
            Detail of users
        </Link>
        
        {
            users.map((list: any) =>{
            return(
                <>
                   <Link href={`/blog/${list.id}`} >
                   <h3 key={list.id}>{list.title}</h3>
                   </Link>
                    <hr />
                </>
            )})
        }
    </div>
  )
}

export default Blog

export async function getStaticProps() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return{
            props : {
                users: response.data
            }
        }
    }catch(err){
        console.error(err)
    }
}