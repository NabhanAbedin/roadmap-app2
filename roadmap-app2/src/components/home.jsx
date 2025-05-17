import OffScreenMenu from "./roadmap_folder/offScreenMenu";
import '../styles/homepage.css';
const Home = () => {
    return (
        <>
        <OffScreenMenu />
        <div className="homepage-container">
          <div className="homepage-hero">
            <h1 className="homepage-hero-title">The study workspace that works for you.</h1>
            <p className="homepage-hero-subtitle">One place to plan, track, and review your study goals and deadlines — beautifully.</p>
            <div className="homepage-button-group">
              <button className="primary-button">Get Started</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
          <div className="homepage-features">
            <div className="feature-card">
              <h3>Create Roadmaps</h3>
              <p>Visualize your goals and deadlines in structured lanes.</p>
            </div>
            <div className="feature-card">
              <h3>Track Progress</h3>
              <p>Use status columns to move tasks from 'Unfinished' to 'Done'.</p>
            </div>
            <div className="feature-card">
              <h3>Overview Dashboard</h3>
              <p>Quickly assess what needs attention and when.</p>
            </div>
          </div>
        </div>
        </>
    );
};

export default Home;