import {createSlice} from "@reduxjs/toolkit"

const data={
  number:0
}

const stateSlice=createSlice({
  name:"state",
  initialState:data,
  reducers:{
    setIncrement(state,action){
      state.number=action.payload
    },
    setDecrement(state,action){
        state.number=state.number-1
    }
  }
})
export const{setIncrement,setDecrement}=stateSlice.actions
export default stateSlice.reducer