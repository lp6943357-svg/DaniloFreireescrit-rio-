'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GsapMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.from('header', { y: -20, autoAlpha: 0, duration: 0.7, ease: 'power3.out' })

      document.querySelectorAll('main section').forEach((section) => {
        const items = section.querySelectorAll('h1, h2, h3, p, a, button, img')
        if (!items.length) return
        gsap.from(items, {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.045,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
        })
      })

      document.querySelectorAll('main section > div').forEach((section) => {
        gsap.from(section, {
          y: 18,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 90%', once: true },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
