import Header from "../_components/Header";
import Sidebar from "../_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-[50px] py-[37px] flex items-start justify-between w-full">
      <Sidebar />
      <main className="w-[80.7%] justify-end flex flex-wrap items-start">
        <Header />
        {children}
      </main>
    </section>
  );
};
export default layout;
