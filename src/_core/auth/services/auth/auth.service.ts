import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  getAuth,
  Auth as FirebaseAuth,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

const googleAuthProvider = new GoogleAuthProvider();

export class Auth {
  private static _app: FirebaseApp;
  private static _auth: FirebaseAuth;

  public static init(options: FirebaseOptions) {
    if (!this.app) {
      this._app = initializeApp(options);
      this._auth = getAuth(this._app);
    }
  }

  public static get app() {
    return this._app;
  }

  public static get auth() {
    return this._auth;
  }

  public static async signInWithGoogle() {
    try {
      await signInWithRedirect(this._auth, googleAuthProvider);
    } catch (error) {
      throw error;
    }
  }
}
