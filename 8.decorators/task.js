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
  let count = 0;
  let allCount = 0;
  let hasCalled = false;

  function wrapper(...args) {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!wrapper.count) {
      wrapper.count = 0;
    }

    if (!wrapper.allCount) {
      wrapper.allCount = 0;
    }

    wrapper.count++;
    wrapper.allCount++;

    if (!hasCalled) {
      func.apply(this, args);
      hasCalled = true;
    } else {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        hasCalled = true;
      }, delay);
    }
  }

  wrapper.count = count;
  wrapper.allCount = allCount;

  return wrapper;
}