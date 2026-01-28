import { useEffect, type ReactNode } from 'react';
import '@igds/tokens/lib/index.min.css';
import './RootLayout.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
    const lang: 'en' | 'he' = 'he';

    const env = import.meta.env.VITE_ENV;

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = env === "test" ?
    //         "https://test.newgov.gov.il/Govil.HeaderFooter.Api/govilHF/header-footer.js" :
    //         "https://www.gov.il/govilHF/header-footer.js";

    //     script.async = true;

    //     script.onload = () => {
    //         if (typeof window.load_HF === "function") {
    //             window.load_HF('he', '', 'application', 'c0d8ba69-e309-4fe5-801f-855971774a90');
    //         } else {
    //             console.error("load_HF not found on window");
    //         }
    //     };

    //     script.onerror = (err) => {
    //         console.error("Failed to load header-footer.js", err);
    //     };

    //     document.body.appendChild(script);
    //     return () => document.body.removeChild(script);
    // }, [env]);
useEffect(() => {
  // נוודא שלא נטען כבר קודם
  if (document.querySelector("script[data-govil='true']")) {
    console.log("Header-Footer script already loaded");
    return;
  }

  const script = document.createElement("script");
  script.src =
    env === "test"
      ? "https://test.newgov.gov.il/Govil.HeaderFooter.Api/govilHF/header-footer.js"
      : "https://www.gov.il/govilHF/header-footer.js";
  script.async = true;
  script.dataset.govil = "true"; // נזהה אותו מאוחר יותר
  document.body.appendChild(script);

  // ננסה להריץ רק כשהפונקציה באמת קיימת
  const checkInterval = setInterval(() => {
    if (typeof (window as any).load_HF === "function") {
      clearInterval(checkInterval);
      (window as any).load_HF("he", "", "application", "c0d8ba69-e309-4fe5-801f-855971774a90");
      console.log("Header-Footer loaded successfully");
    }
  }, 300);

  // ניקוי במקרה של unmount
  return () => {
    clearInterval(checkInterval);
  };
}, [env]);


    return (
        <div className='rootLayout' style={{ direction: lang === 'he' ? 'rtl' : 'ltr' }}>
            {props.children}
        </div>
    )
}

export default RootLayout;
