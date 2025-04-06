'use client'
import { useState } from 'react'
import React from 'react'
import Progress from '../components/Progress'
import Link from 'next/link'

export default function Page() {

return (
    <div className="container mx-auto px-4 py-8">
        <div className='flex flex-col gap-5 mb-5'>
            <h2 className='fonr-bold text-2xl'>
                เพศ
            </h2>
            <Progress progress={20} />
            <h2>
                โดยรวมแล้ว คุณคิดว่าคุณมีรูปลักษณ์ที่น่าดึงดูดเพียงใด?
            </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className='w-full'>
                <input type="checkbox" id="c1" value="" className="hidden peer" required="" />
                <label for="c1" className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                    <div className="block">
                        <div className="w-full text-lg">น้อย</div>
                    </div>
                </label>
            </div>
            <div className='w-full'>
                <input type="checkbox" id="c1" value="" className="hidden peer" required="" />
                <label for="c1" className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                    <div className="block">
                        <div className="w-full text-lg">ค่อนข้างน้อย</div>
                    </div>
                </label>
            </div>
            <div className='w-full'>
                <input type="checkbox" id="c1" value="" className="hidden peer" required="" />
                <label for="c1" className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                    <div className="block">
                        <div className="w-full text-lg">ปานกลาง</div>
                    </div>
                </label>
            </div>
            <div className='w-full'>
                <input type="checkbox" id="c1" value="" className="hidden peer" required="" />
                <label for="c1" className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                    <div className="block">
                        <div className="w-full text-lg">ค่อนข้างมาก</div>
                    </div>
                </label>
            </div>
            <div className='w-full'>
                <input type="checkbox" id="c1" value="" className="hidden peer" required="" />
                <label for="c1" className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                    <div className="block">
                        <div className="w-full text-lg">มาก</div>
                    </div>
                </label>
            </div>
        </div>
        <div className='fixed bottom-20 right-16'>
            <Link href="/" className="inline-flex items-center justify-center h-20 w-20 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="#6a7282 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5"/></svg>
            </Link>
        </div>
    </div>
  )
}