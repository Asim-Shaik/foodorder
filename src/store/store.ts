import { configureStore  } from "@reduxjs/toolkit"

import reducers from './reducer/index'
export const store = configureStore({
    reducer:{
        reducers
        
    },

})