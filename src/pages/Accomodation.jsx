import '../styles/pages/Accomodation.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

export default function Accomodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundAccomodation = data.find(item => item.id.toString() === id);
        setAccomodation(foundAccomodation);
        if (!foundAccomodation) {
          navigate('/404', { replace: true });
        }
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, [id, navigate]);

  if (!accomodation) {
    return null;
  }

  const { pictures: images, title, location, host, tags, rating, description, equipments } = accomodation;

  return (
    <div className='page'>
      <Carousel images={images} />
      <Hero title={title} location={location} host={host} tags={tags} rating={rating} description={description} equipments={equipments} />
    </div>
  );
}
