import { Account, ID, Client } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.mathis.boombox',
  projectID: '666f08ce002d201c0af9',
  databaseID: '666f0c61001ef8ebd859',
  userCollectionID: '666f0c8c00027d2fa449',
  storageID: '666f109400274b968cf3',
}
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectID) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
  
  const account = new Account(client);

  export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
      .then(function (response) {
          console.log(response);
      }, function (error) {
          console.log(error);
      }
    );
  }
;