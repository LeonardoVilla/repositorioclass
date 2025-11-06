// components/ui/AdBanner.tsx
"use client";

import Script from "next/script";

const AdBanner = () => {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
            <ins
                className="adsbygoogle"
                style={{ display: "block" } as React.CSSProperties}
                data-ad-client="ca-pub-3767146802364121"
                data-ad-slot="5482225729"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>

            <Script
                strategy="afterInteractive"
                onLoad={() => {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }}
            />
        </div>
    );
};

export default AdBanner;