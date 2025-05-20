export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("uk-UA", {
    dateStyle: "short",
    timeStyle: "short",
  });
};
