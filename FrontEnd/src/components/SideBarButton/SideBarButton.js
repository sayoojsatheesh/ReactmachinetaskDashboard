// CSS //
import classes from "./SideBarButton.module.css";

const SideBarButton = ({ buttonText, image }) => {
  return (
    <button className={classes.buttonContainer}>
      <img src={image} alt="Icons" />
      {buttonText}
    </button>
  );
};

export default SideBarButton;
