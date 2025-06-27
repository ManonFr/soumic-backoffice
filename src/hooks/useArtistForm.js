import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
} from "@/lib/adminArtists";

const GENRE_TO_ID = {
  "rock/folk": 1,
  "hip hop": 2,
  "pop/indie": 3,
  "reggae/afrobeat/soul": 4,
  electro: 5,
};

export default function useArtistForm() {
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [stages, setStages] = useState([]);

  const [editingArtistId, setEditingArtistId] = useState(null);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [stageId, setStageId] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchArtists();
  }, []);

  async function fetchArtists() {
    try {
      const data = await getArtists();
      setArtists(data);

      const uniqueGenres = Array.from(
        new Set(data.map((artist) => artist.genre))
      );
      setGenres(uniqueGenres);

      // Extracts unique stages using Map to avoid duplicated
      const uniqueStages = Array.from(
        new Map(
          data.map((artist) => [
            artist.stage_id,
            { id: artist.stage_id, name: artist.stage_name },
          ])
        ).values()
      );
      setStages(uniqueStages);
    } catch (err) {}
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const genre_id = GENRE_TO_ID[genre]; // Converts selected genre name to its ID

    if (!genre_id) {
      toast.error("Genre non reconnu ❌");
      return;
    }

    const artistData = {
      name,
      photo,
      genre_id,
      date,
      start_time: startTime,
      end_time: endTime,
      stage_id: Number(stageId),
    };

    try {
      if (editingArtistId) {
        // Edit mode
        await updateArtist(editingArtistId, artistData);
        toast.success("Artiste modifié ! ✅ ");
        setEditingArtistId(null); // Exit edit mode
      } else {
        // Create mode
        await createArtist(artistData);
        toast.success("Artiste ajouté ! ✅");
      }

      //Refresh artists list
      fetchArtists();
      resetForm();
    } catch (err) {
      toast.error("Erreur lors de l'enregistrement ❌");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteArtist(id);
      toast.success("Artiste supprimé 🗑️");
      fetchArtists();
    } catch (err) {
      toast.error("Erreur lors de la suppression ❌");
    }
  }

  function handleEdit(artist) {
    setEditingArtistId(artist.artist_id);
    setName(artist.name);
    setPhoto(artist.photo);
    setGenre(artist.genre);
    setDate(artist.date);
    setStartTime(artist.start_time);
    setEndTime(artist.end_time);
    setStageId(artist.stage_id.toString());
  }

  function resetForm() {
    // Clear form fields
    setName("");
    setPhoto("");
    setGenre("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setStageId("");
  }

  const filteredArtists = artists
    .filter((artist) =>
      (artist.artist_name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.artist_name.localeCompare(b.artist_name));

  return {
    artists: filteredArtists,
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
    searchTerm,
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
  };
}
