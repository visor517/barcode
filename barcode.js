function renderBarcode(input) {
    var elem = document.getElementById('barcode');
    var canvas = document.createElement('canvas');
    
    elem.innerHTML = '';
    elem.appendChild(canvas);

    // полоски с краев
    var context = canvas.getContext("2d");
    context.fillStyle = "black";
    [0,9,18,278,287,296].forEach(x => {
        context.fillRect(x, 0, 4, 96);
    });
    context.fillStyle = "white";
    [4,13,282,291].forEach(x => {
        context.fillRect(x, 0, 5, 96);
    });

    // формирование строки (отрезаем и дополняем символы согласно условиям)
    var code_str = input.code.toString();
    while (code_str.length < 3) code_str = '0'+code_str;
    while (input.message.length < 34) input.message += ' ';
    if (input.message.length > 34) input.message = input.message.substr(0,34); 

    var str = input.id + code_str + input.message;
    var str_arr = [];
    var sum = 0;

    for (let i = 0; i < str.length; i++) {
        let item = str[i].charCodeAt();
        let item_8byt = item.toString(2);
        sum ^= item;
        str_arr.push(item_8byt);
    }
    str_arr.push(sum.toString(2));

    for (let i=0; i<str_arr.length; i++) {
        let byt = str_arr[i].toString();
        while (byt.length < 8) byt = '0' + byt;
        str_arr[i] = byt;
    }

    var barcode = str_arr.join('');

    // рисуем баркод
    var i = 0;
    for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 32; x++) {
            context.fillStyle = (barcode[i] == 0) ? "white" : "black";
            context.fillRect(22+8*x, 8*y, 8, 8);
            i++;
        }
    }
}