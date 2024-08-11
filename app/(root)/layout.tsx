import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedUser = { firstName: "Fabio", lastName: "Albiero" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedUser} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image 
            src="/icons/logo.svg" 
            alt="Horizon Logo" 
            width={30} 
            height={30} 
          />
          <div>
            <MobileNavbar user={loggedUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
