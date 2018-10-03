import React from 'react';

const Lore = () => {
  const whiteFont = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "white",
  }
    return (
      <div class="container" style={whiteFont}>
        <div class="row">
          <div class="col">
            <p align="Left">
              Once upon a time, in the kingdom of Flatstory, Flatiron Students went about their lives endlessly doing labs in the pursuit of higher knowledge. To make this happen as smoothly as possible they utilize the magical ruby gems which give functionality to their programs allowing for better apps to be created. One day, However, a mysterious force lead by the all-evil spaghetti code monster descended on this peaceful land and started stealing all the ruby gems! Deprived of their gems, the students panicked and chaos ensued. Feelings Friday was crowned by bloodshed and an inordinate use of profanity. Only could the true heroes of Flatstory save this world. Can they react fast enough and bring peace back to this land? Play as Instructors Josh, Humzah, Tim, Graham, or Michael in this all-incredible (and totally not plagiarized) adventure and saved the students from unemployment!
            </p>
          </div>
          <div class="col">
            <img src='https://i.postimg.cc/1npKxK31/spaghetti_Code_Monster.png' border='0' alt='spaghetti_Code_Monster'/>
          </div>
        </div>
      </div>
    );
};

export default Lore;
