import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper md:mt-24">
      <main className="grid gap-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="mb-12">Hi there!</h1>
          <p className="text-2xl font-medium text-gray-700 mb-12 mx-auto md:ml-0 max-w-sm">
            My name is Saman Manesh, <br />I'm a full-stack developer focused on
            front-end based in Toronto.
          </p>
          <Link href="/about">
            <span className="text-2xl font-medium select-none cursor-pointer">More about me &rarr;</span>
          </Link>
        </div>
        <div>
          <div className="w-4/5 h-96 rounded-lg bg-gray-900 mx-auto"></div>
        </div>
      </main>
    </div>
  );
}
