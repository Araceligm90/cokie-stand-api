import Head from "next/head";




export default function Home() {
  return (
    <> 
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="flex bg-green-500 p-8">
        <h1 className="text-5xl">Cookie Stand Admin</h1>
      </header>

      <main>
        <div className="bg-green-300 flex flex-col justify-center w-7/12 mt-10 ml-80 rounded-lg">
          <div className="flex flex-col">
            <h2 className="text-4xl text-center p-6">Create Cookie Stand</h2>

            <form className="flex">
              <div className="flex p-10 flex-grow space-x-3 w-max">
                <label className="text-2xl">Location</label>
                <input className="border-2 rounded"/>
              </div>
            </form>

            <section className="flex space-x-6 p-4">
              <form className="flex space-x-3">
                <div className="flex flex-col justify-around">
                  <label className="text-2xl text-center">Minimum Customers per Hour</label>
                  <input className="border-2 rounded" type="number"/>
                </div>
                <div className="flex flex-col justify-around">
                  <label className="text-2xl text-center" >Maximum Customers per Hour</label>
                  <input className="border-2 rounded" type="number"/>
                </div>
                <div className="flex flex-col justify-around">
                  <label className="text-2xl text-center">Average Cookies per Sale</label>
                  <input className="border-2 rounded" type="number"/>
                </div>
              </form>
              <div className="border-2 rounded bg-green-500 w-40">
                <button className="text-2xl m-10">Create</button>
              </div>
            </section>


          </div>
        </div>
        <p className="m-10 text-2xl text-center">Report Table Coming Soon...</p>
      </main>

      <footer className="bg-green-500 flex p-10 fixed bottom-0 left-0 right-0">
        <p className="text6xl">&copy;2023</p>
      </footer>
    </>
  );
}
