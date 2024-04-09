import React from "react";
import { useStatsContext } from "../../utils/statsContext";

function Stats() {
  const [state] = useStatsContext();
  console.log(state);

  return (
    <>
      <div>Stats</div>
      <table>
        <thead>
          <th>id</th>
          <th>Throws</th>
          <th>Brelan</th>
          <th>Brelan %</th>
        </thead>
        <tbody>
          {state.results.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.count}</td>
              <td>{res.brelan}</td>
              <td>{Math.floor((res.brelan / res.count) * 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Stats;
