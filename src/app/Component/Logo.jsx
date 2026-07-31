import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className="flex items-center font-mono text-xl font-bold tracking-tight">
            <Image className='w-40' width={100} height={100} src="/logo-portfolio.png"></Image>
        </div>
    )
}
