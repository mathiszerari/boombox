import { Account, ID, Client, Databases } from 'react-native-appwrite'

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.mathis.boombox',
  projectID: '666f08ce002d201c0af9',
  databaseID: '666f0c61001ef8ebd859',
  userCollectionID: '666f0c8c00027d2fa449',
  storageID: '666f109400274b968cf3',
}
// Init your React Native SDK
const client = new Client()

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectID) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
  
const account = new Account(client)
const avatars = new Avatars(clien)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if (!newAccount) throw Error
    const avatarURL = avatars.getInitials(username)
    await SignIn(email, password)

    const newUser = await databases.createDocument(
      config.databaseID,
      config.userCollectionID,
      ID.unique(),
      {
        accountID: newAccount.$id,
        email,
        username,
        avatar: avatarURL,
      }
    )

    return newUser
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function SignIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session
  } catch (error) {
    throw new Error(error)
  }
}