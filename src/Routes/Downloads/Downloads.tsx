import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { fileData } from "./DownloadData";
import { linkData } from "./DownloadData";

export const Downloads = () => {
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const toggleViewer = (url: string) => {
    setActiveFile(activeFile === url ? null : url);
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Typography variant="h4">Downloads and links</Typography>
      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ mb: 4 }}>
        {fileData.map(({ title, url }) => (
          <Box key={url} sx={{ marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Box sx={{ mb: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{ marginRight: 1 }}
                onClick={() => toggleViewer(url)}
              >
                {activeFile === url ? "Hide" : "View"}
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleDownload(url)}
              >
                Download
              </Button>
            </Box>
            {activeFile === url && (
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                  marginTop: 2,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <iframe
                  src={url}
                  title="File Viewer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </Box>
            )}
            <Divider />
          </Box>
        ))}
      </Box>
      <Typography variant="h5" gutterBottom>
        Coding projects
      </Typography>

      {linkData.map(({ title, description, webUrl, gitHubUrl }) => (
        <Box
          key={title}
          sx={{
            marginBottom: 2,
          }}
        >
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Box
            sx={{
              mb: 1,
              display: "flex",
              gap: gitHubUrl && webUrl ? 1 : 0,
            }}
          >
            {gitHubUrl && (
              <Button
                size="small"
                variant="contained"
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            {webUrl && (
              <Button
                size="small"
                variant="contained"
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </Button>
            )}
          </Box>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
