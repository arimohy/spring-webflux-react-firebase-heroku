
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (email, uid,photoURL,displayName) => ({ type: LOGIN, payload: {email, uid ,photoURL,displayName} })

export const logout = () => ({
    type: LOGOUT
});



