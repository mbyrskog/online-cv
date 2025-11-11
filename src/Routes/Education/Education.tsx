import { Box, Typography, Divider, Grid } from "@mui/material";
import { educationData } from "./EducationData";

export const Education = () => {
  return (
    <Box>
      <Typography variant="h4">Education and certifications</Typography>
      <Divider sx={{ marginY: 2 }} />
      {educationData.map((edu, index) => (
        <Box key={index} marginBottom={2}>
          <Grid container>
            <Grid size={10}>
              <Grid container>
                <Grid size={{ xs: 10, lg: 8 }}>
                  <Typography variant="h5">{edu.institution || ""}</Typography>
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
                    {edu.date}
                  </Typography>
                </Grid>
              </Grid>
              <Typography whiteSpace="pre-line">{edu.description}</Typography>
            </Grid>
            <Grid size={2} sx={{ textAlign: "right" }}>
              {edu.image && (
                <a
                  href={edu.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={edu.image}
                    alt={`${edu.institution} logo`}
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
