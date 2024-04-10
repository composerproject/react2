import {useSelector, useDispatch} from "react-redux";
import {selectKnightError, selectKnightName, selectKnightAge, selectKnights} from "../../store/selectors/knightSelectors.js";
import {addKnight, deleteKnight, setKnightError, setKnightName, setKnightAge} from "../../store/action/knightAction.js";


function Knight() {


    const dispatch = useDispatch();

    const name = useSelector(selectKnightName)
    const age = useSelector(selectKnightAge)
    const knights = useSelector(selectKnights)
    const error = useSelector(selectKnightError)

    const handleNameChange = (e) => {
        dispatch(setKnightName(e.target.value))
    }
    const handleAgeChange = (e) => {
    //   console.log(e.target.value);
      
        dispatch(setKnightAge(e.target.value))
    }

    const handleKnightSubmit = () => {
        if (name.trim() === '' || knights.find((knight) => knight.name.toLowerCase() === name.toLowerCase().trim()) !== undefined) {
            dispatch(setKnightError('invalid Data'))
            return;
        }
        dispatch(addKnight())
        
    }

    const handleClick = () => {
      console.log(name);
    }

    return (
        <main>
            <header>
              
                <h1>Knight List</h1>
                <p>Number of knights : {knights.length}</p>
            </header>
            <button onClick={handleClick}>Click</button>
            <div id={'content'}>
                <div id={"inputGroup"}>
                    <input type={"text"} onChange={handleNameChange} placeholder="nom" value={name}/>
                    <input type={"number"} onChange={handleAgeChange} placeholder="age" value={age}/>
                    <button onClick={handleKnightSubmit}>Add</button>
                    {error !== "" && <p style={{color: "red"}}>{error}</p>}
                </div>
                <div id={"list"}>
                    <h4>List</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight =>
                                <div key={knight.id}>
                                    <span>{knight.name}</span>
                                    <span> : {knight.age} ans</span>
                                    <button onClick={() => dispatch(deleteKnight(knight.id))}>X</button>
                                </div>
                            )
                            :
                            <p>No knight</p>
                    }
                </div>
            </div>
        </main>
    )
    // return (
    //     <>
    //     <h1>Knights</h1>
    //     </>
    // )
}


export default Knight