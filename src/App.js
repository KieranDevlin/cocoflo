import React, { useState } from 'react';
import './App.scss';
import UnsplashCard from './components/UnsplashCard';
import NavBar from './components/NavBar';
import Form from './components/Form';

const headerNavItems = [
  { id: 0, link: 'https://unsplash.com/', text: 'Unsplash' },
  {
    id: 1,
    link: 'https://www.linkedin.com/in/kierandevlin/',
    text: 'LinkedIn',
  },
  { id: 2, link: 'https://github.com/KieranDevlin', text: 'Github' },
  { id: 3, link: 'mailto:kjrdevlin@gmail.com', text: 'Contact' },
];
const footerNavItems = [
  {
    id: 0,
    link: 'https://www.linkedin.com/in/kierandevlin/',
    icon: 'linkedin',
  },
  { id: 1, link: 'https://github.com/KieranDevlin', icon: 'github' },
  { id: 2, link: 'mailto:kjrdevlin@gmail.com', icon: 'email' },
];
const orientationOptions = ['landscape', 'portrait', 'squarish'];

function App() {
  const [unsplashData, setunsplashData] = useState(null);
  const [key, setKey] = useState('');
  const [orientation, setOrientation] = useState('landscape');
  const [query, setQuery] = useState('');
  const [featured, setFeatured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getNewImg = () => {
    setunsplashData(null);
    setIsLoading(true);
    console.log(
      `Your API endpoint: https://api.unsplash.com/photos/random?&query=${query}&${
        'orientation=' + orientation
      }${featured ? '&featured' : ''}&client_id=${key}`
    );
    fetch(
      `https://api.unsplash.com/photos/random?&query=${query}&${
        'orientation=' + orientation
      }&${featured ? 'featured' : ''}&client_id=${key}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setunsplashData(data);
        if (data?.errors?.length > 0) {
          setIsLoading(false);
          setunsplashData(null);
          alert('Make sure you have a working API key!');
        }
      })
      .catch((err) => alert('There was an error with Unsplash!'));
  };
  return (
    <section className="root">
      <header>
        <NavBar
          className={'header-nav'}
          isResponsive={true}
          img={
            'https://static.wixstatic.com/media/1f7788_308566bffe3e4cf784a214cd368a13f0~mv2.png/v1/crop/x_0,y_626,w_1080,h_725/fill/w_200,h_128,al_c,q_85,usm_0.66_1.00_0.01/Cocoflologo2.webp'
          }
          imgURL={'https://www.cocoflo.tech/'}
          alt={'Cocoflo Logo'}
          navItems={headerNavItems}
        />
      </header>
      <main>
        <article>
          <h1>Using the Unsplash API</h1>

          <p>
            The Unsplash API is a really handy tool for placeholder images on
            your website. Register for an API key
            <a href="https://unsplash.com/documentation"> here</a>, then use the
            following selectors to fill the adjacent card with an Unsplash API
            response!
          </p>
          <Form
            className="api-key-form"
            placeholder="Unsplash API key..."
            valueKey={key}
            onChangeAPI={setKey}
            valueQuery={query}
            onChangeQuery={setQuery}
            queryPlaceholder={'Search for photos!'}
            onSubmit={getNewImg}
            optionName={'orientation'}
            selectOptions={orientationOptions}
            seletOnChange={setOrientation}
            valueFeatured={featured}
            onChangeFeatured={setFeatured}
          />
          <UnsplashCard isLoading={isLoading} unsplashData={unsplashData} />
        </article>
      </main>
      <footer>
        <NavBar className={'footerNav'} navItems={footerNavItems} />
      </footer>
    </section>
  );
}

export default App;
