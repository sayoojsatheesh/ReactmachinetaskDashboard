// CSS //
import classes from "./Table.module.css";
// Custom //
import useAxios from "../../hooks/useAxios";
// MUI //
import Pagination from "@mui/material/Pagination";

const Table = () => {
  const { data, loading, error } = useAxios("http://localhost:3001/api/table");

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: ".8rem",
        }}
      >
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "white",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              border: "1px solid black",
            },
          }}
          count={10}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Table;
