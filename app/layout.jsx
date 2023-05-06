import "@styles/globals.css";

export const metadata = {
  title: "Next Blog",
  description: "A blog built with Next.js 13 and Tailwind Css",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
