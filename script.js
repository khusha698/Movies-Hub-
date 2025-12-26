function searchMovie() {
  const query = document.getElementById("search").value.trim();

  if (!query) {
    alert("Please enter a name");
    return;
  }

  const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}+watch+online+official`;

  document.getElementById("result").innerHTML = `
    <p>Redirecting you to official platforms...</p>
    <a href="${searchURL}" target="_blank">Click here if not redirected</a>
  `;

  window.open(searchURL, "_blank");
}
