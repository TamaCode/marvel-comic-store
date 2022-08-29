const getItemData = async (heroName) => {
  try {
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
      heroData.price = calculatePrice(result.comics.returned, result.comics.available);
    });

    return heroData;

  } catch (error) {
    console.log(`ERROR EN MARVEL API. HERO NAME: ${heroName}. ERROR:  `, error);
  }
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

const getRequestURL = (heroName, publicKey) => {
  let requestURL = 'https://gateway.marvel.com:443/v1/public/characters?name=';
  requestURL += heroName;
  requestURL += `&apikey=${publicKey}`;

  return requestURL;
};

export {getItemData};