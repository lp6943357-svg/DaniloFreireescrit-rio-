/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    colors: {
      primary: {50:'#f0f4f8',100:'#d9e2ec',200:'#b2c9de',300:'#8bb1d0',400:'#6498c2',500:'#1e3a5f',600:'#1a3250',700:'#162a41',800:'#122232',900:'#0e1a23'},
      accent: {50:'#fef5e7',100:'#fce8c3',200:'#fada9f',300:'#f8cc7b',400:'#f6be57',500:'#d4af37',600:'#c9a032',700:'#be912d',800:'#b38228',900:'#a87323'}
    },
    fontFamily:{serif:['Playfair Display','serif'],sans:['Inter','system-ui','sans-serif']},
    animation:{fadeIn:'fadeIn 0.6s ease-in-out',slideUp:'slideUp 0.6s ease-out',slideInLeft:'slideInLeft 0.6s ease-out'},
    keyframes:{fadeIn:{'0%':{opacity:'0'},'100%':{opacity:'1'}},slideUp:{'0%':{transform:'translateY(30px)',opacity:'0'},'100%':{transform:'translateY(0)',opacity:'1'}},slideInLeft:{'0%':{transform:'translateX(-30px)',opacity:'0'},'100%':{transform:'translateX(0)',opacity:'1'}}}
  }},
  plugins:[]
}