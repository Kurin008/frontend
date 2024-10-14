
//1.
const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}
const messages = async() => {
    let msg = await helloWorld();
    console.log(msg);
}
 messages("hello world")


//2.
// const ambilDataUser = () => {
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then(({ data }) => {
//       data.forEach(({ first_name, last_name }) => {
//         console.log(`${first_name} ${last_name}`);
//       });
//     });
// };
// ambilDataUser();

//3. 
// const ambilDataUser = async () => {
//     try {
//       let response = await fetch("https://reqres.in/api/users");
//       let { data } = await response.json();
//       data.forEach(({ first_name, last_name }) => {
//         console.log(`${first_name} ${last_name}`);
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   ambilDataUser();

//4.
// const ambilDataUser = async () => {
//   try {
//     const response = await axios.get("https://reqres.in/api/users");
//     const { data } = response.data;
//     data.forEach(({ first_name, last_name }) => {
//       console.log(`${first_name} ${last_name}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// ambilDataUser();