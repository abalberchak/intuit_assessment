$(document).ready(function () {
	var url = 'https://www.reddit.com/subreddits/search.json?q=reactjs';
		$.get(url, function (data) {
			for (var i = 0; i < data.data.children.length; i++) {
			console.log(data.data.children[i].data);
			if (i === 0) {
				$('.info').append("<tr><th>Title</th><th>Number of Subscribers</th><th>Public Description</th></tr>")
			}
			// $('.info').append("<tr><td>" + data.data.children[i].data.title + "</td><td>" + data.data.children[i].data.subscribers + "</td><td>" + data.data.children[i].data.public_description + "</td></tr>");
			$('.info').append("<tr><td>" + data.data.children[i].data.title + "</td><td>" + data.data.children[i].data.subscribers + "</td><td>" + data.data.children[i].data.public_description + "</td></tr>");

			}
		}, 'json');

});