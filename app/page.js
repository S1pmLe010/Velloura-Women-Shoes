import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Editorial from "@/components/Editorial";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />

      <Categories />

      <Featured />

      <Editorial />
    </main>
  );
}