export const getUsers = async () => {
  try {
    const response = await fetch('https://dummyjson.com/c/74b9-671c-4df2-b64c');
    const data = response.json();
    return console.log(data);
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return an empty array if things crash so the app doesn't break
  }
};
