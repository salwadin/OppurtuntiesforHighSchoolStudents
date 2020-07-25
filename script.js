var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');
addToWishList.addEventListener('submit', function (event) {
	event.preventDefault();
	if (wishlistItem.value.length < 1) return;
	wishlist.innerHTML += '<li>' + wishlistItem.value + '</li>';
	wishlistItem.value = '';
	localStorage.setItem('wishlistItems', wishlist.innerHTML);
}, false);
 saved = localStorage.getItem('wishlistItems');
if (saved) {
	wishlist.innerHTML = saved;
}
document.addEventListener('click', function (event) {
	if (event.target.id === 'wishlist-remove-all') {
		wishlist.innerHTML = '';
		localStorage.removeItem('wishlistItems');
	}
	var item = event.target.closest('#wishlist input');
	if (item) {
		// if (item.checked) {
		// 	item.parentNode.className = 'completed';
		// 	item.setAttribute('checked', 'checked');
		// } else {
		// 	item.parentNode.className = '';
		// 	item.removeAttribute('checked');
		// }
		console.log(wishlist.innerHTML);
		localStorage.setItem('wishlistItems', wishlist.innerHTML);
	}
