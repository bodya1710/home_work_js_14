let savings = 100;
// function getUp(someAction) {
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (someAction){
//             resolve('Я проснувся)))');
//         }else{
//             reject('Хр Хр Хр');
//         }
//     },1000);
// })
// }
// function goBrushTeeth(someAction = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (someAction){
//                 resolve('Чисті зубки');
//             }else {
//                 reject('Бееееее');
//             }
//         }, 1500)
//     });
// }
// function goEat(eat) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if (eat){
//                 resolve(`Готуємо ${eat}`);
//             }else {
//                 reject('Хочу їсти');
//             }
//         },2000)
//     });
// }
// function goWork(time) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (time > 25){
//                 resolve('АААА спізнився, прокляті пробки');
//             }else if(time < 25){
//                 resolve('Оп оп все гуд');
//             }else {
//                 reject('Прогул так прогул');
//             }
//         }, 2500)
//     })
// }
// function work(money) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (money){
//                 savings += money
//                 resolve('Зрубав бабліца');
//             }
//             reject('Кіданули мене');
//         }, 8000)
//     })
// }
// function goSleep() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('хр хр хр');
//         }, 10000)
//     })
// }
// getUp(true)
//     .then(morning =>{
//         console.log(morning);
//         return goBrushTeeth();
//     })
//     .then(teeth=>{
//         console.log(teeth);
//         return goEat('Омлет');
//     })
//     .then(eat=>{
//         console.log(eat);
//         return goWork(20);
//     })
//     .then(time=>{
//         console.log(time);
//         return work(900);
//     })
//     .then(money=>{
//         console.log(money);
//         console.log(`Мої статки ${savings}`);
//         return goEat('Зупка канапка');
//     })
//     .then(eat=>{
//         console.log(eat);
//         return goSleep();
//     })
//     .then(doSome=>{
//         console.log(doSome);
//     })
//     .catch(reason => {
//         console.log(`ERRRROO`, reason);
//     })
//
// function getUp(someAction, callback) {
//         setTimeout(()=>{
//             if (someAction){
//                 callback(null, 'Я проснувся)))');
//             }else{
//                 callback('Хр Хр Хр', null);
//             }
//         },1000);
// }
// function goBrushTeeth(someAction = true, callback) {
//         setTimeout(()=>{
//             if (someAction){
//                 callback(null, 'Чисті зубки');
//             }else {
//                 callback('Бееееее', null);
//             }
//         }, 1500)
// }
// function goEat(eat, callback) {
//         setTimeout(()=>{
//             if (eat){
//                 callback(null, `Готуємо ${eat}`);
//             }else {
//                 callback('Хочу їсти', null);
//             }
//         },2000)
// }
// function goWork(time, callback) {
//         setTimeout(()=>{
//             if (time > 25){
//                 callback(null, 'АААА спізнився, прокляті пробки');
//             }else if(time < 25){
//                 callback(null, 'Оп оп все гуд');
//             }else {
//                 callback('Прогул так прогул', null);
//             }
//         }, 2500)
// }
// function work(money, callback) {
//         setTimeout(()=>{
//             if (money){
//                 savings += money
//                 callback(null, 'Зрубав бабліца');
//                 console.log(savings);
//             }else {
//                 callback('Кіданули мене', null);
//             }
//         }, 8000)
// }
// function goSleep(callback) {
//         setTimeout(()=>{
//             callback('хр хр хр');
//         }, 10000)
// }
// getUp(true, (err , data)=>{
//     if (err){
//         console.log(err);
//     }else {
//         console.log(data);
//         goBrushTeeth(true, (err, data)=>{
//             if (err){
//                 console.log(err);
//             }else{
//                 console.log(data);
//                 goEat('Омлет', (err, data)=>{
//                     if (err){
//                         console.log(err);
//                     }else{
//                         console.log(data);
//                         goWork(24, (err, data)=>{
//                             if (err){
//                                 console.log(err);
//                             }else {
//                                 console.log(data);
//                                 work(800, (err, data)=>{
//                                     if (err){
//                                         console.log(err);
//                                     }else {
//                                         console.log(data);
//                                         goSleep((data)=> console.log(data))
//                                     }
//                                 })
//                             }
//                         })
//                     }
//
//                 })
//             }
//         })
//
//     }
// })

// function getUp(someAction) {
//         setTimeout(()=>{
//             if (someAction){
//                 console.log('Я проснувся)))');
//             }else{
//                 console.log('Хр Хр Хр');
//             }
//         },1000);
// }
// function goBrushTeeth(someAction = true) {
//         setTimeout(()=>{
//             if (someAction){
//                 console.log('Чисті зубки');
//             }else {
//                 console.log('Бееееее');
//             }
//         }, 1500)
// }
// function goEat(eat) {
//         setTimeout(()=>{
//             if (eat){
//                 console.log(`Готуємо ${eat}`);
//             }else {
//                 console.log('Хочу їсти');
//             }
//         },2000)
// }
// function goWork(time) {
//         setTimeout(()=>{
//             if (time > 25){
//                 console.log('АААА спізнився, прокляті пробки');
//             }else if(time < 25){
//                 console.log('Оп оп все гуд');
//             }else {
//                 console.log('Прогул так прогул');
//             }
//         }, 2500)
// }
// function work(money) {
//         setTimeout(()=>{
//             if (money){
//                 savings += money
//                 console.log('Зрубав бабліца');
//                 console.log(savings);
//             }else {
//                 console.log('Кіданули мене');
//             }
//         }, 8000)
// }
// function goSleep() {
//         setTimeout(()=>{
//             console.log('хр хр хр');
//         }, 10000)
// }
// async function myWorkDay() {
//     await getUp(true);
//     await goBrushTeeth();
//     await goEat('Омлет');
//     await goWork(20);
//     await work(700);
//     await goSleep();
// }
// myWorkDay();