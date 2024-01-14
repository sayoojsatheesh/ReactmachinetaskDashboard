// CSS //
import classes from "./ErrorPage.module.css";
// MUI //
import StorageIcon from "@mui/icons-material/Storage";

const ErrorPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <h1>500</h1>
        <p>Something went wrong !!!!!</p>
        <p >
          Please start the Server <StorageIcon color="primary" />
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
