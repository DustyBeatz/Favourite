// importing functions from dataminer

import {fetchData} from "./modules/DataMiner.js";

(()=> {
	console.log('loaded')

	function errorBox(message) {
		alert("Something just isn't right!");
	}

	function handleFavData(favdata){ //displays data associated with the chosen icon id

	let 
		favImgDisplay = document.querySelector("#favImg"),
		favImgDesc = document.querySelector("#imgBoxTitle"),
		favDescDisplay = document.querySelector("#imageDesc");
		// debugger;

		favImgDisplay.src = `./images/${favdata[0].img}`;
		console.log(favdata.img);
		// debugger;
		favImgDesc.textContent = favdata[0].descript;
		// debugger;
		favDescDisplay.textContent = favdata[0].title;
		// debugger;
	}

	function retrieveFavInfo() { //fetches the data with the asscoated id and sends it to handlefavdata

		if(!event.target.id) {return}
		console.log(event.target.id);
		// debugger;

		fetchData(`./includes/index.php?id=${event.target.id}`).then(favdata => handleFavData(favdata)).catch(err => errorBox(err));
	}


	function loadFavThumbs(thumbsFav) {
		let iconSection = document.querySelector(".iconBox-section"),
		iconTemplate = document.querySelector("#favTemplate").content;
		// debugger;

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
