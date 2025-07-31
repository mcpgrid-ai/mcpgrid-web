export interface TypeaheadOnSearchParams {
  q: string;
}

export type TypeaheadOnSearchCallback = (
  params: TypeaheadOnSearchParams,
) => void;
