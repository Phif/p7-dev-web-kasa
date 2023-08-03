import '../styles/pages/Accomodation.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import logements from '../utils/logements.json'

export default function Accomodation() {
  // const id = window.location.pathname.split('/')[2];
  const id = "c67ab8a7";
  const index = findIndexById(logements, id);
  const images = logements[index].pictures;
  const title = logements[index].title;
  const location = logements[index].location;
  const host = logements[index].host;
  const tags = logements[index].tags;


  return (
    <div className='accomodation'>
      <Header />
      <Carousel images={images} />
      <Hero title={title} location={location} host={host} tags={tags} />
    </div>
  )
}

function findIndexById(array, targetId) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === targetId) {
      return i;
    }
  }
  // If the target ID is not found in the array, you can return -1 or any other value to indicate that it doesn't exist.
  return -1;
}