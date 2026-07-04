export const SITE_TITLE = 'Summer Is Volley';
export const SITE_DESCRIPTION = 'Sito web ufficiale del torneo Summer Is Volley organizzato da A.S.D. Iuno';
export const SITE_KEYWORDS = 'Summer Is Volley, SummerIsVolley, Beach Volley, Torneo, Sport, A.S.D. Iuno';

export const PHP_SERVER_HOST = import.meta.env.PUBLIC_PHP_SERVER_HOST;

export const PHP_PATHS = {
    CALENDARI: `${PHP_SERVER_HOST}/visualizzaCalendario.php`,
    GIRONI: `${PHP_SERVER_HOST}/visualizzaGironi.php`,
    GARE: `${PHP_SERVER_HOST}/gare.php`,
    CLASSIFICA: `${PHP_SERVER_HOST}/visualizzaClassifica.php`,
    FASI_FINALI: `${PHP_SERVER_HOST}/fasiFinali.php`,
};
