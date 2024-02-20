import About from "../../pages/About";
import Posts from "../../pages/Posts"
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { Navigate, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/post" element={<Posts />} />
            <Route exact path="/post/:id" element={<PostIdPage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/" element={<Navigate to='/post' />} />
            <Route path="*" element={<Navigate to='/error' />} />
        </Routes>
    )
}

export default AppRouter