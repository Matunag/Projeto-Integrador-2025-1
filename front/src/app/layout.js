import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="h-screen bg-[url('/teste3.jpg')] bg-cover bg-center">
        {children}
      </body>
    </html>
  );
}
