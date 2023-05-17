
import React, { useState, useCallback } from "react";


export default function useApplicationData(props) {

  const [visible, setVisible] = useState(false)

  const openCanva = useCallback(() => setVisible(true), [])
  const closeCanva = useCallback(() => setVisible(false), [])
  const toggleCanva = useCallback(() => setVisible(!visible), [visible])

  return {
    openCanva,
    closeCanva,
    toggleCanva
  }
}