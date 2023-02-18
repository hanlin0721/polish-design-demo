import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // const GTM_ID = "GTM-NSLLXZT";
    // const PIXEL_ID = "";
    return (
      <Html>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
