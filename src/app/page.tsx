import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen p-8 bg-pink-100">
      <main className="flex flex-col items-center justify-center row-start-2 text-center">
        {/* 🔹 Εικόνα στο κέντρο */}
        <Image
          src="/images/redmattina_main_collage.png"
          alt="RedMattina main collage"
          width={1200}     // μπορείς να αλλάξεις ανάλογα με το μέγεθος
          height={800}
        />

        {/* 🔹 Κείμενο */}
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-700">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-pink-600 mt-4 text-lg">
          This page is currently being built. Check back soon!
        </p>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-pink-500 text-sm">
        © {new Date().getFullYear()} RedMattina
      </footer>
    </div>
  );
}
