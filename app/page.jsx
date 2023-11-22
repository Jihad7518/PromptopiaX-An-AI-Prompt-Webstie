
import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Ignite Your Imagination: Explore and Exchange
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> AI-Enhanced Ideas!</span>
    </h1>
    <p className='desc text-center'>
    Empowering the Modern Creative: PromptopiaX, Your Open-Source AI Prompting Companion, 
    Unveils a World of Discovery, Creation, and Sharing.
    </p>

    <Feed />
  </section>
);

export default Home;
