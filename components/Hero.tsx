'use client'

import { MessageCircle, ArrowRight } from 'lucide-react'

export default function Hero() {
  const whatsappLink = 'https://wa.me/553137851890?text=Olá%20Danilo%20Freire%20Advogados.%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.'
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden pt-20">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"/>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"/>
    <div className="container-custom relative z-10"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="animate-slideUp"><p className="text-accent-400 font-semibold text-lg mb-4 flex items-center gap-2"><span className="w-2 h-2 bg-accent-400 rounded-full"/>Belo Horizonte - MG</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Consultoria <span className="text-accent-400">Jurídica</span> de Excelência</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">Atuação jurídica estratégica, personalizada e próxima, com foco em compreender cada necessidade e construir soluções adequadas ao seu negócio.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8"><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 hover:shadow-xl"><MessageCircle size={20}/>Enviar WhatsApp</a><a href="#servicos" className="btn-outline flex items-center justify-center gap-2">Conhecer Serviços<ArrowRight size={20}/></a></div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300"><span>Direito Empresarial</span><span>Contratos</span><span>Consultoria Jurídica</span></div>
      </div>
      <div className="hidden lg:block animate-slideInLeft"><div className="relative w-full aspect-square max-w-md mx-auto"><div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl opacity-20 blur-2xl"/><div className="absolute inset-0 border-2 border-accent-500 rounded-2xl opacity-30"/><div className="absolute inset-0 flex items-center justify-center"><svg className="w-32 h-32 text-accent-400 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3v2H5v14h14V5h-4V3h6v18H3V3h6z"/><path d="M11 7h2v8h-2z"/><path d="M7 11h2v4H7z"/><path d="M15 11h2v4h-2z"/></svg></div><div className="absolute top-4 right-4 w-16 h-16 bg-accent-400 rounded-full opacity-10 blur-lg"/><div className="absolute bottom-8 left-4 w-24 h-24 bg-accent-500 rounded-full opacity-10 blur-lg"/></div></div>
    </div><div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div></div>
  </section>
}