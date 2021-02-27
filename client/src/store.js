import { configureStore } from '@reduxjs/toolkit'

import uiReducer from './redux/ui/uiSlice'
import widgetsReducer from './redux/widgets/widgetsSlice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    widgets: widgetsReducer
  }
})

export default store