import ContentPage from "../components/ContentPage/content";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <ContentPage posts={[]} />
    </Layout>
  );
}
