import { octokit } from '../../octokit';
import { parseUrl } from '../../utils/parseUrl';

interface GetReadmeByUrlParams {
  url: string;
}

export const getReadmeByUrl = async ({ url }: GetReadmeByUrlParams) => {
  const { owner, repo, path } = parseUrl({ url });

  if (!owner || !repo) return null;

  if (!path) {
    const data = await octokit.repos.getReadme({
      owner,
      repo,
      mediaType: { format: 'raw' },
    });

    return data;
  }
};
