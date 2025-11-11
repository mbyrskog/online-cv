import { Box, Divider, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box>
      <Typography variant="h4">About me</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography gutterBottom>
        Hello and welcome to my online CV. I'm Michael, a developer who enjoys
        building scaleable, practical and reliable applications. I've worked
        with both frontend and backend development and appreciate working in
        teams where collaboration and problem-solving come naturally.
        <br />
        <br />
        Before moving into software development, I worked with electrical
        installations, often as part of small teams on construction sites. This
        experience has taught me the importance of cooperation, planning, and
        precision, values that still guide how I work today. Feel free to
        explore the site to learn more about my skills, background, and
        projects.
      </Typography>
    </Box>
  );
};
