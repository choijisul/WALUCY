import Flex from "./Flex.tsx";
import Text from "./Text.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

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
    const isVisibleHeader = window.location.pathname !== '/login' && window.location.pathname !== '/membership';

    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser');

        if (loginUser || !isVisibleHeader) return;

        const userConfirmed = window.confirm("로그인 해주세요.");

        if (userConfirmed) navigate('/login');
        else navigate('/membership');
    }, [navigate, isVisibleHeader]);



    const handleNavigation = (page: Page) => {
        setCurrentPage(page);
        navigate(routeMap[page]);
    };

    const logout = () => {
        localStorage.removeItem('loginUser');
        navigate("/login");
        alert("로그아웃 되었습니다.");
    }

    return <>
        {isVisibleHeader
            ? <HeaderContainer height={70} width="100%" center>
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
            : <HeaderContainer height={70} width="100%" verticalCenter flexStart style={{paddingLeft: 80}}>
                <Logo src="/assets/img/logo.svg" onClick={() => handleNavigation("NONE")}/>
            </HeaderContainer>
        }
    </>
}

const HeaderContainer = styled(Flex)`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
`;

const HeaderContent = styled(Flex)`
    height: 100%;
    width: 100%;
    max-width: 1280px;
    padding: 0 80px;
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