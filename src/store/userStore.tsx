import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create<UserStore>()
    (
        persist(
            (set) => ({
                userName: 'Michal',
                userAge: 20,
                setName: (name: string) => set({ userName: name }),
                setAge: (age: number) => set({ userAge: age }),
            }),
            {
                name: 'user-store',
            }
        )
    );