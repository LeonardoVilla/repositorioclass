// components/GoogleConsent.tsx
"use client";

import Script from "next/script";

export default function GoogleConsent() {
  return (
    <Script id="google-consent" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });
        gtag('js', new Date());
        gtag('config', 'ca-pub-3767146802364121');
      `}
    </Script>
  );
}