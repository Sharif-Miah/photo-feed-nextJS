import PhotDetails from '@/components/PhotDetails';

const PhotoDetailsPage = ({ params: { id, lang } }) => {
  return (
    <PhotDetails
      id={id}
      lang={lang}
    />
  );
};

export default PhotoDetailsPage;
