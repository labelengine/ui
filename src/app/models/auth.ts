export interface AuthModel {
  // TODO: perhaps redundant field. May we should remove it.
  authenticated: boolean;
  pending: boolean;
  access_token?: string;
  username?: string;
  error?: string;
}

export namespace AuthModel {
}
