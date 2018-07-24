import React from 'react';
import { Card, Image, Divider, Container } from 'semantic-ui-react'
import img from '../images/Linkedin.jpg';

//Login UI
export default (props) => {
    return (
 <Container>
  <Card centered={true}>
      <Card.Content>
        <Image src={img} />
        <Divider hidden />
        <Card.Description textAlign="center"> 
          To get your profile,<br/> <strong>Loin to your linkedin account</strong>
        </Card.Description>
        <Card.Content>
        <Divider hidden />
        <a href="/auth/linkedin" className="btn">Login</a>
        </Card.Content>
      </Card.Content>
  </Card>
  </Container>
)}


