import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>You open page {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}, {post.title}</div>
            }
            <h1>Comments:</h1>
            {isCommentLoading
                ? <Loader />
                : <div>
                    {comments.map((comment) =>
                        <div>
                            <h5>{comment.name} ({comment.email}):</h5>
                            <div>
                                {comment.body}
                            </div>
                            <br />
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage