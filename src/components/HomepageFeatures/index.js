import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Motorcyclist',
      Svg: require('@site/static/img/motorcyle.svg').default,
    description: (
      <>
        An avid motorcyclist and have toured most states in south India. There is nothing I enjoy more than riding in a group and talking about motorcycles
      </>
    ),
  },
  {
    title: 'Developer',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       A seasoned developer in the FinTech Industry, I have worked as an associate at JP Morgan chase & Co for 3 years. At JP I worked on the firms Intraday Liquidity tool and was the lead developer on the Watchtower project
      </>
    ),
  },
  {
    title: 'Technology for social good',
    Svg: require('@site/static/img/TFG.svg').default,
    description: (
      <>
       A strong believer in technology for social good. I have worked on multiple projects with the goal of empowering people's lives using technology.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
