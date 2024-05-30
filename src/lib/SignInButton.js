import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

const SignInButton = () => {
    const { signIn } = useContext(AuthContext);

    return <button onClick={signIn}>Sign in</button>;
};

export default SignInButton;
