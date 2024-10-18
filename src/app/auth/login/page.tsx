"use client";

import axios from "axios";
import React, { useState } from "react";

type Geo = {
  lat: string;
  lng: string;
};
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(false);
  

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <span>{user?.name}</span>
      <div className="bg-black rounded-lg p-3 flex flex-col gap-3">
        <h1 className="text-white">Login Page</h1>
        {/* Form for login */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          data-testid="error"
          className={`text-red-700 text-center ${error ? "block" : "hidden"}`}
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Error message
        </p>
        <button
          disabled={username === "" || password === "" || loading}
          className="bg-white rounded-lg p-3 text-black disabled:cursor-no-drop"
          onClick={handleLogin}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
