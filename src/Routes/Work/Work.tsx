import { Box, Typography, Divider, Grid } from "@mui/material";
import { workData } from "./WorkData";

export const Work = () => {
  return (
    <Box>
      <Typography variant="h4">Work experience</Typography>
      <Divider sx={{ marginY: 2 }} />
      {workData.map((work, index) => (
        <Box key={index} marginBottom={2}>
          <Grid container>
            <Grid size={10}>
              <Grid container>
                <Grid size={{ xs: 10, lg: 8 }}>
                  <Typography variant="h5">{work.company || ""}</Typography>
                  <Typography variant="h6">
                    {work.position ? work.position : ""}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 10, sm: 10, md: 10, lg: 4, xl: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "right",
                        lg: "right",
                        xl: "right",
                      },
                    }}
                  >
                    {work.date}
                  </Typography>
                </Grid>
              </Grid>
              {work.assignment && (
                <Box>
                  {work.assignment.map((assignment, index) => (
                    <Box key={index} sx={{ mt: 1 }}>
                      <Typography>{assignment.title}</Typography>
                      <Typography>{assignment.description}</Typography>
                      {assignment.skills && (
                        <Typography
                          sx={{
                            fontStyle: "italic",
                            textDecoration: "underline",
                            mb: 2,
                            mt: 1,
                          }}
                        >
                          {assignment.skills.join(", ")}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              )}

              <Typography>{work.description}</Typography>

              {work.skills && (
                <Typography
                  sx={{
                    mb: 2,
                    mt: 1,
                    fontStyle: "italic",
                    textDecoration: "underline",
                  }}
                >
                  {work.skills.join(", ")}
                </Typography>
              )}
            </Grid>

            <Grid size={2} sx={{ textAlign: "right" }}>
              {work.image && (
                <a
                  href={work.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={work.image}
                    alt={`${work.company} logo`}
                    style={{
                      maxWidth: "90px",
                      maxHeight: "50px",
                    }}
                  />
                </a>
              )}
            </Grid>
          </Grid>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
