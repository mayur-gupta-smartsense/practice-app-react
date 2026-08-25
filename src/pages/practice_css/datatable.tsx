
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
//    Material UI data grid component for React.
const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1.5 },
  { field: 'age', headerName: 'Age', flex: 0.5 },
  { field: 'gender', headerName: 'Gender', flex: 0.75 },
  { field: 'country', headerName: 'Country', flex: 1 },
];

const rows = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', age: 29, gender: 'Male', country: 'India' },
  { id: 2, name: 'Priya Singh', email: 'priya@example.com', age: 34, gender: 'Female', country: 'India' },
  { id: 3, name: 'Marcus Webb', email: 'marcus.webb@example.com', age: 41, gender: 'Male', country: 'USA' },
  { id: 4, name: 'Lena Fischer', email: 'lena.fischer@example.com', age: 27, gender: 'Female', country: 'Germany' },
  { id: 5, name: 'Tomás Ibarra', email: 'tomas.ibarra@example.com', age: 38, gender: 'Male', country: 'Spain' },
  { id: 6, name: 'Ananya Rao', email: 'ananya.rao@example.com', age: 31, gender: 'Female', country: 'India' },
  { id: 7, name: 'Devraj Singh', email: 'devraj.singh@example.com', age: 45, gender: 'Male', country: 'India' },
  { id: 8, name: 'Chloé Martin', email: 'chloe.martin@example.com', age: 26, gender: 'Female', country: 'France' },
  { id: 9, name: 'Kenji Yamamoto', email: 'kenji.yamamoto@example.com', age: 33, gender: 'Male', country: 'Japan' },
  { id: 10, name: 'Sofia Rossi', email: 'sofia.rossi@example.com', age: 29, gender: 'Female', country: 'Italy' },
  { id: 11, name: 'Liam O\'Connor', email: 'liam.oconnor@example.com', age: 24, gender: 'Male', country: 'Ireland' },
  { id: 12, name: 'Fatima Al-Sayed', email: 'fatima.alsayed@example.com', age: 36, gender: 'Female', country: 'Egypt' },
  { id: 13, name: 'Noah Bergström', email: 'noah.bergstrom@example.com', age: 30, gender: 'Male', country: 'Sweden' },
  { id: 14, name: 'Isabella Silva', email: 'isabella.silva@example.com', age: 28, gender: 'Female', country: 'Brazil' },
  { id: 15, name: 'Wei Zhang', email: 'wei.zhang@example.com', age: 40, gender: 'Male', country: 'China' },
  { id: 16, name: 'Olivia Brown', email: 'olivia.brown@example.com', age: 32, gender: 'Female', country: 'UK' },
  { id: 17, name: 'Arjun Mehta', email: 'arjun.mehta@example.com', age: 27, gender: 'Male', country: 'India' },
  { id: 18, name: 'Emma Nilsson', email: 'emma.nilsson@example.com', age: 35, gender: 'Female', country: 'Sweden' },
  { id: 19, name: 'Lucas Costa', email: 'lucas.costa@example.com', age: 22, gender: 'Male', country: 'Portugal' },
  { id: 20, name: 'Hana Kobayashi', email: 'hana.kobayashi@example.com', age: 39, gender: 'Female', country: 'Japan' },
  { id: 21, name: 'Daniel Kim', email: 'daniel.kim@example.com', age: 31, gender: 'Male', country: 'South Korea' },
  { id: 22, name: 'Mia Andersen', email: 'mia.andersen@example.com', age: 25, gender: 'Female', country: 'Denmark' },
  { id: 23, name: 'Ethan Walker', email: 'ethan.walker@example.com', age: 44, gender: 'Male', country: 'USA' },
  { id: 24, name: 'Zara Khan', email: 'zara.khan@example.com', age: 30, gender: 'Female', country: 'Pakistan' },
  { id: 25, name: 'Miguel Torres', email: 'miguel.torres@example.com', age: 37, gender: 'Male', country: 'Mexico' },
  { id: 26, name: 'Grace Mwangi', email: 'grace.mwangi@example.com', age: 28, gender: 'Female', country: 'Kenya' },
  { id: 27, name: 'Ivan Petrov', email: 'ivan.petrov@example.com', age: 42, gender: 'Male', country: 'Russia' },
  { id: 28, name: 'Amara Okafor', email: 'amara.okafor@example.com', age: 26, gender: 'Female', country: 'Nigeria' },
  { id: 29, name: 'Felix Wagner', email: 'felix.wagner@example.com', age: 33, gender: 'Male', country: 'Germany' },
  { id: 30, name: 'Yuki Tanaka', email: 'yuki.tanaka@example.com', age: 29, gender: 'Female', country: 'Japan' },
  { id: 31, name: 'Carlos Mendoza', email: 'carlos.mendoza@example.com', age: 35, gender: 'Male', country: 'Mexico' },
];

function UsersTable() {
  return (
    // p-6: padding on all sides of the page container
    // bg-gray-50: light gray page background
    // min-h-screen: minimum height of the full viewport, so the background
    // fills the page even when there isn't much content
    <div className="p-6 bg-gray-50 min-h-screen">
      {
        // w-full: card stretches to the full width of its parent
        // bg-white: white card background, contrasting with the gray page
        // rounded-xl: large rounded corners on the card
        // shadow-md: medium drop shadow, lifts the card off the page
        // p-4: padding inside the card, around the heading and grid
      }
      <div className="w-full bg-white rounded-xl shadow-md p-4">
        {
          // text-xl: extra-large heading font size
          // font-semibold: semi-bold heading weight
          // text-gray-800: dark gray heading color
          // mb-4: margin below the heading, spacing it from the grid
        }
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Users
        </h2>

        {
          // h-[calc(100vh-10rem)]: arbitrary-value height — full viewport
          // height minus 10rem, so the grid fills the remaining space below
          // the page padding and heading instead of using a fixed pixel size
        }
        <div className="h-[calc(100vh-10rem)]">
          <DataGrid
            // rows: the table data — one object per row, each needs a unique `id`
            rows={rows}
            // columns: column definitions — `field` maps to a key in each row,
            // `headerName` is the label shown, `flex` sets its share of the width
            columns={columns}
            // slots: swaps in MUI's built-in toolbar component above the grid
            // (adds Columns / Filters / Density / Export buttons + a search box)
            slots={{ toolbar: GridToolbar }}
            // slotProps: configures the slot above — here it turns on the
            // toolbar's quick-filter input, giving free-text search with no
            // custom filtering logic of our own
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersTable;