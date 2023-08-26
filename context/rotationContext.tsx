"use client"
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react"

interface RotationMultiplierContextProps {
  rotationMultiplier: number
  setRotationMultiplier: Dispatch<SetStateAction<number>>
}

const RotationMultiplierContext = createContext<RotationMultiplierContextProps>(
  {
    rotationMultiplier: 0,
    setRotationMultiplier: () => 0,
  },
)

export const RotationMultiplierContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [rotationMultiplier, setRotationMultiplier] = useState<number>(0)
  return (
    <RotationMultiplierContext.Provider
      value={{ rotationMultiplier, setRotationMultiplier }}>
      {children}
    </RotationMultiplierContext.Provider>
  )
}

export const useRotationMultiplierContext = () => {
  const context = useContext(RotationMultiplierContext)
  if (!context) throw new Error("Error while initializing context!")
  return context
}
