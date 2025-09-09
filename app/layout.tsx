export const metadata = {
  title: "Pratikcargo",
  description: "Basit Next.js test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
