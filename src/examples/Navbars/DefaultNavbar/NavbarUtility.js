export const getNavbarDisplayName = (
  name,
  hindiName,
  namecontext,
  languagePreference,
  isDynamic
) => {
  if (isDynamic && namecontext) return "Welcome " + namecontext.split(" ")[0];
  if (languagePreference == "English") return name;

  if (hindiName) return hindiName;

  return name;
};
