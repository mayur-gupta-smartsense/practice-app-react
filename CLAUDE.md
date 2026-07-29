## Figma → React conversion rules

When converting a Figma design to code, translate placeholder boxes into
real semantic HTML based on what they represent, not their literal shape:

- Boxes with a chevron/dropdown affordance → <select>
- Boxes with single-line placeholder text → <input>
- Boxes with multi-line placeholder text (e.g. "Bio") → <textarea>
- Dashed-border upload boxes → <input type="file">
- Grid/row layouts with a header row → <table> with <thead>/<tbody>
- Toggle-shaped elements → <input type="checkbox"> or a real toggle component

Never emit a plain <div>/<p> for something that is clearly a form control.
