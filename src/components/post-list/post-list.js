import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';
const PostList = () => {
    
    return (
        <div  className="list-group-item">
        <PostListItem />
        <PostListItem />
        <PostListItem />
        </div>
    )
    
    
}
export default PostList;