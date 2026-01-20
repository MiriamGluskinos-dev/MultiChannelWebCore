import { useEffect, type FC, type ReactNode } from 'react';
import '@igds/tokens/lib/index.min.css';
import './RootLayout.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
    const lang: 'en' | 'he' = 'he';


    const env = import.meta.env.VITE_ENV;

    useEffect(() => {
        const script = document.createElement("script");
        console.log('env', env);
        
        script.src = env === "test" ?
            "https://test.newgov.gov.il/Govil.HeaderFooter.Api/govilHF/header-footer.js" :
            "https://www.gov.il.il/gov.ililHF/header-footer.js";

        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [env]);


    return (
        <div className='rootLayout' style={{ direction: lang === 'he' ? 'rtl' : 'ltr' }}>
            {props.children}
        </div>
    )
}

export default RootLayout;
