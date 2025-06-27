export async function fetchPoiData() {
  const res = await fetch("https://soumic-backend.onrender.com/poi", {
    next: { revalidate: 3600 },
  });

  const rawPois = await res.json();

  // Formats the data for the frontend
  const adaptedMarkers = rawPois.map((poi) => ({
    id: poi.id,
    latitude: poi.latitude,
    longitude: poi.longitude,
    name: poi.name,
    description: poi.description,
    // Normalizes the type: "stage" becomes "stages" for consistency
    type: poi.type === "stage" ? "stages" : poi.type,
  }));

  return adaptedMarkers;
}
