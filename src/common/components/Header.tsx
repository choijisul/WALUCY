import Flex from "./Flex.tsx";
import Text from "./Text.tsx";
import styled from "styled-components";
import {useState} from "react";
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

    const handleNavigation = (page: Page) => {
        setCurrentPage(page);
        navigate(routeMap[page]);
    };

    return <HeaderContainer height={70} width="100%">
        <HeaderContent height="100%" verticalCenter row gap={80}>
            <Logo src="/assets/img/logo.svg" onClick={() => handleNavigation("NONE")}/>
            <Flex gap={36} row>
                {["LUCY", "SONG", "POST"].map((page) => (
                    <NavLink key={page} active={currentPage === page} onClick={() => handleNavigation(page as Page)}>
                        {page}
                    </NavLink>
                ))}
            </Flex>
        </HeaderContent>
    </HeaderContainer>
}

const HeaderContainer = styled(Flex)`
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
`;

const HeaderContent = styled(Flex)`
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