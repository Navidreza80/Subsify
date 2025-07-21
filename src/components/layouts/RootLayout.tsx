const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="root">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
};
export default Layout;
