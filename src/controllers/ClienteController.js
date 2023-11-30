const Database = require('./utils/database');

class ClienteController {
  constructor() {
    this.db = new Database();
  }

  async crearCliente(clienteData) {
    try {
      // Procesar los datos y realizar la inserción en la base de datos usando la conexión MySQL
      const results = await this.db.query('INSERT INTO clientes SET ?', clienteData);
      console.log('Cliente insertado:', results);
      return results;
    } catch (error) {
      console.error('Error al crear cliente:', error);
      throw error;
    }
  }
}

module.exports = ClienteController;
