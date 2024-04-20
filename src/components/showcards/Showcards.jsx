import React from 'react'
import './showcards.css'

function Showcards({ tema, titulo, nivel }) { //otra forma de escribir props de forma estructurada
    return (
        <div>
            <div className='flex justify-center'>
                <a href="/" className=" block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="url_imagen"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                        <dl>
                            <div>
                                <dd className="text-sm text-gray-500">{tema}</dd>
                            </div>

                            <div>
                                <dd className="font-medium">{titulo}</dd>
                            </div>
                        </dl>
                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <span
                                    className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="-ms-1 me-1.5 h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <p className="whitespace-nowrap text-sm">{nivel}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export { Showcards }