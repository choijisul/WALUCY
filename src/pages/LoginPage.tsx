import React, {useState} from "react";
import Flex from "../common/components/Flex.tsx";
import Text from "../common/components/Text.tsx";
import styled from "styled-components";
import {useNavigate} from "react-router";

interface CustomInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input = styled.input`
    width: 200px;
    padding: 10px 18px;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-family: NanumSquareRoundOTF;
`;

const CustomInput: React.FC<CustomInputProps> = ({label, value, onChange, type = "text"}) => {
    return <Flex gap={4} center>
        <Text>{label}</Text>
        <Input
            type={type}
            value={value}
            onChange={onChange}/>
    </Flex>
};

export default function LoginPage() {
    const navigate = useNavigate();
    const [inputId, setInputId] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");

    const handleInputNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.target.value);
    };

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value);
    };

    const joinMembership = () => {
        if (inputId === "") {
            alert("아이디를 입력하세요.");
            return;
        }
        if (inputPassword === "") {
            alert("비밀번호를 입력하세요.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const existingUser = users.find((user: { id: string }) => user.id === inputId);
        const existingUserPassword = users.find((user: { password: string }) => user.password === inputPassword);
        if (!existingUser) {
            setInputId("");
            alert("아이디가 존재하지 않습니다.");
            return;
        }
        if (!existingUserPassword) {
            setInputPassword("");
            alert("비밀번호가 맞지 않습니다.");
            return;
        }
        localStorage.setItem("loginUser", inputId);
        navigate("/home");
        alert("로그인이 완료되었습니다!");
    };


    return <Flex height="100%" center gap={80}>
        <Flex gap={30} center>
            <CustomInput
                label="아이디"
                value={inputId}
                onChange={handleInputNickname}/>
            <CustomInput
                label="비밀번호"
                value={inputPassword}
                onChange={handleInputPassword}
                type="password"/>
        </Flex>
        <Flex gap={10} center>
            <LoginButtonFlex center onClick={joinMembership}>
                <Text fontSize={18} fontWeight={600} color="#FFFFFF">로그인</Text>
            </LoginButtonFlex>
            <Text fontSize={14} color="#797884" style={{cursor: "pointer"}} onClick={() => navigate("/membership")}>
                회원가입
            </Text>
        </Flex>
    </Flex>
}

const LoginButtonFlex = styled(Flex)`
    width: 200px;
    height: 50px;
    cursor: pointer;
    border-radius: 50px;
    background-color: #3F7ED4;

    &:hover {
        background-color: #024CAA;
    }
`;
