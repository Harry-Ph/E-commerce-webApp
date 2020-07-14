import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};



export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOnePpl: Ppl;
  deleteOnePpl?: Maybe<Ppl>;
  deleteManyPpl: BatchPayload;
  updateOnePpl?: Maybe<Ppl>;
  updateManyPpl: BatchPayload;
};


export type MutationCreateOnePplArgs = {
  data: PplCreateInput;
};


export type MutationDeleteOnePplArgs = {
  where: PplWhereUniqueInput;
};


export type MutationDeleteManyPplArgs = {
  where?: Maybe<PplWhereInput>;
};


export type MutationUpdateOnePplArgs = {
  data: PplUpdateInput;
  where: PplWhereUniqueInput;
};


export type MutationUpdateManyPplArgs = {
  data: PplUpdateManyMutationInput;
  where?: Maybe<PplWhereInput>;
};

export type Ppl = {
  __typename?: 'Ppl';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type PplCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type PplUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PplUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PplWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  AND?: Maybe<Array<PplWhereInput>>;
  OR?: Maybe<Array<PplWhereInput>>;
  NOT?: Maybe<Array<PplWhereInput>>;
};

export type PplWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Ppl>>;
  ppl?: Maybe<Ppl>;
  ppls: Array<Ppl>;
};


export type QueryPplArgs = {
  where: PplWhereUniqueInput;
};


export type QueryPplsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PplWhereUniqueInput>;
  after?: Maybe<PplWhereUniqueInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<(
    { __typename?: 'Ppl' }
    & Pick<Ppl, 'id' | 'name'>
  )>> }
);


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    id
    name
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};