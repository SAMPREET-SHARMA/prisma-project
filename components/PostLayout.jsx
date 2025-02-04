
function PostLayout({id,title,content,author}) {
    return (
        <div className={'w-100 border border-solid-white flex flex-col gap-2 p-4'}>
            <h2>{title}</h2>
            <h4>{content}</h4>
            <h4>{author}</h4>
        </div>
    );
}

export default PostLayout;