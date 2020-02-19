window.onload = function()
{

    const myForm = document.querySelector('#my-form-index');
    const emailImput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e)
    {
        e.preventDefault();

        if(emailImput.value === '')
        {
            msg.classList.add('error');
            msg.innerHTML = 'Introduceti adresa de e-mail!';
            msg.style.display = "block";
            msg.style.margin = "auto";
            setTimeout(() => msg.style.display = 'none', 3000);
        }
        else
        {
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