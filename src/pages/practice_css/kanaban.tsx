// This is a STATIC mockup only — no drag-and-drop logic, per this folder's CLAUDE.md.
// Real drag-and-drop needs JS event handlers (onDragStart/onDrop or a library),
// and this folder allows no JS/TS logic at all, so the cards just sit in place.

export default function Kanban() {
  return (
    // min-h-screen = box is always at least the full viewport height
    // bg-gray-50   = very light gray page background
    // p-8          = breathing room around the whole board
    <div className="pb-[100vh]">
      {
        // <div className="min-h-screen bg-gray-50 p-8">

        // the big blue banner at the top with the "KANBAN BOARD" title
      }
      <div
        // bg-indigo-500 = the blue/purple banner color
        // rounded-2xl   = big rounded corners on the banner
        // py-10         = tall top/bottom padding so the banner has height
        // mb-8          = gap between the banner and the columns below
        className="bg-indigo-500 rounded-2xl h-[100px] mb-8">
        <h1
          // text-5xl       = big heading size
          // font-extrabold = thick, bold letters like the picture
          // uppercase      = forces capital letters
          // tracking-wide  = spaces the letters out a bit
          // text-green-100 = the pale mint-green text color
          // text-center    = centers the title inside the banner
          className="text-5xl font-extrabold uppercase tracking-wide text-green-100 text-center"
        >
          Kanban Board
        </h1>
      </div>

      {
        // the row of columns, side by side
      }
      <div
        // flex     = lays the columns out left-to-right
        // gap-6    = even spacing between columns
        // items-start = columns don't stretch to match each other's height
        className="flex gap-6 items-start"
      >
        {
          // ===== Column 1: TO DO =====
        }
        <section
          // bg-gray-200 = the light gray column background
          // rounded-2xl = rounded column corners
          // p-4         = inner padding around the column's contents
          // flex-1      = columns share the row's width equally
          // min-w-[220px] = never squish narrower than this
          className="bg-gray-200 rounded-2xl p-4 flex-1 min-w-[220px]"
        >
          <h2
            // flex items-center gap-2 = number badge and title sit on one line
            // font-bold uppercase text-sm = small bold caps label
            // mb-4 = gap before the first card
            className="flex items-center gap-2 font-bold uppercase text-sm mb-4"
          >
            <span
              // w-6 h-6 rounded-full = a small circle
              // bg-green-200 = mint circle background
              // flex items-center justify-center = centers the number inside
              // text-xs font-bold = small bold digit
              className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold"
            >
              1
            </span>
            To Do
          </h2>

          <ul
            // flex flex-col gap-3 = cards stacked with even spacing between them
            className="flex flex-col gap-3"
          >
            {
              // bg-green-100 = the mint-green card color
              // rounded-lg   = rounded card corners
              // min-h-20     = every card has the same minimum height
              // px-3 py-2    = inner padding around the card text
              // flex items-center = vertically centers short text in the card
              // text-sm text-center = small centered text like the mockup
            }
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2  flex items-center justify-center text-sm text-center">
              Define sprint goals
            </li>
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2  flex items-center justify-center text-sm text-center">
              Review and refine requirements
            </li>
            {
              // an empty placeholder card, same size, no text
            }
            <li className="bg-green-100 flex rounded-lg min-h-20 px-3 py-2"></li>
          </ul>

          {
            // the little refresh icon sitting under the To Do cards
          }
          <div
            // flex justify-center = centers the icon under the column
            // mt-3 = gap above it
            className="flex justify-center mt-3"
          >
            <span
              // w-8 h-8 rounded-full = small circle button shape
              // bg-white = white circle so it stands out on the gray column
              // flex items-center justify-center = centers the arrow glyph
              // text-gray-500 = muted icon color
              // shadow-sm = light lift off the background
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-sm"
            >
              ↻
            </span>
          </div>
        </section>

        {
          // ===== Column 2: IN PROGRESS =====
        }
        <section className="bg-gray-200 rounded-2xl p-4 flex-1 min-w-[220px]">
          <h2 className="flex items-center gap-2 font-bold uppercase text-sm mb-4">
            <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold">
              2
            </span>
            In Progress
          </h2>

          <ul className="flex flex-col gap-3">
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
          </ul>
        </section>

        {
          // ===== Column 3: DONE =====
        }
        <section className="bg-gray-200 rounded-2xl p-4 flex-1 min-w-[220px]">
          <h2 className="flex items-center gap-2 font-bold uppercase text-sm mb-4">
            <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold">
              3
            </span>
            Done
          </h2>

          <ul className="flex flex-col gap-3">
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
          </ul>
        </section>

        {
          // ===== Column 4: APPROVED =====
        }
        <section className="bg-gray-200 rounded-2xl p-4 flex-1 min-w-[220px]">
          <h2 className="flex items-center gap-2 font-bold uppercase text-sm mb-4">
            <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold">
              4
            </span>
            Approved
          </h2>

          <ul className="flex flex-col gap-3">
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
            <li className="bg-green-100 rounded-lg min-h-20 px-3 py-2"></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

// How I built this, step by step:
//
// 1. Read the folder's CLAUDE.md rule: no state/hooks/handlers here, only
//    static markup + Tailwind. Real Kanban drag-and-drop needs JS (onDragStart,
//    onDrop, or a library like dnd-kit) to move cards between columns, so that
//    part is skipped entirely — this is a visual mockup, cards never move.
//
// 2. Outer <div> is the page background (bg-gray-50) with padding (p-8) so
//    the board doesn't touch the edges of the screen.
//
// 3. <header> is the blue banner: bg-indigo-500 for the color, rounded-2xl
//    for the rounded corners, and a bold uppercase <h1> in pale green
//    (text-green-100) centered inside it, matching the picture's title.
//
// 4. The four columns are laid out with a single flex row (flex gap-6) so
//    they sit side by side with even spacing, each taking equal width
//    (flex-1) but never shrinking below min-w-[220px].
//
// 5. Each column is a <section> (semantic — it's a distinct part of the
//    board) with a gray background and rounded corners, containing:
//      - an <h2> label with a small numbered circle badge (the mint-green
//        <span> with rounded-full) followed by the column name in caps
//      - a <ul> of <li> cards, since a column of tasks is naturally a list
//
// 6. Cards are plain <li> elements, not form controls — per the root
//    CLAUDE.md's Figma-conversion rule, only boxes that clearly represent a
//    form control (dropdown, text field, textarea, upload, table, toggle)
//    should become that element. These are just task cards, so a styled
//    list item is the right semantic fit. Two cards carry the visible task
//    text from the picture; the rest are empty placeholders of the same
//    size (min-h-20) to match the mockup's blank cards.
//
// 7. The small circular refresh icon under the To Do column is a decorative
//    <span> styled as a round button (rounded-full, shadow-sm) — no onClick
//    behind it, since click handlers aren't allowed in this folder.
