/**
* Global variable exposed by the WiiU. Used to interact with generic WiiU console methods
*/
wiiuBrowser;


/**
* Ends the startup screen and displays the eShop UI
* @function
* @memberof wiiuBrowser
* @param {Boolean} endStartup
*/
wiiuBrowser.endStartUp();


/**
* Checks if the gamepad home button is locked
* @function
* @memberof wiiuBrowser
* @returns {Boolean} Locked status
*/
wiiuBrowser.isHomeButtonMenuLocked();


/**
* Enables/disables the WiiU gamepad home button
* @function
* @memberof wiiuBrowser
* @param {Boolean} Lock
*/
wiiuBrowser.lockHomeButtonMenu();


/**
* Checks if the console power button is locked
* @function
* @memberof wiiuBrowser
* @returns {Boolean} Locked status
*/
wiiuBrowser.isPowerButtonLocked();


/**
* Enables/disables the WiiU power button
* @function
* @memberof wiiuBrowser
* @param {Boolean} Lock
*/
wiiuBrowser.lockPowerButton();


/**
* Checks if user interaction is locked
* @function
* @memberof wiiuBrowser
* @returns {Boolean} Locked status
*/
wiiuBrowser.isUserOperationLocked();


/**
* Enables/disables user interaction
* @function
* @memberof wiiuBrowser
* @param {Boolean} Lock
*/
wiiuBrowser.lockUserOperation();


/**
* Jumps to the console data managment page
* @function
* @memberof wiiuBrowser
*/
wiiuBrowser.jumpToDataManage();jumpToUpdate


/**
* Jumps to the console system update page
* @function
* @memberof wiiuBrowser
*/
wiiuBrowser.jumpToUpdate();


/**
* Opens WiiU home menu
* @function
* @memberof wiiuBrowser
*/
wiiuBrowser.jumpToHomeButtonMenu();


/**
* Launch Miiverse. Requires a string argument, assume title ID
* @function
* @memberof wiiuBrowser
* @param {String} TitleID
*/
wiiuBrowser.jumpToMiiverse();


/**
* Opens WiiU browser and opens the provided URL in a new tab
* @function
* @memberof wiiuBrowser
* @param {String} url
*/
wiiuBrowser.jumpToBrowser();


/**
* Closes eShop and returns to the title which opened it
* @function
* @memberof wiiuBrowser
*/
wiiuBrowser.returnToCaller();


/**
* Checks if the browser can call history.back()
* @function
* @memberof wiiuBrowser
* @returns {Boolean}
*/
wiiuBrowser.canHistoryBack();


/**
* Shows/hides loading icon
* @function
* @memberof wiiuBrowser
* @param {Boolean} ShowIcon
*/
wiiuBrowser.showLoadingIcon();


/**
* Checks if the loading icon can be displayed
* @function
* @memberof wiiuBrowser
* @returns {Boolean}
*/
wiiuBrowser.isLoadingIconProhibited();


/**
* Prohibit/allow the loading icon
* @function
* @memberof wiiuBrowser
* @param {Boolean} prohibit
*/
wiiuBrowser.prohibitLoadingIcon();


/**
* Set message language
* @function
* @memberof wiiuBrowser
* @param {String} language
*/
wiiuBrowser.setMessageLanguage();


/**
* Closes eShop
* @function
* @memberof wiiuBrowser
*/
wiiuBrowser.closeApplication();