import styled from "styled-components";
import {useNavigate} from "react-router";
import Flex from "../../common/components/Flex.tsx";
import Text from "../../common/components/Text.tsx";

export default function NotFoundPage() {

    const navigate = useNavigate();

    return <Wrapper>
        <Flex gap={8} center>
            <Text fontSize={28}>잘못된 접근입니다.</Text>
            <ToHomeButton onClick={() => {navigate("/home")}}>홈으로 돌아가기</ToHomeButton>
        </Flex>
    </Wrapper>
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100dvw;
`

export const ToHomeButton = styled(Flex)`
    font-size: 24px;
    color: #007bff;
    cursor: pointer;
`