import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form';
import { timerSchemaVal, timerSchema } from '../validation/timerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { InputTimer } from '@/components/InputTimer';
import { useTimerStore } from '@/store/timerStore';

export const Route = createFileRoute('/timer')({
    component: RouteComponent,
})

function RouteComponent() {

    const seconds = useTimerStore((state) => state.seconds);
    const minutes = useTimerStore((state) => state.minutes);
    const hours = useTimerStore((state) => state.hours);
    const isRunning = useTimerStore((state) => state.isRunning);
    const setSeconds = useTimerStore((state) => state.setSeconds);
    const setMinutes = useTimerStore((state) => state.setMinutes);
    const setHours = useTimerStore((state) => state.setHours);
    const setIsRunning = useTimerStore((state) => state.setIsRunning);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<timerSchemaVal>({
        resolver: zodResolver(timerSchema)
    })


    const onSubmit = (data: timerSchemaVal) => {
        setSeconds(data.seconds);
        setMinutes(data.minutes);
        setHours(data.hours);
        reset();
    }
    const playSound = (): void => {
        new Audio('./success.mp3').play();
    }

    useEffect(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            if (isRunning) {
                playSound();
                document.title = "Time OUT!";
            }
            setIsRunning(false);
            return;
        }

        setIsRunning(true);
        const timeout = setTimeout(() => {
            document.title = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds - 1).padStart(2, '0')} left`;
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [seconds, minutes, hours]);


    return (
        <div className="min-h-screen bg-[#242424]">
            <div className="bg-[#242424] text-white flex justify-center text-2xl">Set your time:</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center bg-[#242424] text-white'>
                    <InputTimer
                        label="Hours"
                        name="hours"
                        register={register}
                        error={errors.hours}
                    />
                    <InputTimer
                        label="Minutes"
                        name="minutes"
                        register={register}
                        error={errors.minutes}
                    />
                    <InputTimer
                        label="Seconds"
                        name="seconds"
                        register={register}
                        error={errors.seconds}
                    />
                </div >
                <div className='bg-[#242424] flex justify-center'>
                    <button className='mb-10' type="submit">Apply</button>
                </div>

            </form >

            <div className='text-8xl flex justify-center bg-[#242424] text-white w-1/2 m-30 ml-120 border rounded-3xl p-3 shadow-xs'>
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
        </div>
    )
}
