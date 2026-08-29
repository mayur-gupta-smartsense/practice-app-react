/**
 * MultiStepWizard — a 4-step wizard with ZERO JavaScript logic.
 *
 * The trick, in one sentence:
 *   4 hidden radio inputs ARE the state machine. Only one can be
 *   checked at a time (that's just how radios work). Each step's
 *   content is hidden by default, and Tailwind's `peer-checked`
 *   shows it only when its matching radio is checked. "Next" and
 *   "Prev" are just <label> elements pointing at a radio's id —
 *   clicking a label checks that radio, same as clicking the radio
 *   itself.
 *
 * No useState. No onClick. No conditional rendering in JS.
 */
export default function MultiStepWizard() {
    return (
        <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-6">
            <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                {/* ------------------------------------------------------------
            THE STATE: 4 radios in one group, so only one is ever
            checked. `sr-only` hides them visually but keeps them
            clickable and screen-reader accessible.
        ------------------------------------------------------------ */}
                <input type="radio" name="wiz" id="s1" defaultChecked className="peer/s1 sr-only" />
                <input type="radio" name="wiz" id="s2" className="peer/s2 sr-only" />
                <input type="radio" name="wiz" id="s3" className="peer/s3 sr-only" />
                <input type="radio" name="wiz" id="s4" className="peer/s4 sr-only" />

                {/* ------------------------------------------------------------
            STEP 1
            `hidden` = off by default.
            `peer-checked/s1:block` = "if the radio named s1 is
            checked, override `hidden` and show this as a block."
            That's the entire rule. No nesting, no descendants.
        ------------------------------------------------------------ */}
                <div className="hidden peer-checked/s1:block">
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">Step 1 of 4</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">Personal Info</h2>
                    <p className="mt-1 text-sm text-slate-400">Tell us who you are.</p>

                    <div className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div className="mt-8 flex justify-end">
                        <label htmlFor="s2" className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">
                            Next
                        </label>
                    </div>
                </div>

                {/* STEP 2 — same pattern, just swap s1 → s2 */}
                <div className="hidden peer-checked/s2:block">
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">Step 2 of 4</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">Address</h2>
                    <p className="mt-1 text-sm text-slate-400">Where should we reach you?</p>

                    <div className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Street address"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                placeholder="ZIP code"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                        <label htmlFor="s1" className="cursor-pointer rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800">
                            Prev
                        </label>
                        <label htmlFor="s3" className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">
                            Next
                        </label>
                    </div>
                </div>

                {/* STEP 3 */}
                <div className="hidden peer-checked/s3:block">
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">Step 3 of 4</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">Preferences</h2>
                    <p className="mt-1 text-sm text-slate-400">Pick what matters to you.</p>

                    <div className="mt-6 space-y-3">
                        <label className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-300">
                            <input type="checkbox" className="h-4 w-4 accent-indigo-500" />
                            Email me product updates
                        </label>
                        <label className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-300">
                            <input type="checkbox" className="h-4 w-4 accent-indigo-500" />
                            Subscribe to the newsletter
                        </label>
                    </div>

                    <div className="mt-8 flex justify-between">
                        <label htmlFor="s2" className="cursor-pointer rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800">
                            Prev
                        </label>
                        <label htmlFor="s4" className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">
                            Next
                        </label>
                    </div>
                </div>

                {/* STEP 4 */}
                <div className="hidden peer-checked/s4:block">
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">Step 4 of 4</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">Review</h2>
                    <p className="mt-1 text-sm text-slate-400">Everything look right?</p>

                    <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm text-slate-400">
                        No validation and no backend are wired up — this is a static, CSS-only
                        demo, so there's nothing to actually review yet.
                    </div>

                    <div className="mt-8 flex justify-between">
                        <label htmlFor="s3" className="cursor-pointer rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800">
                            Prev
                        </label>
                        <label htmlFor="s1" className="cursor-pointer rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400">
                            Restart
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}