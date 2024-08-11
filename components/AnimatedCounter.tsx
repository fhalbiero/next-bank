'use client';
import CountUp from 'react-countup'

export default function AnimatedCounter({ 
    amount 
} : { amount: number}) {
  return (
    <div className="w-full">
        <CountUp 
            prefix='$'
            decimal=','
            decimals={2}
            end={amount} 
            duration={1.25}
        />
    </div>
  )
}
