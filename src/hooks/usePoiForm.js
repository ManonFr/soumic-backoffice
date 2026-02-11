import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { getPois, createPoi, updatePoi, deletePoi } from "@/lib/adminPoi";

export default function usePoiForm() {
  const [pois, setPois] = useState([]);

  const [editingPoiId, setEditingPoiId] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [poiId, setPoiId] = useState("");

  useEffect(() => {
    fetchPois();
  }, []);

  async function fetchPois() {
    try {
      const data = await getPois();
      setPois(data);
    } catch (err) {
      toast.error("Erreur lors du chargement des POIs ❌");
    }
  }

  function resetForm() {
    setName("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setPoiId("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const poiData = {
      name,
      description,
      latitude,
      longitude,
      poi_id: Number(poiId),
    };

    try {
      if (editingPoiId) {
        await updatePoi(editingPoiId, poiData);
        toast.success("Point d'intérêt modifié ! ✅ ");
        setEditingPoiId(null);
      } else {
        await createPoi(poiData);
        toast.success("Point d'intérêt ajouté ! ✅ ");
      }

      // Refresh pois list
      fetchPois();
      resetForm();
      setEditingPoiId(null);
    } catch (err) {
      toast.error("Erreur lors de l'enregistrement ❌");
    }
  }

  async function handleDelete(id) {
    try {
      await deletePoi(id);
      toast.success("Point d’intérêt supprimé 🗑️");
      fetchPois();
    } catch (err) {
      toast.error("Erreur lors de la suppression ❌");
    }
  }

  function handleEdit(poi) {
    setEditingPoiId(poi.id);
    setName(poi.name);
    setDescription(poi.description);
    setLatitude(poi.latitude);
    setLongitude(poi.longitude);
    setPoiId(poi.poi_id.toString());
  }

  function handleCancelEdit() {
    setEditingPoiId(null);
    resetForm();
  }

  return {
    pois,
    name,
    description,
    latitude,
    longitude,
    poiId,
    editingPoiId,
    handleSubmit,
    handleEdit,
    handleCancelEdit,
    handleDelete,
    setName,
    setDescription,
    setLatitude,
    setLongitude,
    setPoiId,
    setEditingPoiId,
  };
}
