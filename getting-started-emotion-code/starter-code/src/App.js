/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "./logo.png";
// import `css`and `ThemeProvider` from "@emotion/react" package
// import styled components, theming and animation from "./styles.js" file

const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, and poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <main
      css={{
        color: "#03045e",
        background: "#caf0f8",
        height: "1300px",
        fontFamily: "helvetica",
      }}
    >
      <img
        src={logo}
        alt="logo"
        css={css`
          display: absolute;
          margin-top: 15px;
          margin-left: 15px;
          height: 100px;
          width: 100px;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding: 20px;
          @media (max-width: 900px) {
            display: grid;
          }
        `}
      >
        {hotels.map((hotel) => {
          return (
            <div key={hotel.id}>
              <img src={hotel.src} alt={hotel.alt} />
              <div>
                <h2>{hotel.title}</h2>
                <h3>{hotel.description}</h3>
              </div>
              <div>
                <button>Details</button>
                <button>Book</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
