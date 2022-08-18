const getHeroesData = async () => {
  const heroesData = [];
  const heroNames = ['Thor'];
  const publicKey = '1bae7bc7f550d656f79fb52eccbeddd9';
  const requestURL = getRequestURL(heroNames, publicKey);
  console.log('REQUEST URL', requestURL);

  const requestResponse = await fetch(requestURL);
  const requestResponseJSON = await requestResponse.json();

  requestResponseJSON.data.results.forEach((result) => {
    const heroData = {};
    heroData.id = result.id;
    heroData.name = result.name;
    heroData.description = result.description;
    heroData.img_url = `${result.thumbnail.path}/standard_medium.${result.thumbnail.extension}`;

    heroesData.push(heroData);
  });

  return heroesData;
};

const getRequestURL = (heroNames, publicKey) => {
  let requestURL = 'https://gateway.marvel.com:443/v1/public/characters?name=';

  heroNames.forEach((heroName) => {
    requestURL += heroName;
  });

  requestURL += `&apikey=${publicKey}`;

  return requestURL;
};

export default getHeroesData;