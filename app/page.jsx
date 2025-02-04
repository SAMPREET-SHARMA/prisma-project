import prisma from "@/lib/prisma";
import PostLayout from "@/components/PostLayout";
import Link from "next/link";


async function getposts(){

    const post = await prisma.post.findMany({
        where : {published : true},
        include : {
            author : {
                select : {name : true}
            }
        }
    })
    console.log(Array.isArray(post))
    return post
}

export default async function Home() {
    const posts = await getposts()


  return (
    <div className={'flex flex-col item-center justify-center'}>
        <h1>Posts</h1>
        <Link href={'/addUser'}>Add User</Link>
        {
            posts.map((p) => {
                return(
                    <PostLayout
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        author={p.author.name}
                        content={p.content}
                    />
                    )
            })
        }


    </div>
  );
}
