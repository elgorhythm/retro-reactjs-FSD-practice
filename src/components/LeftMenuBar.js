import { Link } from "react-router-dom";

export function LeftMenuBar(props) {
  return (
    <div
      style={{
        padding: 3,
        borderWidth: 2,
        borderColor: "red",
        borderStyle: "solid",
        display: "flex",
        height: "500px",
      }}
    >
      <Link to='/'>main</Link><br/>
      <Link to='details'>details</Link>
    </div>
  );
}