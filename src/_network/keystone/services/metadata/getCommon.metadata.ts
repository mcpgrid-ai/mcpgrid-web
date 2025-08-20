import { client } from '../../client';
import {
  GetMetadataCommonQueryVariables,
  GetMetadataCommon,
  GetMetadataCommonQuery,
} from '../../__generated__/query';

export const getCommon = async (variables: GetMetadataCommonQueryVariables) => {
  try {
    const { data, error } = await client.query<GetMetadataCommonQuery>({
      query: GetMetadataCommon,
      variables,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
