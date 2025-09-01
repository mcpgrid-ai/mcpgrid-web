import admin from 'firebase-admin';

const config = () => {
  if (!process.env.GCP_ADMIN_ACCOUNT_KEY) return {};
  return JSON.parse(process.env.GCP_ADMIN_ACCOUNT_KEY);
};

const app = () => {
  if (admin.apps[0]) return admin.apps[0];
  return admin.initializeApp({
    credential: admin.credential.cert(config()),
  });
};

export const auth = () => app().auth();
