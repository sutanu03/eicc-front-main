/* "use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToken, removeToken } from './tokenSlice'

export function Token() {
  const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addToken())}
        >
          Increment
        </button>
        <span>{token}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(removeToken())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
} */