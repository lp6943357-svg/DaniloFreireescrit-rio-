import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Danilo Freire Advogados | Consultoria Jurídica em Belo Horizonte',
  description: 'Escritório de advocacia especializado em consultoria jurídica empresarial em Belo Horizonte, MG. Expertise em direito corporativo, contratual e consultoria legal.',
  keywords: 'advogado, advocacia, consultoria jurídica, Belo Horizonte, MG, direito empresarial',
  authors: [{ name: 'Danilo Freire Advogados' }],
  robots: 'index, follow',
  openGraph: { type:'website', locale:'pt_BR', url:'https://danilo-freire-advogados.com', siteName:'Danilo Freire Advogados', title:'Danilo Freire Advogados | Consultoria Jurídica', description:'Escritório de advocacia especializado em consultoria jurídica empresarial' },
  alternates: { canonical: 'https://danilo-freire-advogados.com' },
  twitter: { card:'summary_large_image', title:'Danilo Freire Advogados', description:'Consultoria jurídica empresarial em Belo Horizonte', creator:'@danilofreireadvogados' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className="flex flex-col min-h-screen"><Header /><main className="flex-grow">{children}</main><Footer /></body></html>
}