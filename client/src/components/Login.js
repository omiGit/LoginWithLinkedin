import React from 'react'
import { Card, Icon, Image, Button, Divider, Container } from 'semantic-ui-react'
import img from '../images/Linkedin.jpg';


const CardExampleCardProps = (props) => {
    console.log(props);
    return (
 <Container>
  <Card centered={true}>
      <Card.Content>
        <Image src={img} />
        <Divider hidden />
        <Card.Description>
          To get your profile,<br/> <strong>Loin to your linkedin account</strong>
        </Card.Description>
        <Card.Content>
        <Divider hidden />
        <a href="/auth/linkedin">Login</a>
        </Card.Content>
      </Card.Content>
  </Card>
  </Container>
)}

export default CardExampleCardProps
