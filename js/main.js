function addQuote(event){
    event.preventDefault();
    const qn = this.elements['qn'].value;
    const name = this.elements['name'].value;
    const hours = this.elemetns['hours'].value;
    const pictureData = new FormData();
    pictureData.append("files", image);


    const quoteData = {
        quoteNumber: qn,
        name: name,
        hours: hours
    }
}

window.onload = function(){
    let form = document.getElementById('quoteform');
    form.onsubmit = addQuote;
}