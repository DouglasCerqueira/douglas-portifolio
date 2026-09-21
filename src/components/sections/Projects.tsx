import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text 
          text-transparent text-center">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">GameHeaven</h3>
              <p className="text-gray-400 mb-4">
                App mobile de loja de jogos digitais com catálogo, busca, carrinho, 
                login e biblioteca de compras, integrado a uma API própria.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "TypeScript", "Spring Boot", "Expo", "MongoDB"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/DouglasCerqueira/5PDM" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
            <div className=" glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Laboratório de Pentest</h3>
              <p className="text-gray-400 mb-4">
                Relatório completo de um teste de intrusão em um laboratório feito para teste localmente.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pentest", "Linux", "Segurança Ofensiva", "Relatório", "Análise de Vulnerabilidades"].map((tech, key) => (
                  <span key={key} className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition
                   hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://drive.google.com/file/d/1Aa-Pvx7vkVRRkskee16spmHfDPWkfsdG/view?usp=drive_link" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Gerenciamento de Ativos</h3>
              <p className="text-gray-400 mb-4">
                Sistema web de gestão de inventário de TI com cadastro de ativos, 
                transferências entre locais, compras, atribuições a colaboradores, 
                baixas e controle de acesso por perfil.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Vite", "Tailwind CSS", "MongoDB"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/DouglasCerqueira/gerenciamento-ativos" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Oficina Norte-Sul</h3>
              <p className="text-gray-400 mb-4">
                Sistema web de cadastro e gestao de colaboradores, com dois perfis de acesso, historico de alteracoes, 
                inativação com desfazer e busca/filtro por situação.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/DouglasCerqueira/oficina-norte-sul" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};