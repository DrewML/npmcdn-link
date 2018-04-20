const packageHeader = document.querySelector('main h1');
const packageName = packageHeader.textContent;
const cdnUri = `https://unpkg.com/${packageName}/`;

packageHeader.insertAdjacentHTML('afterend', `<p><a href="${cdnUri}">View on unpkg</a></p>`);
