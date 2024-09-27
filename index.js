import _ from 'lodash';
const showInfo = (content) => {
    const [keys, ...lines] = content
      .split('\n')
      .filter((line) => line !== '')
      .map((line) => line.split(','));
  
    const data = lines
      .map((line) => line
        .reduce((acc, value, i) => {
          acc[keys[i]] = value;
          return acc;
        }, {}));
  
    console.log(`Количество автомобилей: ${data.length}`);
  
    const avgMilage = _.meanBy(data, (value) => parseInt(value.Пробег, 10));
    console.log(`Средний пробег: ${avgMilage}`);
  
    const maxPrice = _.maxBy(data, (value) => parseInt(value.Цена, 10)).Цена;
    console.log(`Стоимость самой дорогой машины: ${maxPrice}`);
  
    const oldestCar = _.minBy(data, (value) => parseInt(value.Год, 10));
    console.log(`Самый старый автомобиль: ${oldestCar.Марка} ${oldestCar.Модель}`);
  
    const colorCount = _.countBy(data, (item) => item['Цвет'].trim());
    const objToStr = _.map(colorCount, (value, key) => `${key}: ${value}`).join(', ');
    console.log(`Все цвета: ${objToStr}`);
  };
  
  export default showInfo;