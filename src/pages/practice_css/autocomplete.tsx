// This is a STATIC mockup only — no typing/filtering logic, per this folder's CLAUDE.md.
// The textbox does not actually filter anything; the 5 fruits are always shown below it.

export default function Autocomplete() {
  return (
    <div
      // w-72     = fixed width box (18rem), so it doesn't stretch full screen
      // mx-auto  = auto left/right margin, centers the box on the page
      // mt-[200px] = pushes the whole box down from the top
      className="w-72 mx-auto mt-[200px]"
    >
      {
      // the textbox where a user would normally type to search 
      }
      <input
        type="text"
        placeholder="Search a fruit..."
        // w-full               = input fills the full width of the parent div
        // border               = adds a 1px border all around
        // border-gray-300      = light gray color for that border
        // rounded-md           = rounds the corners a bit
        // px-3                 = left/right inner padding (space before text)
        // py-2                 = top/bottom inner padding (makes it taller)
        // text-sm              = smaller font size
        // focus:outline-none   = removes the browser's default blue outline on click
        // focus:ring-2         = adds our own 2px glow ring instead, on click
        // focus:ring-blue-400  = makes that glow ring blue
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {
      // the dropdown list of suggestions, sitting right under the textbox
      }
      <ul
        // mt-1              = small gap between input and this list
        // border            = 1px border around the whole list
        // border-gray-200   = very light gray for that border
        // rounded-md        = rounded corners on the list box
        // shadow-sm         = a light drop shadow so it looks "lifted" like a real dropdown
        // bg-white          = white background
        // divide-y          = draws a thin line BETWEEN each <li>, automatically
        // divide-gray-100   = very light gray color for those dividing lines
        className="mt-1 border border-gray-200 rounded-md shadow-sm bg-white divide-y divide-gray-100"
      >
        {
        // same classes repeat on every <li> below, explained once here:
        }
        {
        // px-3 py-2 = inner spacing so text isn't glued to the edges
        }
        {
        // text-sm = smaller font, matches the input text size
        }
        {
        // hover:bg-blue-50 = light blue background when mouse is over the row
        }
        {
        // cursor-pointer = shows a hand/pointer cursor, hints it's clickable
        }
        <li className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">Apple</li>
        <li className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">Banana</li>
        <li className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">Mango</li>
        <li className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">Orange</li>
        <li className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">Grapes</li>
      </ul>
    </div>

    )
}
// 

//  export default function Autocomplete(){
//     return (

//         <div className="w-72 mt-[200px] mx-auto ">
//             <input className ="w-full border border-gray-300 rounded-md px-3 py-2 text-sm " type="text" placeholder="Search a fruit.."/>
//             <ul className="mt-[4px] border border-gray-200 shadow-sm rounded-md bg-white">
//                 <li className="p-2 cursor-pointer text-sm hover:bg-blue-50">Apple</li>
//                 <li className="p-2 cursor-pointer text-sm hover:bg-blue-50">Orange</li>
//                 <li className="p-2 cursor-pointer text-sm hover:bg-blue-50">Mango</li>
//                 <li className="p-2 cursor-pointer text-sm hover:bg-blue-50" >Pineapple</li>
//                 <li className="p-2 cursor-pointer text-sm hover:bg-blue-50">Guava</li>

//             </ul>
//         </div>
    
//     )

//  }
// How I built this, step by step:
//
// 1. Read the folder's CLAUDE.md rule: no state/hooks/handlers here, only
//    static markup + Tailwind. A real autocomplete needs JS to filter as you
//    type, so I couldn't build that version here — this is a visual mockup
//    instead: it LOOKS like an autocomplete, but the list never changes.
//
// 2. Wrapped everything in one <div> and gave it a fixed width (w-72) plus
//    mx-auto so it sits centered on the page instead of stretching edge to edge.
//
// 3. Textbox: a plain <input>. Used placeholder text so it reads as a search
//    box. Added border, rounding, padding, and a focus ring (focus:ring-2) so
//    it looks and feels clickable even though it doesn't do anything yet.
//
// 4. Suggestion list: a <ul> right under the input, with mt-1 to sit close to
//    it like a real dropdown. divide-y draws a thin line between each item
//    instead of me adding a border to every <li> by hand.
//
// 5. Each fruit is a <li> with hover:bg-blue-50 — that's just a visual cue
//    that the row is "clickable," even without an onClick behind it.
//
// 6. Kept it to exactly 5 hardcoded items (Apple, Banana, Mango, Orange,
//    Grapes) since the task asked for 5 values, and no logic means no map()
//    over an array — just 5 lines written out.
