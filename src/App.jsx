function App() {
  return (
    <main className="h-full p-1 space-y-1">
      <section className="h-[75%] grid grid-cols-12 space-x-1">
        <div className="col-span-8 bg-sky-100 p-2 rounded capitalize">
          slide images
        </div>
        <div className="col-span-4 bg-sky-200 rounded capitalize overflow-hidden">
          <div className="h-[90%] p-2">
            slide content
          </div>
          <div className="grid grid-cols-4 h-[10%]">
            <div className="flex items-center justify-center col-span-1 bg-sky-300 font-bold text-white rounded">
              slide conntrols
            </div>
          </div>
        </div>
      </section>
      <section className="h-[25%] grid grid-cols-12 space-x-1 capitalize">
        <div className="col-span-3 bg-sky-100 p-2 rounded">
          static content image
        </div>
        <section className="col-span-6 p-2 bg-sky-200 rounded">
          static content content
        </section>
        <div className="col-span-3 bg-sky-100 p-2 rounded">
          static content image
        </div>
      </section>
    </main>
  )
}

export default App
