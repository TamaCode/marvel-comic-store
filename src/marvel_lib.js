const getHeroData = async (heroName) => {
  const publicKey = '1bae7bc7f550d656f79fb52eccbeddd9';
  const requestURL = getRequestURL(heroName, publicKey);
  console.log('REQUEST URL', requestURL);

  const requestResponse = await fetch(requestURL);
  const requestResponseJSON = await requestResponse.json();
  const heroData = {};

  requestResponseJSON.data.results.forEach((result) => {
    heroData.id = result.id;
    heroData.name = result.name;
    heroData.description = result.description;
    heroData.img_url = `${result.thumbnail.path}/standard_large.${result.thumbnail.extension}`;
  });

  return heroData;
};

const getRequestURL = (heroName, publicKey) => {
  let requestURL = 'https://gateway.marvel.com:443/v1/public/characters?name=';
  requestURL += heroName;
  requestURL += `&apikey=${publicKey}`;

  return requestURL;
};

export {getHeroData};