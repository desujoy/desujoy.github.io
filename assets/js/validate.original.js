function savedata()  {
    if (document.getElementById('name').value != "" && document.getElementById('email').value != "" && document.getElementById('subject').value != "" && document.getElementById('message').value != "") {
        let thisForm = document.getElementById('contact-form');
        let formData = new FormData( thisForm );
        let formDataObject = Object.fromEntries(formData.entries());
        let formDataJson = JSON.stringify(formDataObject);
        fetch('https://eo3q757ytln6jze.m.pipedream.net', {
            method: 'POST',
            body: formDataJson,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .catch(() => {
            document.getElementsByClassName('output')[0].style.display = "none";
            document.getElementsByClassName('error-message')[0].innerHTML = "Something went wrong!";
            document.getElementsByClassName('error-message')[0].style.display = "block";

        })
        .then(() => {
            document.getElementsByClassName('error-message')[0].style.display = "none";
            document.getElementsByClassName('output')[0].innerHTML = "Thank you for your message!";
            document.getElementsByClassName('output')[0].style.display = "block";
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
        })
        

    } else {
        document.getElementsByClassName('output')[0].style.display = "none";
        document.getElementsByClassName('error-message')[0].innerHTML = "Please fill out all fields!";
        document.getElementsByClassName('error-message')[0].style.display = "block";
    }

}
 