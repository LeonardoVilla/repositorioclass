"use client";

import Script from "next/script";

export default function GoogleAdSenseScript() {
  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3767146802364121"
      crossOrigin="anonymous"
    />
  );
}

//<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3767146802364121" crossOrigin="anonymous"></script>