const API_URL = `http://127.0.0.1:8000/api/usuarios`;
listar();

async function listar() {
  const response = await axios.get(`${API_URL}`);
  const usuarios = response.data;

  usuarios.forEach(row => {
    $('#rows').append(`
                    <tr class="table-light">
                        <td>${row.nombre}</td>
                        <td>${row.apellidoP}</td>
                        <td>${row.apellidoM}</td>
                        <td>${row.usuario}</td>
                        <td>${row.correo}</td>
                        <td>${row.telefono}</td>
                        <td>${row.direccion}</td>
                        <td>${row.estado}</td>
                        <td>${row.municipio}</td>
                        <td>
                            <button class="btn btn-warning" data-toggle="modal" data-target="#modalEditar" onclick="getUserEdit(${row.id})">Editar</button>
                        </td>
                         <td>
                            <button class="btn btn-danger" onclick="eliminar(${row.id})">Eliminar</button>
                        </td>
                    </tr>
                `);
  });
}

async function eliminar(id) {
  axios.delete(`${API_URL}/${id}`).then(res => {
    window.location.href = `file:///C:/Users/JAVIER/Documents/9VNO/Desarrollo%20Web/AppFundas/Front-end-AppFundas/dashboard/usuarios.html`;
  });
}

async function agregar() {
  const nombre = document.getElementById('nombre_a').value;
  const apellidoP = document.getElementById('apellidoP_a').value;
  const apellidoM = document.getElementById('apellidoM_a').value;
  const usuario = document.getElementById('usuario_a').value;
  const contrasena = document.getElementById('contrasena').value;
  const correo = document.getElementById('correo_a').value;
  const telefono = document.getElementById('telefono_a').value;
  const direccion = document.getElementById('direccion_a').value;
  const estado = document.getElementById('estado_a').value;
  const municipio = document.getElementById('municipio_a').value;

  const data = {
    nombre,
    apellidoP,
    apellidoM,
    usuario,
    contrasena,
    correo,
    telefono,
    direccion,
    estado,
    municipio,
  };

  const response = await axios.post(`${API_URL}`, data).then(res => {
    window.location.href = `file:///C:/Users/JAVIER/Documents/9VNO/Desarrollo%20Web/AppFundas/Front-end-AppFundas/dashboard/usuarios.html`;
  });
}

async function getUserEdit(id) {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);

    document.getElementById('nombre').value = data.municipio;
    document.getElementById('apellidoP').value = data.apellidoP;
    document.getElementById('apellidoM').value = data.apellidoM;
    document.getElementById('usuario').value = data.usuario;
    document.getElementById('correo').value = data.correo;
    document.getElementById('telefono').value = data.telefono;
    document.getElementById('direccion').value = data.direccion;
    document.getElementById('estado').value = data.estado;
    document.getElementById('municipio').value = data.municipio;
  } catch (error) {
    console.log(error);
  }
}

async function editar(id) {
  const nombre = $('#nombre').val();
  const apellidoP = $('#apellidoP').val();
  const apellidoM = $('#educational_program').val();
  const usuario = $('#area').val();
  const correo = $('#quarter').val();
  const telefono = $('#group').val();
  const direccion = $('#system').val();
  const estado = $('#persona').val();
  const municipio = $('#persona').val();

  const data = {
    nombre,
    apellidoP,
    apellidoM,
    usuario,
    correo,
    telefono,
    direccion,
    estado,
    municipio,
  };

  console.log(data);
  // const response = await axios.put(`${API_URL}/${id}`, data);
}
