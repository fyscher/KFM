import '../static/home.css'

const Home = () =>
{

    return (
    <div>
        <div className='hero-image'>
            <p className='oooLaLa'>Come find me! | __fysch | Fyschmeister |</p>
            <div className='hero-text'>
            <h1 className='headline'>Kingfyscher Manufacturing</h1>
            <p className='welcome'>Welcomes you</p>
            <p className='intro'>Premium Digital Assets found within</p>
            </div>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>Claim a physical copy of your KFM asset residing in Upland!</p>
            </div>
            <div className='card'>
                <h5>On the Road To:</h5>
                <p>- Lucky Wheel</p>
                <p>- Elite / Luxury Items</p>
                <p>- Map Asset Functionality</p>
            </div>
            <div className='card'>
                <p>Use your assets to sign rewards and activate bonuses right here at kingfyscher.ca</p>
            </div>
        </div>
    </div> )
}

export default Home;