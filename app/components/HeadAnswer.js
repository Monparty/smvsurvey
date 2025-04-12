import Progress from '../components/Progress'

export default function HeadAnswer({progress, title, question}) {
    return (
        <div>
            <div className='flex flex-col gap-5 mb-5'>
                <h2 className='fonr-bold text-2xl'>
                    {title}
                </h2>
                <Progress progress={progress} />
                <h2>
                    {question}
                </h2>
            </div>
        </div>
    )
}