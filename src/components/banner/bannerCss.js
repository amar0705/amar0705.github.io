export const description = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: 4,
};

export const descriptionTextStyling = {
  display: "flex",
  flexDirection: "row",
  justifyContent: { xs: "center", md: "left" },
  alignItems: "center",
  width: "100%",
};

export const boxStyling = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const imgStyle = {
  height: "70px",
};

export const profileIcons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: { xs: "center", md: "left" },
  gap: 2,
  width: "100%",
};

export const profileIconsSize = {
  height: 60,
  cursor: "pointer",
  "&:hover": {
    height: 80,
  },
};

export const profileIconsSizeContact = {
  height: 40,
  cursor: "pointer",
  "&:hover": {
    height: 50,
  },
};
