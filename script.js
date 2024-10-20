async function shortenLink(service) {
  const url = document.getElementById('url').value;
  let apiUrl;
  if (service === 'dagd') {
    apiUrl = `https://da.gd/s?url=${encodeURIComponent(url)}`;
  } else if (service === 'isgd') {
    apiUrl = `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`;
  }
  
  try {
    const response = await fetch(apiUrl);
    const shortenedUrl = await response.text();
    document.getElementById('shortenedUrl').innerHTML = `<a href="${shortenedUrl}" target="_blank" class="underline">${shortenedUrl}</a>`;
  } catch (error) {
    document.getElementById('shortenedUrl').textContent = 'Error shortening the URL.';
  }
}
