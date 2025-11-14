"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { getUsers } from "../http/getUsers";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    country: string;
  };
  picture: {
    large: string;
  };
}

export default function Usuarios() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    const data = await getUsers();
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md">
        <Card className="p-6 rounded-2xl shadow-xl backdrop-blur-xl bg-white/90">
          <CardContent>
            <h1 className="text-3xl font-bold text-center mb-6 bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Usuário Aleatório
            </h1>

            {loading && <p className="text-center text-gray-600">Carregando...</p>}

            {!loading && user && (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={user.picture.large}
                  alt="Foto do usuário"
                  width={120}
                  height={120}
                  className="rounded-full shadow-md"
                />

                <h2 className="text-xl font-bold">
                  {user.name.first} {user.name.last}
                </h2>

                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">{user.location.country}</p>

                <button
                  onClick={fetchUser}
                  className="mt-4 w-full py-3 px-4 rounded-lg border border-gray-300 hover:border-green-400 text-gray-600 font-bold transition-all hover:-translate-y-0.5 hover:bg-green-50"
                >
                  Gerar outro usuário
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
