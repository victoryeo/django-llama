'use client'

import React, { ReactNode, useState, useEffect, createContext, useContext } from 'react';

interface LoginContextType {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
};

const LoginContextDefaultValues: LoginContextType = {
    isLogin: false,
    login: () => {},
    logout: () => {},
};

const LoginContext = createContext<LoginContextType | undefined>(LoginContextDefaultValues);

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
      throw new Error(
        'useContext must be used'
      );
    }
    return context;
};

interface LoginProps {
    children:  ReactNode;
};

export const LoginProvider: React.FC<LoginProps> = ({
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
            <LoginContext.Provider value={{ isLogin, login, logout}}>
                {children}
            </LoginContext.Provider>
        </>
    );
}