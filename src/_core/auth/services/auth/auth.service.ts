import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, Auth as FirebaseAuth } from 'firebase/auth';

export class Auth {
  private static _app: FirebaseApp;
  private static _auth: FirebaseAuth;

  public static init(config: FirebaseOptions) {
    this._app = initializeApp(config);
    this._auth = getAuth(this._app);
  }
}
