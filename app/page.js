import Parent from "./components/Parent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gray-100">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            React Memoization Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Using `useMemo` & `React.memo` to prevent re-renders.
          </p>
          {/* <p className="mt-2 text-md text-red-600 bg-red-100 p-2 rounded-lg inline-block font-semibold">
            Open your browser's console to see the render logs!
          </p> */}
        </div>
        <Parent />
      </div>
    </main>
  );
}
