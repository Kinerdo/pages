// const api_url = "https://stoicquotesapi.com/v1/api/quotes/random";

// async function getQuote() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   //   console.log(data);
//   const { body, author } = data;
//   console.log(body);
//   console.log(author);
//   document.getElementById("body-quote").textContent = body;
//   document.getElementById("author").textContent = author;
// }
// getQuote();

fetch("https://stoicquotesapi.com/v1/api/quotes/random")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    const { body, author } = data;
    // console.log(body);
    // console.log(author);
    document.getElementById("body-quote").textContent = body;
    document.getElementById("author").textContent = author;
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
