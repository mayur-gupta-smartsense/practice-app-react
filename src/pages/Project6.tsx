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

type FieldOption = {
  _id: string;
  label: string;
};

type Field = {
  _id: string;
  label: string;
  type: string;
  required: boolean;
  order: number;
  options?: FieldOption[];
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
type SubmissionAnswerValue = string | string[] | UploadAnswer | File;

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
  const [answers, setAnswers] = useState<Record<string, SubmissionAnswerValue>>({});


  useEffect(() => {
    fetchForms();
  }, []);

  useEffect(() => {
  if (forms.length) setFormId(forms[0]._id);
}, [forms]);



  const fetchForms = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/api/forms`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log("EWrrropr ---> ",errorData)
        
        const error = new Error(errorData.message || 'Failed to retrieve forms.');
        (error as any).status = response.status;
        (error as any).statusText = response.statusText;
        throw error;
      }
      const data: FormItem[] = await response.json();
      console.log("FetchForms",data);
      setForms(data);
    } catch (err) {
      console.log("Error contained.", err);
      
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
   //   
      console.log("FetchSubmissions",data);
      setSubmissions(data);
    } catch (err) {
      setError("Could not load images from the server.");
    } finally {
      setIsLoading(false);
    }
  };
  const submitIt = async () => {
    const formData = new FormData();
    const jsonAnswers: Record<string, string | string[]> = {};
    Object.entries(answers).forEach(([fieldId, value]) => {
      if (value instanceof File) {
        formData.append(fieldId, value); // key = field._id
      } else {
        jsonAnswers[fieldId] = value as string | string[];
      }
    });
    
    formData.append("answers", JSON.stringify(jsonAnswers));
    await fetch(`${API_BASE_URL}/api/forms/${formId}/submissions`, {
      method: "POST",
      body: formData, // don't set Content-Type manually — browser adds the multipart boundary
    });

  }
   const changeMultiSelect = (e: React.ChangeEvent<HTMLInputElement>, fieldId:string)=>{
      const optionId:string = e.target.value;
       if(!e.target.checked){
        const field = answers[fieldId].filter(x=> x!=optionId ) 
        setAnswers({...answers, [fieldId]: field});
        return
       }
       if(!answers[fieldId]){
         setAnswers({...answers, [fieldId]: [optionId]})
       } else{
         //   
            setAnswers({...answers, [fieldId]: [...answers[fieldId], optionId]})
       }
 //      
   }

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId:string)=>{
      const file = e.target.files?.[0];
      if(!file){
       setAnswers(prev => {
         const copy = { ...prev };
         delete copy[fieldId];
         return copy;
      });
      return
      }
     setAnswers({...answers, [fieldId]: file})
    } 
   
  
   useEffect(() => {
    fetchSubmissions();
    setAnswers({});
  }, [formId]);

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
                Fields Added
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
                Submit2
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 - Form Fill */}
        <div className="flex h-full flex-1 flex-col gap-4 overflow-y-auto bg-white p-6">
          <p className="w-full text-[20px] font-semibold text-[#21262e]">
            Fill Form
          </p>

         <div className="relative w-full">
            <select onChange={(e)=>setFormId(e.target.value)}
              defaultValue="Employee Onboarding Form"
              className="w-full appearance-none whitespace-nowrap rounded-lg border-[1.5px] border-[#ffb703] bg-white px-3.5 py-2.5 pr-8 text-[13px] font-medium text-[#21262e]"
            >
               {forms.map((form) => (

              <option value={form._id} key={form._id} >
                {form.name}
              </option>
              
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737a85]">
            
            </span>
          </div>

          <div className="flex w/full flex-1 flex-col gap-4 overflow-y-auto">
             {forms.find((f) => f._id === formId)?.fields?.sort((a, b) => a.order - b.order).map((field) => {
              switch (field.type) {
                case "textbox":
                  return (
            
            <div key={field._id} className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
               {field.label}
              </label>
              <input
                type="text"
                onChange={(e)=>setAnswers({ ...answers, [field._id]:e.target.value })}
                className="w-full rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
              />
            </div>
            );
                case "textarea":
                  return (
            <div key={field._id} className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                {field.label}
              </label>
              <textarea
                  onChange={(e)=>setAnswers({ ...answers, [field._id]:e.target.value })}
                placeholder="Tell us about yourself..."
                className="h-[70px] w-full resize-none rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] font-normal text-[#737a85] placeholder:text-[#737a85]"
              />
            </div>
              );
                case "image": 
                  return (
            <div key={field._id} className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
              {field.label}
              </label>
              <label className="flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border border-dashed border-[#d9dbe0] bg-[#f7fafa] px-3 py-[18px]">
                <input type="file" 
                  onChange={(e)=>handleFileChange(e, field._id)}
                  accept="image/*" className="sr-only" />
                <span className="text-[16px] text-[#ffb703]">⇧</span>
                <span className="text-[11px] text-[#737a85]">
                  Click or drag image to upload
                </span>
              </label>
            </div>
              );
                case "file":
                  return (
            <div key={field._id} className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
                {field.label}
              </label>
              <label className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5 text-[12px] text-[#737a85]">
                <input type="file"
                 onChange={(e)=>handleFileChange(e, field._id)} 
                className="sr-only" />
                <span>📎</span>
                <span>No file chosen</span>
              </label>
            </div>
              );
            case "multiselect":
                  return (
            <div key={field._id} className="flex w-full flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[#737a85]">
             {field.label}
              </label>
              <fieldset className="flex w-full flex-col gap-1.5 rounded-md border border-[#d9dbe0] bg-[#f7fafa] px-3 py-2.5">
                <legend className="sr-only">   {field.label}</legend>
                {field.options?.map((option) => (
                <div key = {option._id} className="flex items-center gap-2">
                  <input type="checkbox" onChange={(e) => changeMultiSelect(e, field._id,)}  value = {option._id} className="h-3.5 w-3.5" />
                  <label htmlFor={option._id} className="text-[12px] font-normal text-[#737a85]">
                    {option.label}
                  </label>
                </div>
                ))}
              </fieldset>
            </div>
              );
                case "dropdown":
                  return (
                    <div key={field._id} className="flex w-full flex-col gap-1.5">
                      <label className="text-[12px] font-medium text-[#737a85]">
                        {field.label}
                      </label>
                      <select
                            onChange={(e)=>setAnswers({ ...answers, [field._id]:e.target.value })}
                        className="w-full appearance-none rounded-lg border border-[#d9dbe0] bg-[#f7fafa] px-3.5 py-2.5 pr-8 text-[13px] text-[#21262e]"
                      > {field.options?.map((option) => (
                        <option key={option._id} value={option._id}>{option.label}</option>
                      ))}
                      </select>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div> 

          <button onClick = {submitIt} className="w-full rounded-lg bg-[#27e3ce] py-3 text-[14px] font-semibold text-[#21262e]">
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

/*
function DynamicForm({ fields }) {
  return (
    <div>
      {fields.map((field) => {
        switch (field.type) {
          case "text":
            return (
              <input
                key={field.id}
                type="text"
                placeholder={field.label}
              />
            );

          case "textarea":
            return (
              <textarea
                key={field.id}
                placeholder={field.label}
              />
            );

          case "select":
            return (
              <select key={field.id}>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            );

          case "checkbox":
            return (
              <label key={field.id}>
                <input type="checkbox" />
                {field.label}
              </label>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

*/