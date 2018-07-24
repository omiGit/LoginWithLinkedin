import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
export default () => {
  return (
    <Dimmer active inverted>
    <Loader size='medium'></Loader>
  </Dimmer>
  )
}
