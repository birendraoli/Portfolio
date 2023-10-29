function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;
    let sub = document.getElementById("subject").value;

    let body = "name: " + name + "<br/> email: " + email + "<br/> phone: " + phone + "<br/> message: " + msg;
    
    console.log(body);


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dev.birendraoli@gmail.com",
        Password : "6E6532B345E74AAA84DE81E415543BF3B425",
        To : 'dev.birendraoli@gmail.com',
        From : "dev.birendraoli@gmail.com",
        Subject : sub,
        Body : body
    }).then(
      message =>{
        if(message = 'Ok'){
            swal("Success!", "Your message is successfully sent!", "success");
        }else{
            swal("Something Wrong", "Your message is not sent!", "error");
        }
      }
    );
}







// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Replace 'YOUR_EMAILJS_USER_ID' and 'YOUR_EMAILJS_TEMPLATE_ID' with your own values
//     emailjs.init('dev.birendraoli@gmail.com');

//     emailjs.send('service_mdnpsbp', 'Ytemplate_wopraft', {
//         name: name,
//         email: email,
//         message: message
//     })
//     .then(function(response) {
//         document.getElementById('response').textContent = 'Message sent successfully!';
//         clearForm();
//     }, function(error) {
//         document.getElementById('response').textContent = 'Failed to send message.';
//     });
// });

// function clearForm() {
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('message').value = '';
// }
