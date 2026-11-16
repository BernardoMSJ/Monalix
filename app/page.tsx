'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <header className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-wider text-amber-400">MONALIX</h1>
            <p className="text-xs text-slate-400 font-mono mt-1">Galeria Digital de Elite & Mérito Analítico</p>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
            Rigor Estrito
          </span>
        </header>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8 shadow-xl">
          <h2 className="text-sm font-mono text-slate-300 mb-3 uppercase tracking-wider">Nova Publicação (Máx. 600 caracteres)</h2>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const content = (form.elements.namedItem('content') as HTMLTextAreaElement).value;
            if (!content.trim()) return;

            const { error } = await supabase.from('posts').insert([{ content }]);
            if (!error) {
              form.reset();
              window.location.reload();
            } else {
              alert('Erro ao publicar: ' + error.message);
            }
          }}>
            <textarea 
              name="content" 
              maxLength={600} 
              rows={4}
              placeholder="Insira sua análise rigorosa ou argumento..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-amber-500 text-sm font-mono resize-none"
              required
            />
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-slate-500 font-mono">Validação por mérito técnico</span>
              <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2 rounded-lg text-xs tracking-wider uppercase transition-colors">
                Publicar
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Feed de Mérito Analítico</h3>
          {loading ? (
            <p className="text-slate-500 text-sm font-mono text-center py-8">A carregar registos da base de dados...</p>
          ) : posts.length === 0 ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
              <p className="text-slate-400 text-sm font-mono">Nenhuma publicação encontrada. Crie o primeiro registo analítico acima.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
                <p className="text-slate-200 text-sm leading-relaxed font-mono whitespace-pre-wrap">{post.content}</p>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex justify-between items-center text-xs text-slate-500 font-mono">
                  <span>ID: {post.id.slice(0, 8)}</span>
                  <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
