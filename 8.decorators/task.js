//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); 
    let objectInCache = cache.find((item) => item.hash === hash); 

    if (objectInCache) { 
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args); 
    cache.push({ hash: hash, value: result }); 

    if (cache.length > 5) { 
      cache.shift(); 
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount++; // Счётчик всех вызовов декоратора

    if (isFirstCall) {
      func.apply(this, args); // Первый вызов мгновенный
      wrapper.count++; // Увеличиваем счётчик реальных вызовов
      isFirstCall = false;
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Асинхронный вызов
      wrapper.count++; // Увеличиваем счётчик реальных вызовов
    }, delay);
  }

  wrapper.count = 0;     // Счётчик реальных вызовов функции
  wrapper.allCount = 0;  // Счётчик всех вызовов декоратора

  return wrapper;
}
