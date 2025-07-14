const socios = [
  {
    "numero_socio": "001",
    "documento": "21984997",
    "nombre": "Fuster, David Alejandro",
    "fecha_afiliacion": "2020-03-15",
    "tipo": "oro",
    "función": "Tercer vocal titular",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "002",
    "documento": "46176192",
    "nombre": "Roldan Contreras, Shane Alexander",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Tesorero",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "003",
    "documento": "",
    "nombre": "Centeno Samuel",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Socio",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "004",
    "documento": "32646413",
    "nombre": "Gaia Eliana",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Socio",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "005",
    "documento": "48123115",
    "nombre": "Assis, Constanza Pilar",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Secretario",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "006",
    "documento": "49466161",
    "nombre": "Maeda, Milagros",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Vocal",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "007",
    "documento": "46670288",
    "nombre": "Gomez, Francisco Axel",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Presidente",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "008",
    "documento": "96113331",
    "nombre": "Amaya Muñoz, Ricardo Andres",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Vocal",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "009",
    "documento": "47988794",
    "nombre": "Delgado, Ian Elias",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Vocal",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "010",
    "documento": "46728052",
    "nombre": "Del Río Ferrada, Tamara",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Vocal",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "011",
    "documento": "49026090",
    "nombre": "Mereles, Cristian Guillermo",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Vocal",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "012",
    "documento": "27903017",
    "nombre": "Piazza, María Mercedes",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Contralor",
    "cuotas_adeudadas": 0
  },
  {
    "numero_socio": "013",
    "documento": "",
    "nombre": "",
    "fecha_afiliacion": "2022-07-10",
    "tipo": "oro",
    "función": "Socio",
    "cuotas_adeudadas": 0
  }
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
      <p><strong>Función:</strong> ${socio.función || "No especificada"}</p>
      <p><strong>Estado:</strong> ${estado}</p>
    `;
  } else {
    resultadoDiv.innerHTML = "<p>Socio no encontrado.</p>";
  }
}

