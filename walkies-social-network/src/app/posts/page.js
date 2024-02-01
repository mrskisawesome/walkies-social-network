import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function Posts() {
  const posts = await sql`SELECT * FROM posts`;
  async function handleAddNewPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title,content) VALUES (${title},${content})`;

    revalidatePath("/posts");
  }
  return (
    <div>
      <h2>Your Posts</h2>
      <p>This is the place to post</p>
      <form action={handleAddNewPost}>
        <input name="title" placeholder="Post title" />
        <textarea name="content" placeholder="Post content" />
        <button>Submit</button>
      </form>

      {posts.rows.map((post) => {
        return (
          <Link key={post.title} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        );
      })}
    </div>
  );
}
