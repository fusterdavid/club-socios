const socios = [
  {
    "numero_socio": "001",
    "documento": "12345678",
    "nombre": "Samuel Centeno",
    "fecha_afiliacion": "2020-03-15",
    "tipo": "oro",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "002",
    "documento": "89101112",
    "nombre": "Eliana Gaia",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "003",
    "documento": "27903017",
    "nombre": "María Mercedes Piazza",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "cuotas_adeudadas": 0
  },
   {
    "numero_socio": "004",
    "documento": "21984997",
    "nombre": "David Alejandro Fuster",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "cuotas_adeudadas": 0
  },
];

function buscarSocio() {
  const doc = document.getElementById('documento').value.trim();
  const socio = socios.find(s => s.documento === doc);

  const resultadoDiv = document.getElementById('resultado');
  if (socio) {
    const cuotas = socio.cuotas_adeudadas || 0;
    const estado = cuotas === 0 ? "Activo (cuotas al día)" : `Debe ${cuotas} cuota(s)`;

    resultadoDiv.innerHTML = `
      <p><strong>Número de socio:</strong> ${socio.numero_socio}</p>
      <p><strong>Documento:</strong> ${socio.documento}</p>
      <p><strong>Nombre completo:</strong> ${socio.nombre}</p>
      <p><strong>Fecha de afiliación:</strong> ${socio.fecha_afiliacion}</p>
      <p><strong>Tipo de socio:</strong> ${socio.tipo}</p>
      <p><strong>Estado:</strong> ${estado}</p>
    `;
  } else {
    resultadoDiv.innerHTML = "<p>Socio no encontrado.</p>";
  }
}
