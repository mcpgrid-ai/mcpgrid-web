import admin from 'firebase-admin';

const app = () => {
  if (admin.apps[0]) return admin.apps[0];
  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'mcp-box',
      clientEmail: process.env.GCP_CLIENT_EMAIL,
      privateKey: process.env.GCP_PRIVATE_KEY,
    }),
  });
};

export const auth = () => app().auth();
