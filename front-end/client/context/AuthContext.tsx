import { createContext, useContext } from "react";

type authContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
}

const authContextDefaultValues: authContextType = {
    user: false,
    login: () => {},
    logout: () => {},
}

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}
