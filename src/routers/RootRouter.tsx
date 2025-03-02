import {BrowserRouter, Route, Routes} from "react-router";
import Home from "../pages/home/Home.tsx";
import RootPage from "../pages/root/RootPage.tsx";
import NotFoundPage from "../pages/notFound/NotFoundPage.tsx";

export default function RootRouter() {

    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<RootPage/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
}