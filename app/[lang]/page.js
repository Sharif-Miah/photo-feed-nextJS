import { getAllPhoto } from '@/lib/fetch-data/fetch-data';
import { getDictionary } from './dictionaries';
import PhotoList from '@/components/PhotoList';

export default async function Home() {
  const photos = await getAllPhoto();

  return <PhotoList photos={photos} />;
}
