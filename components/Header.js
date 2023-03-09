import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import Avatar from './Avatar';

function Header() {
    const router = useRouter();
    const searchInputRef = React.useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?query=${term}`);
        // router.push(`/search?query=${searchInputRef.current.value}`);
    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
            <Image
                src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                height={40}
                width={120}
                alt="Google Logo"
                onClick={() => router.push('/') }
                className="cursor-pointer"
            />

            <form className='flex flex-grow px-3 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                <input 
                    type="text" 
                    ref={searchInputRef} 
                    placeholder="Search" 
                    className='flex-grow w-full focus:outline-none'
                />
                <XIcon 
                    className='h-5 text-gray-500 cursor-pointer transition duration-100 transform sm:pr-2 hover:scale-125' 
                    onClick={() => searchInputRef.current.value=""}
                />
                <MicrophoneIcon className="mr-3 h-5 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300" />
                <SearchIcon className='mr-3 h-5 hidden sm:inline-flex text-blue-500 ' />
                <button hidden type='submit' onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        </div>
    </header>
  )
}

export default Header
