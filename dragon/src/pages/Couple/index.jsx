import { selectCoupleDragonId, selectCoupleError, selectCoupleKnightId, selectCouples } from "../../store/selectors/coupleSelectors";
import { selectDragons } from "../../store/selectors/dragonSelectors";
import { selectKnights } from "../../store/selectors/knightSelectors"
import {useSelector, useDispatch} from "react-redux"
import {setCoupleDragon, setCoupleKnight, deleteCouple, addCouple} from "../../store/action/coupleAction.js";
import { useEffect } from "react";

function Couple() {
  const knights = useSelector(selectKnights);
  const dragons = useSelector(selectDragons);
  const couples = useSelector(selectCouples);
  const dragonId = useSelector(selectCoupleDragonId);
  const knightId = useSelector(selectCoupleKnightId);
  const error = useSelector(selectCoupleError);


  const dispatch = useDispatch();

  useEffect(() => {
    if (dragonId && knightId) {
      dispatch(addCouple());
    }
  }, [dragonId, knightId, dispatch]);

  const handleKnightClick = (knightId) => {
    dispatch(setCoupleKnight(knightId));
  }

  const handleDragonClick = (dragonId) => {
    dispatch(setCoupleDragon(dragonId));
  }

  const add = () => {
    dispatch(addCouple());
  }

  const handleDeleteCouple = (coupleId) => {
    dispatch(deleteCouple(coupleId));
  }

  return (
    <>
      <div>Paires</div>
      {error !== "" && <p style={{color: "red"}}>{error}</p>}
      <table>
        <tbody>
          <tr>
            <td>Chevaliers</td>
            {/* {knights.map((knight => (<td key={knight.id} ><button disabled={couples.find(couple => couple.knightId === knight.id)} onClick={() => handleKnightClick(knight.id)}>{knight.name}</button></td>)))} */}
            {knights.map((knight => (<td key={knight.id} ><button  onClick={() => handleKnightClick(knight.id)}>{knight.name}</button></td>)))}
          </tr>
          <tr>
            <td>Dragons</td>
            {/* {dragons.map((dragon => (<td key={dragon.id}><button disabled={couples.find(couple => couple.dragonId === dragon.id)} onClick={() => handleDragonClick(dragon.id)}>{dragon.name}</button></td>)))} */}
            {dragons.map((dragon => (<td key={dragon.id}><button onClick={() => handleDragonClick(dragon.id)}>{dragon.name}</button></td>)))}
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
          <th>Chevalier</th>
          <th>Dragon</th>
          </tr>
        </thead>
        <tbody>
          {couples.map((couple => (
          <tr key={couple.id}>
            <td>{knights.find(knight => knight.id == couple.knightId).name}</td>
            <td>{dragons.find(dragon => dragon.id == couple.dragonId).name}</td>
            <td><button onClick={() => handleDeleteCouple(couple.id)}>X</button></td>
          </tr>
          )))}
        </tbody>
      </table>
    </>
  )
}

export default Couple