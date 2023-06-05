import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

function Landing () {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobtracker"className='logo' />
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>Vape wayfarers sriracha before they sold out cray sus fingerstache cliche subway tile asymmetrical intelligentsia migas. Ascot beard stumptown four dollar toast literally 3 wolf moon viral activated charcoal fixie typewriter blog dreamcatcher.</p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </main>
  )
}

export default Landing;