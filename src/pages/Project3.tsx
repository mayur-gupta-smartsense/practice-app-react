import React, { useState, useEffect } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "./css/Project3.css";
import Modal from "../components/Modal";
import employeesJson from "../data/employee.json";
 
DataTable.use(DT);

type Employee = {
  name: string;
  departmentId: number;
  designationId: number;
  dateOfJoining: string;
  levelId: number;
};

// Old mapping
/*
const departments = [
  "Engineering", "Product", "Design", "Human Resources", "Finance", "Sales",
];
const designationsByDept: Record<string, string[]> = {
  Engineering: ["Software Engineer", "Tech Lead", "QA Engineer", "DevOps Engineer"],
  Product: ["Product Manager", "Product Analyst"],
  Design: ["UX Designer", "UI Designer"],
  "Human Resources": ["HR Specialist", "HR Manager"],
  Finance: ["Financial Analyst", "Accountant"],
  Sales: ["Sales Executive", "Account Manager"],
};
const levels = ["L1", "L2", "L3", "L4", "L5"];
*/

// New mapping:
const departments = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Product" },
  { id: 3, name: "Design" },
  { id: 4, name: "Human Resources" },
  { id: 5, name: "Finance" },
  { id: 6, name: "Sales" }
];

const designationsByDept = [
  { id: 1, departmentId: 1, name: "Software Engineer" },
  { id: 2, departmentId: 1, name: "Tech Lead" },
  { id: 3, departmentId: 1, name: "QA Engineer" },
  { id: 4, departmentId: 1, name: "DevOps Engineer" },

  { id: 5, departmentId: 2, name: "Product Manager" },
  { id: 6, departmentId: 2, name: "Product Analyst" },

  { id: 7, departmentId: 3, name: "UX Designer" },
  { id: 8, departmentId: 3, name: "UI Designer" },

  { id: 9, departmentId: 4, name: "HR Specialist" },
  { id: 10, departmentId: 4, name: "HR Manager" },

  { id: 11, departmentId: 5, name: "Financial Analyst" },
  { id: 12, departmentId: 5, name: "Accountant" },

  { id: 13, departmentId: 6, name: "Sales Executive" },
  { id: 14, departmentId: 6, name: "Account Manager" }
];

const levels = [
  { id: 1, name: "L1" },
  { id: 2, name: "L2" },
  { id: 3, name: "L3" },
  { id: 4, name: "L4" },
  { id: 5, name: "L5" }
];


/*
const firstNames = [
  "Aisha", "Rohan", "Priya", "James", "Sneha", "David", "Meera", "Arjun",
  "Kavya", "Liam", "Ananya", "Noah", "Ishaan", "Olivia", "Vikram", "Emma",
  "Riya", "Ethan", "Karan", "Zara",
];
const lastNames = [
  "Khan", "Mehta", "Sharma", "Carter", "Patel", "Okonkwo", "Nair", "Verma",
  "Reddy", "Johnson", "Iyer", "Williams", "Malhotra", "Brown", "Singh",
  "Davis", "Kapoor", "Miller", "Bhatt", "Wilson",
];

 const generateEmployees = (count: number): Employee[] =>
  Array.from({ length: count }, (_, index) => {
    const firstName = firstNames[index % firstNames.length];
    const lastName = lastNames[(index * 3 + 1) % lastNames.length];
    const department = departments[index % departments.length];
    const designationOptions = designationsByDept[department];
    const designation = designationOptions[index % designationOptions.length];
    const level = levels[(index * 2) % levels.length];
    const year = 2018 + (index % 7);
    const month = String((index % 12) + 1).padStart(2, "0");
    const day = String((index % 27) + 1).padStart(2, "0");

    return {
      name: `${firstName} ${lastName}`,
      department,
      designation,
      dateOfJoining: `${year}-${month}-${day}`,
      level,
    };
  });

const employeesJson: Employee[] = generateEmployees(60);
*/
const levelStyles: Record<number, string> = {
  2: "bg-emerald-100 text-emerald-800",
  3: "bg-sky-100 text-sky-800",
  4: "bg-violet-100 text-violet-800",
  5: "bg-amber-100 text-amber-800",
};

const getDepartmentName = (departmentId: number): string =>
  departments.find((dept) => dept.id === departmentId)?.name ?? "";

const getDesignationName = (designationId: number): string =>
  designationsByDept.find((desg) => desg.id === designationId)?.name ?? "";

const getLevelName = (levelId: number): string =>
  levels.find((lvl) => lvl.id === levelId)?.name ?? "";

const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12Z" />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PencilIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.5" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9M19.228 5.79c.342.052.682.107 1.022.166M19.228 5.79 18.16 19.673A2 2 0 0 1 16.165 21.5H7.835a2 2 0 0 1-1.995-1.827L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M4.772 5.79c.34-.059.68-.114 1.022-.166m0 0a48.11 48.11 0 0 1 3.478-.397m7.956 0a48.11 48.11 0 0 0-7.956 0m7.956 0V4.23a2 2 0 0 0-2-2h-3.956a2 2 0 0 0-2 2v1.163" />
  </svg>
);

