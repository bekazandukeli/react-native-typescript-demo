import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export async function fetchUsersAPI() {
  try {
    const userResp = await axios.get(`${url}/users`);
    const postsResp = await axios.get(`${url}/posts`);

    if (userResp.status === 200 && postsResp.status === 200) {
      const userInfo = [...userResp.data];
      const postList = [...postsResp.data];
      const mergedData = userInfo.map(user => ({
        ...user,
        posts: [...postList.filter((post) => post.userId === user.id)]
      }));

      return mergedData;
    }
  } catch (error) {
    console.error(error);
  }
}
