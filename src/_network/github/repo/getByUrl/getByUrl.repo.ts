import { octokit } from '../../octokit';
import { parseUrl } from '../../utils/parseUrl';

interface GetByUrlParams {
  url: string;
}

export const getByUrl = async ({ url }: GetByUrlParams) => {
  const { owner, repo } = parseUrl({ url });

  if (!owner || !repo) return null;

  const { data } = await octokit.repos.get({
    owner,
    repo,
  });

  return data;
};
