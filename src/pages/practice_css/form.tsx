export default function Form() {
  return (
    <form
      // max-w-xl caps the form's width so it stays readable on wide screens
      // mx-auto centers the form horizontally in the page
      // p-8 adds padding on all four sides inside the card
      // bg-white gives the card a plain white background
      // rounded-2xl rounds the card's corners a lot
      // shadow-lg adds a soft drop shadow so the card lifts off the page
      // space-y-6 adds vertical space between each direct child field
      className="max-w-xl border border-gray-200 mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 my-[45px]"
    >
      <h1
        // text-2xl makes the heading large
        // font-bold makes the heading text bold
        // text-gray-800 colors the heading a dark gray
        className="text-2xl font-bold text-gray-800"
      >
        Profile Form
      </h1>

      <div
        // flex turns this wrapper into a flex container
        // flex-col stacks the label and input vertically
        // gap-1 adds a small gap between the label and the input
        className="flex flex-col gap-1"
      >
        <label
          // text-sm makes the label text small
          // font-medium gives the label a medium font weight
          // text-gray-700 colors the label a medium gray
          className="text-sm font-medium text-gray-700"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          // border adds a 1px border around the input
          // border-gray-300 colors that border light gray
          // rounded-lg rounds the input's corners
          // px-3 adds horizontal padding inside the input
          // py-2 adds vertical padding inside the input
          // text-gray-900 colors the typed text near-black
          // focus:outline-none removes the browser's default focus outline
          // focus:ring-2 adds a 2px focus ring instead
          // focus:ring-blue-500 colors that focus ring blue
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Jane Doe"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          placeholder="jane@example.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="bio"
        >
          Bio
        </label>
        <textarea
          // resize-y lets the user resize the textarea's height only, not its width
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          id="bio"
          name="bio"
          rows={4}
          placeholder="Tell us a little about yourself..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          id="age"
          name="age"
          min={0}
          max={150}
          step={1}
          placeholder="18"
        />
      </div>

      <fieldset
        // border adds a 1px border around the whole group
        // border-gray-300 colors that border light gray
        // rounded-lg rounds the group's corners
        // p-4 adds padding on all sides inside the group
        // flex turns this into a flex container
        // flex-col stacks the legend and the options vertically
        // gap-2 adds a small gap between the legend and the options row
        className="border border-gray-300 rounded-lg p-4 flex flex-col gap-2"
      >
        <legend
          // text-sm makes the legend text small
          // font-medium gives the legend a medium font weight
          // text-gray-700 colors the legend a medium gray
          // px-1 adds a little horizontal padding so the text isn't flush on the border
          className="text-sm font-medium text-gray-700 px-1"
        >
          Gender
        </legend>
        <div
          // flex turns this into a flex container
          // gap-4 spaces the three radio options apart
          className="flex gap-4"
        >
          <label
            // flex turns the label into a flex container
            // items-center vertically centers the radio dot with its text
            // gap-2 adds a small gap between the radio dot and its text
            // text-gray-700 colors the option text a medium gray
            className="flex items-center gap-2 text-gray-700"
          >
            <input
              // h-4 sets a fixed height so the radio dot is a small circle
              // w-4 sets a matching width so it stays circular
              // text-blue-600 colors the dot blue once selected
              // focus:ring-blue-500 colors the focus ring blue when tabbed to
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              type="radio"
              name="gender"
              value="female"
            />
            Female
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              type="radio"
              name="gender"
              value="male"
            />
            Male
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              type="radio"
              name="gender"
              value="other"
            />
            Other
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="country"
        >
          Country
        </label>
        <select
          // bg-white keeps the dropdown's background white, matching the other fields
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="country"
          name="country"
          defaultValue=""
        >
          <option value="" disabled>
            Select a country
          </option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
        </select>
      </div>

      <fieldset className="border border-gray-300 rounded-lg p-4 flex flex-col gap-2">
        <legend className="text-sm font-medium text-gray-700 px-1">
          Interests
        </legend>
        <div
          // flex turns this into a flex container
          // flex-col stacks the checkbox rows vertically
          // gap-2 adds a small gap between each checkbox row
          className="flex flex-col gap-2"
        >
          <label className="flex items-center gap-2 text-gray-700">
            <input
              // rounded gives the checkbox box slightly rounded corners
              className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              type="checkbox"
              name="interests"
              value="sports"
            />
            Sports
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              type="checkbox"
              name="interests"
              value="music"
            />
            Music
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              type="checkbox"
              name="interests"
              value="reading"
            />
            Reading
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              type="checkbox"
              name="interests"
              value="travel"
            />
            Travel
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="avatar"
        >
          Profile Picture
        </label>
        <input
          // text-sm keeps the "no file chosen" text small
          // text-gray-700 colors that text a medium gray
          // file:mr-4 adds space to the right of the button part
          // file:py-2 adds vertical padding inside the button part
          // file:px-4 adds horizontal padding inside the button part
          // file:rounded-lg rounds the button part's corners
          // file:border-0 removes the button part's default border
          // file:bg-blue-50 gives the button part a very light blue background
          // file:text-blue-700 colors the button part's text blue
          // file:font-medium gives the button part's text a medium weight
          // hover:file:bg-blue-100 darkens the button part's background on hover
          className="text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-medium hover:file:bg-blue-100"
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="experience"
        >
          Experience Level
        </label>
        <input
          // w-full stretches the slider across the full width of the form
          // accent-blue-600 colors the slider's track and thumb blue
          className="w-full accent-blue-600"
          type="range"
          id="experience"
          name="experience"
          min={0}
          max={100}
          step={10}
          defaultValue={50}
        />
        <div
          // flex turns this into a flex container
          // justify-between pushes the two labels to opposite ends
          // text-xs makes the labels extra small
          // text-gray-500 colors the labels a lighter gray
          className="flex justify-between text-xs text-gray-500"
        >
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="dob"
        >
          Date of Birth
        </label>
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          id="dob"
          name="dob"
        />
      </div>

      <button
        // mt-4 adds extra space above the button, separating it from the last field
        // bg-blue-600 gives the button a solid blue background
        // text-white colors the button text white
        // font-semibold gives the button text a semi-bold weight
        // py-2 adds vertical padding inside the button
        // px-4 adds horizontal padding inside the button
        // rounded-lg rounds the button's corners
        // hover:bg-blue-700 darkens the background on hover
        // transition-colors animates the background color change smoothly
        className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
