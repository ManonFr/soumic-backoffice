"use client";

import Link from "next/link";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import usePoiForm from "@/hooks/usePoiForm";
import PoiForm from "@/components/PoiForm/PoiForm";
import styles from "./adminPoiPage.module.css";

export default function AdminPoiPage() {
  useAdminAuth(); // Protect the page

  const {
    pois = [],
    name,
    description,
    latitude,
    longitude,
    poiId,
    editingPoiId,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCancelEdit,
    setName,
    setDescription,
    setLatitude,
    setLongitude,
    setPoiId,
  } = usePoiForm();

  return (
    <div className={styles.container}>
      <h1>Gestion des points d’intérêt</h1>

      <div className={styles.header}>
        <Link href="/hub" className={styles.backButton}>
          Retour au tableau de bord
        </Link>
      </div>

      <PoiForm
        name={name}
        description={description}
        latitude={latitude}
        longitude={longitude}
        poiId={poiId}
        editingPoiId={editingPoiId}
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
        setName={setName}
        setDescription={setDescription}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setPoiId={setPoiId}
      />

      <ul className={styles.poiList}>
        {pois.map((poi) => (
          <li key={poi.id} className={styles.poiItem}>
            <div>
              <div className={styles.poiTitle}>{poi.name}</div>

              <div className={styles.poiDescription}>{poi.description}</div>

              <div className={styles.poiCoords}>
                📍 {poi.latitude}, {poi.longitude}
              </div>
            </div>

            <div className={styles.cardButtons}>
              <button
                onClick={() => handleEdit(poi)}
                className={`${styles.cardButton} ${styles.editButton}`}
              >
                Modifier
              </button>

              <button
                onClick={() => handleDelete(poi.id)}
                className={`${styles.cardButton} ${styles.deleteButton}`}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingPoiId && <p>Mode édition actif</p>}
    </div>
  );
}
