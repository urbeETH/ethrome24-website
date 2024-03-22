"use client"

import { FC } from 'react'
import { PropsWithClassName } from '../types'

export const SponsorDeckLink: FC<PropsWithClassName> = ({ className }) => (
  <a href="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck" target="_blank" className={className}>
    <p>Request deck</p>
  </a>
)

export default function SponsorZone() {
  return (
    <div
      className='relative pt-24 pb-48'
     
    >
      <div className='relative flex flex-col items-center justify-between max-w-xl pb-24 md:items-start'>
        <div className='flex flex-col items-center md:items-start justify-center '>
        <img src='/img/sponsor_zone/sponsor_crown.svg' className='h-[160px] w-[160px]' />
        <h1 className='text-5xl font-bold text-white md:text-7xl text-center'>Sponsor Zone</h1>
        <p className='text-white max-w-xs md:max-w-[385px] text-center md:text-left font-redhat mt-4'>
          Seize the chance to gain exceptional exposure, establish valuable connections, and
          demonstrate your unwavering support for the development of the blockchain space!
        </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-20'>
        <SponsorDeckLink className='w-full hover:bg-rome-purple_hover px-4 transition-colors bg-rome-purple drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium' />
        <a className='text-white text-center underline font-redhat mt-4' href="mailto:sponsor@ethrome.org">sponsor@ethrome.org</a>
        </div>
      </div>
      <img src="/img/decors/flowers.svg" alt="" className='absolute top-0 left-[43px] h-full mix-blend-color-dodge opacity-[0.8]' />
      <img src="/img/decors/modanatura.svg" alt="" className='absolute top-0 left-0 w-full h-[27px] mix-blend-color-dodge opacity-[0.8]' />
      <img src='/img/sponsor_zone/temple.svg' className='absolute bottom-0 right-0 h-[624px] mix-blend-color-dodge opacity-[0.8] md:h-auto' />
    
    </div>
  )
}
