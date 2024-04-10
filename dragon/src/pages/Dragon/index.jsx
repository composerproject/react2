import {useSelector, useDispatch} from "react-redux";
import {selectDragonError, selectDragonName, selectDragons} from "../../store/selectors/dragonSelectors.js";
import {addDragon, deleteDragon, setDragonError, setDragonName} from "../../store/action/dragonAction.js";



function Dragon() {


    const dispatch = useDispatch();

    const name = useSelector(selectDragonName)
    const dragons = useSelector(selectDragons)
    const error = useSelector(selectDragonError)

    const handleChange = (e) => {
        dispatch(setDragonName(e.target.value))
    }

    const handleDragonSubmit = () => {
        if (name.trim() === '' || dragons.find((dragon) => dragon.name.toLowerCase() === name.toLowerCase().trim()) !== undefined) {
            dispatch(setDragonError('invalid Data'))
            return;
        }
        dispatch(addDragon())
    }

    return (
        <main>
            <header>
                <h1>Dragon List</h1>
                <p>Number of dragons : {dragons.length}</p>
            </header>
            <div id={'content'}>
                <div id={"inputGroup"}>
                    <input type={"text"} onChange={handleChange} value={name}/>
                    <button onClick={handleDragonSubmit}>Add</button>
                    {error !== "" && <p style={{color: "red"}}>{error}</p>}
                </div>
                <div id={"list"}>
                    <h4>List</h4>
                    {
                        dragons.length > 0 ?
                            dragons.map(dragon =>
                                <div key={dragon.id}>
                                    <span>{dragon.name}</span>
                                    <button onClick={() => dispatch(deleteDragon(dragon.id))}>X</button>
                                </div>
                            )
                            :
                            <p>No dragon</p>
                    }
                </div>
            </div>
        </main>
    )
    // return (
    //     <>
    //     <h1>Dragons</h1>
    //     </>
    // )
}


export default Dragon