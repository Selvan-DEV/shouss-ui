import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, CardActionArea, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectsImageModal(props) {
  const { open, setOpen, selectedProject } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative', background: "#000", boxShadow: "none" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="subtitle1" fontWeight="bold">
              {selectedProject?.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            p: 3,
            justifyContent: 'center',
            background: "#000",
          }}
        >
          {selectedProject && selectedProject.projectDetails && selectedProject.projectDetails.projectImages.map((imageUrl, index) => (
            <CardActionArea
              key={index}
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(50% - 12px)' },
                height: 500,
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              {/* Info Section */}
              {/* <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  p: 2,
                  color: 'white',
                  zIndex: 2,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </Box> */}

              {/* Hover Overlay */}
              {/* <Box
                className="hoverOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transform: 'translateY(10px)',
                  zIndex: 3,
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: '500',

                  // Always show for mobile view
                  '@media (max-width:600px)': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }}
                onClick={() => handleClick(index)}
              >
                <VisibilityIcon sx={{ mr: 1 }} />
                <Typography variant="body1" fontWeight={500}>
                  View Project
                </Typography>
              </Box> */}

            </CardActionArea>
          ))}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
