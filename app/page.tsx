// Importing necessary components and functions
import CalculateCard from "@/components/CalculateCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateFactorial } from "@/lib/calculateFactorial";
import { primeCheck } from "@/lib/primeCheck";

/**
 * The Home component is the main entry point of the app.
 * It uses the shadcn UI library's Tabs component to switch between prime checking and factorial calculation functionalities.
 * Each tab contains a CalculateCard component for performing the respective calculations.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="fixed left-0 top-0 z-10 mx-auto justify-center flex h-20 w-full items-center border-b-4 border-black bg-white px-5">
        <a href={"https://github.com/Hasmire"} className="text-xl font-semibold">
          made by @hasmire
        </a>
      </div>
      <div className="absolute pattern-dots pattern-indigo-500 pattern-bg-bg pattern-size-6 pattern-opacity-20 h-screen w-screen"></div>
      <Tabs defaultValue="prime" className="md:min-w-[400px] z-10 md:p-0">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="prime">Prime</TabsTrigger>
          <TabsTrigger value="factorial">Factorial</TabsTrigger>
        </TabsList>
        <TabsContent value="prime">
          <CalculateCard title="Prime Check" description="Check if a number is prime" calculate={primeCheck} />
        </TabsContent>
        <TabsContent value="factorial">
          <CalculateCard title="Find the Factorial" description="Find the factorial of a given number" calculate={calculateFactorial} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
