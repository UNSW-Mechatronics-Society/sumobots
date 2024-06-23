export default function Gallery() {
  return (
    <main className="">
      <section className="container gap-y-12 pt-24">
        <h1 className="col-span-full font-display text-6xl">Gallery</h1>
        {Array(10)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className="col-span-3 aspect-[3/3.5] bg-gray-800"
            ></div>
          ))}
      </section>
    </main>
  );
}
