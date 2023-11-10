import React, { useState } from 'react';

const buttonsDataProducts = [
  { id: 1, label: 'Egg', image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c2/c28af7336569cccc8e39a5e9b32304f7f82c40d7_medium.jpg' },
  { id: 2, label: 'Sugar', image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/3671461b2430396f99271a5a53a430ce3eadaa45_medium.jpg' },
  { id: 3, label: 'Tea', image: 'https://avatars.steamstatic.com/567b8a2e8d09d39cf803c3dc3e889d4c4ca19676_medium.jpg' },
  { id: 4, label: 'Milc', image: 'https://avatars.akamai.steamstatic.com/4be91d270b65a255258024f6a7d624fb80a68fa6_medium.jpg' },
  { id: 5, label: 'Olive oil', image: 'https://avatars.akamai.steamstatic.com/6e27ed603da0e6ac87258217c6f547c01227de11_medium.jpg' },
  { id: 6, label: 'Salt', image: 'https://avatars.steamstatic.com/0161691127439391145f5a2fdeee554ff29eec64_medium.jpg' },
];
const buttonsDataRecepts = [
  { id: 1, label: 'tea with sugar', image: '' },
  { id: 2, label: 'omelette', image: '' }
]


const Button = ({ label, image, onClick, isActive }) => {
  const buttonStyle = {
    backgroundColor: isActive ? 'green' : 'black',
    color: isActive ? 'white' : 'white',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <img src={image} alt={label} />
      {label}
    </button>
  );
};

const App = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (id) => {
    setActiveButtons((buttons) =>
      buttons.includes(id) ? buttons.filter((buttonId) => buttonId !== id) : [...buttons, id]
    );
  };

  const canShowOmelette = () => {
    const requiredIngredients = [1, 4, 5, 6]; // ids for Egg, Milk, Olive oil, Salt
    return requiredIngredients.every((ingredient) => activeButtons.includes(ingredient));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0E68C' }}>
      <h1>Choose ingredients.</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {buttonsDataProducts.map((button) => (
          <Button
            key={button.id}
            label={button.label}
            image={button.image}
            onClick={() => handleButtonClick(button.id)}
            isActive={activeButtons.includes(button.id)}
          />
        ))}
      </div>
      <h1>Recipes</h1>
      {canShowOmelette() && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <button className="big-button" style={{ backgroundColor: '#FFA500', marginRight: '10px' }}>
            <img src="https://kulinaria1955.ru/uploads/posts/2020-12/1608392523_1691.jpg" alt="Omelette" />
            Omelette
          </button>
        </div>
      )}
    </div>
  );
};

export default App;