import React, { useEffect, useState } from "react";

type Employee = {
  name: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  level: string;
};

const employeesJson: Employee[] = [
  {
    name: "Aisha Khan",
    department: "Engineering",
    designation: "Software Engineer",
    dateOfJoining: "2022-03-15",
    level: "L3",
  },
  {
    name: "Rohan Mehta",
    department: "Product",
    designation: "Product Manager",
    dateOfJoining: "2021-07-01",
    level: "L4",
  },
  {
    name: "Priya Sharma",
    department: "Design",
    designation: "UX Designer",
    dateOfJoining: "2023-01-20",
    level: "L2",
  },
  {
    name: "James Carter",
    department: "Engineering",
    designation: "Tech Lead",
    dateOfJoining: "2019-11-08",
    level: "L5",
  },
  {
    name: "Sneha Patel",
    department: "Human Resources",
    designation: "HR Specialist",
    dateOfJoining: "2020-05-12",
    level: "L3",
  },
  {
    name: "David Okonkwo",
    department: "Finance",
    designation: "Financial Analyst",
    dateOfJoining: "2022-09-30",
    level: "L2",
  },
];

const levelStyles: Record<string, string> = {
  L2: "bg-emerald-100 text-emerald-800",
  L3: "bg-sky-100 text-sky-800",
  L4: "bg-violet-100 text-violet-800",
  L5: "bg-amber-100 text-amber-800",
};

const SortIcon = ({ up, onClick }: { up: boolean; onClick: () => void }) => {
  return (
    <span
      onClick={onClick}
      className="inline-flex flex-col leading-none text-slate-300 cursor-pointer"
    >
      <svg
        viewBox="0 0 10 6"
        className={`h-2 w-2.5 ${up? "text-slate-700 opacity-100":"opacity-40"}`}
        fill="currentColor"
      >
        <path d="M5 0L10 6H0L5 0Z" />
      </svg>
      <svg
        viewBox="0 0 10 6"
        className={`mt-0.5 h-2 w-2.5 ${!up ? "text-slate-700 opacity-100" : "opacity-40"}`}
        fill="currentColor"
      >
        <path d="M5 6L0 0H10L5 6Z" />
      </svg>
    </span>
  );
};

const Project2  = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [deptUp, setDeptUp] = useState(true);
  const [desgUp, setDesgUp] = useState(true);
   useEffect(() => {
    setEmployees(employeesJson);
  }, []);

  const handleSearch = (value: string): void => {
  //  setSearchQuery(value);
    const query = value.trim().toLowerCase();
    if (!query) {
      setEmployees(employeesJson);
      return;
    }
    setEmployees(
      employeesJson.filter(
        (employee) =>
          employee.name.toLowerCase().includes(query) ||
          employee.department.toLowerCase().includes(query)
      )
    );
  };

  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const sortDepartment = () => {
      const next = !deptUp;
      setDeptUp(next);
      setEmployees((prev) =>
        [...prev].sort((a, b) =>
          next
            ? a.department.localeCompare(b.department)
            : b.department.localeCompare(a.department)
        )
      );
    };

    const sortDesignation = () => {
      const next = !desgUp;
      setDesgUp(next);
      setEmployees((prev) =>
        [...prev].sort((a, b) =>
          next
            ? a.designation.localeCompare(b.designation)
            : b.designation.localeCompare(a.designation)
        )
      );
    };
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Project 1
          </p>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Employees
            </h1>
            <input
              type="search"
         //     value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search employees..."
              aria-label="Search employees"
              className="w-full sm:w-72 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <p className="mt-2 text-slate-600">
            Employee directory loaded from local JSON via useEffect.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      Department
                      <SortIcon up={deptUp} onClick={sortDepartment} />                    
                      </span>
                  </th>
                  <th className="px-5 py-3 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      Designation
                      <SortIcon up={desgUp} onClick={sortDesignation} />
                    </span>
                  </th>
                  <th className="px-5 py-3 font-semibold">Date of Joining</th>
                  <th className="px-5 py-3 font-semibold">Level</th>
                </tr>
              </thead>
              <tbody>
                {employees.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-slate-400"
                    >
                     {/* // {searchQuery.trim() */}
                        No employees match your search
                        {/* : "Loading employees…"} */}
                    </td>
                  </tr>
                ) : (
                  employees.map((employee) => (
                    <tr key ={`${employee.name}-${employee.dateOfJoining}`}
                    className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50">
                     <td className="px-5 py-3 text-slate-600">{`${employee.name}`}</td>
                     <td className="px-5 py-3 text-slate-600">{`${employee.department}`}</td>
                     <td className="px-5 py-3 text-slate-600">{`${employee.designation}`}</td>
                      <td className="px-5 py-4 text-slate-600">
                        {formatDate(employee.dateOfJoining)}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
                            levelStyles[employee.level] ??
                            "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {employee.level}
                        </span>
                      </td> 
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
