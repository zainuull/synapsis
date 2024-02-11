import Headline from './(presentation)/(components)/headline';
import Navigation from './(presentation)/(components)/navigation';
import Post from './(presentation)/(components)/post';

const NewsPage = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Headline />
      <div className='w-full h-full p-12'>
        <Post />
      </div>
    </div>
  );
};

export default NewsPage;
