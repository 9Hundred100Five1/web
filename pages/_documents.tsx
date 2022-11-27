import {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
                <Head>
                    <link rel='icon' href='/favicon.ico' />
                    <meta
                        name='description'
                        content='A place to find a great film to watch'
                    />
                </Head>
                <body className='bg-gray-50 screen'>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}