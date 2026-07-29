import React, {useState, useEffect} from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const fieldsAdded = [
  { name: "Full Name", type: "Textbox" },
  { name: "Profile Photo", type: "Image Upload" },
  { name: "Resume", type: "File Upload" },
  { name: "Skills", type: "Multiselect" },
  { name: "Bio", type: "Textarea" },
];

// const submissions = [
//   {
//     id: "#001",
//     fullName: "Priya Sharma",
//     skills: "React, Node.js",
//     bio: "Frontend dev, 4 yrs exp...",
//     resume: "resume.pdf",
//     submitted: "2 hrs ago",
//     striped: false,
//   },
//   {
//     id: "#002",
//     fullName: "Arjun Mehta",
//     skills: "Python, SQL",
//     bio: "Data analyst, loves char...",
//     resume: "cv_arjun.pdf",
//     submitted: "5 hrs ago",
//     striped: true,
//   },
//   {
//     id: "#003",
//     fullName: "Sara Khan",
//     skills: "Figma, UX",
//     bio: "Product designer...",
//     resume: "portfolio.pdf",
//     submitted: "1 day ago",
//     striped: false,
//   },
// ];

type Field = {
  _id: string;
  label: string;
  type: string;
  required: boolean;
  order: number;
};

type FormItem = {
  _id: string;
  name: string;
  fields: Field[];
  archivedAt: string | null;
  createdAt: string;
};


type UploadAnswer = {
  path: string;
  originalName: string;
  size: number;
  mimeType?: string;
}
type SubmissionAnswerValue = string | string[] | UploadAnswer;

type Submission = {
  _id: string;
  formId: string;
  answers: Record<string, SubmissionAnswerValue>;
  createdAt: string;
  updatedAt?: string;
}

