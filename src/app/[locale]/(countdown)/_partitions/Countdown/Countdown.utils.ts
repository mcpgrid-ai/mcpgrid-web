export const getTimeRemaining = (targetDate: Date) => {
  const total = Date.parse(targetDate.toString()) - Date.now();
  const seconds = Math.floor((total / 1000) % 60).toString();
  const minutes = Math.floor((total / 1000 / 60) % 60).toString();
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24).toString();
  const days = Math.floor(total / (1000 * 60 * 60 * 24)).toString();

  return { days, hours, minutes, seconds };
};
