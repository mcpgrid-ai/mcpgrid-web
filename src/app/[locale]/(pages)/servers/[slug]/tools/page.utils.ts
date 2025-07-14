interface GetServerToolsParams {
  slug: string;
}

interface ServerToolParameter {
  name: string;
  type: string;
  description?: string;
}

interface ServerTool {
  id: string;
  description?: string;
  parameters?: ServerToolParameter[];
}

export const getServerTools = async ({ slug }: GetServerToolsParams) => {
  return new Promise<ServerTool[]>((resolve) => {
    resolve([
      {
        id: slug,
      },
      {
        id: 'check_domain',
        description: 'Check if a domain name is available for registration',
        parameters: [
          {
            name: 'domain',
            type: 'string',
            description: 'Domain name to check (e.g., example.com)',
          },
        ],
      },
      {
        id: 'get_domain_list',
        description:
          'List all domains in your Namecheap account with optional filtering',
        parameters: [
          {
            name: 'page',
            type: 'string',
            description: 'Page number (default: 1)',
          },
          {
            name: 'sortBy',
            type: 'string',
            description:
              'Sort results by: NAME (default), EXPIREDATE, CREATEDATE',
          },
          {
            name: 'listType',
            type: 'string',
            description:
              'Filter by domain status: ALL (default), EXPIRING, EXPIRED',
          },
          {
            name: 'pageSize',
            type: 'string',
            description:
              'Number of domains per page (must be 10-100, default: 20)',
          },
          {
            name: 'searchTerm',
            type: 'string',
            description: 'Search for domains containing this term',
          },
        ],
      },
    ]);
  });
};
