$(function () {
    $('#login').click(function (e) {
        var term = $('#emaillogin').val();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + term,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
                "X-RapidAPI-Key": "4a155c0277msh02f0ae8f597e760p1a20fdjsn414cc008ce9b"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        // var valid = this.form.checkValidity();

        // if(valid){
        //     var email = $('#emaillogin').val();
        //     var password = $('#passwordlogin').val();
        // }
        // e.preventDefault();

        // $.ajax({
        //     type: 'POST',
        //     url: 'jslogin.php',
        //     data: {email: email, password: password},
        //     success:function(data){
        //         if(data=="Welcome to PKTS Tournament Hub"){
        //             Swal.fire({
        //                 'title': 'Success!',
        //                 'text': data,
        //                 'type': 'success',
        //                 showConfirmButton: false
        //             })
        //                 setTimeout('window.location.href="../../index.php"',2000);
        //         }
        //         else{
        //             Swal.fire({
        //                 'title': 'Ooops!',
        //                 'text': data,
        //                 'type': 'error',
        //                 showConfirmButton: true
        //             })
        //         }


        //     },
        //     error: function(data){
        //         alert('there were errors while doing the operation');
        //     }

        // });
    });
});