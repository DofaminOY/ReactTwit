import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';
const PostList = () => {
    
    return (
        <li  className="list-group-item">
        <PostListItem />
        <PostListItem />
        <PostListItem />
        </li>
    )
    
    
}
export default PostList;