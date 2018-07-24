import React from 'react';
import {connect} from 'react-redux';
import {getResolvedObject} from '../util/resolved';
import { Segment, Card, Image, Container, List} from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

const Profile = ({user})=>{
  const Hml = ReactHtmlParser(getResolvedObject(_.omit(user,['id','siteStandardProfileRequest','formattedName','pictureUrl','publicProfileUrl','pictureUrls'])));
  const pictureUrls = _.isArray(user.pictureUrls) && user.pictureUrls.map((p)=>
  <List.Item><Image href={p} src={p} size='small'/></List.Item>)
  console.log(pictureUrls);
  
    return (
      <Container>
          <Card >
          </Card>
          <Card fluid={true}>
          <Card.Header>
          <Segment>
          <List horizontal>
           <List.Item>
              <Image src={user.pictureUrl} size='min' circular />
            </List.Item>
            <List.Item>
             <h1>{user.formattedName}</h1>
            </List.Item>
            <List.Item>
             <a href="/user/logout">Logout</a>
            </List.Item>
          </List>
          </Segment>
          </Card.Header>
            <Card.Content>
            <List>
            {Hml}
            <List.Item>
              <h3>siteStandardProfileRequest :</h3>
              <a href={user.siteStandardProfileRequest}>{user.siteStandardProfileRequest}</a>
            </List.Item>
            <List.Item>
            <h3>Pictures <Card.Meta>{_.isBoolean(pictureUrls) ?'Click on image':"Your don't have any pictures"}</Card.Meta></h3>
            
            <List horizontal>
            {pictureUrls}
            </List>
            </List.Item>
            
            </List>
            </Card.Content>
          </Card>
      
      </Container>
    )

}
export default connect(({user})=>({user}))(Profile);