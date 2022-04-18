import "./styles.css";
import Reuben from "./reuben.jpeg";

export default function App() {
  return (
    <div className="App">
      <section className="first-section">
        <div className="image-container">
          <img src={Reuben} alt="reuben" />
        </div>
        <div className="name-text-container">
          <h1>Chukwuka Reuben</h1>
          <p>Frontend Engineer</p>
          <p className="text-me">
            Hello, my name is Reuben, I am from Nigeria, i am a fontend engineer
            with lots of experience, having been involved with many fontend
            projects for the web
          </p>
        </div>
      </section>

      <section className="second-section">
        <div className="experience">
          <ul>
            <li>
              created a weather app where user can search for cities and get to
              see their weather forecast
            </li>
            <li>
              created a website that sends users details directly to my email
              address
            </li>
            <li>
              Currently creating my own e-commerce webstite, "ReubenSneakers"
            </li>
            <li>
              created a movie recommendation website, that recommends movies
              based on my mood
            </li>
          </ul>
        </div>
        <div className="education">
          <ul>
            <li>Bachelor of education in Computer Science</li>
            <li>Took John Smilga's react Js course on Youtube</li>
            <li>freecodeCamps javascript course</li>
            <li>Pluralsight html and css course</li>
          </ul>
        </div>
      </section>

      <section className="third-section">
        <div className="programming-skills">
          <ul>
            <li>Html</li>
            <li>css</li>
            <li>Javascript</li>
            <li>Tailwindcss</li>
            <li>react js</li>
          </ul>
        </div>
        <div className="favorites">
          <ul>
            <li>football</li>
            <li>Movies</li>
            <li>Hiking</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
