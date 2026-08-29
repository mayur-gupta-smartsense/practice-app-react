import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
    { field: "id", "headerName": "ID", "flex": 0.6 },
    { field: "name", "headerName": "Name", "flex": 0.5 },
    { field: "email", "headerName": "Email", "flex": 1 },
    { field: "age", "headerName": "Age", "flex": 0.5 },
    { field: "country", "headerName": "Country", "flex": 0.6 }
]

const rows = [
    { id: "1", name: "Mayur", email: "mayurg729@gmail.com", age: 32, country: "India" },
    { id: "2", name: "Anita", email: "anita.kapoor@gmail.com", age: 28, country: "India" },
    { id: "3", name: "Rajesh", email: "rajesh.sharma@yahoo.com", age: 35, country: "India" },
    { id: "4", name: "Priya", email: "priya.mehta@gmail.com", age: 30, country: "India" },
    { id: "5", name: "John", email: "john.smith@gmail.com", age: 40, country: "USA" },
    { id: "6", name: "Emily", email: "emily.jones@yahoo.com", age: 27, country: "USA" },
    { id: "7", name: "Michael", email: "michael.brown@gmail.com", age: 45, country: "USA" },
    { id: "8", name: "Sarah", email: "sarah.wilson@gmail.com", age: 33, country: "USA" },
    { id: "9", name: "David", email: "david.taylor@gmail.com", age: 29, country: "UK" },
    { id: "10", name: "Emma", email: "emma.thomas@yahoo.com", age: 31, country: "UK" },
    { id: "11", name: "Oliver", email: "oliver.jackson@gmail.com", age: 36, country: "UK" },
    { id: "12", name: "Sophia", email: "sophia.white@gmail.com", age: 26, country: "UK" },
    { id: "13", name: "Carlos", email: "carlos.garcia@gmail.com", age: 38, country: "Spain" },
    { id: "14", name: "Maria", email: "maria.lopez@yahoo.com", age: 34, country: "Spain" },
    { id: "15", name: "Luis", email: "luis.martinez@gmail.com", age: 41, country: "Spain" },
    { id: "16", name: "Isabella", email: "isabella.hernandez@gmail.com", age: 25, country: "Spain" },
    { id: "17", name: "Chen", email: "chen.li@gmail.com", age: 37, country: "China" },
    { id: "18", name: "Mei", email: "mei.wang@yahoo.com", age: 29, country: "China" },
    { id: "19", name: "Wei", email: "wei.zhang@gmail.com", age: 42, country: "China" },
    { id: "20", name: "Xiao", email: "xiao.liu@gmail.com", age: 24, country: "China" },
    { id: "21", name: "Akira", email: "akira.tanaka@gmail.com", age: 39, country: "Japan" },
    { id: "22", name: "Yuki", email: "yuki.sato@yahoo.com", age: 27, country: "Japan" },
    { id: "23", name: "Hiroshi", email: "hiroshi.kimura@gmail.com", age: 44, country: "Japan" },
    { id: "24", name: "Aiko", email: "aiko.nakamura@gmail.com", age: 32, country: "Japan" },
    { id: "25", name: "Lucas", email: "lucas.miller@gmail.com", age: 30, country: "Germany" },
    { id: "26", name: "Hannah", email: "hannah.schmidt@yahoo.com", age: 28, country: "Germany" },
    { id: "27", name: "Felix", email: "felix.wagner@gmail.com", age: 35, country: "Germany" },
    { id: "28", name: "Clara", email: "clara.hoffmann@gmail.com", age: 33, country: "Germany" },
    { id: "29", name: "Ahmed", email: "ahmed.khan@gmail.com", age: 36, country: "Pakistan" },
    { id: "30", name: "Ayesha", email: "ayesha.ali@yahoo.com", age: 29, country: "Pakistan" },
    { id: "31", name: "Bilal", email: "bilal.hussain@gmail.com", age: 40, country: "Pakistan" },
    { id: "32", name: "Fatima", email: "fatima.zafar@gmail.com", age: 27, country: "Pakistan" },
    { id: "33", name: "Thiago", email: "thiago.silva@gmail.com", age: 34, country: "Brazil" },
    { id: "34", name: "Camila", email: "camila.santos@yahoo.com", age: 31, country: "Brazil" },
    { id: "35", name: "Mateus", email: "mateus.rodrigues@gmail.com", age: 38, country: "Brazil" },
    { id: "36", name: "Larissa", email: "larissa.costa@gmail.com", age: 26, country: "Brazil" },
    { id: "37", name: "Ethan", email: "ethan.johnson@gmail.com", age: 29, country: "Canada" }
];

export default function UserDatable() {
    return (
        <div className="p-8">
            <DataGrid
                rows={rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
            ></DataGrid>
        </div>
    )
}