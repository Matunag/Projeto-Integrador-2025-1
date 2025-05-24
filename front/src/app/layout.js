import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-[#CC8686]">
        {children}
      </body>
    </html>
  );
}
