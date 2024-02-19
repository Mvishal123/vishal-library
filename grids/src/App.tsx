const App = () => {
  return <div className="p-4">
    {/* DESIGN 1 */}
    <div>
      <h1 className="text-2xl font-semibold mb-4">Design pattern 1</h1>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="h-[100px] bg-green-500 rounded-lg"></div>
        <div className="h-[100px] bg-red-500 rounded-lg"></div>
        <div className="h-[100px] bg-yellow-500 rounded-lg"></div>
      </div>
    </div>

    {/* DESIGN 2 */}
    <div className="mt-4">
      <h1 className="text-2xl font-semibold mb-4">Design pattern 2</h1>
      <div className="grid gap-3 sm:grid-cols-12">
        <div className="h-[100px] bg-green-500 rounded-lg sm:col-span-2"></div>
        <div className="h-[100px] bg-red-500 rounded-lg sm:col-span-10"></div>
        <div className="h-[100px] bg-purple-500 rounded-lg sm:col-span-10"></div>
        <div className="h-[100px] bg-blue-500 rounded-lg sm:col-span-2"></div>
      </div>
    </div>

    {/* DESIGN 3 */}
    <div className="mt-4">
      <h1 className="text-2xl font-semibold mb-4">Design pattern 3 <span className="font-normal">(Mobile view)</span></h1>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-12">
        <div className="h-[100px] bg-green-500 rounded-lg col-span-2"></div>
        <div className="h-[100px] bg-red-500 rounded-lg col-span-1 sm:col-span-10"></div>
        <div className="h-[100px] bg-purple-500 rounded-lg col-span-1 sm:col-span-10"></div>
        <div className="h-[100px] bg-blue-500 rounded-lg col-span-2"></div>
      </div>
    </div>

    {/* DESIGN 4 */}
    <div className="mt-4">
      <h1 className="text-2xl font-semibold mb-4">Design pattern 4 <span className="font-normal">(Mobile optimized)</span></h1>
      <div className="grid gap-3 sm:grid-cols-12">
        <div className="h-[100px] bg-green-500 rounded-lg lg:col-span-3 hidden lg:block"></div>
        <div className="h-[100px] bg-red-500 rounded-lg col-span-12 sm:col-span-12 lg:col-span-9  xl:col-span-7"></div>
        <div className="h-[100px] bg-purple-500 rounded-lg sm:col-span-2 xl:block hidden"></div>
      </div>
    </div>
  </div>;
};

export default App;
