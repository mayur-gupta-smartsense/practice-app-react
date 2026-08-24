/** export default function Form2() {
    return (
        <form className="border border-gray-200 shadow-lg p-5 w-[600px] mx-auto rounded-lg my-[45px] space-y-3" >
            <h1 className="text-lg font-medium"> Profile Form </h1>


            <div className="flex flex-col mt-5">
                <label htmlFor="fullName" className="text-gray-800 text-sm font-medium ">Full Name:</label>
                <input type="text" className="p-[9px] border border-gray-300 rounded-lg" />
            </div>


            <div className="flex flex-col mt-5">
                <label htmlFor="Email" className="text-gray-800 text-sm font-medium ">Email:</label>
                <input type="email" name="Email" className="p-[9px] border border-gray-300 rounded-lg" />
            </div>


            <div className="flex flex-col mt-5">
                <label htmlFor="Bio" className="text-gray-800 text-sm font-medium ">Bio:</label>
                <textarea rows={4} name="Bio" className="p-[9px] border border-gray-300 rounded-lg resize-y"> </textarea>
            </div>



            <fieldset className="border border-gray-300 p-4 rounded-lg">
                <legend className="text-sm font-medium text-gray-700 px-1"> Gender</legend>
                <div className="flex gap-2">
                    <label className="flex items-center gap-2" htmlFor="">
                        <input type="radio" name="gender" value="female" />
                        Female
                    </label>
                    <label className="flex items-center gap-2" htmlFor="">
                        <input type="radio" name="gender" value="male" />
                        Male
                    </label>
                    <label className="flex items-center gap-2" htmlFor="">
                        <input type="radio" name="gender" value="other" />
                        Other
                    </label>
                </div>
            </fieldset>


            <div className="flex flex-col gap-1">
                <label htmlFor="Country" className="text-gray-800 text-sm font-medium ">Country</label>
                <select name="Country" className="flex flex-col p-4 border border-gray-200 bg-white rounded-lg" id="">
                    <option value="Selected" disabled selected>Select Country</option>
                    <option value="US">US</option>
                    <option value="IN">In</option>
                    <option value="Am">Am</option>
                    <option value="Pak">Pak</option>
                </select>
            </div>


            <div className="flex flex-col gap-1">
                <label htmlFor="profilephoto"> Profile Picture:</label>
                <input type="file" name="profilephoto" id="" className=" file:text-blue-400  file:rounded-lg file:border file:border-none file:p-2 file:bg-blue-50 file:font-sm file:font-medium" />
            </div>


            <div className="flex flex-col mt-5">
                <label htmlFor="dateOfBirth" className="text-gray-800 text-sm font-medium ">Date of Birth</label>
                <input type="date" name="dateOfBirth" className="p-[9px] border border-gray-300 rounded-lg" />
            </div>


            <div className="flex flex-col mt-5">
                <button type="button" className="max-w-[100px] px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Success</button>
            </div>

        </form>
    )
}
*/
export default function Form2() {
    return (
        <form className="w-[650px] rounded-lg p-5 border border-gray-300 shadow-lg mx-auto my-5 space-y-4 px-7">
            <h1 className="font-extrabold text-lg"> Profile Form</h1>
            <div className="flex flex-col gap-1">
                <label htmlFor="FirstName" className="text-gray-700 text-sm font-medium">Full Name</label>
                <input type="text" placeholder="John Doe" className="p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="Email" className="text-gray-700 text-sm font-medium">Email</label>
                <input type="email" placeholder="John Doe" className="p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="Email" className="text-gray-700 text-sm font-medium">Bio</label>
                <textarea rows={4} placeholder="Tell us something about" className="p-2 border border-gray-300 rounded-lg resize-y" >
                </textarea>
            </div>

            <fieldset className="flex flex-col gap-1 pb-[15px] pl-[12px] border border-gray-300 max-h-[100px] rounded-lg">
                <legend className="text-sm text-gray-600 p-2 font-medium">Gender</legend>
                <div className="flex gap-4 text-lg text-gray-600">
                    <label>
                        <input type="radio" className="mr-2" name="Gender" value="Female" />
                        Female
                    </label>
                    <label>
                        <input type="radio" className="mr-2" name="Gender" value="Male" />
                        Male
                    </label>
                    <label>
                        <input type="radio" className="mr-2" name="Gender" value="Other" />
                        Other
                    </label>
                </div>
            </fieldset>


            <div className="flex flex-col gap-1">
                <label htmlFor="Country" className="text-gray-700 text-sm font-medium"> Country</label>
                <select className="p-2 border border-gray-300 rounded-lg bg-white text-gray-500">
                    <option value="Select" disabled selected> Selecte a country</option>
                    <option value="US"> US</option>
                    <option value="IN">India</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="birthday" className="text-gray-700 text-sm font-medium">Date of Birth</label>
                <input type="date" name="birthday" className="p-2 border border-gray-300 rounded-lg datepicker-input" />
            </div>

            <div className="flex flex-col gap-1">
                <input type="file" className="p-2 text-sm text-gray-700 px-4 file:mr-4 border border-none file:bg-indigo-100 file:p-3 file:rounded-lg file:text-blue-700 file:border file:border-none file:cursor-pointer rounded-lg " />
            </div>

            <div className="flex flex-col gap-1">
                <button className="p-2 bg-blue-600 border max-w-[135px] hover:bg-blue-400 hover:text-black border-gray-300 rounded-lg text-white" >
                    Success </button>
            </div>


        </form>
    )
}