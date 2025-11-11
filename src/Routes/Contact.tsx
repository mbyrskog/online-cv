import { Box, Divider, Link, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <Box>
      <Typography variant="h4">Contact</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography>Location: Malmö, Sweden</Typography>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.9060117113586!2d13.004663877045608!3d55.60364940346927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e2c62791e7%3A0xdef9a8ab44f27ce9!2sAltonagatan%204%2C%20211%2038%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1734877877730!5m2!1sen!2sse"
          width="100%"
          height="400"
          style={{ border: "none" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Typography gutterBottom>
        Address: Altonagatan 4, 211 38 Malmö, Sweden
      </Typography>
      <Typography gutterBottom>
        Phone: <Link href="tel:+46733842127">+46(0)733842127</Link>
      </Typography>
      <Typography gutterBottom>
        Email:{" "}
        <Link href="mailto:mbyrskog@hotmail.com">mbyrskog@hotmail.com</Link>
      </Typography>
    </Box>
  );
};
