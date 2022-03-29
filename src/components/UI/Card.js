function Card(props) {
  const classes = "w-auto rounded-lg flex-row" + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
