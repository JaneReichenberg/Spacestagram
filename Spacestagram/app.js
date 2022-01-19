let output = document.querySelector(".container");

const api_key = "xz9NgXCf2zhPpcGu43y8OI3bA1K7KRM5kxB5y7a1";

const sendRequest = async () => {
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=100`
    );

    if (!response) throw Error("These are not the images you're looking for");

    const data = await response.json();
    let outputData = ``;

    data.map((data) =>
        data.url && data.url.includes(".jpg")
          ? (outputData += `
              <div class="card">
                <div class="card-header">
                  <img
                    src=${data.url} 
                    alt=${data.title}
                    class="avatar"
                  />
                  <span>
                    <span>${data.title}</span>
                    <span>${data.date}</span>
                  </span>
                </div>
                <img
                  src=${data.url}
                  alt="card-image"
                  class="card-image"
                />
                <div class="card-icons">
                  <p>${data.explanation}</p>
                  <button class="btn btn-like">
                      <span class="btn-icon btn--icon-default">
                        <span class="fa fa-heart"></span>
                      </span>
                      <span class="btn-icon btn--icon-liked">
                        <span class="fa fa-heart"></span>
                      </span>
                  </button>
                </div>
              </div>
  `)
       : null
    );

    output.innerHTML = outputData;
};

sendRequest();