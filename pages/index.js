import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Nextjs.aTestPage.com. I'm Next y'all!</p>
        <p>
          Welcome to my NextJS Website..what should I learn next? Nuxt? Vue?
          <br />
          <h2 className={utilStyles.headingMd}>Goals</h2>
            <ul className={utilStyles.goalList}>
              <li className={utilStyles.goalListItem} key='codeblocks'> Allow codeblocks in a blog post</li>
              <li className={utilStyles.goalListItem} key='tailwind'> Use Tailwind </li>
              <li className={utilStyles.goalListItem} key='better-layout'> Better looking website</li>
              <li className={utilStyles.goalListItem} key='better-seo'> Better SEO </li>
            </ul>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
