const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg');

  // Метод перебора массива foreach
  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
  });

  // const array = [5, 3, 2, 4, 1];
  // const array = [
  //   {
  //     id: 0,
  //     value: 100
  //   },
  //   {
  //     id: 2,
  //     value: 300
  //   },
  //   {
  //     id: 1,
  //     value: 200
  //   },
  // ]
  
  // const newArray = array.filter((item) => item <= 3);
  // const newArray = array.sort((a, b) => {
  //   console.log(a);
  //   console.log(b);
  //   return a.value - b.value
  // });

  // console.log(newArray);
};

bgElements();