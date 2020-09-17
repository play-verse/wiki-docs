import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Membantu anda memahami hal seputar Playverse',
    imageUrl: 'img/undraw_reading.svg',
    description: (
      <>
        Tujuan dari pembuatan wiki adalah untuk membantu para player baru maupun yang belum mengetahui hal tertentu yang terdapat pada gameplay.
      </>
    ),
  },
  {
    title: 'Diskusi pada forum yang telah tersedia',
    imageUrl: 'img/undraw_online_chat.svg',
    description: (
      <>
        Melakukan diskusi di forum jika artikel pada wiki belum cukup membantu. Di forum anda dapat berdiskusi dengan admin, maupun beberapa pemain senior lainnya.
      </>
    ),
  },
  {
    title: 'Bermain dengan strategi',
    imageUrl: 'img/undraw_game.svg',
    description: (
      <>
        Bermainlah dengan strategi baru, berdasarkan hal yang sudah anda ketahui. Mengetahui hal baru dapat membantu anda meningkat strategi bermain.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Baca sekarang
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
