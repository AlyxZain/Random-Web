import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';

export function Home() {
  const [movie, setMovie] = useState([]);
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f1da2e96854754de41624ac489a8286f&language=es-ES&page=${1}`
      )
      .then((response) => {
        const random = Math.floor(Math.random() * response.data.results.length);
        const api = response.data;
        setMovie(api.results[random]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=f1da2e96854754de41624ac489a8286f`
      )
      .then((response) => {
        const random1 = Math.floor(
          Math.random() * response.data.backdrops.length
        );
        const api1 = response.data;

        setImages1(api1.backdrops[random1]);

        const random2 = Math.floor(
          Math.random() * response.data.backdrops.length
        );
        const api2 = response.data;

        if (random2 === random1) {
          setImages2(api2.backdrops[random2 + 2]);
        }
        setImages2(api2.backdrops[random2]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie]);

  useEffect(() => {
    axios

      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=f1da2e96854754de41624ac489a8286f&language=en-EN`
      )
      .then((response) => {
        const random = Math.floor(Math.random() * response.data.results.length);
        const api = response.data;
        setVideo(api.results[random]);
        console.log('videos', api.results[random]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie]);

  return (
    <>
      <section
        className='banner'
        style={{
          '--background-url': `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}>
        <div className='toggleV'>
          <Header />

          <div className='content'>
            <h1 className='textimg'>{movie.title}</h1>
            <p> {movie.overview}</p>
            <a href='#' className='btn' id='videolink'>
              <ion-icon name='play-circle-outline' />
              Ver Trailer{' '}
              <i className='fa fa-play-circle' aria-hidden='true'>
                &nbsp;
              </i>
            </a>
          </div>
          {/* 
          <div
            id='videoStory'
            className='mfp-hide'
            style={{ maxwidth: '75%', margin: '0 auto ' }}>
            <iframe
              width='853'
              height='480'
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder='0'
              allow='autoPlay; '
              allowFullScreen></iframe>
          </div> */}

          <div className='clip'>
            <div className='clipBox'>
              <img
                src={` https://image.tmdb.org/t/p/original/${images1.file_path}`}
              />

              <ion-icon name='play-circle-outline' />
            </div>
            <div className='clipBox'>
              <img
                src={`https://image.tmdb.org/t/p/original/${images2.file_path}`}
              />
              <ion-icon name='play-circle-outline' />
            </div>
          </div>

          <ul className='socialIcon'>
            <li>
              <a href='#'>
                <ion-icon name='logo-google'></ion-icon>
              </a>
            </li>
            <li>
              <a href='https://github.com/AlyxZain' target='_blank'>
                <ion-icon name='logo-github'></ion-icon>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sebastian-vargas-ramirez/'
                target='_blank'>
                <ion-icon name='logo-linkedin'></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <ul
        className='navigation'
        style={{
          '--background-url': `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/cast'>Cast</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </>
  );
}
