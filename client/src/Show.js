import Post from './Post.js'

const Show = (e) => {

    const posts = e.posts;

    return(
        <div>
        
        <content className='mt-8 block '>
            <div className='flex justify-around'>
            <div>
            <h1 className='font-bold text-3xl text-gray-700'>Posts</h1>
            </div>
            <button className='bg-green-400 w-10 h-10 rounded-sm' onClick={e.func}>+</button>
            </div>

            <div className='flex flex-col items-center mt-10 space-y-4 pb-4'>
            {posts.map(
                (post) => (
                <Post title={post.title} key={post._id} id={post._id} date={post.createdAt} content={post.content} image={post.image} />
                
                )
            )}
            </div>
        </content>
        </div>
    )
}

export default Show;