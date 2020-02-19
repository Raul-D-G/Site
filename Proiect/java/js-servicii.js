window.onload = function () {
    const myForm1 = document.querySelector('.quote');
    const nameImpute = document.querySelectorAll('#nume')[0];
    const emailImput1 = document.querySelector('#mail');
    const msg1 = document.querySelector('#mesg');




    myForm1.addEventListener('submit', onSubmit1);

    function onSubmit1(event) {
        event.preventDefault();

        var formData = JSON.stringify($("#myF").serializeArray());
        

        const oth ={
            headers:{
                "content-type" : "aplication/json; charset = UTF-8"
            },
            body:formData,
            method:"POST"
        };

        fetch("http://localhost:7000/", oth)
        .then(data=>{return data.json()})
        .then(res=>{console.log(res)})
        .catch(error=>console.log(error))



        // $.ajax({
        //     type: "POST",
        //     url: "http://localhost:3000/",
        //     data: formData,
        //     success: function () { console.log('ss');},
        //     dataType: "jsonp",
        //     contentType: "application/json"
        // });

    }


























    // var article = document.querySelector('#main-col');
    // var ul = document.querySelector('#servicii');


    // ul.addEventListener("click", prog);
    // function prog(event) {
    //     alert(this.children[0].textContent);
    //     if (document.getElementById("check").checked) {
    //         event.stopPropagation();
    //     }
    // }

    // article.addEventListener("click", prog,true);
    // function prog1() {
    //     alert(this.children[0].textContent);
    // }




    const myForm = document.querySelector('#my-form-index');
    const emailImput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');


    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();

        if (emailImput.value === '') {
            msg.classList.add('error');
            msg.innerHTML = 'Introduceti adresa de e-mail!';
            msg.style.display = "block";
            msg.style.margin = "auto";
            setTimeout(() => msg.style.display = 'none', 3000);
        }
        else {
            const li = document.createElement('li');

            li.appendChild(document.createTextNode(`${emailImput.value}`));

            userList.appendChild(li);
            emailImput.value = '';
        }
    }





    var d = new Date();
    var n = d.getFullYear();

    var footer = document.querySelector('#footer');
    var p = footer.children[0].textContent;
    var np = p + n;

    footer.children[0].innerHTML = np;

}