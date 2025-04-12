export default function Answer({ setSelectedValue }) {
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const choiceList = ['น้อย', 'ค่อนข้างน้อย', 'ปานกลาง', 'ค่อนข้างมาก', 'มาก'];
    return (
        <div className="flex flex-col gap-4 w-full">
            {choiceList.map((choice, index) => (
                <div className='w-full'>
                    <button className="flex items-center justify-center py-2 w-2/3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer focus:border-blue-600 hover:text-gray-600" value={index+1} onClick={handleChange}>{choice}</button>
                </div>
            ))}
        </div>
    )
}