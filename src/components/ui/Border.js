import classes from "../ui/Border.module.css";

function Border(props) {
  return <div className={classes.round3}>{props.children}</div>;
}

export default Border;
