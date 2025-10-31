import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fae6e0ff' }} >
      <main className="flex flex-col items-center justify-center text-center">
        {/* 🔹 Εικόνα στο κέντρο */}
        <Image
          src="/images/redmattina_main_collage.png"
          alt="RedMattina main collage"
          width={1200}     // μπορείς να αλλάξεις ανάλογα με το μέγεθος
          height={800}
        />
      </main>
    </div>
  );
}
