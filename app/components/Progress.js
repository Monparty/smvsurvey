export default function Progress({ progress }) {
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ width: `${progress}%` }}
        ></div>
        </div>
    );
}