import Link from "next/link"

function index() {

  return (
    <div>
        <h1>This is the homepage</h1>
        <Link href="/blog">
          <button>Blog</button>
        </Link>
    </div>
  )
}

export default index