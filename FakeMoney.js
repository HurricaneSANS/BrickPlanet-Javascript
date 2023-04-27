// ==UserScript==
// @name         Infinite Money BrickPlanet (Fake)
// @version      1
// @description  Fakes any amount of money on brickplanet. Use for good. Don't scam!!
// @match        https://www.brickplanet.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const creditsElement = document.querySelector('a.nav-link.text-credits[href*="/money/wallet/"]');

    creditsElement.setAttribute('title', '2.9M Credits');
    creditsElement.innerHTML = '<i class="fas fa-money-bill-1-wave me-2 text-lg lh-1"></i>2.9M';
})();
