const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPois() {
  const res = await fetch(`${API_URL}/poi`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des points d'intérêt");
  }

  return res.json();
}

export async function createPoi(data) {
  const res = await fetch(`${API_URL}/poi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la création du point d'intérêt");
  }

  return res.json();
}

export async function updatePoi(id, data) {
  const res = await fetch(`${API_URL}/poi/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la mise à jour du point d'intérêt");
  }

  return res.json();
}

export async function deletePoi(id) {
  const res = await fetch(`${API_URL}/poi/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression du point d'intérêt");
  }
}
