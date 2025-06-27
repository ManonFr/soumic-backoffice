import styles from "./ArtistForm.module.css";

export default function ArtistForm({
  name,
  photo,
  genre,
  date,
  startTime,
  endTime,
  stageId,
  genres,
  stages,
  editingArtistId,
  onCancelEdit,
  onSubmit,
  setName,
  setPhoto,
  setGenre,
  setDate,
  setStartTime,
  setEndTime,
  setStageId,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nom"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />

      <input
        type="text"
        placeholder="URL de la photo"
        value={photo || ""}
        onChange={(e) => setPhoto(e.target.value)}
        className={styles.input}
        required
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className={styles.select}
        required
      >
        <option value="">Sélectionner un genre</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <select
        value={stageId}
        onChange={(e) => setStageId(e.target.value)}
        className={styles.select}
        required
      >
        <option value="">Sélectionner une scène</option>
        {stages.map((stage) => (
          <option key={stage.id} value={stage.id}>
            {stage.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date || ""}
        onChange={(e) => setDate(e.target.value)}
        className={styles.date}
        required
      />

      <input
        type="time"
        value={startTime || ""}
        onChange={(e) => setStartTime(e.target.value)}
        className={styles.time}
        required
      />

      <input
        type="time"
        value={endTime || ""}
        onChange={(e) => setEndTime(e.target.value)}
        className={styles.time}
        required
      />

      <button type="submit" className={styles.button}>
        {editingArtistId ? "Modifier artiste" : "Ajouter artiste"}
      </button>

      {editingArtistId && (
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
