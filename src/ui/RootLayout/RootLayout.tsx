import { type FC, type ReactNode } from 'react'
import './RootLayout.modules.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
    return (
        <div className='root-layout'>
            {props.children}
        </div>
    )
}

export default RootLayout;
