
import React, { useState } from 'react';
import QAHeader from './QAHeader';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material';
import './App.css';


const santanderTheme = createTheme({
  palette: {
    primary: {
      main: '#EC0000',
      light: '#FF4444',
      dark: '#B30000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#F5F5F5',
      contrastText: '#EC0000'
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#EC0000'
    },
    h6: {
      fontWeight: 500,
      color: '#333333'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#EC0000',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(236, 0, 0, 0.1)'
        }
      }
    }
  }
});

const RequerimientoForm = () => {
  const [form, setForm] = useState({
    id: '',
    fecha: '',
    area: '',
    contacto: '',
    info: '',
    descripcion: '',
    objetivo: '',
    beneficio: '',
    funcionales: '',
    noFuncionales: '',
    criterios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
  };

  return (
    <ThemeProvider theme={santanderTheme}>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#FFFFFF', width: '100%' }}>
        <QAHeader />
        <Container maxWidth="md" sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Paper elevation={0} sx={{ p: 4, mb: 3, width: '100%', maxWidth: '100%' }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 3,
                width: '100%',
                maxWidth: 800
              }}>
                <TextField
                  fullWidth
                  label="ID de Requerimiento"
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Fecha"
                  name="fecha"
                  type="date"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Cargo / Área"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Contacto"
                  name="contacto"
                  value={form.contacto}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box sx={{ mt: 4, width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Información de requerimiento"
                  name="info"
                  value={form.info}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Descripción de la necesidad o problema"
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Objetivo del requerimiento"
                  name="objetivo"
                  value={form.objetivo}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Beneficio esperado"
                  name="beneficio"
                  value={form.beneficio}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Detalle de requerimiento - Funcionales"
                  name="funcionales"
                  value={form.funcionales}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Detalle de requerimiento - No Funcionales"
                  name="noFuncionales"
                  value={form.noFuncionales}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
                <TextField
                  fullWidth
                  label="Criterios de aceptación"
                  name="criterios"
                  value={form.criterios}
                  onChange={handleChange}
                  required
                  multiline
                  minRows={2}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ minWidth: 200 }}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={0} sx={{ p: 3, textAlign: 'center', backgroundColor: '#F8F9FA', width: '100%', maxWidth: '100%' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Banco Santander México. Todos los derechos reservados.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RequerimientoForm;
