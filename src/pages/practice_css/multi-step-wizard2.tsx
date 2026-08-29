export default function MultiStepWizard2() {
    return (
        <div className="bg-slate-700 min-h-screen flex h-full items-center justify-center">
            <div className="max-w-xl bg-slate-900 border border-slate-500 rounded-2xl shadow-lg p-8">
                <input type="radio" defaultChecked name="main-hoon-hidden" id="s1" className="peer/s1 sr-only" />
                <input type="radio" name="main-hoon-hidden" id="s2" className="peer/s2 sr-only" />
                <input type="radio" name="main-hoon-hidden" id="s3" className="peer/s3 sr-only" />
                <input type="radio" name="main-hoon-hidden" id="s4" className="peer/s4 sr-only" />

                <div className="peer-checked/s1:block hidden">
                    <p className="text-sm text-indigo-400">Step 1 of 4</p>
                    <h2 className="font-extrabold text-white">Personal Info</h2>
                    <p className="mt-1 text-sm text-slate-400">Tell us who you are</p>
                    <div className="space-y-6 w-full mt-6">
                        <input className="w-full p-3 rounded-xl border-slate-700 bg-slate-800" type="text" placeholder="Full Name" name="" id="" />
                        <input className="w-full p-3 rounded-xl border-slate-700 bg-slate-800" placeholder="Email" type="text" />
                    </div>
                    <div className="flex mt-8 justify-end">
                        <label htmlFor="s2" className="text-white bg-indigo-600 px-5 py-2 cursor-pointer rounded-lg">Next</label>
                    </div>
                </div>

                <div className="peer-checked/s2:block hidden">
                    <p className="text-sm text-indigo-400">Step 2 of 4</p>
                    <h2 className="font-extrabold text-white">Aloha!!! Info</h2>
                    <p className="mt-1 text-sm text-slate-400">Tell us who you are</p>
                    <div className="space-y-6 w-full mt-6">
                        <input className="w-full p-3 rounded-xl border-slate-700 bg-slate-800" type="text" placeholder="Full Name" name="" id="" />
                        <input className="w-full p-3 rounded-xl border-slate-700 bg-slate-800" placeholder="Email" type="text" />
                    </div>
                    <div className="flex mt-8 justify-between   ">
                        <label htmlFor="s1" className="text-white bg-indigo-600 px-5 py-2 cursor-pointer rounded-lg">Prev</label>
                        <label htmlFor="s3" className="text-white bg-indigo-600 px-5 py-2 cursor-pointer rounded-lg">Next</label>

                    </div>
                </div>
            </div>
        </div>
    )
}