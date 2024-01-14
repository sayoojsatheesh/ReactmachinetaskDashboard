// CSS //
import classes from "./Table.module.css";
// Custom //
import useAxios from "../../hooks/useAxios";
import ErrorPage from "../ErrorPage/ErrorPage";
// MUI //
import Pagination from "@mui/material/Pagination";
import { Fragment } from "react";
import Skeleton from "@mui/material/Skeleton";

const Table = () => {
  const { data, loading, error } = useAxios("http://localhost:3001/api/table");

  if (loading) {
    return (
      <Skeleton
        sx={{ borderRadius: "10px", padding: "1rem 1rem" }}
        variant="rectangular"
        width={"100%"}
        height={281}
      />
    );
  }

  return (
    <Fragment>
      {error ? (
        <ErrorPage />
      ) : (
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
              size="small"
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "white",
                },
                "& .MuiPaginationItem-page.Mui-selected": {
                  border: "1px solid black",
                  backgroundColor: "white",
                },
                "& .MuiPaginationItem-page.Mui-disabled": {
                  color: "green", // Adjust color for disabled arrows
                },
              }}
              defaultPage={1}
              boundaryCount={1}
              siblingCount={0}
              count={10}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Table;
