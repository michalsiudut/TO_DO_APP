import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { timerSchemaVal, timerSchema } from '../validation/timerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export const Route = createFileRoute('/timer')({
    component: RouteComponent,
})

function RouteComponent() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

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

    useEffect(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            document.title = "Time OUT!";
            return;
        }

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
                    <div>
                        Hours:
                        <input className="bg-[#242424] text-white border rounded m-3" {...register('hours', { valueAsNumber: true })}>
                        </input>
                        {errors.hours && <p className="text-red-500">{errors.hours.message}</p>}
                    </div>
                    <div>
                        Minutes:
                        <input className="bg-[#242424] text-white border rounded m-3" {...register('minutes', { valueAsNumber: true })} >
                        </input>
                        {errors.minutes && <p className="text-red-500">{errors.minutes.message}</p>}
                    </div>
                    <div>
                        Seconds:
                        <input className="bg-[#242424] text-white border rounded m-3" {...register('seconds', { valueAsNumber: true })} >
                        </input>
                        {errors.seconds && <p className="text-red-500">{errors.seconds.message}</p>}
                    </div>
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
