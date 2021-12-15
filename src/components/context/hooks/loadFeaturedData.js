import data from "../../data/index";

export default async function loadFeaturedData(setFeaturedData) {
  const randomNumber = await Math.floor(Math.random() * data.length);
  const sortedFeatured = data[randomNumber];

  setFeaturedData(sortedFeatured);
}
