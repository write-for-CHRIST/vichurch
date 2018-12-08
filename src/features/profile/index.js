import React from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import Button from '@material-ui/core/Button'
import {listVcProfiles} from '../../graphql/queries';

export default () => {
  const listQuery = async () => {
    console.log('Listing profile...');
    const allProfiles = await API.graphql(graphqlOperation(listVcProfiles));
    alert(JSON.stringify(allProfiles));
  };

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={listQuery}>Get Profiles</Button>
    </div>
  );
};
