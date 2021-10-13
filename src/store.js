import { configureStore } from '@reduxjs/toolkit'
import contestantState from './reducers/contestantState'
export default configureStore({
  reducer: {
      contestant: contestantState,
  },
})