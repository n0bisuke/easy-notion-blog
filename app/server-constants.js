/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling

const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || `https://nobi.suke.dev`
const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || `G-4EVC6VE7DV`
const NEXT_PUBLIC_SITE_TITLE = 'のびすけブログ'
const NEXT_PUBLIC_SITE_DESCRIPTION = '日記とかも入れてみようと思います'

const NUMBER_OF_POSTS_PER_PAGE = 10
// console.log(`test`,NEXT_PUBLIC_GA_TRACKING_ID, NEXT_PUBLIC_URL);

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID,
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GA_TRACKING_ID,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NUMBER_OF_POSTS_PER_PAGE,
}
