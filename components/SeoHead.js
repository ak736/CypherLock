import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: 'CypherLock',
  siteName: 'CypherLock',
  description:
    'Landing page VPN CypherLock Best VPN For Privacy, Country and Cheapest',

  url: 'https://cypher-lock.vercel.app',
  type: 'website',
  robots: 'follow, index',
  image: 'https://cypher-lock.vercel.app/assets/Logo1.svg',
  author: 'Aniket'
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />

      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@F2aldi' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content={meta.author}
          />
        </>
      )}

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      <meta name='msapplication-TileColor' content='#F53838' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />

      <meta name='theme-color' content='#F53838' />
    </Head>
  );
};


const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'icon',
    href: '/favicon/favicon.ico',
  }
];

export default SeoHead;