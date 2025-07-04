import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <Header />
        <section className="flex-1">ALBA</section>
      <Footer />
    </main>
  );
}
