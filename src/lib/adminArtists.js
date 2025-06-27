const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArtists() {
  const res = await fetch(`${API_URL}/artists`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des artistes");
  }

  return res.json();
}

export async function createArtist(data) {
  const res = await fetch(`${API_URL}/artists`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la création de l'artiste");
  }

  return res.json();
}

export async function updateArtist(id, data) {
  const res = await fetch(`${API_URL}/artists/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la mise à jour de l'artiste");
  }

  return res.json();
}

export async function deleteArtist(id) {
  const res = await fetch(`${API_URL}/artists/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression de l'artiste");
  }
}
