import Stack from "@mui/material/Stack";

const AppLayout = ({ children }) => {
  return (
    <>
      <Stack
        minHeight="100vh"
        justifyContent="space-between"
        pb={{ xs: 7, md: 0 }}
        overflow={{ xs: "hidden", md: "auto" }}
      >
        <Stack>{children}</Stack>
      </Stack>
    </>
  );
};

export default AppLayout;
