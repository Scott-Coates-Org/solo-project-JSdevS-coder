<<<<<<< HEAD
import React, { useEffect, useContext, createContext, useState } from 'react'
import { firebase } from 'firebase/client'
=======
import React, { useEffect, useContext, createContext, useState } from "react";
import { firebase } from 'firebase/client';
>>>>>>> e47f273875f14a0ee4031c323ee2b7a2be9bb760

// https://stackoverflow.com/questions/55366320/how-do-i-use-the-firebase-onauthstatechange-with-the-new-react-hooks
// https://javascript.plainenglish.io/introduction-to-react-context-api-with-firebase-authentication-92a6a3cf116d
export const AuthContext = createContext({
<<<<<<< HEAD
	isAuthenticated: false,
	isLoading: true,
	user: null,
})

export const AuthProvider = ({ children, onLogin }) => {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const unlisten = firebase.auth().onAuthStateChanged(user => {
			setUser(user)
			user && onLogin && onLogin(user)
			setIsLoading(false)
			setIsLoaded(true)
		})

		return unlisten
	}, [])

	return (
		<AuthContext.Provider
			value={{ isLoading, isLoaded, user, isAuthenticated: !!user }}>
			{children}
		</AuthContext.Provider>
	)
}
export const useAuth = () => useContext(AuthContext)
=======
    isAuthenticated: false,
    isLoading: true,
    user: null
});

export const AuthProvider = ({ children, onLogin }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const unlisten = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            user && onLogin && onLogin(user);
            setIsLoading(false);
            setIsLoaded(true);
        });

        return unlisten;
    }, []);

    return (
        <AuthContext.Provider value={{ isLoading, isLoaded, user, isAuthenticated: !!user }}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
>>>>>>> e47f273875f14a0ee4031c323ee2b7a2be9bb760
