import React from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './Title.module.scss';

const Title = ({ title, subTitle, titleSize = 32, titleMargin = 50 }: { title: string, subTitle: string, titleSize?: number, titleMargin?: number }) => {
  // const { t } = useTranslation();

  return <div className={styles.titleContainer}>
    <h1 className={styles.title}
      style={{ "--title-size": `${titleSize}px`, "--title-margin": `${titleMargin}px` } as React.CSSProperties}
    >{title}</h1>
    {
      subTitle !== '' ?
        <h2 className={styles.subTitle}>{subTitle}</h2>
        : null
    }
  </div>
};

export default Title;
