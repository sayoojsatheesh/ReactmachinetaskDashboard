// CSS //
import classes from "./Table.module.css";
// Custom //
import useAxios from "../../hooks/useAxios";
// MUI //
import Pagination from "@mui/material/Pagination";

const Table = () => {
  const { data, loading, error } = useAxios("http://localhost:3001/api/table");
  console.log("data tab", data);
  return (
    <div>
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
            <tr>
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
          paddingBottom: ".8rem",
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
            "& .MuiPaginationItem-icon.Mui-disabled":
              {
                backgroundColor: "green", // Color for disabled arrows
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
