import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "../pages/home/HomePage.tsx";
import RootPage from "../pages/root/RootPage.tsx";
import NotFoundPage from "../pages/notFound/NotFoundPage.tsx";
import IntroductionPage from "../pages/introduction/IntroductionPage.tsx";
import SongPage from "../pages/song/SongPage.tsx";
import PostPage from "../pages/post/PostPage.tsx";
import Header from "../common/components/Header.tsx";

export default function RootRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<RootPage/>}/>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/introduction"} element={<IntroductionPage/>}/>
                <Route path={"/song"} element={<SongPage/>}/>
                <Route path={"/post"} element={<PostPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}