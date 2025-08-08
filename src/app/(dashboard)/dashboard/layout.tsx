import Sidebar from "../_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-[50px] py-[37px] flex items-start justify-between w-full gap-6">
      <Sidebar />
      <main className="flex-1 justify-end flex flex-wrap items-start">
        {children}
      </main>
    </section>
  );
};
export default layout;
