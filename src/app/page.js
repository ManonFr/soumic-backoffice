"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Home() {
  const router = useRouter();

  const handleLogin = async (username, password) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Connexion réussie");
        router.push("/artists");
        return true;
      } else {
        toast.error(data.error || "Erreur lors de la connexion");
        return false;
      }
    } catch (err) {
      toast.error("Erreur lors de la connexion");
      return false;
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}
