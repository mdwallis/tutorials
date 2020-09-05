import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Reddit() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(response => {
                const newPosts = response.data.data.children.map(obj => obj.data);
                setPosts(newPosts);
            })
    }, []);

    return (
        <div>
            <h1>/r/reactjs</h1>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

ReactDOM.render(
    <Reddit />,
    document.getElementById('root'),
);
