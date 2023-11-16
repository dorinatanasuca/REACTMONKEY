import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Acasa</Link>
      <br />
      <Link to="/aboutstate">AboutState</Link>
      <br />
      <Link to="/aboutstate2">AboutState2</Link>
      <br/>
      <Link to="/monkeys">Monkeys</Link>
      <br/>
      <Link to="/form32">Form32</Link>
      
      
    </div>
  );
};
