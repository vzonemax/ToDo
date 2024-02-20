import React from "react";
import PostItem from "../post/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostBox = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1>no found</h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, i) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post" >
                        <PostItem remove={remove} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostBox;