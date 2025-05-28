'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { MockUser } from '@/hooks/useMockAuth'

type AuthContextType = {
  user: MockUser | null
  loading: boolean
  login: (provider: 'google' | 'github') => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data
const MOCK_USERS: MockUser[] = [
  {
    id: 'google-user-123',
    email: 'user@example.com',
    name: 'Demo User',
    provider: 'google',
    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=random',
    plan: 'pro',
    credits: 100,
  },
  {
    id: 'github-user-456',
    email: 'dev@example.com',
    name: 'Developer',
    provider: 'github',
    avatar: 'https://ui-avatars.com/api/?name=Developer&background=random',
    plan: 'free',
    credits: 10,
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('mockUser')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Error loading user:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  // Login function that returns a promise
  const login = async (provider: 'google' | 'github') => {
    setLoading(true)
    
    return new Promise<void>((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const mockUser = provider === 'google' ? MOCK_USERS[0] : MOCK_USERS[1]
        localStorage.setItem('mockUser', JSON.stringify(mockUser))
        setUser(mockUser)
        setLoading(false)
        resolve()
      }, 800)
    })
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('mockUser')
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}
