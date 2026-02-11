"use client";

import ArtistForm from "@/components/ArtistForm/ArtistForm";
import ArtistList from "@/components/ArtistList/ArtistList";
import SearchBar from "@/components/SearchBar/SearchBar";
import useArtistForm from "@/hooks/useArtistForm";
import styles from "./adminArtistsPage.module.css";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import Link from "next/link";

export default function AdminArtistsPage() {
  useAdminAuth(); // Protect the page: redirect to "/" if not logged in

  const {
    artists,
    genres,
    stages,
    name,
    photo,
    genre,
    date,
    startTime,
    endTime,
    stageId,
    editingArtistId,
    handleSubmit,
    handleEdit,
    handleDelete,
    setName,
    setPhoto,
    setGenre,
    setDate,
    setStartTime,
    setEndTime,
    setStageId,
    setEditingArtistId,
    setSearchTerm,
  } = useArtistForm();

  return (
    <div>
      <h1>Gestion des artistes</h1>
      <div className={styles.searchAndLogout}>
        <Link href="/hub" className={styles.backButton}>
          Retour au tableau de bord
        </Link>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <ArtistForm
        name={name}
        photo={photo}
        genre={genre}
        date={date}
        startTime={startTime}
        endTime={endTime}
        stageId={stageId}
        genres={genres}
        stages={stages}
        editingArtistId={editingArtistId}
        onCancelEdit={() => setEditingArtistId(null)}
        onSubmit={handleSubmit}
        setName={setName}
        setPhoto={setPhoto}
        setGenre={setGenre}
        setDate={setDate}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        setStageId={setStageId}
      />

      <ArtistList
        artists={artists}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
