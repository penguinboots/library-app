import { Navbar } from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
