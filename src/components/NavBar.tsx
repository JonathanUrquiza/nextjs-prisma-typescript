import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
      <nav className='flex flex-row justify-between items-center py-4'>
        <Link href='/'>
            <h3 className='text-2xl font-bold'>Lista de tareas</h3>
        </Link>
        <ul>
            <li>
                <Link href='/new' className='text-slate-200 hover:text-slate-500'>New</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar