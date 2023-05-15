"use client";
import { getCats } from "@/app/page";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const Cats = ({ cats }) => {
  const [_cats, setCats] = useState(cats);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const moreCats = async () => {
    setLoading(true);
    const results = await getCats(page);

    if (!results) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setCats((prev) => [...prev, ...results]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    page > 1 && moreCats();
  }, [page]);

  return (
    <div className="container">
      <div>
        {_cats?.map((cat, i) => (
          <Card
            key={i}
            url={cat.url}
            isLast={i === _cats.length - 1}
            newLimit={() => setPage((prev) => prev + 1)}
          />
        ))}
      </div>
      <Loader loading={loading} />
    </div>
  );
};

export default Cats;
