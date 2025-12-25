import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LampContextType {
  isLampOn: boolean
  toggleLamp: () => void
}

const LampContext = createContext<LampContextType | undefined>(undefined)

export function LampProvider({ children }: { children: ReactNode }) {
  const [isLampOn, setIsLampOn] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('lamp-state')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('lamp-state', JSON.stringify(isLampOn))
  }, [isLampOn])

  const toggleLamp = () => setIsLampOn((prev: boolean) => !prev)

  return (
    <LampContext.Provider value={{ isLampOn, toggleLamp }}>
      {children}
    </LampContext.Provider>
  )
}

export function useLamp() {
  const context = useContext(LampContext)
  if (context === undefined) {
    throw new Error('useLamp must be used within a LampProvider')
  }
  return context
}
