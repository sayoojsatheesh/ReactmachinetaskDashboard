// CSS //
import classes from "./UserDetailsButton.module.css";
// Images //
import userImage from "../../Assets/Rectangle 10.png";

const UserDetailsButton = () => {
  return (
    <div className={classes.userDetailsContainer}>
      <div>
        <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>John Doe</div>
        <div style={{ color: "rgba(169,169,169,255)" }}>john@Doe.com</div>
      </div>
      <div>
        <img src={userImage} alt="User" />
      </div>
    </div>
  );
};

export default UserDetailsButton;
