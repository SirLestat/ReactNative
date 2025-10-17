import { createContext, useContext, type PropsWithChildren } from 'react';

interface AuthContextType {
  status: 'cheking' | 'authenticated' | 'unauthenticated';
}

export const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider
      value={{
        status: 'authenticated',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
