let getSel = sel => document.querySelector(sel);
getSel('.main').style.minHeight = (this.window.innerHeight - 80) + 'px';
getSel('.textEdit').style.minHeight = (this.window.innerHeight - 80) + 'px';
getSel('#textarea1').style.height = (this.window.innerHeight - 87) + 'px';

//Bold
let bold = false;
getSel('#bold').onclick = function () {
    if (bold) {
        getSel('.main').style.fontWeight = 'normal';
        getSel('#bold').classList.remove('active');
        bold = false;
    } else {
        getSel('.main').style.fontWeight = 'bold';
        getSel('#bold').classList.add('active');
        bold = true;
    }
}
//Italic
let italic = false;
getSel('#italic').onclick = function () {
    if (italic) {
        getSel('.main').style.fontStyle = 'normal';
        getSel('#italic').classList.remove('active');
        italic = false;
    } else {
        getSel('.main').style.fontStyle = 'italic';
        getSel('#italic').classList.add('active');
        italic = true;
    }
}

//UnderLine
let underLine = false;
getSel('#underLine').onclick = function () {
    if (underLine) {
        if (strikeThrough) {
            getSel('.main').style.textDecoration = 'line-through';
        } else getSel('.main').style.textDecoration = 'none';
        getSel('#underLine').classList.remove('active');
        underLine = false;
    } else {
        if (strikeThrough) {
            getSel('.main').style.textDecoration = 'underline line-through';
        } else getSel('.main').style.textDecoration = 'underline';
        getSel('#underLine').classList.add('active');
        underLine = true;
    }
}

//strikeThrough
let strikeThrough = false;
getSel('#strikeThrough').onclick = function () {
    if (strikeThrough) {
        if (underLine) {
            getSel('.main').style.textDecoration = 'underline';
        } else getSel('.main').style.textDecoration = 'none';
        getSel('#strikeThrough').classList.remove('active');
        strikeThrough = false;
    } else {
        if (underLine) {
            getSel('.main').style.textDecoration = 'underline line-through';
        } else getSel('.main').style.textDecoration = 'line-through';
        getSel('#strikeThrough').classList.add('active');
        strikeThrough = true;
    }
}

//alignLeft
getSel('#alignLeft').onclick = function () {
    getSel('.main').style.textAlign = 'left';
}

//alignCenter
getSel('#alignCenter').onclick = function () {
    getSel('.main').style.textAlign = 'center';
}

//alignRight
getSel('#alignRight').onclick = function () {
    getSel('.main').style.textAlign = 'right';
}

//fontFamily
let fontLength = getSel('#font').children.length;
for (let i = 0; i < fontLength; i++) {
    getSel('#font').children[i].onclick = function () {
        getSel('.main').style.fontFamily = getSel('#font').children[i].id;
        for (let i = 0; i < fontLength; i++) {
            getSel('#font').children[i].classList.remove('active');
        }
        getSel('#font').children[i].classList.add('active');
    }
}

//fontSize
let fontSizeLenght = getSel('#fontSize').children.length;
for (let i = 0; i < fontSizeLenght; i++) {
    getSel('#fontSize').children[i].onclick = function () {
        getSel('.main').style.fontSize = getSel('#fontSize').children[i].innerText;
        for (let i = 0; i < fontSizeLenght; i++) {
            getSel('#fontSize').children[i].classList.remove('active');
        }
        getSel('#fontSize').children[i].classList.add('active');
    }
}

//modal font-color palette
let modalColor = getSel('#modal').children.length;
for (let i = 0; i < modalColor; i++) {
    getSel('#modal').children[i].onclick = function () {
        getSel('.main').style.color = getSel('#modal').children[i].getAttribute('color');
    }
}

//modal background-color palette
let modalBackgroundColor = getSel('#backgroundColors').children.length;
for (let i = 0; i < modalBackgroundColor; i++) {
    getSel('#backgroundColors').children[i].onclick = function () {
        getSel('.main').style.backgroundImage = `url()`;
        getSel('.main').style.backgroundColor = getSel('#backgroundColors').children[i].getAttribute('color');
    }
}
//nav background Images
getSel('#navImages').onclick = function () {
    getSel('#navImages').classList.add('active');
    getSel('#navColors').classList.remove('active');
    getSel('#navFiles').classList.remove('active');
    getSel('#backgroundColors').style.display = 'none';
    getSel('#backgroundFiles').style.display = 'none';
    getSel('#backgroundImages').style.display = 'flex';
    getSel('#backgroundImages').style.flexWrap = 'wrap';
    getSel('#backgroundImages').style.justifyContent = 'center';
    let length = document.querySelectorAll('.bImages').length;
    for (let i = 0; i < length; i++) {
        document.querySelectorAll('.bImages')[i].style.display = 'block';
        document.querySelectorAll('.bImages')[i].onclick = function () {
            getSel('.main').style.backgroundImage = `url(${document.querySelectorAll('.bImages')[i].getAttribute('bImage1')})`;
        }
    }
}

//nav background Colors
getSel('#navColors').onclick = function () {
    getSel('#navImages').classList.remove('active');
    getSel('#navColors').classList.add('active');
    getSel('#navFiles').classList.remove('active');
    getSel('#backgroundColors').style.display = 'flex';
    getSel('#backgroundFiles').style.display = 'none';
    getSel('#backgroundImages').style.display = 'none';
}

