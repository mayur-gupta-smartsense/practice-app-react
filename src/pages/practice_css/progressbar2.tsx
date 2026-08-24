export default function ProgressBar2() {
    return(
    <div className="flex min-h-screen pb-[20vh] items-center bg-purple-500 justify-center">
        <div className="w-full max-w-xl">
            <div className="flex justify-between">
                <span>Progress</span>
                <span>30%</span>
            </div>
            <div className="rounded-full h-4 bg-orange-200">
                <div className="rounded-full bg-black h-full w-[30%]"></div>
            </div>
        </div>
    </div>
    )
}