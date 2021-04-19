/**
 * This is a helper file for the test. You don't need to understand
 * the implementation detail of it. The only important bit is that
 * `usePlayersAsync` works similar to apollo client. You can find more
 * information about it in usePlayersAsync description.
 */

import {useEffect, useReducer} from "react"
import {players} from "./fake-data"
import type {Player} from "./types"

type PlayerAsyncData = {
  data: Player[] | null
  loading: boolean
  error: Error | null
}

type PlayerAsyncReducerAction =
  | {type: "resolved"; payload: Player[]}
  | {type: "pending"}
  | {type: "rejected"; errorMessage: string}

const initialState: PlayerAsyncData = {
  data: null,
  loading: false,
  error: null,
}

function reducer(state: PlayerAsyncData, action: PlayerAsyncReducerAction) {
  switch (action.type) {
    case "resolved":
      return {
        ...initialState,
        data: action.payload,
        loading: false,
      }
    case "pending":
      return {
        ...state,
        loading: true,
      }
    case "rejected":
      return {
        ...state,
        error: new Error(action.errorMessage),
      }
    default:
      throw new Error("Something went wrong!")
  }
}

/**
 * Simulates fetching players data in a async manner.
 * [Note] You don't need understand this function. The api resembles apollo client api.
 * When executed, it returns {loading: true, data: null, error: null}. After 500ml it
 * returns {loading: false, data: Player[], error[]}
 */
export function usePlayersAsync({shouldError = false} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: "pending"})

    const timer = setTimeout(() => {
      if (shouldError) {
        dispatch({type: "rejected", errorMessage: "Network error!"})
      } else {
        dispatch({type: "resolved", payload: players})
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [shouldError])

  return state
}
