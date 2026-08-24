/*export default function Kanban2() {
    return (
        <div className="pb-[100vh]">
            <div className="bg-indigo-500 rounded-2xl h-[100px] text-center pt-2">
                <h2 className="uppercase text-white font-extrabold text-5xl mt-5">
                    Kanban Board
                </h2>
            </div>
            <div className="flex items-start">
                <section className="rounded-xl flex-1 mt-[100px] mx-4 p-4 w-[220px] text-white bg-green-600">
                    <h2>
                        <span className="text-black p-2 rounded-full text-sm bg-yellow-300 mr-4">1</span>
                        To Do
                    </h2>
                    <ul className="flex flex-col gap-3 mt-[15px]">
                        <li className="text-center bg-red-400 rounded-xl min-h-[102px] justify-center items-center px-3 py-2 flex">HElooasd knasdkn</li>
                        <li className="text-center bg-red-400 rounded-xl min-h-[102px] justify-center items-center px-3 py-2 flex">HElooasd knasdkn</li>
                        <li className="text-center bg-red-400 rounded-xl min-h-[102px] justify-center items-center px-3 py-2 flex">HElooasd knasdkn</li>
                        <li className="text-center bg-red-400 rounded-xl min-h-[102px] justify-center items-center px-3 py-2 flex">HElooasd knasdkn</li>

                    </ul>                    
                </section>
                <section className="flex-1 mt-[100px] mx-4 p-4 w-[220px] bg-green-600"></section>
                <section className="flex-1 mx-4 p-4 w-[220px] bg-green-600"></section>
                <section className="flex-1 mx-4 p-4 w-[220px] bg-green-600"></section>
            </div>
        </div>
    )
}
    */

export default function Kanban2() {
    return (
        <div className="pb-[100vh]">
            <div className="bg-blue-700 ">
                <h2 className="uppercase text-[27px] font-extrabold text-white text-center py-[15px]">
                    Kanban board
                </h2>
            </div>
            <div className="flex items-start gap-3 pt-[20px]">
                <section className="flex-1 min-h-[50px] rounded-lg bg-green-400 px-4 py-3">
                    <h2>
                        <span className=" p-2 rounded-full bg-yellow-300">3</span>
                        To Do
                    </h2>
                    <ul className="mt-[20px]">
                        <li className=" bg-yellow-200 rounded-lg flex text-center justify-center items-center min-h-[90px]"> jsdkajskdjkasd</li>
                    </ul>
                </section>
                <section className="flex-1 min-h-[50px] rounded-lg bg-green-400 px-4 py-3"></section>
                <section className="flex-1 min-h-[50px] rounded-lg bg-green-400 px-4 py-3"></section>
                <section className="flex-1 min-h-[50px] rounded-lg bg-green-400 px-4 py-3"></section>

            </div>

        </div>

    )
}