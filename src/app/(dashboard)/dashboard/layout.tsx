import Sidebar from "../_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        items-start gap-6
        px-4 sm:px-6 lg:px-[50px]
        py-4 sm:py-6 lg:py-[37px]
        w-full
      "
    >
      {/* Sidebar: full width on mobile, fixed column on desktop */}

      <Sidebar
        sideBarResponsive="hidden lg:flex"
        responsive="md:hidden hidden"
      />

      {/* Main content */}
      <main
        className="
          flex-1 flex flex-wrap items-start justify-start mt-3
        "
      >
        {children}
      </main>
    </section>
  );
};

export default layout;
