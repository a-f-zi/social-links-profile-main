import "./globals.css";

export const metadata = {
  title: "Social Links Profile",
  description: "profile for social links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[var(--white)] h-screen flex justify-center items-center short:items-start short:mt-4">
        {children}
      </body>
    </html>
  );
}
