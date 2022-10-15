chrome.runtime.onMessage.addListener(gotMessage)




function gotMessage(message, sender, sendresponse) {
    if (message.start == true) {

        let mk = document.querySelectorAll('.section--section--BukKG')


        for (let k = 0; k < mk.length; k++) {
            if (mk[k].querySelector("span").getAttribute('data-checked') != "checked") {

                mk[k].querySelector('.udlite-accordion-panel-toggler').click();
            }
        }
        setTimeout(function () {
            let la = document.querySelectorAll('.udlite-real-toggle-input')

            for (let i = 0; i < la.length; i++) {
                if (la[i].hasAttribute('checked') != true) {


                    la[i].click();
                }
            }


        }, 2000)
    }

}