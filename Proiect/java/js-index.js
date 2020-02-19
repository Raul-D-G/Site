window.onload = function () 
{
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg1');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () 
    {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var img = this.document.getElementById("myImg2");
    img.onclick = function () 
    {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var img = this.document.getElementById("myImg3");
    img.onclick = function () 
    {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () 
    {
        modal.style.display = "none";
    }


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

