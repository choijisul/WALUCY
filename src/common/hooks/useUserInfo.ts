import dayjs from 'dayjs';

interface User {
    id: string;
    password: string;
    favorite: "None" | "신예찬" | "최상엽" | "조원상" | "신광일";
    joinDate: Date;
}

export default function useUserInfo() {
    const loginUser: string | null = localStorage.getItem('loginUser');
    const users: User[] | null = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = loginUser ? users?.find(user => user.id === loginUser) : null;
    const formattedDate = dayjs(currentUser?.joinDate).format('YYYY.MM.DD');

    return {
        id: currentUser?.id,
        favorite: currentUser?.favorite,
        joinDate: formattedDate,
    };
}
