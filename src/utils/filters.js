export function filterArtists(artists, filters) {
  return artists.filter((artist) => {
    // Check if the artist matched the selected day or if "all" is selected
    const isDayMatching = filters.day === "all" || artist.date === filters.day;
    // Same logic for the genre
    const isGenreMatching =
      filters.genre === "all" || artist.genre === filters.genre;

    // Only return true if both conditions are met
    return isDayMatching && isGenreMatching;
  });
}

export function groupConcertsByDay(artists) {
  return artists.reduce((acc, artist) => {
    // If the date doesn't exist yet in "acc", initialize it with an empty array
    if (!acc[artist.date]) acc[artist.date] = [];

    // Add the artist to the corresponding date array
    acc[artist.date].push(artist);
    return acc;
  }, {});
}

// Here, "acc" is the accumulator of .reduce(), it stores the result progresively and becomes the final object
