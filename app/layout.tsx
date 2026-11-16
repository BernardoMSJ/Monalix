import './globals.css';

export const metadata = {
  title: 'Monalix | Galeria Digital & Mérito Analítico',
  description: 'Galeria digital de elite e rede social baseada em mérito analítico com limite de 600 caracteres.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
