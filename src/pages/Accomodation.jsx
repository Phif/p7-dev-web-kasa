import '../styles/pages/Accomodation.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import logements from '../utils/logements.json'

export default function Accomodation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find(logements => logements.id.toString() === id);
  useEffect(() => {
    if (!logement) {
      navigate('/404', { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  const index = findIndexById(logements, id);
  const images = logements[index].pictures;
  const title = logements[index].title;
  const location = logements[index].location;
  const host = logements[index].host;
  const tags = logements[index].tags;
  const rating = logements[index].rating;
  const description = logements[index].description;
  const equipments = logements[index].equipments;

  return (
    <div className='accomodation'>
      <main>
        <Header />
        <Carousel images={images} />
        <Hero title={title} location={location} host={host} tags={tags} rating={rating} description={description} equipments={equipments} />
      </main>
      <Footer />
    </div>
  )
}

function findIndexById(array, targetId) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === targetId) {
      return i;
    }
  }

  return -1;
}