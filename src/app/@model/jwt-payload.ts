export class JwtPayload {
  constructor(
    public exp: number,
    public iat: number,
    public name: string,
    public roles: string[],
    public sub: string
  ) {}
}
