export class Permission {
  constructor(
    public isAuthenticated: boolean,
    public isAdmin: boolean,
    public isUser: boolean,
    public username: string
  ) {}
}
