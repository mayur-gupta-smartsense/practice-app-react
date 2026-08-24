export default function ProgressBar() {
  return (
    <div className="pb-[100vh]">
      {
        // outer wrapper: centers the card in the middle of the screen
        // flex + items-center + justify-center = center content horizontally and vertically
        // min-h-screen = element is at least as tall as the browser window
        // bg-gray-100 = light gray background color
        // p-8 = padding on all sides
      }
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
        {
          // card: holds the label row and the bar
          // w-full = take the full width available
          // max-w-md = but never grow past a medium width, so it stays readable on big screens
        }
        <div className="w-full max-w-xl">
          {
            // label row: "Progress" on the left, "30%" on the right
            // mb-2 = small gap below this row, before the bar
            // flex + justify-between = push the two children to opposite ends
            // text-sm = small text size
            // font-medium = slightly bold weight
            // text-gray-700 = dark gray text color
          }
          <div className="mb-2 flex justify-between text-sm font-medium text-gray-700">
            <span>Progress</span>
            <span>30%</span>
          </div>
          {
            // track: the empty background bar the fill sits inside
            // h-4 = fixed bar height
            // w-full = stretches to the full width of the card
            // overflow-hidden = clips the fill's corners so they don't poke outside the track
            // rounded-full = fully rounded, pill-shaped corners
            // bg-gray-300 = medium gray, this is the "unfilled" look
          }
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-300">
            {
              // fill: the colored part that represents progress
              // h-full = matches the track's full height
              // w-[30%] = fixed custom width, exactly 30% of the track
              // rounded-full = rounded corners to match the track
              // bg-blue-600 = blue color so it stands out as "filled"
            }
            <div className="h-full w-[30%] rounded-full bg-blue-600" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex max-w-xl flex-col w-full items-center justify-center">
        <div className="max-w-xl w-full flex justify-between text-sm font-medium">
          <span>Progress</span>
          <span>30%</span>
        </div>
        <div className="bg-orange-600 w-full h-4 overflow-hidden rounded-full">
          <div className="h-full w-[30%] rounded-full bg-blue-100"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
