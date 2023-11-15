import { Link } from "react-router-dom";

export const Monkeys = () => {
  const ids = [1, 2, 3];
  return (
    <div>
      <p>Monkeys</p>
      {ids.map((id) => {
        return <Link to={`/monkeys/${id}`}>Monkey {id}</Link>;
      })}
    </div>
  );
};

// ${id} ``= string, 1,2,3 a fost pus in string si-a luat valoarea de string iar el trebuie sa fie number
