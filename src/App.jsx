import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';


function App() {
  const [show, setShow] = useState(false);

  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (valor) => {
    if(valor != ""){
      setShow(true);
    }else{
      contatos[valor].nome = prompt("Digite o novo nome: ")
      contatos[valor].email = prompt("Digite o novo email: ")
      contatos[valor].telefone = prompt("Digite o novo nome: ")
      setContatos([...contatos])
    }
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  const adicionarContato = () => {
    if (nome && email && telefone) {
      setContatos([...contatos, { nome, email, telefone }])
      setNome('');
      setEmail('')
      setTelefone('')
      handleClose()
    }
  }

  const removerContato = (indice) => {
    contatos.splice(indice, 1)
    setContatos([...contatos])
  }
 

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><FaUserAlt size={22} /> Lista de Contatos</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="success" onClick={handleShow}>Adicionar contato</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome completo</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contatos, index) => (
            <>
              <tr>
                <td>{contatos.nome}</td>
                <td>{contatos.email}</td>
                <td>{contatos.telefone}</td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(index)}>Editar</Button>
                  <Button variant="danger" onClick={() => removerContato(index)}>Remover</Button>
                </td>
              </tr>

              <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                  <Modal.Header closeButton>
                    <Modal.Title>Informações do Contato</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">Nome Completo</InputGroup.Text>
                      <Form.Control
                        required
                        placeholder="Digite o nome completo..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
                      <Form.Control
                        required
                        placeholder="Digite o email..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">Telefone</InputGroup.Text>
                      <Form.Control
                        required
                        placeholder="Digite o telefone..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </InputGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button variant="primary" onClick={adicionarContato}>
                      Salvar
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>
            </>

          ))}
        </tbody>
      </Table>




      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Informações do Contato</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nome Completo</InputGroup.Text>
              <Form.Control
                required
                placeholder="Digite o nome completo..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setNome(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
              <Form.Control
                required
                placeholder="Digite o email..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Telefone</InputGroup.Text>
              <Form.Control
                required
                placeholder="Digite o telefone..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setTelefone(e.target.value)}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={adicionarContato}>
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


    </>
  )
}

export default App
