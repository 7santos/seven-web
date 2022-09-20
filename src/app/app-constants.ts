export class AppConstants {
  public static ACCESS_TOKEN = 'accessToken';
  public static DEFAULT_LANG = 'pt';
  public static DEFAULT_LOCALE = 'pt-BR';
  public static REDIRECT_URI_QUERY_PARAM = '?redirect_uri=';
  public static PAGE_SIZE = 20;
  public static PAGE_SIZE_OPTIONS: number[] = [AppConstants.PAGE_SIZE];

  public static PHONE_PATTERN: RegExp =
    /^(\([0-9]{2}\)\s?[0-9]{4,5}[- ]?[0-9]{3,4})|([0-9]{2}\s?[0-9]{4,5}[- ]?[0-9]{3,4})|([0-9]{4,5}[- ]?[0-9]{3,4})$/gm;

  public static EMAIL_PATTERN =
    "^[a-zA-Z\\d_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z\\d.-]+$";

  public static LENGTH_3 = 3;
  public static LENGTH_14 = 14;
  public static LENGTH_50 = 50;
  public static LENGTH_100 = 100;
  public static LENGTH_250 = 250;
  public static LENGTH_320 = 320;
  public static LENGTH_1000 = 1000;

  public static QUOTAS_LIMIT = 50;

  public static APP_DATE_FORMAT = {
    parse: {
      dateInput: 'YYYY-MM-DD',
    },
    display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
}
