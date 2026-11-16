export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold tracking-wider text-amber-400">MONALIX</h1>
          <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
            Alto Rigor & Mérito
          </span>
        </div>
        
        <p className="text-slate-300 leading-relaxed mb-6">
          Galeria digital de elite e rede social baseada em mérito analítico. Onde cada argumento é validado por rigor técnico estrito e limite de 600 caracteres.
        </p>

        <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 mb-6">
          <p className="text-xs text-slate-400 font-mono">STATUS DA INFRAESTRUTURA:</p>
          <ul className="text-sm mt-2 space-y-1 text-slate-300 font-mono">
            <li>✓ Supabase PostgreSQL: Ativo & Conectado</li>
            <li>✓ GitHub VCS: Repositório Inicializado</li>
            <li>⏳ Cloudflare Deployment: Aguardando Próximo Passo</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <span className="text-xs text-slate-500 font-mono">
            STARTGRIT Digital Business • Produção Monalix
          </span>
        </div>
      </div>
    </main>
  );
}
