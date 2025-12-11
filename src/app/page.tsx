import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000ff' }} className="p-0">
      <main className="flex flex-col items-center justify-center text-center p-0 mt-2 ">

        {/* 🔹 Εικόνα στο κέντρο */}
        <Image
          src="/images/redmattina_main_collage.png"
          alt="RedMattina main collage"
          width={1300}
          height={600}
          style = {{ marginTop: "15px"}}
        />
      </main>
    </div>
  );
}
