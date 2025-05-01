import Image from 'next/image';
import Link from 'next/link';

const PhotoCart = ({ photo }) => {
  return (
    <Link
      href={`photo/${photo.id}`}
      className='group'>
      <Image
        src={photo.url}
        alt={photo.title}
        width={700}
        height={700}
      />

      <div className='title-container'>
        <h4 className='title'>{photo.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoCart;
