export interface ParseUrlParams {
  url: string;
}

export const parseUrl = ({ url }: ParseUrlParams) => {
  const match = url.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/tree\/([^/]+)\/(.+))?$/,
  );

  if (!match) throw new Error('Invalid GitHub url');

  const [, owner, repo, branch, path] = match;

  return { owner, repo, branch, path };
};
