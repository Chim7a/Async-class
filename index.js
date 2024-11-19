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

getData();

function examplePromise(params) {
  return new Promise((resolve, reject) => {
    const response = "success";
    // Based on th re
    if (response === "success") {
      resolve("Hey Big head");
    } else {
      reject("Promise was rejected");
    }
  });
}

examplePromise()
  .then((data) => console.log("Completed", data))
  .catch((error) => console.log("error", error));
