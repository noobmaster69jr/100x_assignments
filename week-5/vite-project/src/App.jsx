import Card from './Components/Card'

function App() {
 const name="Lokeshwar"
 const description = "A TA in the 100xDevs Cohort 2.0"
  const interest = ["Ionic", "Open source", "App Dev"]
  return (<>
        <Card name={name} description={description}
        interest = {interest}
         />
  </>)
}

export default App

