import { TimerStore } from "@/types/TimerStore"
import { create } from "zustand"
import { persist } from "zustand/middleware"


export const useTimerStore = create<TimerStore>()(
    persist(
        (set) => ({
            seconds: 0,
            minutes: 0,
            hours: 0,
            isRunning: false,
            setSeconds: (sec: number) => set({ seconds: sec }),
            setMinutes: (min: number) => set({ minutes: min }),
            setHours: (hour: number) => set({ hours: hour }),
            setIsRunning: (boo: boolean) => set({ isRunning: boo })
        }),
        {
            name: "timer-store"
        }
    )
);