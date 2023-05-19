import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Header from "./layout/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import { LOCAL_STORAGE_VALUES } from "./constants/LocalStorageValues";

function App() {
  const login = import.meta.env.VITE_LOGIN;
  const password = import.meta.env.VITE_PASSWORD;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const hr = import.meta.env.VITE_HR;

  const logIn = async (
    login: any,
    password: any,
    clientId: any,
    clientSecret: any,
    hr: any
  ) => {
    const response = await axios.get(
      `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}&hr=${hr}`,
      {
        headers: { "x-secret-key": "GEU4nvd3rej*jeh.eqp" },
      }
    );
    localStorage.setItem(
      LOCAL_STORAGE_VALUES.ACCESS_TOKEN,
      response.data.access_token
    );
  };

  useEffect(() => {
    logIn(login, password, clientId, clientSecret, hr);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
