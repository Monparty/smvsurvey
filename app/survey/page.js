'use client';
import { useState } from 'react';
import React from 'react';
import Answer from '../components/Answer';
import HeadAnswer from '../components/HeadAnswer';

export default function Page() {
    const questionList = [
        {
            id: 1,
            progress: 5,
            title: 'ความน่าดึงดูดโดยรวม',
            question: 'โดยรวมแล้ว คุณคิดว่าคุณมีรูปลักษณ์ที่น่าดึงดูดเพียงใด?'
        },
        {
            id: 2,
            progress: 10,
            title: 'การดูแลตัวเอง',
            question: 'คุณให้ความสำคัญกับการดูแลรูปร่างและสุขภาพมากน้อยแค่ไหน?'
        },
        {
            id: 3,
            progress: 15,
            title: 'การดูแลตัวเอง',
            question: 'คุณพึงพอใจกับสไตล์การแต่งกายของตนเองมากน้อยแค่ไหน?'
        },
        {
            id: 4,
            progress: 20,
            title: 'การดูแลตัวเอง',
            question: 'คุณใส่ใจกับการดูแลผิวพรรณและเส้นผมมากน้อยแค่ไหน?'
        },
        {
            id: 5,
            progress: 25,
            title: 'การดูแลตัวเอง',
            question: 'คุณพึงพอใจกับรูปร่างหน้าตาของตนเองมากน้อยแค่ไหน? '
        },
        {
            id: 6,
            progress: 30,
            title: 'การดูแลตัวเอง',
            question: 'คุณคิดว่าคุณมีเสน่ห์ทางกายภาพมากน้อยแค่ไหน?'
        },
        {
            id: 7,
            progress: 35,
            title: 'ความมั่นใจในตนเอง',
            question: 'คุณมีความมั่นใจในตนเองมากน้อยแค่ไหน?'
        },
        {
            id: 8,
            progress: 40,
            title: 'ความมั่นใจในตนเอง',
            question: 'คุณรู้สึกสบายใจเมื่ออยู่ในสถานการณ์ทางสังคมมากน้อยแค่ไหน?'
        },
        {
            id: 9,
            progress: 45,
            title: 'อารมณ์ขัน',
            question: 'คุณคิดว่าคุณเป็นคนมีอารมณ์ขันมากน้อยแค่ไหน?'
        },
        {
            id: 10,
            progress: 50,
            title: 'อารมณ์ขัน',
            question: 'คุณสามารถทำให้ผู้อื่นรู้สึกสนุกสนานได้ง่ายเพียงใด?'
        },
        {
            id: 11,
            progress: 55,
            title: 'ความเข้าอกเข้าใจผู้อื่น',
            question: 'คุณใส่ใจและเข้าใจความรู้สึกของผู้อื่นมากน้อยแค่ไหน?'
        },
        {
            id: 12,
            progress: 60,
            title: 'ความเข้าอกเข้าใจผู้อื่น',
            question: 'คุณคิดว่าคุณเป็นผู้ฟังที่ดีมากน้อยแค่ไหน?'
        },
        {
            id: 13,
            progress: 65,
            title: 'ความเข้าอกเข้าใจผู้อื่น',
            question: 'ในเดทแรกคุณพึงพอใจกับการหารค่าอาหารมากแค่ไหน?'
        },
        {
            id: 14,
            progress: 70,
            title: 'ทัศนคติ',
            question: 'โดยทั่วไปแล้ว คุณเป็นคนที่มีทัศนคติเชิงบวกมากน้อยแค่ไหน?'
        },
        {
            id: 15,
            progress: 75,
            title: 'อาชีพ',
            question: 'คุณพึงพอใจกับอาชีพการงานของตนเองมากน้อยแค่ไหน?'
        },
        {
            id: 16,
            progress: 80,
            title: 'อาชีพ',
            question: 'คุณคิดว่าอาชีพของคุณมีผลต่อความน่าดึงดูดของคุณเพียงใด?'
        },
        {
            id: 17,
            progress: 85,
            title: 'ความมั่นคงทางการเงิน',
            question: 'คุณรู้สึกว่าตนเองมีความมั่นคงทางการเงินมากน้อยแค่ไหน?'
        },
        {
            id: 18,
            progress: 90,
            title: 'ความฉลาด/สติปัญญา',
            question: 'คุณคิดว่าตนเองเป็นคนฉลาดและมีไหวพริบมากน้อยแค่ไหน?'
        },
        {
            id: 19,
            progress: 95,
            title: 'ความมีเป้าหมายในชีวิต',
            question: 'คุณรู้สึกว่าตนเองมีเป้าหมายและความมุ่งมั่นในชีวิตมากน้อยแค่ไหน?'
        },
        {
            id: 20,
            progress: 100,
            title: 'ทักษะทางสังคม',
            question: 'คุณคิดว่าคุณมีทักษะในการเข้าสังคมที่ดีมากน้อยแค่ไหน?'
        },
    ]

    const [selectedValue, setSelectedValue] = useState([]);
    const [value, setValue] = useState([]);
    let integerArray = value.map((str) => parseInt(str));

    const handleClick = (answer) => {
        setValue((prevValue) => [...prevValue, answer]);
    };

    const sum = integerArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
        <div>
            <p className='fixed top-0 bg-amber-100'>selectedValue: {value.join(', ')}</p>
            <p className='fixed top-8 bg-amber-100'>รวม: {sum}</p>
            {Object.values(questionList).map(questions => (
            <div className="container mx-auto px-4 py-8">
                <HeadAnswer key={questions.id} {...questions} />
                <Answer selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            </div>
            ))}
            <div className='fixed bottom-20 right-16'>
                <button onClick={() => handleClick(selectedValue)} className="inline-flex items-center justify-center h-20 w-20 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="#6a7282 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5"/></svg>
                </button>
            </div>
        </div>
    );
}