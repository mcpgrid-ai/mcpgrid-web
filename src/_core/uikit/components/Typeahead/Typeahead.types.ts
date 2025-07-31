export interface TypeaheadOnSearchParams {
  q: string;
}

export type TypeaheadOnSearchCallback = (
  params: TypeaheadOnSearchParams,
) => void;

export interface TypeaheadChildrenProps<T extends object> {
  option: T;
}
