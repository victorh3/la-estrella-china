import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(5rem, 10vw, 3.5rem)",
              fontFamily: `"Long Cang", cursive;`,
              fontWeight: 400,
              fontStyle: "normal",
              textAlign: "center",
            }}
          >
            La Estrella China
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            A family-owned and operated Chinese restaurant proudly serving the
            Sweetwater community in Miami, FL.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              width: { xs: "100%", sm: "350px" },
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              href="tel:3052212891"
            >
              Call to order
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              href="/la-estrella-china/estrella_menu_20250623.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View menu
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
