document.querySelector("#play").onclick = function () {

    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gottabs)

    function gottabs(tabs) {


        let enable = {

            start: true,



        }




        chrome.tabs.sendMessage(tabs[0].id, enable)
    }

}