import Head from "next/head";

export default function PageHeader(props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.titulo}</title>
    </Head>
  );
}
