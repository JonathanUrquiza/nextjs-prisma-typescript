'use client'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function NewPage({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm()
  const router = useRouter()
  console.log(params);
  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`)
        .then(res => {
          setValue('title', res.data.title)
          setValue('description', res.data.description)
        })
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data)
    } else {
      await axios.post("/api/tasks", data);
    }
    router.push('/')
    router.refresh()

  })

  return (

    <section className="h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className=" gap-2 flex flex-col items-center justify-center">
        <label htmlFor='Title' className='font-bold text-xs'>
          Wrute you title:  </label>
        <input type="text" className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300" placeholder="Write a text to send"
          {...register('title')}
        />
        <label htmlFor="description" className='font-bold text-xs'>
          write you Description
        </label>
        <textarea id="description" className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:right-1 focus:ring-gray-300 focus:border-gray-300" placeholder="Write a description" {...register('description')}>
        </textarea>
        <div className='flex flex-row justify-around align-center gap-5'>
          <button type='submit' className='bg-sky-500 px-3 py-2 rounded-md text-white mt-2'>{params.id ? 'Update' : 'Create'}</button>
          <button type='button' className='bg-red-500 px-3 py-2 rounded-md text-white mt-2' onClick={async () => {
            if (confirm('Are You sure you want to delete this task?')) {
              await axios.delete(`/api/tasks/${params.id}`)
              router.push('/')
              router.refresh()
            }
          }}>Delete</button>
        </div>
      </form>
    </section>
  )
}
export default NewPage