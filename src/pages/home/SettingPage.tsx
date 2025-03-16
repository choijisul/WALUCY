import Flex from "../../common/components/Flex.tsx";
import Text from "../../common/components/Text.tsx";
import styled from "styled-components";
import useUserInfo from "../../common/hooks/useUserInfo.ts";

export default function SettingPage() {
    const {id, setLoginUserId} = useUserInfo();

    return <SettingContent gap={60} verticalCenter>
        <Flex gap={40} row>
            <ChangeImg center>
                <Text fontSize={16} fontWeight={400} color="#FFFFFF">이미지 변경</Text>
            </ChangeImg>
            <Flex gap={45} height={233} verticalCenter>
                <Flex gap={10}>
                    <Text fontSize={16} fontWeight={400}>닉네임</Text>
                    <CustomInput placeholder={id!} onChange={(e) => setLoginUserId(e.target.value)}></CustomInput>
                </Flex>
                <Flex gap={10}>
                    <Text fontSize={16} fontWeight={400}>최애</Text>
                </Flex>
            </Flex>
        </Flex>
        <Flex>

        </Flex>
    </SettingContent>
}

const SettingContent = styled(Flex)`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 120px;
`;

const ChangeImg = styled(Flex)`
    width: 200px;
    height: 233px;
    background: url('/assets/img/home/homeProfile/profile-img1.jpg') center center no-repeat;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
`;

const CustomInput = styled.input`
    width: 500px;
    height: 40px;
    padding: 10px 24px;
    background-color: #F5F5F5;
    box-shadow: none;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    
    font-size: 16px;
    font-weight: 400;
    
    ::placeholder {
        color: #797884;
    }
`;