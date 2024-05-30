import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAuthUrl } from "@next-auth/google";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [callbackUrl, setCallbackUrl] = useState("");

    useEffect(() => {
        const currentUrl = router.asPath;
        setCallbackUrl(currentUrl);
    }, [router]);

    const signIn = () => {
        const authUrl = getAuthUrl({
            callbackUrl: `${window.location.origin}${callbackUrl}`,
        });
        router.push(authUrl);
        return (
            <AuthProvider.Provider value={{ signIn, callbackUrl }}>
                {children}
            </AuthProvider.Provider>
        );
    };
};

export { AuthProvider, AuthContext };
