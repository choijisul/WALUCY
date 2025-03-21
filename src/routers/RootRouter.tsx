import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "../pages/home/HomePage.tsx";
import RootPage from "../pages/root/RootPage.tsx";
import NotFoundPage from "../pages/notFound/NotFoundPage.tsx";
import IntroductionPage from "../pages/introduction/IntroductionPage.tsx";
import SongPage from "../pages/song/SongPage.tsx";
import PostPage from "../pages/post/PostPage.tsx";
import Header from "../common/components/Header.tsx";
import MembershipPage from "../pages/MembershipPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import SettingPage from "../pages/home/SettingPage.tsx";

export default function RootRouter() {
    return <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={"/"} element={<RootPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/membership"} element={<MembershipPage/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
            <Route path={"/introduction"} element={<IntroductionPage/>}/>
            <Route path={"/song"} element={<SongPage/>}/>
            <Route path={"/post"} element={<PostPage/>}/>
            <Route path={"/setting"} element={<SettingPage/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
}