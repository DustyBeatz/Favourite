// importing functions from dataminer

import {fetchData} from "./modules/DataMiner.js";

(()=> {
	console.log('loaded')

	function errorBox(message) {
		alert("Something just isn't right!");
	}

	function handleFavData(data){

	let favdata = JSON.stringify(data),
		favImgDisplay = document.querySelector("#favImg"),
		favImgDesc = document.querySelector("#imgBoxTitle"),
		favDescDisplay = document.querySelector("#imageDesc");

		favImgDisplay.src = `./images/${favdata.img}`;
		debugger;
		favImgDesc.textContent = favdata.descript;
		debugger;
		favDescDisplay.textContent = favdata.title;
		debugger;
	}

	function retrieveFavInfo() {

		if(!event.target.id) {return}
		console.log(event.target.id);

		fetchData(`./includes/index.php?id=${event.target.id}`).then(data => handleFavData(data)).catch(err => console.log(err));
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
		iconSection.addEventListener("click", retrieveFavInfo, handleFavData);

	}




    fetchData("./includes/index.php").then(data => loadFavThumbs(data)).catch(err => { console.log(err); errorBox(err); });
})();
