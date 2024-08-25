import Grid from "@/components/Grid";
import Toolbar from "@/components/Toolbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex flex-col items-center py-10">
        <Toolbar/>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <Grid />
        </div>
        
      </main>
    </div>
  );
}
