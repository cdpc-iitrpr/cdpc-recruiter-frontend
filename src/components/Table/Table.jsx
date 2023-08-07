import Table from "react-bootstrap/Table";
import "./ReusableTable.css"; // Create this CSS file for custom styling

function ReusableTable({ data }) {
  return (
    <Table responsive className="custom-table">
      <thead>
        <tr>
          <th>#</th>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.values(row).map((value, valueIndex) => (
              <td key={valueIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReusableTable;

// example usage:
// import React from 'react';
// import ReusableTable from './components/Table/Table';

// const tableData = [
//   { name: 'John', age: 25, city: 'New York' },
//   { name: 'Jane', age: 30, city: 'San Francisco' },
//   { name: 'Alice', age: 28, city: 'Los Angeles' },
//   // ... more data
// ];

// function App() {
//   return (
//     <div>
//       <h2>Table Example</h2>
//       <ReusableTable data={tableData} />
//     </div>
//   );
// }

// export default App;

