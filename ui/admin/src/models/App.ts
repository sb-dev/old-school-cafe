export interface AppProps {
    isAuthenticated: boolean;
    userHasAuthenticated: (isAuthenticated: boolean) => void;
}

export interface Map<T> {
    [key:string]:T;
}