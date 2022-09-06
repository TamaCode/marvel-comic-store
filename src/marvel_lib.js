const publicKey = '1bae7bc7f550d656f79fb52eccbeddd9';

const getItemData = async (heroName) => {
  try {
    const heroRequestURL = getHeroRequestURL(heroName, publicKey);
    console.log('REQUEST URL', heroRequestURL);

    const requestResponse = await fetch(heroRequestURL);
    const requestResponseJSON = await requestResponse.json();
    const heroData = {};

    requestResponseJSON.data.results.forEach((result) => {
      heroData.id = result.id;
      heroData.name = result.name;
      heroData.description = result.description;
      heroData.img_url = `${result.thumbnail.path}/standard_large.${result.thumbnail.extension}`;
      heroData.price = calculatePrice(result.comics.returned, result.comics.available);
    });

    return heroData;

  } catch (error) {
    console.log(`ERROR EN MARVEL API. HERO NAME: ${heroName}. ERROR:  `, error);
  }
};

const getHeroComicsData = async (heroId, heroName) => {
  let comicQuantity = 0;
  const heroComics = [];
  const comicQuantityLimit = 4;
  const comicsRequestURL = getComicsRequestURL(heroId, publicKey);

  const requestResponse = await fetch(comicsRequestURL);
  const requestResponseJSON = await requestResponse.json();
  const comicResults = requestResponseJSON.data.results;

  for( let i = 0; i < comicResults.length; i++) {
    if (comicQuantityLimit === comicQuantity) { break };

    const comicResult = comicResults[i];
    const heroComic = {};

    heroComic.id = comicResult.id;
    heroComic.title = comicResult.title;
    heroComic.description = comicResult.description;
    heroComic.resumed_description = comicResult.description && `${comicResult.description.slice(0, 270)}...`;
    heroComic.price = comicResult.prices[0].price === 0 ? 5.99 : comicResult.prices[0].price ;
    heroComic.img_url = `${comicResult.thumbnail.path}.${comicResult.thumbnail.extension}`;

    if (((heroName === 'Hulk' || heroName === 'Iron Man') && heroComic.description && !heroComic.description.includes(cleanHeroName(heroName)))
          || (heroName === 'Thor' && heroComic.title && !heroComic.title.includes(cleanHeroName(heroName)))
          || (heroName === 'Doctor Strange (Ultimate)' && heroComic.description && !heroComic.description.includes(cleanHeroName(heroName)))
          ) {
        continue;
    }

    if (heroComic.description && heroComic.title && !heroComic.img_url.includes('image_not_available')) {
      heroComics.push(heroComic);
      comicQuantity++;
    }
  }

  return heroComics;
};

const getComicData = async (comicId) => {
  const comicData = {}
  const comicsRequestURL = getComicRequestURL(comicId, publicKey);

  const requestResponse = await fetch(comicsRequestURL);
  const requestResponseJSON = await requestResponse.json();
  const comicResult = requestResponseJSON.data.results[0];

  comicData.id = comicResult.id;
  comicData.title = comicResult.title;
  comicData.description = comicResult.description;
  comicData.resumed_description = comicResult.description && `${comicResult.description.slice(0, 270)}...`;
  comicData.price = comicResult.prices[0].price === 0 ? 5.99 : comicResult.prices[0].price ;
  comicData.img_url = `${comicResult.thumbnail.path}.${comicResult.thumbnail.extension}`;
  comicData.heroName = comicResult.characters.items[0].name;
  comicData.stock = comicResult.creators.available;

  return comicData;
};

const calculatePrice = (baseNumber1, baseNumber2) => {
  let price;

  price = 1000 * (baseNumber1 / baseNumber2);
  
  while (!isNaN(price) && price > 10) {
    price = price * 0.10;
  }

  if (!isNaN(price) && price < 3) {
    price += 3;
  }

  return price.toFixed(2);
};

const cleanHeroName = heroName => heroName.split(' (Ultimate)')[0];

const getHeroRequestURL = (heroName, publicKey) => {
  const formattedHeroName = heroName.replace(' ', '%20').replace(' ', '%20')
  let requestURL = 'https://gateway.marvel.com:443/v1/public/characters?name=';
  requestURL += formattedHeroName;
  requestURL += `&apikey=${publicKey}`;

  return requestURL;
};

const getComicsRequestURL = (heroId, publicKey) => {
  let requestURL = 'https://gateway.marvel.com:443/v1/public/characters/';
  requestURL += heroId;
  requestURL += `/comics?apikey=${publicKey}`;

  return requestURL;
};

const getComicRequestURL = (comicId, publicKey) => {
  let requestURL = 'https://gateway.marvel.com:443/v1/public/comics/';
  requestURL += comicId;
  requestURL += `?apikey=${publicKey}`;

  return requestURL;
};

export {
  getItemData,
  getHeroComicsData,
  getComicData
};