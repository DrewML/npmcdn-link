const packageName = document.querySelector('.package-name a').textContent;
const lastListItem = document.querySelector('.sidebar .box li:last-child');
const cdnUri = `https://npmcdn.com/${packageName}/`;

lastListItem.insertAdjacentHTML('afterend', `<li><a href="${cdnUri}">View Code</a></li>`);
