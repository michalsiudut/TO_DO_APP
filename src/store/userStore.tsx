import { create } from 'zustand';

type UserStore = {
    userName: string;
    userAge: number;
}

export const useUserStore = create<UserStore>(() => ({
    userName: "Michal",
    userAge: 20,
}))