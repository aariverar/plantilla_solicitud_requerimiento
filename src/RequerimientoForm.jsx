
import React, { useState } from 'react';
import { generateWordFromTemplate } from './utils/generateWord';
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
    tipoNuevo: false,
    tipoMejora: false,
    tipoCorreccion: false,
    tipoOtro: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'tipoNuevo' || name === 'tipoMejora' || name === 'tipoCorreccion' || name === 'tipoOtro') {
      setForm({
        ...form,
        tipoNuevo: false,
        tipoMejora: false,
        tipoCorreccion: false,
        tipoOtro: false,
        [name]: checked
      });
    } else if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setForm({
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
      tipoNuevo: false,
      tipoMejora: false,
      tipoCorreccion: false,
      tipoOtro: false,
    });
  };

  return (
    <ThemeProvider theme={santanderTheme}>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#FFFFFF', width: '100%' }}>
        <QAHeader />
        <Container maxWidth="md" sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Paper elevation={0} sx={{ p: 4, mb: 3, width: '100%', maxWidth: '100%' }}>
            <Box component="form" onSubmit={handleClear} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
              {/* Información del Requerimiento - estilo tabla */}
              <Box sx={{ mt: 4, width: '100%', maxWidth: 800 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', marginBottom: 24 }}>
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ padding: 8, border: '1px solid #ccc' }}>
                        <TextField
                          fullWidth
                          label="Nombre Requerimiento"
                          name="info"
                          value={form.info}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: 220, padding: 8, border: '1px solid #ccc', verticalAlign: 'top', fontWeight: 500 }}>
                        Tipo de Requerimiento:
                      </td>
                      <td style={{ padding: 8, border: '1px solid #ccc' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <label><input type="checkbox" name="tipoNuevo" checked={form.tipoNuevo} onChange={handleChange} /> Nuevo producto</label>
                          <label><input type="checkbox" name="tipoMejora" checked={form.tipoMejora} onChange={handleChange} /> Mejora</label>
                          <label><input type="checkbox" name="tipoCorreccion" checked={form.tipoCorreccion} onChange={handleChange} /> Corrección</label>
                          <label><input type="checkbox" name="tipoOtro" checked={form.tipoOtro} onChange={handleChange} /> Otro</label>
                        </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Resto de campos */}
                {/* Agrupación en tabla de los campos de descripción, objetivo y beneficio */}
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', marginBottom: 24 }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, border: '1px solid #ccc', fontWeight: 400, fontSize: 17, verticalAlign: 'top', width: '30%' }}>
                        Descripción general de la necesidad o problema:
                      </td>
                      <td style={{ padding: 8, border: '1px solid #ccc' }}>
                        <TextField
                          fullWidth
                          name="descripcion"
                          value={form.descripcion}
                          onChange={handleChange}
                          required
                          multiline
                          minRows={3}
                          placeholder="(Explique claramente el problema, necesidad o idea que motiva la solicitud.)"
                          InputProps={{ style: { fontStyle: form.descripcion ? 'normal' : 'italic', color: form.descripcion ? undefined : '#aaa' } }}
                          variant="outlined"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, border: '1px solid #ccc', fontWeight: 400, fontSize: 17, verticalAlign: 'top' }}>
                        Objetivo del requerimiento:
                      </td>
                      <td style={{ padding: 8, border: '1px solid #ccc' }}>
                        <TextField
                          fullWidth
                          name="objetivo"
                          value={form.objetivo}
                          onChange={handleChange}
                          required
                          multiline
                          minRows={3}
                          placeholder="¿Qué se espera lograr con este requerimiento?"
                          InputProps={{ style: { fontStyle: form.objetivo ? 'normal' : 'italic', color: form.objetivo ? undefined : '#aaa' } }}
                          variant="outlined"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: 8, border: '1px solid #ccc', fontWeight: 400, fontSize: 17, verticalAlign: 'top' }}>
                        Justificación/Beneficio esperado:
                      </td>
                      <td style={{ padding: 8, border: '1px solid #ccc' }}>
                        <TextField
                          fullWidth
                          name="beneficio"
                          value={form.beneficio}
                          onChange={handleChange}
                          required
                          multiline
                          minRows={3}
                          placeholder="¿Por qué es importante este requerimiento? ¿Qué beneficios aporta?"
                          InputProps={{ style: { fontStyle: form.beneficio ? 'normal' : 'italic', color: form.beneficio ? undefined : '#aaa' } }}
                          variant="outlined"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Detalle de Requerimientos - estilo tabla */}
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', marginBottom: 24 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'center', fontWeight: 400, fontSize: 18, padding: 8, border: '1px solid #ccc', background: '#fafafa' }}>
                        Requerimientos Funcionales
                      </th>
                      <th style={{ textAlign: 'center', fontWeight: 400, fontSize: 18, padding: 8, border: '1px solid #ccc', background: '#fafafa' }}>
                        Requerimientos NO Funcionales
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 8, border: '1px solid #ccc', verticalAlign: 'top' }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={6}
                          name="funcionales"
                          value={form.funcionales}
                          onChange={handleChange}
                          placeholder="¿Qué funcionalidades específicas necesita el usuario?"
                          InputProps={{
                            style: { fontStyle: form.funcionales ? 'normal' : 'italic', color: form.funcionales ? undefined : '#aaa' }
                          }}
                          variant="outlined"
                        />
                      </td>
                      <td style={{ padding: 8, border: '1px solid #ccc', verticalAlign: 'top' }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={6}
                          name="noFuncionales"
                          value={form.noFuncionales}
                          onChange={handleChange}
                          placeholder="Ej: desempeño, usabilidad, seguridad, cumplimiento normativo, etc."
                          InputProps={{
                            style: { fontStyle: form.noFuncionales ? 'normal' : 'italic', color: form.noFuncionales ? undefined : '#aaa' }
                          }}
                          variant="outlined"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ minWidth: 200, fontWeight: 600, borderWidth: 2 }}
                >
                  Limpiar
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ minWidth: 200, fontWeight: 600 }}
                  onClick={() => generateWordFromTemplate(form)}
                >
                  Generar Word
                </Button>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={0} sx={{ p: 3, textAlign: 'center', backgroundColor: '#F8F9FA', width: '100%', maxWidth: '100%' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()}  Santander Consumer Bank - Aseguramiento de Calidad<br />
              Powered by Abraham Rivera | Support: arivera_scb@santander.com.pe - 2025
            </Typography>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RequerimientoForm;
