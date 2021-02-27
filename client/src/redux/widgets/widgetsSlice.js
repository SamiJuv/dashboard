import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: {
      reducer(state, { payload }) {
        const currState = current(state);
        const widgetWithHighestWeight = (currState.length > 0 ? (currState.reduce((max, widget) => max.weight > widget.weight ? max : widget)) : null);
        const newWeight = (widgetWithHighestWeight ? (widgetWithHighestWeight.weight + 1) : 0);

        state.push({
          type: payload,
          weight: newWeight
        })
      }
    }
  }
})

const { actions, reducer } = widgetsSlice

export const { addWidget } = actions

export default reducer