const Project3 = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editDisabled, setEditDisabled] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const closeModal = () => {
        setIsModalOpen(false);        
    };  
    const handleView = (employee: Employee) => {
       setSelectedEmployee(employee); 
       setEditDisabled(true);
        setIsModalOpen(true);

    // TODO: load `employee` into the form fields
  };

  const handleEdit = (employee: Employee) => {
     setSelectedEmployee(employee);
    setEditDisabled(false);
    setIsModalOpen(true);
    // TODO: load `employee` into the form fields
  };

  const handleDelete = (employee: Employee) => {
    // TODO: wire up delete action
  };
  useEffect(() => {
     console.log(JSON.stringify(employeesJson));
     setEmployees(employeesJson as Employee[]);
     (window as any).employeesJson = employeesJson;
  }, []);
  
  if (employees.length === 0) {
    return <div>Loading...</div>;
  }  

  const handleSave = (updatedEmployee: Employee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp === selectedEmployee ? updatedEmployee : emp))
    );
    closeModal();
  };
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Project 3
          </p>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Employees
            </h1>
          </div>
          <p className="mt-2 text-slate-600">
            Employee directory loaded from local JSON via useEffect. Use the
            search box, column sorting, and pagination below to explore all{" "}
            {employees.length} records.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto p-4">
            <DataTable
              className="display w-full text-left text-sm"
              options={{ pageLength: 10 }}
            >
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Department</th>
                  <th className="px-5 py-3 font-semibold">Designation</th>
                  <th className="px-5 py-3 font-semibold">Date of Joining</th>
                  <th className="px-5 py-3 font-semibold">Level</th>
                  <th className="px-5 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={`${employee.name}-${employee.dateOfJoining}`}
                    className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 text-slate-600">{employee.name}</td>
                    <td className="px-5 py-3 text-slate-600">{getDepartmentName(employee.departmentId)}</td>
                    <td className="px-5 py-3 text-slate-600">{getDesignationName(employee.designationId)}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {formatDate(employee.dateOfJoining)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
                          levelStyles[employee.levelId] ??
                          "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {getLevelName(employee.levelId)}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleView(employee)}
                          aria-label={`View ${employee.name}`}
                          title="View Details"
                          className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-sky-50 hover:text-sky-600"
                        >
                          <EyeIcon />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEdit(employee)}
                          aria-label={`Edit ${employee.name}`}
                          title="Edit"
                          className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-amber-50 hover:text-amber-600"
                        >
                          <PencilIcon />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(employee)}
                          aria-label={`Delete ${employee.name}`}
                          title="Delete"
                          className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <EmployeeModalViewandEdit
          employee={selectedEmployee} 
           editDisabled={editDisabled} 
           onSave={handleSave}
        />
        </Modal>
    </div>
  );
};


type EmployeeModalViewandEditProps = {
  employee: Employee | null;
  editDisabled?: boolean;
  onSave: (employee: Employee) => void;
};

function EmployeeModalViewandEdit({
  employee,
  editDisabled = true,
  onSave
}: EmployeeModalViewandEditProps) {

  const [name, setName] = useState(employee?.name || "");
  const [departmentId, setDepartmentId] = useState(employee?.departmentId ?? 0);
  const [designationId, setDesignationId] = useState(employee?.designationId ?? 0);
  const [levelId, setLevelId] = useState(employee?.levelId ?? 0);
  const [dateOfJoining, setDateOfJoining] = useState(employee?.dateOfJoining || "");
  const inputClasses = "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";
  const labelClasses = "text-xs font-medium uppercase tracking-wide text-slate-500";
  const formattedDateOfJoining = dateOfJoining ? formatDate(dateOfJoining) : "";

  const handleSaveClick = () => {
    onSave({
      name,
      departmentId,
      designationId,
      levelId,
      dateOfJoining,
    });
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        {editDisabled ? "View Employee" : "Edit Employee"}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className={labelClasses}> Name</span>
          <input
            type="text"
            value={name}
            disabled={editDisabled}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className={labelClasses}>Department</span>
        <select
          value={departmentId}
          disabled={editDisabled}
          onChange={(e) => {
            const newDepartmentId = Number(e.target.value);
            setDepartmentId(newDepartmentId);
            const stillValid = designationsByDept.some(
              (desg) => desg.id === designationId && desg.departmentId === newDepartmentId
            );
            if (!stillValid) {
              setDesignationId(0);
            }
          }}
          className={inputClasses}
        >
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className={labelClasses}>Designation</span>
        <select
          value={designationId}
          disabled={editDisabled}
          onChange={(e) => setDesignationId(Number(e.target.value))}
          className={inputClasses}
        >
          {designationsByDept
            .filter((desg) => desg.departmentId === departmentId)
            .map((desg) => (
              <option key={desg.id} value={desg.id}>
                {desg.name}
              </option>
            ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className={labelClasses}>Level</span>
        <select
          value={levelId}
          disabled={editDisabled}
          onChange={(e) => setLevelId(Number(e.target.value))}
          className={inputClasses}
        >
          {levels.map((lvl) => (
            <option key={lvl.id} value={lvl.id}>
              {lvl.name}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className={labelClasses}>Date of Joining</span>
        <input
          type="date"
          value={dateOfJoining}
          disabled={editDisabled}
          onChange={(e) => setDateOfJoining(e.target.value)}
          className={inputClasses}
        />
      </label>

      {!editDisabled && (
        <button
          type="button"
          onClick={handleSaveClick}
          className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Save
        </button>
      )}
    </div>
  );
}

export default Project3;
