import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover what others have to say
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> And share your own thoughts</span>
    </h1>
    <p className='desc text-center'>
      miniBlogger is a fast-paced idea sharing application where you can share your thoughts in short form and search for your favourite topics/users and discover what they have to say.
      (Since this app is deployed on an external database, it might take some time to fetch the content. Please be patient.)
    </p>

    <Feed />
  </section>
);

export default Home;
