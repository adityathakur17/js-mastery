// //Promises in javascript
// console.log("start");

// //CALLBACKS AND CALLBACK HELL
// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`My name is ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the video ${video}`);
//     }, 1000);
//   });
// }

// function shareTheVideo(share) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let tim = false;
//       if (tim) resolve(`Share the video ${share}`);
//       else reject(new Error("Tim is false"));
//     }, 1500);
//   });
// }

// // const result = async () => {
// //   try {
// //     const message1 = await importantAction("aditya");
// //     const message2 = await likeTheVideo("Chilpik");
// //     const message3 = await shareTheVideo("Putput");
// //     console.log({ message1, message2, message3 });
// //   } catch (error) {
// //     console.log("Promises failed");
// //   }
// // };

// // result();

// // importantAction("Aditya")
// //   .then((res) => {
// //     console.log(res);
// //     return likeTheVideo("Chilpik");
// //   })
// //   .then((res) => {
// //     console.log(res);
// //     return "Putpit";
// //   })
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// // console.log("stop");

// // //PROMISES

// // console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = true;
//     if (result) resolve("Promise is resolved");
//     else reject(new Error("Promise is not resolved"));
//   }, 2000);
// });

// console.log(sub)
// sub.then((res)=>{
//  console.log(res)clean
// }).catch((err)=>{
//     console.error(err)
// })

// console.log("stop")

// //REWRITE INTO ASYNC-AWAIT

async function loadJson(url) {
  const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err)=> console.log(err))

async function loadJsonas(url) {
    try {
        const response = await fetch(url)
        if (response.status==200){
            return response.json()
        }
    } catch (error) {
        throw new Error(response.status)
    }
}

loadJsonas("https://fakeurl.com/no-such-user.json")
    .then(data => console.log(data))
    .catch(err => console.error("Fetch failed:", err));