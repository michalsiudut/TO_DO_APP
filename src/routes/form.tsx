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

  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='ZODlabel'>
        <input
          className='inputZOD'
          placeholder='Enter your name'
          {...register('userName')}
        />
        {errors.userName && <p className='errors'>{errors.userName.message}</p>}
      </div>

      <div className='ZODlabel'>
        <input
          className='inputZOD'
          placeholder='Enter your age'
          type="number"
          {...register('userAge', { valueAsNumber: true })}
        />
        {errors.userAge && <p className='errors'>{errors.userAge.message}</p>}
      </div>
      <button className='buttonZOD' type="submit">Apply</button>
      <div className='userDiv'>Your name: {userName}</div>
      <div className='userDiv'>Your age: {userAge}</div>
    </form>
  </>
  )
}
