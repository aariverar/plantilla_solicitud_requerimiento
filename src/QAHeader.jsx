import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const QAHeader = () => (
  <AppBar position="static" elevation={0} sx={{ background: 'linear-gradient(45deg, #EC0000 30%, #FF4444 90%)', mb: 2 }}>
    <Toolbar sx={{ justifyContent: 'center', position: 'relative', minHeight: 64 }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 600, color: '#FFFFFF', textAlign: 'center', flex: 1 }}>
        Santander - Solicitud de Requerimiento
      </Typography>
      <Box sx={{ position: 'absolute', right: 16, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(236,0,0,0.15)' }}>
          <Typography sx={{ color: '#EC0000', fontWeight: 'bold', fontSize: '18px' }}>QA</Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
);

export default QAHeader;
