import { PlusIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { COLORS } from '../utils/colors'

export const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const handleCreate = (color) => {
        // Create note with `color`
    }

    return <div className='w-24 flex flex-col items-center'>
        {/* Logo */}
        <h2 className='text-lg font-bold py-4 mt-2'>Notes</h2>

        <div className='pt-12'>
            <button className='bg-black text-white rounded-full p-3 mb-8 hover:shadow-lg focus:shadow-lg outline-none focus:ring-2 focus:ring-blue-600' onClick={() => setOpen(x => !x)}>
                <span className='sr-only'>Add note</span>
                <PlusIcon className='w-5 h-5' />
            </button>

            {open && Object.entries(COLORS).map(([id, color]) => {
                return <button
                    key={id}
                    onClick={() => handleCreate(color)}
                    className='block rounded-full h-6 w-6 mb-4 mx-auto hover:shadow-lg focus:shadow-lg outline-none focus:ring-2 focus:ring-blue-600'
                    style={{ backgroundColor: color }}>
                    <span className='sr-only'>Create note with color {id} - {color}</span>
                </button>
            })}
        </div>
    </div>
}