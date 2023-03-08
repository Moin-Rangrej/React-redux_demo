import { createStore } from 'redux'

// create store
// reducer function
// connect reducer fn with store

const changecolor = {
    backgroundColor : 'red',
    color : 'white',
}

const changecolor2 = {
    backgroundColor : 'yellow',
    color : 'blue'
}

const initialState = {counter : 0,name:"Moin",Showcounter:true}

const counterReducer = (state = initialState,action) => {
    // console.log(state.Showcounter);
        if (action.type === "Increament") {
            return {
                counter : state.counter + 1,
                Showcounter : state.Showcounter,
                name : "Moin Rangrej",
                changecolor
            }
        }

        if (action.type === "Increase") {
            return{
                counter : state.counter + action.payload,
                Showcounter : state.Showcounter,
                name : "Moin Khan",
                changecolor2
            }
        }

        if (action.type === "Decreament") {
            return {
                counter : state.counter - action.payload,
                Showcounter : state.Showcounter,
                name : "Moin 123"
            }
        }

        if (action.type === "toggle") {
            return{
                Showcounter : !state.Showcounter,
                counter : state.counter,
                name : "Moin 456"
            }
        }

        return state
    }


  
const store = createStore(counterReducer)

export default store 