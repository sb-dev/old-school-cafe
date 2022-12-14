import { client, q } from '../config/db';

import faunadb from 'faunadb';

export const signIn = (email, password) => client
  .query(
    q.Login(
      q.Match(q.Index("users_by_email"), email),
      { password },
    )
  )

const initClient = (secret) => new faunadb.Client({
  secret
});

class Auth {
  constructor() {
    this.storage = window.localStorage;
    const token = this.storage.getItem('token');
    this.client = token ? initClient(token) : client;
  }

  async signIn(email, password) {
    try {
      const { secret } = await signIn(email, password);
      this.storage.setItem('token', secret);
      this.client = initClient(secret);
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }

  signOut() {
    this.storage.setItem('token', false);
    return this.client && this.client.query(q.Logout(true));
  }

  isSignedIn() {
    return this.client && this.client.query(q.HasCurrentIdentity());
  }

  currentSession() {
    return this.client && this.client.query(q.currentSession());
  }
}

export default new Auth();
