export function getFormattedDate(
  timestamp: number = Date.now(),
  format: string = "dd/mmm/yyyy hh:mm:ss aa"
): string {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: format.includes("aa"),
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  if (format) {
    const hours = date.getHours();
    const amPM = hours >= 12 ? "pm" : "am";

    const formatted = format
      .replace("dd", ("0" + date.getDate()).slice(-2))
      .replace("mmm", formattedDate.slice(0, 3))
      .replace("yyyy", date.getFullYear().toString())
      .replace("hh", ("0" + (hours % 12 || 12)).slice(-2))
      .replace("mm", ("0" + date.getMinutes()).slice(-2))
      .replace("ss", ("0" + date.getSeconds()).slice(-2))
      .replace("aa", amPM);

    return formatted;
  }

  return formattedDate;
}
