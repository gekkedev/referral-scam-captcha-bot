// ==UserScript==
// @name         Eqmoney / Eoqmoney Captcha Exploit
// @namespace    https://github.com/gekkedev/referral-scam-captcha-bot
// @version      0.1
// @description  Assists you in revealing the website's true face!
// @author       gekkedev
// @match        *://*.eqmoney.xyz/showadv.php*
// @match        *://*.eoqmoney.xyz/showadv.php*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/gekkedev/referral-scam-captcha-bot/master/captchabot.user.js
// @downloadURL  https://raw.githubusercontent.com/gekkedev/referral-scam-captcha-bot/master/captchabot.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const J = jQuery.noConflict(true);

    let getNum = i => {
        let path = J("form>div>table>tbody>tr>td>div>img")[i].src;
        return path.substr(path.indexOf(".png") - 1, 1)
    }

    let worker = () => {
        setInterval(() => {
            J("input[name*='capcha']").val(getNum(0) + getNum(1) + getNum(2))
        }, 50)
    }
    worker()
})();
