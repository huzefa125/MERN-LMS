import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const initialSignInFormData = {
  userEmail: "",
  password: "",
};

const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  function handleLoginUser() {
    // replace with API call
    console.log("Login submit", signInFormData);
  }

  function handleRegisterUser() {
    // replace with API call
    console.log("Register submit", signUpFormData);
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}