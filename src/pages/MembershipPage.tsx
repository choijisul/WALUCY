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
    checked?: boolean;
}

const Input = styled.input`
    width: 200px;
    padding: 10px 18px;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-family: NanumSquareRoundOTF;
`;

const CustomInput: React.FC<CustomInputProps> = ({label, value, onChange, type = "text", checked}) => {
    return <Flex gap={4} center>
        <Text>{label}</Text>
        {label === "비밀번호 재확인"
            ? <Input
                type={type}
                onChange={onChange}/>
            : <Input
                type={type}
                value={value}
                onChange={onChange}/>
        }
        {checked === false && <Text fontSize={12} color="#F95454">비밀번호가 일치하지 않습니다.</Text>}
    </Flex>
};

export default function MembershipPage() {
    const [inputId, setInputId] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [inputCheckPassword, setInputCheckPassword] = useState<string>("");
    const [myFavorite, setMyFavorite] = useState<"NONE" | "신예찬" | "최상엽" | "조원상" | "신광일">("NONE");
    const navigate = useNavigate();

    const handleInputNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.target.value);
    };

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value);
    };

    const handleInputCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputCheckPassword(e.target.value);
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
        if (inputPassword !== inputCheckPassword || inputCheckPassword === "") {
            alert("비밀번호를 재확인 하세요.");
            return;
        }
        if (myFavorite === "NONE") {
            alert("최애를 선택하세요.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const existingUser = users.find((user: { id: string }) => user.id === inputId);
        if (existingUser) {
            setInputId("");
            alert("이미 존재하는 닉네임입니다.");
            return;
        }

        const newUser = {
            id: inputId,
            password: inputPassword,
            favorite: myFavorite,
            joinDate: new Date(),
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/login");
        alert("회원가입이 완료되었습니다!");
    };

    return <Flex height="100%" center gap={80}>
        <Flex gap={30} center>
            <CustomInput
                label="아이디"
                value={inputId}
                onChange={handleInputNickname}/>
            <Flex gap={20}>
                <CustomInput
                    label="비밀번호"
                    value={inputPassword}
                    onChange={handleInputPassword}
                    type="password"/>
                <CustomInput
                    label="비밀번호 재확인"
                    value={inputCheckPassword}
                    onChange={handleInputCheckPassword}
                    checked={inputPassword === inputCheckPassword}
                    type="password"/>
            </Flex>
            <Flex gap={10} center>
                <Text>최애</Text>
                <Flex gap={10} row>
                    <MyFavorite center onClick={() => setMyFavorite("신예찬")}
                                $isSelected={myFavorite === "신예찬"}>신예찬</MyFavorite>
                    <MyFavorite center onClick={() => setMyFavorite("최상엽")}
                                $isSelected={myFavorite === "최상엽"}>최상엽</MyFavorite>
                    <MyFavorite center onClick={() => setMyFavorite("조원상")}
                                $isSelected={myFavorite === "조원상"}>조원상</MyFavorite>
                    <MyFavorite center onClick={() => setMyFavorite("신광일")}
                                $isSelected={myFavorite === "신광일"}>신광일</MyFavorite>
                </Flex>
            </Flex>
        </Flex>
        <Flex gap={10} center>
            <LoginButtonFlex center onClick={joinMembership}>
                <Text fontSize={18} fontWeight={600} color="#FFFFFF">회원가입</Text>
            </LoginButtonFlex>
        </Flex>
    </Flex>
}

const MyFavorite = styled(Flex)<{ $isSelected: boolean }>`
    width: 90px;
    height: 40px;
    background-color: ${(props) => props.$isSelected ? "#3F7ED4" : "#F5F5F5"};
    color: ${(props) => props.$isSelected ? "#FFFFFF" : "#000000"};
    border-radius: 50px;
    cursor: pointer;
`;

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

