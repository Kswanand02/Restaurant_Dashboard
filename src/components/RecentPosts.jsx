function RecentPosts({ data }) {

    return (

        <div>

            <h2>Recent Posts</h2>

            {data.slice(0, 3).map((item) => (

                <div key={item.id} className="post-card">

                    <h4>{item.title}</h4>

                    <p>{item.body}</p>

                </div>

            ))}

        </div>

    );
}

export default RecentPosts;