/**
* Global variable exposed by the WiiU. Used to interact with ECommerce and title related methods
*/
wiiuEC;

/**
* Starts the title download and installation task in the background
* @function
* @memberof wiiuEC
* @param {String} TitleID The Title ID of the title
* @param {String} Version The version of the title
*
* @example
* // Download and install YouTube version 0
* wiiuEC.registerTitleDownloadTask('0005000010105700', '0');
*/
wiiuEC.registerTitleDownloadTask();


/**
* Requests a title ticket for the console
* @function
* @memberof wiiuEC
* @param {String} TicketID The ID for the ticket being requested
*
* @example
* // Request ticket for YouTube for specific console
* wiiuEC.ticketDownloadSync('1599213916864029');
*/
wiiuEC.ticketDownloadSync();


/**
* Checks if the system requires an update
* @function
* @memberof wiiuEC
* @return {{ update: Boolean }} Pending update status
*
* @example
* const needsUpdate = wiiuEC.needsSystemUpdate();
* alert(needsUpdate.update); // true/false
*/
wiiuEC.needsSystemUpdate();


/**
* Checks if the system requires an update using the cache
* @function
* @memberof wiiuEC
* @returns {{ update: Boolean }} Pending update status
*
* @example
* const needsUpdate = wiiuEC.needsSystemUpdateUsingCache();
* alert(needsUpdate.update); // true/false
*/
wiiuEC.needsSystemUpdateUsingCache();


/**
* Returns the devices country setting
* @function
* @memberof wiiuEC
* @returns {{ country: String }} Devices current country
*
* @example
* const deviceCountry = wiiuEC.getDeviceCountry();
* alert(deviceCountry.country);
*/
wiiuEC.getDeviceCountry();


/**
* Returns the download task state for a given title
* @function
* @memberof wiiuEC
* @param {String} TitleID The Title ID of the title
* @returns {{ registered: Boolean, titleVersion: Number }}
*
* @example
* const taskState = wiiuEC.getDownloadTaskState();
* const registered = taskState.registered;
* const titleVersion = taskState.titleVersion;
*
* alert(registered, titleVersion);
*/
wiiuEC.getDownloadTaskState();


/**
* Returns an empty object. Unknown use
* @function
* @memberof wiiuEC
* @returns {Object} Empty object
*/
wiiuEC.getDownloadTaskStateForDebug();


/**
* Requests https://ecs.wup.shop.nintendo.net/ecs/services/ECommerceSOAP with action GetStandbyMode<br>
* Returns SOAP server standby mode status
* @function
* @memberof wiiuEC
* @returns {{ isStandby: Boolean }}
*/
wiiuEC.getECommerceInfraStatus();