import { TbMail } from 'react-icons/tb'

interface SubscribeFormProps {
  action: string
  title: string
  placeholder: string
}

export default function SubscribeForm({ action, title, placeholder }: SubscribeFormProps) {
  return (
    <div className='mt-8 w-full border-t border-t-zinc-100'>
      <div className='flex items-center gap-1.5 mt-8'>
        <TbMail />
        <span className='text-sm tracking-tight'>{title}</span>
      </div>
      <form action={action} method='post' className='flex gap-1.5 mt-2'>
        <label className='sr-only' htmlFor='newsletter-email'>Email address</label>
        <input
          id='newsletter-email'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='w-full h-10 px-3.5 text-sm rounded-lg bg-zinc-100'
          placeholder={placeholder}
        />
        <button type='submit' className='px-5 h-10 rounded-lg bg-[#000] text-[#fff]'>
          Subscribe
        </button>
      </form>
    </div>
  )
}
