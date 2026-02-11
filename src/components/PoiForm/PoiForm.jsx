import styles from "./PoiForm.module.css";

export default function PoiForm({
  name,
  description,
  latitude,
  longitude,
  poiId,
  editingPoiId,
  onSubmit,
  onCancelEdit,
  setName,
  setDescription,
  setLatitude,
  setLongitude,
  setPoiId,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="test"
        placeholder="Nom du point d'intérêt"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />
      <textarea
        placeholder="Description"
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
        required
      />

      <input
        type="number"
        step="any"
        placeholder="Latitude"
        value={latitude || ""}
        onChange={(e) => setLatitude(e.target.value)}
        className={styles.input}
        required
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude"
        value={longitude || ""}
        onChange={(e) => setLongitude(e.target.value)}
        className={styles.input}
        required
      />

      <input
        type="number"
        placeholder="ID Catégorie"
        value={poiId || ""}
        onChange={(e) => setPoiId(e.target.value)}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.button}>
        {editingPoiId
          ? "Modifier le point d'intérêt"
          : "Ajouter un point d'intérêt"}
      </button>

      {editingPoiId && (
        <button
          type="button"
          onClick={onCancelEdit}
          className={`${styles.button} ${styles.cancelButton}`}
        >
          Annuler la modification
        </button>
      )}
    </form>
  );
}
