import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-200">{children}</body>
    </html>
  );
}
