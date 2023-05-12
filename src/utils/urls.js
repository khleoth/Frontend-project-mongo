export const APIBASE_URL = 'https://project-mongo-api-3oe2ikwwwa-lz.a.run.app'
export const NETFLIXBASE_URL = `${APIBASE_URL}/netflixdata`;
export const NETFLIXCATEGORYLIST_URL = `${NETFLIXBASE_URL}/listingcategories`;
export const NETFLIXCATEGORY_URL = `${NETFLIXCATEGORYLIST_URL}/:category`;
export const TOPCHART_URL = `${APIBASE_URL}/songdata`;
export const TOPCHARTARTISTLIST_URL = `${TOPCHART_URL}/artists`;
export const TOPCHARTARTIST_URL = `${TOPCHARTARTISTLIST_URL}/:name`;