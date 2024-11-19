async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("SORRY AN ERROR OCCURED");
  }
}

// getData();

function examplePromise(params) {
  return new Promise((resolve, reject) => {
    // Perform long task here.
    const response = "success";
    // Based on th result of the long operation will determine if promise
    // was successful or rejected
    if (response === "success") {
      resolve("Hey Big head");
    } else {
      reject("Promise was rejected");
    }
  });
}

// examplePromise()
//   .then((data) => console.log("Completed", data))
//   .catch((error) => console.log("error", error));

function smallPromiseOne(params) {
  return new Promise((resolve, reject) => {
    const response = "success";
    if (response === "success") {
      resolve("Promise one was successful");
    } else {
      reject("Promise one was rejected");
    }
  });
}

function smallPromiseTwo(params) {
  return new Promise((resolve, reject) => {
    const response = "success";
    // Based on th re
    if (response === "success") {
      resolve("Promise Two was successful");
    } else {
      reject("Promise Two was rejected");
    }
  });
}

// Executing multiple promises at same time.
// when using promise.all(), if one is affected, it becomes a problem for others
// Promise.all([smallPromiseOne(), smallPromiseTwo()])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// when using promise.allSettled(), if one is affected, it is not a problem for others
Promise.allSettled([smallPromiseOne(), smallPromiseTwo()])
  .then((data) => console.log("From settled", data))
  .catch((error) => console.log("From settled", error));
// when using promise.race(), returns the fastest to resolve or rejected
Promise.race([getData(), smallPromiseOne(), smallPromiseTwo()])
  .then((data) => console.log("From race", data))
  .catch((error) => console.log("From race", error));
// when using promise.any(), returns the fastest to get resolved.
Promise.any([getData(), smallPromiseOne(), smallPromiseTwo()])
  .then((data) => console.log("From any", data))
  .catch((error) => console.log("From any", error));
