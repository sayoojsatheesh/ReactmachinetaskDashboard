// CSS //
import classes from "./SideBarButton.module.css";

const SideBarButton = ({ buttonText, image, openSideBar }) => {
  return (
    <button className={classes.buttonContainer}>
      <img src={image} alt="Icons" />
      {openSideBar ? buttonText : ""}
    </button>
  );
};

export default SideBarButton;
