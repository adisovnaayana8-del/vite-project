import img from "../assets/image.png";
import { Box, Typography, TextField, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e6b3b3, #f5d0d0)",
        p: 5,
        minHeight: "100vh"
      }}
    >
      <Typography variant="h4" align="center" mb={4}>
        НАШИ КОНТАКТЫ
      </Typography>

      {/* 1-кард */}
      <Box
        sx={{
          display: "flex",
          background: "#fff",
          borderRadius: "16px",
          p: 3,
          mb: 3,
          gap: 3
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Textile Group</Typography>
          <Typography>Бишкек, Манаса 123</Typography>
          <Typography>+996 500 123 456</Typography>
          <Typography>info@textile.kg</Typography>
        </Box>

        <img
          src={img}
          alt="factory"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </Box>

      {/* 2-кард */}
      <Box
        sx={{
          display: "flex",
          background: "#fff",
          borderRadius: "16px",
          p: 3,
          gap: 3
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" mb={2}>
            Связаться с нами
          </Typography>

          <TextField fullWidth label="Имя" sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" sx={{ mb: 2 }} />

          <Button variant="contained">Отправить</Button>
        </Box>

        <Box>
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <LocationOnIcon />
            <Typography>Бишкек</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <PhoneIcon />
            <Typography>+996 500 123 456</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <EmailIcon />
            <Typography>info@textile.kg</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;