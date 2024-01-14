// CSS //
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return<div className={classes.wrapper}>
  <div className={classes.box}>
  <h1>500</h1>
  <p>Something went wrong !!!!!</p>
  <p>Please start the server</p>
  </div>
  </div>
};

export default ErrorPage;
