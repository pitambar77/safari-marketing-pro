import {Link} from "react-router-dom";

function Button({ text, link, target = "_self" }) {
  return (
    <Link to={link}>
      <button className="smp-golbal-btn">
        {text}
      </button>
    </Link>
  );
}

export default Button;
