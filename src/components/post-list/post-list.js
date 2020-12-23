import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
    return (
        <ul className = "app-list list-group">
            <PostListItem lable = "Latina Latin Edition concedit quod est efficiens" />
            <PostListItem lable = "Primum, in user ad inserere in hoc"/>
            <PostListItem lable = "Per claves ad respondentem, in lingua enim indicavit fonte, tum in scopum lingua"/>
        </ul>
    )
}

export default PostList;