import {configureStore} from "@reduxjs/toolkit"
import stateSlice from "./Reducer.js"
const store=configureStore({
  reducer:{
    data:stateSlice
  }
})

export default store