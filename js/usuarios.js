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
                            <button class="btn btn-warning" onclick="editar(${row.id})">Editar</button>
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

function agregar() {}

function editar(id) {}
