export type TimerStore = {
    seconds: number,
    minutes: number,
    hours: number,
    isRunning: boolean,
    setSeconds: (sec: number) => void,
    setMinutes: (min: number) => void,
    setHours: (hour: number) => void,
    setIsRunning: (boo: boolean) => void,
}