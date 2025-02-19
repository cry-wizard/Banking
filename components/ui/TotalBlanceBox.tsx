import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBlanceBox = ({accounts=[],TotalCurrentBalance,TotalBanks}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts}/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>Bank Account:{TotalBanks}</h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Blance:</p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={TotalCurrentBalance}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBlanceBox