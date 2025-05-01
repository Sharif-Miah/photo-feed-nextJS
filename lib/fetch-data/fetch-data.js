export async function getAllPhoto() {
  const response = await fetch(`${process.env.BASE_URL}/photos`);

  if (!response.ok) {
    throw new Error('There is no data fetching here !');
  }
  return response.json();
}

export async function getOnePhoto(id) {
  const response = await fetch(`${process.env.BASE_URL}/photos/${id}`);

  if (!response.ok) {
    throw new Error('There is no data fetching here !');
  }
  return response.json();
}
