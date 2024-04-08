import Form from "../../component/Form"
import PostsList from "../../component/PostsList"


function Home() {
  return (
    <>
      <div>Home</div>
      <div>
        <Form/>
      </div>
      <div>
          <PostsList/>
      </div>
      {/* <PostsList />
      <section>
        <h2>The latest videos</h2>
        <PostsList />
      </section>

      <section>
        <h2>The latest news</h2>
        <PostsList />
      </section> */}
    </>
  )
}

export default Home