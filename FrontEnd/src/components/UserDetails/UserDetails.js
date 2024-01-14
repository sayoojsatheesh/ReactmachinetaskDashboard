// CSS //
import classes from "./UserDetails.module.css";
// Images //
import userPhoto from "../../Assets/media.png";
import Facebook from "../../Assets/facebook.png";
import Instagram from "../../Assets/instagram.png";
import X from "../../Assets/twitter.png";
// Custom //
import ImageContainer from "./ImageContainer/ImageContainer";

const UserDetails = ({ UserName }) => {
  return (
    <div className={classes.UserDetailsMainContainer}>
      <div style={{ height: "50%" }}>
        <img src={userPhoto} alt="User" />
      </div>
      <div className={classes.Username}>{UserName}</div>
      <div className={classes.Designation}>CEO</div>
      <ImageContainer images={[Facebook, Instagram, X]} />
    </div>
  );
};

export default UserDetails;
