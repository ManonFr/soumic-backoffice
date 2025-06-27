"use client";

import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function AdminLoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Connexion Admin</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nom d'utilisateur"
        className={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Connexion
      </button>
    </form>
  );
}
