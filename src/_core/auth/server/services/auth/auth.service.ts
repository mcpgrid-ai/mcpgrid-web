import admin from 'firebase-admin';

const config = () => {
  if (!process.env.GCP_ADMIN_ACCOUNT_KEY_BASE64) return {};
  const str = Buffer.from(
    process.env.GCP_ADMIN_ACCOUNT_KEY_BASE64,
    'base64',
  ).toString('utf-8');
  return JSON.parse(str);
};

const app = () => {
  if (admin.apps[0]) return admin.apps[0];
  return admin.initializeApp({
    credential: admin.credential.cert(config()),
  });
};

export const auth = () => app().auth();
