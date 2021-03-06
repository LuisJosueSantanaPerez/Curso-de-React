import {useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp  = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState([ 'One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
      <>

          <Navbar bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand>
                      Gif Expert App
                  </Navbar.Brand>
                  <Navbar.Collapse className="justify-content-end">
                      <AddCategory setCategories={setCategories} />
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          <Container fluid>
              {
                  categories.map( category => (
                      <GifGrid key={category} category={ category }/>
                  ))
              }
          </Container>
      </>
    );
}

export default GifExpertApp;
