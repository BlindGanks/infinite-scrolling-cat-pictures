import Cats from "@/components/Cats";

export const getCats = async (page) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`
  );

  if (!res.ok) return null;
  return await res.json();
};

export default async function Home() {
  const cats = await getCats(1);
  return (
    <main>
      <Cats cats={cats} />
    </main>
  );
}
