import ApiForm from "@/components/apiForm";
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <div className="text-6xl font-extrabold text-white mb-8">
        RA2111003011845
      </div>
      <div className="w-full max-w-lg p-4 bg-[#ffffff50] backdrop-blur-xl rounded-lg shadow-lg">
        <ApiForm />
      </div>
    </main>
  );
}
