import { useState, useEffect } from 'react';

// Define user type
export interface MockUser {
  id: string;
  email: string;
  name: string;
  provider: string;
  avatar: string;
  plan: string;
  credits: number;
}

export function useMockAuth() {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('mockUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem('mockUser');
    setUser(null);
    window.location.href = '/login';
  };

  return { user, loading, logout };
}
