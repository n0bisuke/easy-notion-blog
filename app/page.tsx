import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>Welcome!</h2>
        <p>Here is n0bisuke's blog</p>
        <p>Have fun!</p>
        <p>
        Contact me {' '}
          <Link href="https://twitter.com/n0bisuke">
            @n0bisuke
          </Link>
        </p>
        <p>
        other media {' '}
          <Link href="http://qiita.com/n0bisuke">
            Qiita: n0bisuke
          </Link>
        </p>
      </div>
    </div>
  </>
)

export default RootPage
