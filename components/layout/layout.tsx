import Head from "next/head";
import Navbar from "../navbar/navbar";

interface IProps {
  title?: string;
  children: any;
}

export default function Layout({ title = "I4SAPP", children }: IProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar title={title} />

      {children}
    </div>
  );
}
