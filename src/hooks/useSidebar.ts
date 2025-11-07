import { useState, useEffect } from 'react'

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    // Check localStorage on mount
    const savedState = localStorage.getItem('neochain-sidebar-collapsed')
    if (savedState) {
      setIsCollapsed(savedState === 'true')
    }
  }, [])

  useEffect(() => {
    // Update localStorage when sidebar state changes
    localStorage.setItem('neochain-sidebar-collapsed', isCollapsed.toString())
  }, [isCollapsed])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return { isCollapsed, toggleSidebar }
}

