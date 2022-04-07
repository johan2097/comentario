import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { nombre: "Ana perez", email: "ana@gmail.com", website: "www.example.com" },
  { nombre: "Wilfrido Baez", email: "wilfrido@gmail.com", website: "www.example.com"  },
  { nombre: "Julio perez", email: "julio@gmail.com", website: "www.example.com"  },
  { nombre: "Amado Guzman", email: "amado@gmail.com", website: "www.example.com" },
  { nombre: "Diana Mora", email: "diana@gmail.com", website: "www.example.com"},
  { nombre: "Pedro Torres", email: "pedro@gmail.com", website: "www.example.com" },
];

class Home extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      nombre: "",
      email: "",
      website: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    // eslint-disable-next-line array-callback-return
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar Comentario</Button>
          <br />
          <br />
          <label>Buscar</label>
       <input class="typeahead form-control" type="text" placeholder="Buscar"></input>
         <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Website</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.nombre}>
                  <td>{dato.nombre}</td>
                  <td>{dato.email}</td>
                  <td>{dato.website}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Edicion de comentarios</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              Nombre:
              </label>
            
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                website: 
              </label>
              <input
                className="form-control"
                name="website"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.website}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Comentario: 
              </label>
              <textarea
                className="form-control"
                name="texto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Guardar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Regresar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Creacion de Comentario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Nombre: 
              </label>
              
              <input
                className="form-control"
                name="nombre"
                type="text"
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="correo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Website: 
              </label>
              <input
                className="form-control"
                name="website"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Comentario: 
              </label>
              <textarea
                className="form-control"
                name="texto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Guardar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Regresar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Home;
