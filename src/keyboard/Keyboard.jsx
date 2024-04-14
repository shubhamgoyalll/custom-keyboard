import "./Keyboard.css";

function Key({ element, keyPressed }) {
  return (
    <div
      className="key"
      onClick={() => {
        keyPressed(element.value);
      }}
    >
      {element.value}
    </div>
  );
}

function Keyboard({ keyPressed }) {
  const obj = [
    [
      {
        name: "one",
        value: 1,
        id: "1",
      },
      {
        name: "two",
        value: 2,
        id: "2",
      },
      {
        name: "three",
        value: 3,
        id: "3",
      },
      {
        name: "four",
        value: 4,
        id: "4",
      },
      {
        name: "five",
        value: 5,
        id: "5",
      },
      {
        name: "six",
        value: 6,
        id: "6",
      },
      {
        name: "seven",
        value: 7,
        id: "7",
      },
      {
        name: "eight",
        value: 8,
        id: "8",
      },
      {
        name: "nine",
        value: 9,
        id: "9",
      },
      {
        name: "zero",
        value: 0,
        id: "0",
      },
      {
        name: "backspace",
        value: "backspace",
        id: "backspace",
      },
    ],
    [
      {
        name: "q",
        value: "q",
        id: "81",
      },
      {
        name: "w",
        value: "w",
        id: "82",
      },
      {
        name: "e",
        value: "e",
        id: "83",
      },
      {
        name: "r",
        value: "r",
        id: "84",
      },
      {
        name: "t",
        value: "t",
        id: "85",
      },
      {
        name: "y",
        value: "y",
        id: "86",
      },
      {
        name: "u",
        value: "u",
        id: "87",
      },
      {
        name: "i",
        value: "i",
        id: "88",
      },
      {
        name: "o",
        value: "o",
        id: "89",
      },
      {
        name: "p",
        value: "p",
        id: "90",
      },
    ],
    [
      {
        name: "a",
        value: "a",
        id: "91",
      },
      {
        name: "s",
        value: "s",
        id: "92",
      },
      {
        name: "d",
        value: "d",
        id: "93",
      },
      {
        name: "f",
        value: "f",
        id: "94",
      },
      {
        name: "g",
        value: "g",
        id: "95",
      },
      {
        name: "h",
        value: "h",
        id: "96",
      },
      {
        name: "j",
        value: "j",
        id: "97",
      },
      {
        name: "k",
        value: "k",
        id: "98",
      },
      {
        name: "l",
        value: "l",
        id: "99",
      },
    ],
    [
      {
        name: "capslock",
        value: "capslock",
        id: "100",
      },
      {
        name: "z",
        value: "z",
        id: "101",
      },
      {
        name: "x",
        value: "x",
        id: "102",
      },
      {
        name: "c",
        value: "c",
        id: "103",
      },
      {
        name: "v",
        value: "v",
        id: "104",
      },
      {
        name: "b",
        value: "b",
        id: "105",
      },
      {
        name: "n",
        value: "n",
        id: "106",
      },
      {
        name: "m",
        value: "m",
        id: "107",
      },
    ],
  ];

  return (
    <div className="Keyboard-layout">
      {obj.map((item) => {
        return (
          <div className="keys-layout">
            {item.map((ele) => {
              return <Key element={ele} key={ele.id} keyPressed={keyPressed} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
