import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { timerSchemaVal, timerSchema } from '../validation/timerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { InputTimer } from '@/components/InputTimer';

export const Route = createFileRoute('/timer')({
    component: RouteComponent,
})

function RouteComponent() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

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
        document.title = "Time OUT!";
    })

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
                    <button className='flex justify-center bg-[#242424] text-white' type='submit'>
                        Apply
                    </button>
                </div>

            </form >

            <div className='text-8xl flex justify-center bg-[#242424] text-white w-1/2 m-30 ml-120 border rounded-3xl p-3 shadow-xs'>
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
        </div>
    )
}
