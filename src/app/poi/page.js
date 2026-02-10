"use client";

import Link from "next/link";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import usePoiForm from "@/hooks/usePoiForm";
import styles from "./adminPoiPage.module.css";

export default function AdminPoiPage() {
  useAdminAuth(); // Protect the page

  const { pois = [], handleDelete, handleEdit, editingPoiId } = usePoiForm();

  return (
    <div className={styles.container}>
      <h1>Gestion des points d’intérêt</h1>

      <div className={styles.header}>
        <Link href="/hub" className={styles.backButton}>
          ← Retour au tableau de bord
        </Link>
      </div>

      <p>Nombre de POI : {pois.length}</p>

      <ul className={styles.poiList}>
        {pois.map((poi) => (
          <li key={poi.id} className={styles.poiItem}>
            <strong>{poi.name}</strong> — {poi.description}
            <div>
              <button onClick={() => handleEdit(poi)}>Éditer</button>
              <button onClick={() => handleDelete(poi.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>

      {editingPoiId && <p>Mode édition actif</p>}
    </div>
  );
}
