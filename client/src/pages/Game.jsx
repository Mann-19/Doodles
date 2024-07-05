import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();
  const gamertag = localStorage.getItem("gamertag");
  return (
    <div>
      <h1>Room id: {id}</h1>
      <br />
      <h1>Gamertag: {gamertag}</h1>
    </div>
  )
}
export default Home;