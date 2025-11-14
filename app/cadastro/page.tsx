"use client";

import { useState } from "react";
import { TextField, IconButton, InputAdornment, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock, Person } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Cadastro realizado com sucesso!");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-green-50 p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200 rounded-full blur-[60px] opacity-40 pulse-blob-1"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200 rounded-full blur-[60px] opacity-40 pulse-blob-2"></div>

      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 relative z-10 fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-green-500 shadow-lg flex items-center justify-center transition-transform hover:scale-105 p-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold bg-linear-to-br from-blue-500 to-green-500 bg-clip-text text-transparent">
                <Image src="/viveo-logo.svg" alt="Logo" width={64} height={64} />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center mb-2 bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Criar conta
          </h1>
          <p className="text-center text-gray-600 mb-8">Preencha os dados para continuar</p>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-5">
              <TextField
                fullWidth
                label="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            <div className="mb-5">
              <TextField
                fullWidth
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center cursor-pointer">
                <Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} />
                <span className="ml-2 text-sm text-gray-700">Aceito os termos de uso</span>
              </label>
            </div>

            <button
              type="submit"
              className=" cursor-pointer duration-300 w-full py-3 px-4 rounded-lg border border-gray-300 hover:border-green-400 text-gray-600 font-bold transition-all hover:-translate-y-0.5 hover:bg-green-50"
            >
              Criar conta
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Já possui conta?{" "}
            <Link href="/" className="text-blue-500 font-semibold hover:underline">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
