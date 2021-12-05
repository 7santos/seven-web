export class AppConstants {
  public static ACCESS_TOKEN = 'accessToken';
  public static DEFAULT_LANG = 'pt';
  public static REDIRECT_URI_QUERY_PARAM = '?redirect_uri=';
  public static PHONE_PATTERN: RegExp =
    /^(\([0-9]{2}\)\s?[0-9]{4,5}[- ]?[0-9]{3,4})|([0-9]{2}\s?[0-9]{4,5}[- ]?[0-9]{3,4})|([0-9]{4,5}[- ]?[0-9]{3,4})$/gm;
}
