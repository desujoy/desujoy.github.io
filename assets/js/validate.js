function savedata()  {
    if (document.getElementById('name').value != "" || document.getElementById('email').value != "" || document.getElementById('subject').value != "" || document.getElementById('message').value != "") {
        let thisForm = document.getElementById('contact-form');
        let formData = new FormData( thisForm );
        let formDataObject = Object.fromEntries(formData.entries());
        let formDataJson = JSON.stringify(formDataObject);
        console.log(formDataJson);
        fetch('https://eo3q757ytln6jze.m.pipedream.net', {
            method: 'POST',
            body: formDataJson,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        alert("Thank you for your message!")
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        

    } else {
        alert("Please fill out all fields!")
    }

}
 