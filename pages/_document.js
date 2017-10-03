import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'

const css = `
* {box-sizing: border-box;}
body{ font-family:'Roboto', sans-serif; font-size: 16px; margin: 0; padding: 0; background-color: #F1F1F1;}
`
const script = `
  window.dataLayer = window.dataLayer || []
  function gtag(){
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'UA-107418384-1')
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
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107418384-1" />
          <script dangerouslySetInnerHTML={{__html: script}} />

          <title>Git Tables</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/static/app.css" />
          <style>{css}</style>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
