import Link from 'next/link';

const Home = () => {
    return (
        <div>
            this is home
            <Link href='/about'>got to about</Link>
        </div>
    );
};

export default Home;