// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

import calendar from 'src/store/apps/calendar'

export const store = configureStore({
  reducer: { calendar },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>   