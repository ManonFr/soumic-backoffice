import styles from "./ArtistList.module.css";
import { formatDateToFullDate, formatTimeHHMM } from "@/utils/dateUtils";

export default function ArtistList({ artists, onEdit, onDelete }) {
  return (
    <div className={styles.container}>
      {artists.map((artist) => (
        <div key={artist.artist_id} className={styles.eventCard}>
          <img
            src={artist.photo}
            alt={artist.artist_name}
            className={styles.artistPhoto}
          />
          <div className={styles.overlay}>
            <div className={styles.name}>{artist.artist_name}</div>
            <div className={styles.date}>
              {formatDateToFullDate(artist.date)} <br />
              {formatTimeHHMM(artist.start_time)} -{" "}
              {formatTimeHHMM(artist.end_time)}
            </div>
            <div className={styles.stage}>{artist.stage_name}</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => onEdit(artist)}>
              Modifier
            </button>
            <button
              className={styles.button}
              onClick={() => onDelete(artist.artist_id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
