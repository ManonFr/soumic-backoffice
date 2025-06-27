export async function fetchAllPOIs() {
  const res = await fetch(`https://soumic-backend.onrender.com/poi`, {
    next: { revalidate: 3600 },
  });

  return await res.json();
}

// Only fetch POIs of type "stage"
export async function fetchStagesOnly() {
  const allPois = await fetchAllPOIs();

  return allPois.filter((poi) => poi.type === "stage");
}

// Fetch a specific stage by its ID
export async function fetchStage(stageId) {
  const allPois = await fetchAllPOIs();

  return allPois.find(
    (poi) => poi.type === "stage" && poi.id === Number(stageId)
  );
}