//nav background Files Images
getSel('#navFiles').onclick = function () {
    getSel('#navImages').classList.remove('active');
    getSel('#navColors').classList.remove('active');
    getSel('#navFiles').classList.add('active');
    getSel('#backgroundColors').style.display = 'none';
    getSel('#backgroundFiles').style.display = 'block';
    getSel('#backgroundImages').style.display = 'none';
}
//background Files 
getSel('#file').addEventListener('change', function (e) {
    console.log(e);
    let image = e.target.files[0]
    let url = URL.createObjectURL(image);
    getSel('.main').style.backgroundImage = `url(${url})`;

});

//Lock
getSel('#showModalLock').onclick = function () {
    getSel('#modalLock').style.display = 'block';
    document.body.style.background = 'rgba(17, 17, 17,0.3)';
    getSel('.main').style.opacity = '0.5';
    getSel('#modalLock').style.display = 'block';

}
//modal Lock close
getSel('#signBtn').onclick = function () {
    let login = getSel('#signLogin').value;
    let pass = getSel('#signPass').value;
    if (login == 'admin' && pass == 'admin') {
        getSel('#modalLock').style.display = 'none';
        document.body.style.background = '';
        getSel('.main').style.opacity = '1';
    }
}

//edit Code
getSel('#code').onclick = function () {
    getSel('#textarea1').value = getSel('.main').innerHTML;
    getSel('.main').style.display = 'none';
    getSel('.textEdit').style.display = 'block';
    getSel('.header').style.display = 'none';
    getSel('.headerEdit').style.display = 'block';
}


//button save click
getSel('#btnSave').onclick = function () {
    getSel('.main').innerHTML = getSel('#textarea1').value;
    getSel('.main').style.display = 'block';
    getSel('.textEdit').style.display = 'none';
    getSel('.header').style.display = 'block';
    getSel('.headerEdit').style.display = 'none';

}

//button create table
getSel('#createTable').onclick = function () {
    let valid = true;
    let f1 = document.forms['f1'].elements;
    for (let i = 0; i < document.forms['f1'].elements.length; i++) {
        if (f1[i].nodeName === "INPUT" && f1[i].type === "text") {
            if (validation(f1[i].id) == false) valid = false;
        }
    }
    let countTr = getSel('#countTr').value;
    let countTd = getSel('#countTd').value;
    let heightTd = getSel('#heightTd').value;
    let widthTd = getSel('#widthTd').value;
    let borderWidth = getSel('#borderWidth').value;
    if (valid == false) {
        alert('Перевірте правильність заповнення полів.\nНе залишайте їх пустими та вводьте лише цифри!');
    } else {
        let table = '<table>';
        let borderStyle = 'border:' + parseFloat(Math.abs(borderWidth)) + 'px ' + getSel('#borderType').value + ' ' + getSel('#borderColor').value + ';';
        let tdStyle = 'style="width:' + parseFloat(Math.abs(widthTd)) + 'px; height:' + parseFloat(Math.abs(heightTd)) + 'px; ' + borderStyle + '"';
        for (let i = 0; i < parseInt(Math.abs(countTr)); i++) {
            table += '<tr>';
            for (let j = 0; j < parseInt(Math.abs(countTd)); j++) {
                table = table += '<td ' + tdStyle + '>TD</td>';
            }
            table += '</tr>';
        }
        table += '</table>';
        getSel('#textarea1').value += table;
    }
}

//validation
function validation(id) {
    let val = getSel(`#${id}`).value;
    if (val == '' || isFinite(val) == false) {
        getSel(`#${id}`).classList.add('not-valid');
        return false;
    } else {
        getSel(`#${id}`).classList.remove('not-valid');
        return true;
    };
}

//button reset form table
getSel('#resetTable').onclick = function () {
    document.forms['f1'].reset();
    for (let i = 0; i < document.forms['f1'].elements.length; i++) {
        document.forms['f1'].elements[i].classList.remove('not-valid');
    }
}
//list Ol
getSel('#createListOl').onclick = function () {
    if (validation('countLi') == false) {
        alert('Перевірте правильність заповнення полів.\nНе залишайте їх пустими та вводьте лише цифри!');
    } else {
        let list = '<ol style="list-style-type:' + getSel('#typeMarks').value + '">';
        let countLi = Math.abs(getSel('#countLi').value);
        for (let i = 1; i <= parseInt(countLi); i++) {
            list += '<li> item ' + i + '</li>';
        }
        list += '</ol>';
        getSel('#textarea1').value += list;

    }
}

//button reset List Ol
getSel('#resetOl').onclick = function () {
    document.forms['f2'].reset();
    getSel('#countLi').classList.remove('not-valid');
}
//list Ul
getSel('#createListUl').onclick = function () {
    if (validation('countUlLi') == false) {
        alert('Перевірте правильність заповнення полів.\nНе залишайте їх пустими та вводьте лише цифри!');
    }
    else {
        let list = '<ol style="list-style-type:' + getSel('#typeMarksUl').value + '">';
        let countUlLi = Math.abs(getSel('#countUlLi').value);
        for (let i = 1; i <= parseInt(countUlLi); i++) {
            list += '<li> item ' + i + '</li>';
        }
        list += '</ol>';
        getSel('#textarea1').value += list;

    }
}

//button reset List Ul
getSel('#resetUl').onclick = function () {
    document.forms['f3'].reset();
    getSel('#countUlLi').classList.remove('not-valid');
}