const Project6 = () => {
  // http://localhost:5000/api/forms
  const [forms, setForms] = useState<FormItem[]>([]);
  const [formId, setFormId] = useState<string | null>(null);
  const [submissions, setSubmissions]  = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchForms();
  }, []);

  useEffect(() => {
  if (forms.length) setFormId(forms[0]._id);
}, [forms]);

  useEffect(() => {
    fetchSubmissions();
}, [formId]);

  const fetchForms = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/forms`);
      if (!response.ok) throw new Error("Failed to load forms");
      const data:FormItem[] = await response.json();
      setForms(data)
    } catch (err) {
      setError("Could not load images from the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      if(!formId) 
         return;
      const response = await fetch(`${API_BASE_URL}/api/forms/${formId}/submissions`);
      if (!response.ok) throw new Error("Failed to load submissions");
      const data: Submission[] = await response.json();
      setSubmissions(data)
    } catch (err) {
      setError("Could not load images from the server.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-full flex-col bg-[#f7fafa] overflow-hidden">
      {error && (
        <div className="w-full border-b border-red-200 bg-red-50 px-4 py-2 text-[13px] font-medium text-red-700">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="w-full border-b border-[#d9dbe0] bg-[#f0fafa] px-4 py-2 text-[13px] font-medium text-[#21262e]">
          Loading...
        </div>
      )}
      {/* Top Row (65%) */}
      <div className="flex h-[65%] w-full items-start gap-px overflow-hidden">
        {/* Column 1 - Form Builder */}
        <div className="flex h-full flex-1 flex-col gap-4 overflow-y-auto border-r border-[#d9dbe0] bg-white p-6">
          <p className="w-full text-[20px] font-semibold text-[#21262e]">
            Form Builder
          </p>
          <p className="w-full text-[13px] font-normal text-[#737a85]">
            Add fields to build your form
          </p>

          <div className="flex w-full flex-1 gap-6 overflow-hidden">
            {/* Add Fields */}
            <div className="flex h-full w-1/2 flex-col gap-4 overflow-y-auto border-r border-[#d9dbe0] pr-6">
              <div className="relative w-full">
                <select
                  defaultValue="Textbox"
                  className="w-full appearance-none rounded-lg border border-[#d9dbe0] bg-[#f7fafa] px-3.5 py-2.5 pr-8 text-[13px] text-[#21262e]"
                >
                  <option value="Textbox">Field Type: Textbox</option>
                  <option value="Textarea">Field Type: Textarea</option>
                  <option value="Image Upload">Field Type: Image Upload</option>
                  <option value="File Upload">Field Type: File Upload</option>
                  <option value="Multiselect">Field Type: Multiselect</option>
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737a85]">
                  ▾
                </span>
              </div>

              <div className="flex w-full flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#737a85]">
                  Field Label
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Name"
                  className="w-full rounded-md border border-[#d9dbe0] bg-white px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
                />
              </div>

              <button className="w-full rounded-lg bg-[#27e3ce] py-2.5 text-[13px] font-semibold text-[#21262e]">
                + Add Field
              </button>
            </div>

            {/* Fields Added */}
            <div className="flex h-full w-1/2 flex-col gap-2 overflow-y-auto">
              <p className="w-full text-[13px] font-semibold text-[#737a85]">
                Fields Added12
              </p>
     {/**
              <div className="flex w-full flex-1 flex-col gap-2 overflow-y-auto">
                {fieldsAdded.map((field) => (
                  <div
                    key={field.name}
                    className="flex w-full items-center justify-between rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5"
                  >
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[13px] font-medium text-[#21262e]">
                        {field.name}
                      </p>
                      <p className="text-[11px] font-normal text-[#737a85]">
                        {field.type}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${field.name}`}
                      className="text-[12px] font-normal text-[#737a85]"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              */}
              <button className="w-full rounded-lg bg-[#27e3ce] py-2.5 text-[13px] font-semibold text-[#21262e]">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 - Form Fill */}
        <div className="flex h-full flex-1 flex-col gap-4 overflow-y-auto bg-white p-6">
          <p className="w-full text-[20px] font-semibold text-[#21262e]">
            Fill Form
          </p>

          {/* <div className="relative w-full">
            <select
              defaultValue="Employee Onboarding Form"
              className="w-full appearance-none whitespace-nowrap rounded-lg border-[1.5px] border-[#ffb703] bg-white px-3.5 py-2.5 pr-8 text-[13px] font-medium text-[#21262e]"
            >
              <option value="Employee Onboarding Form">
                Employee Onboarding Form
              </option>
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737a85]">
              ▾
            </span>
          </div>

          <div className="flex w-full flex-1 flex-col gap-4 overflow-y-auto">
            <div className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                Full Name (Textbox)
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
              />
            </div>

            <div className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                Profile Photo (Image Upload)
              </label>
              <label className="flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border border-dashed border-[#d9dbe0] bg-[#f7fafa] px-3 py-[18px]">
                <input type="file" accept="image/*" className="sr-only" />
                <span className="text-[16px] text-[#ffb703]">⇧</span>
                <span className="text-[11px] text-[#737a85]">
                  Click or drag image to upload
                </span>
              </label>
            </div>

            <div className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                Resume (File Upload)
              </label>
              <label className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] text-[#737a85]">
                <input type="file" className="sr-only" />
                <span>📎</span>
                <span>No file chosen</span>
              </label>
            </div>

            <div className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                Skills (Multiselect)
              </label>
              <input
                type="text"
                placeholder="React, Node.js  ·  + Add skill"
                className="w-full rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
              />
            </div>

            <div className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                Bio (Textarea)
              </label>
              <textarea
                placeholder="Tell us about yourself..."
                className="h-[70px] w-full resize-none rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
              />
            </div>
          </div> */}

          <button className="w-full rounded-lg bg-[#27e3ce] py-3 text-[14px] font-semibold text-[#21262e]">
            Submit
          </button>
        </div>
      </div>

      {/* Bottom Row - Data Table (35%) */}
      <div className="flex h-[35%] w-full flex-col overflow-hidden border-t-2 border-[#dedee3] bg-white p-4">
        <p className="w-full text-[16px] font-semibold text-[#21262e]">
          Submissions
        </p>
        <div className="w-full flex-1 overflow-y-auto rounded-md border border-[#e0e3e5]">
          <table className="w-full table-fixed border-collapse text-[12px]">
            <thead>
              <tr className="bg-[#f0fafa] font-semibold text-[#21262e]">
                <th className="w-20 px-4 py-2.5 text-left">ID</th>
                <th className="w-[200px] px-4 py-2.5 text-left">Full Name</th>
                <th className="w-[220px] px-4 py-2.5 text-left">Skills</th>
                <th className="w-[280px] px-4 py-2.5 text-left">Bio</th>
                <th className="w-[120px] px-4 py-2.5 text-left">Resume</th>
                <th className="w-[100px] px-4 py-2.5 text-left">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {/* {submissions.map((row) => (
                <tr
                  key={row.id}
                  className={`border-t border-[#e0e3e5] font-normal text-[#737a85] ${
                    row.striped ? "bg-[#fafafc]" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2.5">{row.id}</td>
                  <td className="px-4 py-2.5">{row.fullName}</td>
                  <td className="px-4 py-2.5">{row.skills}</td>
                  <td className="px-4 py-2.5">{row.bio}</td>
                  <td className="px-4 py-2.5">{row.resume}</td>
                  <td className="px-4 py-2.5">{row.submitted}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project6;// hmr-verify-1785331188
