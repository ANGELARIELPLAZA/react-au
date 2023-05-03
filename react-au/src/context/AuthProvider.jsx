import React, { useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Global";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const rol = localStorage.getItem("rol");
      const caja = localStorage.getItem("caja");
      if (!token || !user|| !caja) {
        setLoading(false);
        return false;
      }

      const userObj = JSON.parse(user);
      const userId = userObj.id;

      try {
        const response = await fetch(
          Global.url + "usuarios/profile/" + userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAuth(data.user);
        } else {
          throw new Error("Error fetching user data");
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    authUser();
  }, []);


  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;