import Flex from "./Flex.tsx";
import Text from "./Text.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import useUserInfo from "../hooks/useUserInfo.ts";

type Page = "NONE" | "LUCY" | "SONG" | "POST";

const routeMap: Record<Page, string> = {
    NONE: "/home",
    LUCY: "/introduction",
    SONG: "/song",
    POST: "/post"
};

export default function Header() {
    const [currentPage, setCurrentPage] = useState<Page>("NONE");
    const navigate = useNavigate();
    const location = useLocation();

    const headerType: () => ("logoHeader" | "NoneHeader" | "basicHeader") = () => {
        if (location.pathname === '/login' || location.pathname === '/membership') {
            return "logoHeader";
        } else if (location.pathname === '/setting') {
            return "NoneHeader"
        } else {
            return "basicHeader"
        }
    };

    const headerName: () => (string) = () => {
        if (location.pathname === '/setting') return "홈";
        else return "";
    };

    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser');

        if (loginUser || headerType() === "logoHeader") return;

        const userConfirmed = window.confirm("로그인 해주세요.");

        if (userConfirmed) navigate('/login');
        else navigate('/membership');
    }, [navigate, headerType]);

    const handleNavigation = (page: Page) => {
        setCurrentPage(page);
        navigate(routeMap[page]);
    };

    const logout = () => {
        localStorage.removeItem('loginUser');
        navigate("/login");
        alert("로그아웃 되었습니다.");
    }

    const handleBackClick = () => {
        if (window.history.length > 1) navigate(-1);
        else navigate('/');
    };

    const {setUserInfo} = useUserInfo()
    return <>
        {headerType() === "NoneHeader"
            ? <HeaderContainer>
                <HeaderContent verticalCenter row spaceBetween>
                    <Flex style={{cursor: "pointer"}} gap={14} row onClick={() => handleBackClick()}>
                        <img src="/assets/img/icon/prev.svg"/>
                        <Text fontSize={24} fontWeight={600} color="#091057">{headerName()}</Text>
                    </Flex>
                    {location.pathname === '/setting' &&
                        <Text fontSize={24} fontWeight={700} style={{cursor: "pointer"}} onClick={() => setUserInfo()}>저장</Text>
                    }
                </HeaderContent>
            </HeaderContainer>
            : headerType() === "logoHeader"
                ? <HeaderContainer>
                    <HeaderContent verticalCenter row spaceBetween>
                        <Logo src="/assets/img/logo.svg" onClick={() => handleNavigation("NONE")}/>
                    </HeaderContent>
                </HeaderContainer>
                : <HeaderContainer>
                    <HeaderContent verticalCenter row spaceBetween>
                        <Flex gap={80} row verticalCenter>
                            <Logo src="/assets/img/logo.svg" onClick={() => handleNavigation("NONE")}/>
                            <Flex gap={36} row>
                                {["LUCY", "SONG", "POST"].map((page) => (
                                    <NavLink key={page} active={currentPage === page}
                                             onClick={() => handleNavigation(page as Page)}>
                                        {page}
                                    </NavLink>
                                ))}
                            </Flex>
                        </Flex>
                        <Text style={{cursor: "pointer"}} onClick={() => logout()}>로그아웃</Text>
                    </HeaderContent>
                </HeaderContainer>
        }
    </>
}

const HeaderContainer = styled(Flex)`
    height: 70px;
    width: 100%;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
`;

const HeaderContent = styled(Flex)`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1120px;
`;

const Logo = styled.img`
    height: 34px;
    cursor: pointer;
`;

const NavLink = styled(Text)<{ active: boolean }>`
    font-size: 18px;
    font-weight: ${({active}) => (active ? 800 : 400)};
    cursor: pointer;
`;