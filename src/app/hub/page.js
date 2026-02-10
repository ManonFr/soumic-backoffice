"use client";

import Link from "next/link";
import styles from "./hub.module.css";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function HubPage() {
  useAdminAuth(); // Protect the page: redirect to "/" if not logged in

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/");
  };

  return (
    <main>
      <h1>Tableau de bord administrateur</h1>

      <div className={styles.hubContainer}>
        <div className={styles.buttonsWrapper}>
          <Link href="/artists" className={styles.hubButton}>
            Gérer les artistes
          </Link>

          <Link href="/poi" className={styles.hubButtonSecondary}>
            Gérer les points d’intérêt
          </Link>
        </div>
        <button onClick={handleLogOut} className={styles.logoutButton}>
          Déconnexion
        </button>
      </div>
    </main>
  );
}
