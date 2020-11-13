// importing functions from dataminer

import {fetchData} from "./modules/DataMiner.js";

(()=> {
	console.log('loaded')

	function errorBox(message) {
		alert("Something just isn't right!");
	}


	function loadFavThumbs(thumbsFav) {
		let iconSection = document.querySelector(".iconBox-section"),
		iconTemplate = document.querySelector("#favTemplate").content;

		for (let iconbox in thumbsFav ) {

			let currentIcon = iconTemplate.cloneNode(true),
			currentIconText = currentIcon.querySelector('.iconBox').children;

			currentIconText[1].src = `images/${thumbsFav[iconbox].icon}`;
			currentIconText[1].id = thumbsFav[iconbox].id;

			iconSection.appendChild(currentIcon);
		}

	}




    fetchData("./includes/index.php").then(data => loadFavThumbs(data)).catch(err => { console.log(err); errorBox(err); });
})();
