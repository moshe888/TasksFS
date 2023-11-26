
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button , Spinner ,Card} from 'react-bootstrap';



function Pokemon() {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const show = (p : any) => {
        console.log(p.name);
    }
    const loadData = async() => {
         try {

          setIsLoading(true);
          const response = await axios.get('https://api.pokemontcg.io/v2/cards');
          if (response.status === 200) {
            if (response.data.data.length > 0) {
              setIsLoading(false);
              const data = response.data.data;
              setPokemons(data);
            } else {
              setIsLoading(false);
            }
          } else {
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setIsLoading(false);
        }
      };

    return (

 
      
    <div >
      <Container className='pokemon'>
      <Button variant="success" onClick={loadData}>Load Data</Button>

            <h2>Pokemon List</h2>

          <Row>
          {isLoading
            ? (  <Spinner> </Spinner>) 
            : (

            pokemons.map((pokemon: any) => (
              // key={pokemon.id}
              <Col lg ={3} md={6} sm={6} >
              <Card className='card'>
                <Card.Img variant="top" src= {pokemon.images.small} />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Card.Text>
                    {pokemon.supertype}
                  </Card.Text>
                  <Button onClick= {() => show(pokemon)} variant="primary">Show</Button>
                </Card.Body>
              </Card>
              </Col>
            ))
          )}
        </Row>
 
      </Container>

    </div>
  )
}

export default Pokemon