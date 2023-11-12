const api = "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";
let input = document.querySelector(".input");
let images = document.querySelector(".images");
let button = document.querySelector("button");
button.onclick = getImages;
async function getImages() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api}`,
    },
    body: JSON.stringify({
      "prompt": input.value,
      "n": 3,
      "size": "256x256",
    }),
  };
  const response = await fetch("https://api.openai.com/v1/images/generations",requestOptions);
  let data = await response.json();
  let listOfImages = data.data;
  images.innerHTML = "";
  listOfImages.forEach((image) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = image.url;
    div.append(img);
    images.appendChild(div);      
  });
}
