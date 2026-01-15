import { type FC, type ReactNode } from 'react'
import './RootLayout.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
    return (
        <div className='rootLayout'>
            {props.children}
        </div>
    )
}

export default RootLayout;
