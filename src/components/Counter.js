import { useSelector, useDispatch } from 'react-redux'
// useSelector for only select perticular object in the store

const Counter = () => {
    const mycounter = useSelector((state) => state.counter)
    const myShowcounter = useSelector((state)=>  state.Showcounter)
    const myname = useSelector((state) => state.name)
    const changecolor1 = useSelector((state) => state.changecolor)
    const changecolor2 = useSelector((state) => state.changecolor2)
    const myvalue = 40
    const dispatch = useDispatch()
    const IncreaseHandler = () => {
      dispatch({type:'Increase' , payload:myvalue})
    }

    const IncreamentHandler = () => {
        dispatch({type:'Increament'})
    }

    
    const DecreamentHandler = () => {
        dispatch({type:'Decreament'})
    }

    const toggleHandler = () => {
      dispatch({type: "toggle"})
    }

  return (
    <div>
    <center>
      <main className='counter'>
            <h1>Redux Counter</h1>
            { myShowcounter ? <div className='value'>{mycounter}{myname}</div> : "Nothing"}
            <div style={changecolor1}>
                <button onClick={IncreamentHandler}>Increament</button>
            </div>
            <div style={changecolor2}>
                <button onClick={DecreamentHandler}>Decreament</button>
            </div>
            <button onClick={IncreaseHandler}>IncreamentBy{myvalue}</button>
            <button onClick={toggleHandler}>Toggle Handler</button>
      </main>
      </center>
    </div>
  )
}

export default Counter
