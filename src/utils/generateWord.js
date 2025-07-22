import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';

// Carga la plantilla desde public y genera el Word con los datos
export async function generateWordFromTemplate(form) {
  // Determinar la opción marcada en los checkboxes
  let tipoReq = '';
  if (form.tipoNuevo) tipoReq = 'Nuevo producto';
  else if (form.tipoMejora) tipoReq = 'Mejora';
  else if (form.tipoCorreccion) tipoReq = 'Corrección';
  else if (form.tipoOtro) tipoReq = 'Otro';

  // Mapea los nombres de variables del docx a los del formulario
  const data = {
    ID: form.id,
    FECHA: form.fecha,
    CARGO: form.area,
    CONTACTO: form.contacto,
    NOMBRE_REQ: form.info,
    DESCRIPCION: form.descripcion,
    OBJETIVO: form.objetivo,
    BENEFICIO: form.beneficio,
    FUNCIONALES: form.funcionales,
    NO_FUNCIONALES: form.noFuncionales,
    CA: form.criterios,
    TIPO_REQ: tipoReq,
  };

  // Cargar la plantilla como arraybuffer
  const response = await fetch('/plantilla_solicitud_requerimiento.docx');
  const content = await response.arrayBuffer();
  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
  doc.setData(data);
  try {
    doc.render();
  } catch (error) {
    console.error('Error al renderizar el documento:', error);
    alert('Error al generar el documento Word.');
    return;
  }
  const out = doc.getZip().generate({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const fileName = `Solicitud_Requerimiento_${data.ID || 'ID'}_${data.FECHA || 'FECHA'}.docx`;
  saveAs(out, fileName);
}
