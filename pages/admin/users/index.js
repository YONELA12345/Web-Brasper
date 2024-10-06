import React, { useState } from "react";
import Layout from "../layout";

const Users = () => {
  // Estado para manejar el modo de edición de cada fila
  const [editingRow, setEditingRow] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, name: "luis", email: "luis.otto@example.com", password: "12345" },
    {
      id: 2,
      name: "Jacob",
      email: "jacob.thornton@example.com",
      password: "abcdef",
    },
  ]);

  // Estado para manejar los valores editados
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Función para iniciar la edición de una fila
  const handleEditClick = (user) => {
    setEditingRow(user.id);
    setEditFormData({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Función para guardar los cambios
  const handleSaveClick = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...editFormData } : user
    );
    setUsers(updatedUsers);
    setEditingRow(null);
  };

  // Función para cancelar la edición
  const handleCancelClick = () => {
    setEditingRow(null);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Usuarios</h1>
          </div>
          <div className="col">Crear usuarios</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Correo</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {editingRow === user.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingRow === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingRow === user.id ? (
                    <input
                      type="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.password
                  )}
                </td>
                <td>
                  {editingRow === user.id ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-success me-2"
                        onClick={() => handleSaveClick(user.id)}
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancelClick}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-success me-2"
                        onClick={() => handleEditClick(user)}
                      >
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger">
                        Eliminar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Users;
