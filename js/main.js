// importing functions from dataminer

import {fetchData, postData} from "./components/DataMiner.js";

(()=> {

	console.log('This shit is dog shit lets not eat it');

	fetchData("./includes/functions.php").catch(err => {console.log(err);});

})();
