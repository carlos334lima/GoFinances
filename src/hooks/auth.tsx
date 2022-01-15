import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

//@libraries
import AsyncStorage from "@react-native-async-storage/async-storage";

//@utils
import { configureSignInGoogle } from "../utils/SocialMidia";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  user:{
    email: string;
    familyName: string;
    givenName: string;
    id: number;
    name: string;
    photo: string;
 }
}

const AuthContext = createContext({});

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  useEffect(() => {
    configureSignInGoogle();

    loadUser();
  }, []);

  async function loadUser() {
    const key = "@gofinances/user";
    const user = await AsyncStorage.getItem(key);

    setData(JSON.parse(user as any));
  }

  return (
    <AuthContext.Provider value={{ user: data }}>
      {children}
    </AuthContext.Provider>
  );
}

//hook
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
