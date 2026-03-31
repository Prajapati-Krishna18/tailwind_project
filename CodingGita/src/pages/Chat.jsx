import React from 'react'
import Navbar from '../components/Navbar'

export default function Chat() {
  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar/>
      <h1 className='text-3xl font-bold mx-28'>Chat Groups</h1>
      <p className='mx-28 mt-1.5 text-gray-300'>Groups assigned to you and universal groups.</p>
      <p className='mt-9 mx-28 text-gray-300'>No groups assigned to you yet.</p>
    </div>
  )
}