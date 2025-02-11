import { HeaderBox } from '@/components/ui/HeaderBox'
import TotalBlanceBox from '@/components/ui/TotalBlanceBox';
import React from 'react'

const Home = () => {
  const loggedName={ firstName: 'Rishi' };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedName.firstName || 'guest'}
          subtext="Acces and Mange This account"
          />
          <TotalBlanceBox 
          accounts={[]}
          TotalBanks={1}
          TotalCurrentBalance={1250.35}
          />
        </div>
      </div>
    </section>
  )
}

export default Home