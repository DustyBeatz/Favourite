// importing functions from dataminer

import {fetchData, postData} from ".components/DataMiner.js";

(()=> {

	fetchData("./includes/functions.php").catch(err => {console.log(err);});

})();
