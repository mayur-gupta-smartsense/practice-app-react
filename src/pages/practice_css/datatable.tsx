import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

// ---------------------------------------------------------------------------
// UI-ONLY DEMO
// Uses TanStack Table purely for its row/column model + rendering engine.
// getCoreRowModel() is the only row model wired in — no sorting, filtering,
// pagination, or row-selection models, and no event handlers. Static data.
// ---------------------------------------------------------------------------

type Employee = {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "Active" | "On Leave" | "Inactive";
  joined: string;
};

const data: Employee[] = [
  { id: "EMP-001", name: "Ananya Rao",      role: "Senior Engineer",   department: "Platform",  status: "Active",   joined: "2022-03-14" },
  { id: "EMP-002", name: "Marcus Webb",      role: "Product Designer",  department: "Design",    status: "Active",   joined: "2021-11-02" },
  { id: "EMP-003", name: "Priya Nair",       role: "Engineering Lead",  department: "Platform",  status: "On Leave", joined: "2019-07-21" },
  { id: "EMP-004", name: "Tomás Ibarra",     role: "Data Analyst",      department: "Analytics", status: "Active",   joined: "2023-01-09" },
  { id: "EMP-005", name: "Lena Fischer",     role: "QA Engineer",       department: "Platform",  status: "Inactive", joined: "2020-05-30" },
  { id: "EMP-006", name: "Devraj Singh",     role: "Product Manager",   department: "Product",   status: "Active",   joined: "2022-09-18" },
];

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => (
      <span className="font-mono text-xs text-slate-500">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <span className="font-medium text-slate-900">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const value = info.getValue();
      const styles: Record<Employee["status"], string> = {
        Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
        "On Leave": "bg-amber-50 text-amber-700 ring-amber-600/20",
        Inactive: "bg-slate-100 text-slate-600 ring-slate-500/20",
      };
      return (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[value]}`}
        >
          {value}
        </span>
      );
    },
  }),
  columnHelper.accessor("joined", {
    header: "Joined",
    cell: (info) => (
      <span className="text-slate-600">
        {new Date(info.getValue()).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
    ),
  }),
];

export default function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-slate-50 border-b border-slate-200">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 align-middle">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}