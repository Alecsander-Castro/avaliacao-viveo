"use client";

import { useState } from "react";
import { TextField, IconButton, InputAdornment, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock, Google, Apple, Window } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");
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
            Bem-vindo de volta!
          </h1>
          <p className="text-center text-gray-600 mb-8">Faça login para continuar sua jornada</p>

          <form onSubmit={handleSubmit} className="mb-6">
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
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">Lembrar-me</span>
              </label>
              <a
                href="/recuperar-senha"
                className="text-sm text-blue-500 font-medium hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <button
              type="submit"
              className=" cursor-pointer duration-300 w-full py-3 px-4 rounded-lg border border-gray-300 hover:border-green-400 text-gray-600 font-bold transition-all  hover:-translate-y-0.5 hover:bg-green-50"
            >
              Entrar
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Ou continue com</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <button className="py-3 px-4 border border-gray-300 rounded-lg transition-all hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center">
              <Google />
            </button>
            <button className="py-3 px-4 border border-gray-300 rounded-lg transition-all hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center">
              <Window sx={{ color: "#00A4EF" }} />
            </button>
            <button className="py-3 px-4 border border-gray-300 rounded-lg transition-all hover:border-gray-700 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center">
              <Apple />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Ainda não tem conta?
            <Link href="/cadastro" className="text-blue-500 font-semibold hover:underline">
              Cadastrar-se
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
