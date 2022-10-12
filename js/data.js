import {getRandomIntInclusive} from './util.js';

const MAX_POST_AMOUNT = 25;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const MAX_COMMENTS_AMOUNT = 200;

const postDescriptions = ['фото кота', 'фото хомяка', 'фото собаки', 'фото белки', 'фото природы', 'фото квартиры', 'фото автомобиля'];

const createPost = (count) => ({
  id: count,
  url: `photos/${count}.jpg`,
  description: postDescriptions[getRandomIntInclusive(0, postDescriptions.length - 1)],
  likes: getRandomIntInclusive(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
  comments: getRandomIntInclusive(0, MAX_COMMENTS_AMOUNT)
});

const createPosts = () => {
  const posts = [];

  for (let i = 1; i <= MAX_POST_AMOUNT; i++) {
    posts.push(createPost(i));
  }

  return posts;
};

export {createPosts};
