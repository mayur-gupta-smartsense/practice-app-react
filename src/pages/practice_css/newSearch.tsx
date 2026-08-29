export default function NewSearch() {
    return (
        <div className = "flex  justify-center items-center min-h-screen">
            {/*
              Wrapper <div> using flexbox (flex, items-center) to sit the input
              and button side by side, with no gap so they read as one control.
            */}
            {/*
              -translate-y-[20vh]: shifts this element up ("north") by 20% of
              the viewport height. Uses vh (viewport height) instead of a
              percentage because percentage-based transforms are relative to
              the element's own size, not the screen.
            */}
            <div className="flex items-center -translate-y-[20vh]">
                {/*
                  <input> styled with Tailwind:
                  - px-4 py-2: inner spacing so text isn't cramped
                  - border border-gray-300: visible outline
                  - rounded-l-full: rounded on the left only (right stays square
                    to butt up against the button)
                  - focus:outline-none focus:ring-2 focus:ring-blue-400: replaces
                    the default browser focus outline with a soft blue ring
                */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {/*
                  <button> styled with Tailwind:
                  - px-5 py-2: matches input's vertical padding so heights align
                  - bg-blue-500 hover:bg-blue-600: solid fill with a darker hover state
                  - text-white: readable label on the blue background
                  - rounded-r-full: rounded on the right only, completing the pill shape
                */}
                <button
                    type="button"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-full"
                >
                    Search
                </button>
            </div>
        </div>
    )
}