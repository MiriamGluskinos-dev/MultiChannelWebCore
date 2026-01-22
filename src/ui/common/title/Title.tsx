
import styles from './title.module.scss';

const Title = ({ title, subTitle }: { title: string, subTitle: string }) => {
  // const { t } = useTranslation();

  return <div className={styles.titleContainer}>
    <h1 className={styles.title}>{title}</h1>
    {
      subTitle !== '' ?
        <h2 className={styles.subTitle}>{subTitle}</h2>
        : null
    }
  </div>
};

export default Title;
