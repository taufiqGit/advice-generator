import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [advice, setAdvice] = useState(null)
  const getAdvice = async()=> {
    try {
      const res = await axios.get('https://api-advice.herokuapp.com/api')
      // console.log(res.data.data)
      setAdvice(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRefreshAdvice = async()=>{
    getAdvice()
  }

  useEffect(()=>{
    getAdvice()
  }, [])

  //console.log(advice)
  return (
    <main className="App">
      <div className="box-text">
        <h3>advice {advice ? `#${advice.slip.id}` : '#---'}</h3>
        <p>{advice ? `"${advice.slip.advice}"` : ''}</p>
        <div className="hias">
          <img className="" src="/images/pattern-divider-desktop.svg"/>
        </div>
        <button className="btn-refresh" onClick={handleRefreshAdvice}>
          <img className="" src="/images/icon-dice.svg"/>
        </button>
      </div>
    </main>
  );
}

export default App;
