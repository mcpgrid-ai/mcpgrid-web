import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  //   auth: process.env.GITHUB_TOKEN, // optional if accessing public repos
});
