import { useState, useEffect } from "react";
import "../styles/App.css";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount, getPagesArray } from "../components/utils/pages";
import Paginator from "../components/UI/paginator/Paginator";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import PostBox from "../components/postBox/PostBox";
import PostForm from "../components/PostForm/PostForm"
import PostFilter from "../components/PostFilter/PostFilter";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>Load posts</MyButton>
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Error: ${postError}</h1>}
            {isPostLoading
                ? <Loader />
                : <PostBox
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"Post list"}
                />
            }
            <Paginator
                page={page}
                totalPages={totalPages}
                changePage={changePage}
            />
        </div >
    );
}

export default Posts;
