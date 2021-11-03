import Head from 'next/head'

const DEFAULT_TITLE = 'Contrib.'
const DEFAULT_DESCRIPTION =
  'DAO contribution and experience, validated on-chain.'

type Props = {
  title?: string
  description?: string
  ogImageUrl: string
}

const SEO: React.FC<Props> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImageUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <link rel='apple-touch-icon' sizes='180x180' href='favicon.ico' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon.ico' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon.ico' />
      {/* <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      <meta name='msapplication-TileColor' content='#000000' />
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:creator' content='@nubbmobelservice' />
      <meta name='twitter:image' content={ogImageUrl} />
      <meta name='description' content={description} />
      <meta property='og:image' content={ogImageUrl} />
      <meta property='og:image:width' content='1500' />
      <meta property='og:image:height' content='786' />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
    </Head>
  )
}

export default SEO
