export interface AppProps {
    isAuthenticated: boolean;
    userHasAuthenticated: (isAuthenticated: boolean) => void;
    handleLogout: () => void;
}

export interface Map<T> {
    [key:string]:T;
}
