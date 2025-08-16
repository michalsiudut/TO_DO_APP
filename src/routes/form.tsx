import { UserForm, userFormSchema } from '@/validation/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { useUserProperties } from '@/hooks/useUserProperites'

export const Route = createFileRoute('/form')({
  component: RouteComponent,
})


function RouteComponent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema)
  })



  const {
    setUserAgeHandler, setUserNameHandler, userAge, userName
  } = useUserProperties();


  const onSubmit = (data: UserForm) => {
    setUserAgeHandler(data.userAge);
    setUserNameHandler(data.userName);
    reset();
  };

  return (<div className='flex mt-10 w-full justify-center'>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
      <div className='flex flex-row gap-8 mb-5 items-start'>
        <div className='flex flex-col'>
          <input
            className='border-2 rounded-xl w-48 h-9 p-2 focus:border-green-600 mb-2 outline-none'
            placeholder='Enter your name'
            {...register('userName')}
          />
          {errors.userName && <p className='text-red-600'>{errors.userName.message}</p>}
        </div>
        <div className='flex flex-col'>
          <input
            className='border-2 rounded-xl w-48 h-9 p-2 focus:border-green-600 mb-2 outline-none'
            placeholder='Enter your age'
            type="number"
            {...register('userAge', { valueAsNumber: true })}
          />
          {errors.userAge && <p className='text-red-600'>{errors.userAge.message}</p>}
        </div>
      </div>

      <button className='mb-10' type="submit">Apply</button>
      <div className='flex flex-row gap-8 items-center'>
        <div className='text-4xl font-bold'>Your name: {userName}</div>
        <div className='text-4xl font-bold'>Your age: {userAge}</div>
      </div>

    </form>
  </div>

  )
}
