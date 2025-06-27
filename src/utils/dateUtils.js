export function formatDateToFullDate(dateString) {
  if (!dateString) return "Date inconnue";

  const cleanDate = dateString.split("T")[0];
  // Splits the "year/month/day" into three numeric values
  const [year, month, day] = cleanDate.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) return "Date invalide";

  let formattedDate = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

// Shortens a full time string hh:mm:ss to hh:mm
export function formatTimeHHMM(timeString) {
  if (!timeString || typeof timeString !== "string") return "";
  return timeString.slice(0, 5);
}
