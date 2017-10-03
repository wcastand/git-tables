import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'

const css = `
* {box-sizing: border-box;}
body{ font-family:'Roboto', sans-serif; font-size: 16px; margin: 0; padding: 0; background-color: #F1F1F1;}
`
const script = `
var clicky_site_ids = clicky_site_ids || [];
clicky_site_ids.push(101076134);
(function() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//static.getclicky.com/js';
  ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
})();
`

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return {...page, ...styles}
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Git Tables</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/static/app.css" />
          <style>{css}</style>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <script dangerouslySetInnerHTML={{__html: script}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
