import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const RowContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
}));

const Day = styled((props: TypographyProps) => (
  <Typography color="textSecondary" variant="body2" {...props} />
))(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
  width: "80px",
}));

const Divider = styled((props: TypographyProps) => (
  <Typography variant="body2" color="textDisabled" {...props} />
))(() => ({
  width: "5px",
  textAlign: "center",
  fontWeight: 600,
  margin: "0 10px",
}));

const Hours = styled((props: TypographyProps) => (
  <Typography color="textSecondary" variant="body2" {...props} />
))(() => ({
  width: "140px",
}));

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
            width: "260px",
          }}
          textAlign={{ sm: "right" }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Hours of Operation
            </Typography>
          </Box>
          <RowContainer>
            <Day>Monday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 9:30 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Tuesday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 9:30 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Wednesday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 9:30 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Thursday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 9:30 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Friday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 10:00 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Saturday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 10:00 PM</Hours>
          </RowContainer>
          <RowContainer>
            <Day>Sunday</Day>
            <Divider>|</Divider>
            <Hours>11:00 AM - 9:30 PM</Hours>
          </RowContainer>
        </Box>
      </Box>
    </Container>
  );
}
