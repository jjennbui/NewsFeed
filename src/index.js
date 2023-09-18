import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import "./styles.css";

function App() {
  return (
    <div className="layout">
      <NewsFeed>
        <Feed
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          creator="Steve Hanley"
          img="https://placehold.co/200x200"
          desc="According to reports from CnEVPost , the manufacturing capacity of the Tesla Gigafactory in Shanghai is expected to increase to more than 1 million cars a year in the near"
        />

        <Feed
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          creator="Milenio Digital"
          img="https://placehold.co/200x200"
          desc="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los..."
        />
        <Feed
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          creator="Maria Merano"
          img="https://placehold.co/200x200"
          desc="According to reports from CnEVPost , the manufacturing capacity of the Tesla Gigafactory in Shanghai is expected to increase to more than 1 million cars a year in the near"
        />
      </NewsFeed>
    </div>
  );
}

function NewsFeed(props) {
  return (
    <div>
      <h2 className="title">News Feed</h2>
      <ul>{props.children}</ul>
    </div>
  );
}

function Feed(props) {
  return (
    <div className="container">
      <img src={props.img} />

      <div className="content">
        <h2 className="name">
          <a href={props.link}>{props.title}</a>
        </h2>
        <h3> By: {props.creator}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
