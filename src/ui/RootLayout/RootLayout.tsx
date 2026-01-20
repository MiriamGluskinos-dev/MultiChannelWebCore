import { type FC, type ReactNode } from 'react'
import '@igds/tokens/lib/index.min.css';
import './RootLayout.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
    const lang: 'en' | 'he' = 'he';
    
    return (
        <div className='rootLayout' style={{direction: lang === 'he' ? 'rtl': 'ltr'}}>
            {props.children}
        </div>
    )
}

export default RootLayout;
