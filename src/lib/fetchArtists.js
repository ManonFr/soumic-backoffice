export async function fetchAllArtists() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/artists`, {
    next: { revalidate: 3600 },
  });

  return await res.json();
}

// Fetch artists for a specific stage by filtering from all artists
export async function fetchArtistsByStage(stageId) {
  const artists = await fetchAllArtists();

  return artists.filter(
    (artist) => Number(artist.stage_id) === Number(stageId)
  );
}

function adaptArtist(a) {
  return {
    id: a.artist_id,
    name: a.artist_name,
    photo: a.photo,
    genre: a.genre,
    date: a.date.split("T")[0],
    startTime: a.start_time,
    endTime: a.end_time,
    stage: a.stage_name,
  };
}

// Fetch all artists and derive stages from them
export async function fetchFestivalData() {
  const artists = await fetchAllArtists();

  // Build a list of unique stages based on artist data
  const stagesMap = new Map();
  artists.forEach((artist) => {
    if (!stagesMap.has(artist.stage_name)) {
      stagesMap.set(artist.stage_name, {
        id: artist.stage_name,
        name: artist.stage_name,
      });
    }
  });

  const stages = Array.from(stagesMap.values());

  // Format artist objects for frontend display
  const adaptedArtists = artists.map(adaptArtist);

  return { artists: adaptedArtists, stages };
}
