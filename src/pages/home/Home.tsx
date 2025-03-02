import Text from "@landing/common/components/Text.tsx";
import Flex from "@landing/common/components/Flex.tsx";
import styled from "styled-components";

export default function Home(){
    return <Flex width="100%" center>
        <Texts>홈입니다.</Texts>
    </Flex>
}

const Texts = styled(Text)`
`;