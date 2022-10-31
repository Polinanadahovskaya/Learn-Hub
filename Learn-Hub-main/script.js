const singInBtn = document.querySelector('.singin-button');
const singUpBtn = document.querySelector('.singup-button');
const formBox = document.querySelector('.form-box');
const body = document.body;

singUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
});

singInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});


/*function exportF() {
    document.getElementById("input").innerHTML = document.getElementsByClassName("form__input").value;
    let table = document.getElementById("table");
    let html = table.outerHTML;
    let url = 'data:application/vnd.ms-excel,' + encodeURI(html); 
    var link = document.getElementById("downloadLink");
    link.setAttribute("href", url);
    link.setAttribute("download", "export.xls");
    link.click(); 
    return false;
  }*/

  