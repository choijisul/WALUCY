import {useState} from "react";
import dayjs from "dayjs";
import {useNavigate} from "react-router";

interface User {
    id: string | null;
    password: string;
    favorite: "None" | "신예찬" | "최상엽" | "조원상" | "신광일";
    joinDate: Date;
}

export default function useUserInfo() {
    const [loginUserId, setLoginUserId] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>(() => {
        return JSON.parse(localStorage.getItem("users") || "[]");
    });
    const navigate = useNavigate();

    const currentUser = users.find(user => user.id === localStorage.getItem('loginUser'));
    const formattedDate = currentUser ? dayjs(currentUser.joinDate).format("YYYY.MM.DD") : null;

    const setUserInfo = () => {

        navigate('/home');
    };

    return {
        id: currentUser?.id,
        favorite: currentUser?.favorite,
        joinDate: formattedDate,
        setLoginUserId,
        setUserInfo,
    };
}
