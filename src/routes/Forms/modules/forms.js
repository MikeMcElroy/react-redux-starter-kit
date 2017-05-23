// ------------------------------------
// Constants
// ------------------------------------
/* TD-TODO */

// ------------------------------------
// Actions
// ------------------------------------
/* TD-TODO */

export const actions = {
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function formsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
