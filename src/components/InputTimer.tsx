import { timerSchemaVal } from '@/validation/timerValidation';
import { UseFormRegister } from 'react-hook-form'

type InputTimerProps = {
    label: string;
    name: 'hours' | 'minutes' | 'seconds';
    register: UseFormRegister<timerSchemaVal>
    error?: { message?: string };
};

export const InputTimer = ({ label, name, register, error }: InputTimerProps) => {
    return (
        <div>
            {label}:
            <input
                className="bg-[#242424] text-white border rounded m-3"
                {...register(name, { valueAsNumber: true })}
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    );
};
