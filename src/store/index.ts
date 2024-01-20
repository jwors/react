import {
  configureStore,
  TypedStartListening,
  TypedAddListener,
  ListenerEffectAPI,
  addListener
} from '@reduxjs/toolkit'
import reducer from '../reducers'

const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppAddListener = TypedAddListener<RootState, AppDispatch>
export const addAppListener = addListener as AppAddListener

export default store
