export default function HomeCategoriesSkeleton() {
  return (
    <section>
      <div className="container mx-auto animate-pulse">
        <div className="flex justify-between items-center">
          <div className="h-7 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-5 w-40 bg-gray-200 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="card flex flex-col gap-2 items-center p-4 rounded-xl shadow-md bg-white">
              <div className="size-16 rounded-full bg-gray-200 mb-2"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
