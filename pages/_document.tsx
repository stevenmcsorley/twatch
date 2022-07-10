import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  renderGTMSnippet() {
    return (
      // eslint-disable-next-line @next/next/next-script-for-ga
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${process.env.GTM_KEY}');
        `,
        }}
      />
    )
  }

  render() {
    return (
      <Html lang="en">
        <Head>{this.renderGTMSnippet()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
