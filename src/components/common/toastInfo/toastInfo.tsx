
import { useState } from 'react';
import { Toast } from '@igds/react';
import { useTranslation } from '../../../i18n';
import Link from '../link/link';
import styles from './toastInfo.module.scss';

export interface QueryInfoProps {
    infoTitle: string;
    infoContent: string;
}

const ToastInfo = ({ infoTitle, infoContent }: QueryInfoProps) => {
    const { t } = useTranslation();
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className={styles.toastInfoLink}>
            <Link onClick={() => setShowInfo(!showInfo)} text={t('queryExplanation')} />
            {showInfo &&
                <Toast className={styles.toast}>
                    {infoTitle !== '' &&
                        <strong slot="title">
                            {infoTitle}
                        </strong>
                    }
                    <span className={styles.toastText}>
                        {infoContent}
                    </span>
                </Toast>}
        </div>
    );
};

export default ToastInfo;
