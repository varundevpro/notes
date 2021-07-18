import { SearchIcon } from '@heroicons/react/solid'

export const Header = () => {
    return <header className='px-16'>

        <div className='flex items-center mt-2'>
            <SearchIcon className='w-5 h-5 text-gray-400' />
            <input className='px-4 flex-1 py-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-600' type="text" placeholder='Search' />
        </div>
    </header>
}