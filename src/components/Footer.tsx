import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontWeight: 600, mt: 2 }}
            >
              10920 W Flagler St STE 210 <br /> Miami, FL 33174
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              (305) 221-2891
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
          textAlign={{ sm: "right" }}
        >
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            Hours of Operation
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Monday | 11:00 AM - 9:30 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Tuesday | 11:00 AM - 9:30 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Wednesday | 11:00 AM - 9:30 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Thursday | 11:00 AM - 9:30 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Friday | 11:00 AM - 10:00 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Saturday | 11:00 AM - 10:00 PM
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Sunday | 11:00 AM - 9:30 PM
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
