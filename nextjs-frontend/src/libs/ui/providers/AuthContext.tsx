'use client'

import React, { ReactNode, useState, useEffect, createContext, useContext } from 'react';

interface AuthContextType {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContextDefaultValues: AuthContextType = {
    isLogin: false,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<AuthContextType | undefined>(AuthContextDefaultValues);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error(
        'useContext must be used'
      );
    }
    return context;
};

interface AuthProps {
    children:  ReactNode;
};

export const AuthProvider: React.FC<AuthProps> = ({
    children,
  }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    
    useEffect(() => {
        //setIsLogin(localStorage.getItem('login-state') || false);
    }, []);

    const login = () => {
        setIsLogin(true);
    };

    const logout = () => {
        setIsLogin(false);
    };

    return (
        <>
            <AuthContext.Provider value={{ isLogin, login, logout}}>
                {children}
            </AuthContext.Provider>
        </>
    );
}