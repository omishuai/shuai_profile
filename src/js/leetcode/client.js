// Get the modal

function start() {
    const modal = document.getElementById("myModal");
// When the user clicks on the button, open the modal
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
function dismiss(){
    const modal = document.getElementById("myModal");
  modal.style.display = "none"
}

function dismissReader () {
    const modal = document.getElementById("myReadModal");
    modal.style.display = "none";
}

// // ARRAY FOR HEADER.
// var arrHead = new Array();
      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() {
    console.log('Creating table now....')
    const arrHead = ['#', 'post_name', 'created_on', 'edit'];
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'postTable');            // SET THE TABLE ID.
    empTable.style.width = "100%"
    var tr = empTable.insertRow(0);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    console.log(empTable)

        fetch('/getPosts').then((response)=>{
            response.json().then((data)=>{
                console.log(data.posts)
            data.posts.forEach(element => {
                addRow(element)
            });
            })
        })

    var div = document.getElementById('container');
    div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    console.log(empTable)
}

function savePost() {
    var post_name = document.getElementsByClassName("modal-title")[0].value 
    var post_body = document.getElementsByClassName("modal-body")[0].value 
    console.log('saving....', post_name)
  
    console.log({post_name, post_body})
    fetch('/storePost', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({post_name, post_body})
      }).then((response)=>{ 
          response.json().then((data)=>{
            console.log('Success:', data.data[0], typeof(data.data[0]));
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        
            addRow(data.data[0])
        })
    })    
      .catch((error) => {
        console.error('Error:', error);
        })

    //   response.json().then((data)=>{
    //     console.log(data.posts)
    // data.posts.forEach(element => {
    //     addRow(element)
    // });
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     const modal = document.getElementById("myModal");
    //     modal.style.display = "none";
    
    //     addRow(data.data)
    //   })

 
    

}
function openText(title, body) {
    const modal = document.getElementById("myReadModal");
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    console.log(title, body)
    document.getElementById('reader-modal-title').innerHTML= title
    document.getElementById('reader-modal-body').innerHTML =  body

}

// ADD A NEW ROW TO THE TABLE.s
function addRow({post_id: number, post_name: title, post_body: body, post_time: date}) {
    var table = document.getElementById('postTable');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3)

    row.style.padding = "15px";
    cell1.innerHTML = number
    cell2.innerHTML = `<div id="postText" onClick="openText('${title}', '${body}')">${title}</div>`
    cell3.innerHTML = `${date}`
    cell4.innerHTML = '<input type="button" value = "edit" onclick="editText()">'

    // txt.style = {
    //     'border-bottom': '1px red solid'
    // }
    // var btn = document.createElement('input');
    // btn.type = "button";
    // btn.className = "delete";
    // btn.value = "delete";
    // button.setAttribute('onclick', 'removeRow(this)');

    // for (var c = 0; c < arrHead.length; c++) {
    //     var td = document.createElement('td');          // TABLE DEFINITION.
    //     td = tr.insertCell(c);

    //     if (c == 0) {           // FIRST COLUMN.


    //         // // ADD A BUTTON.
    //         // var button = document.createElement('input');

    //         // // SET INPUT ATTRIBUTE.
    //         // button.setAttribute('type', 'button');
    //         // button.setAttribute('value', 'Remove');

    //         // // ADD THE BUTTON's 'onclick' EVENT.
    //         // button.setAttribute('onclick', 'removeRow(this)');

    //         // td.appendChild(button);
    //     }
    //     else {
    //         // CREATE AND ADD TEXTBOX IN EACH CELL.
    //         var ele = document.createElement('input');
    //         ele.setAttribute('type', 'text');
    //         ele.setAttribute('value', '');

    //         td.appendChild(ele);
    //     }
    // }
}

// DELETE TABLE ROW.
function editText() {
    //open the modal again
    //edit and update the database
    //update the page 
}

function removeRow(row) {
    //Do Nothing

    // var table = document.getElementById('postTable');
    // table.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

// EXTRACT AND SUBMIT TABLE DATA.
function submit() {
    var myTab = document.getElementById('postTable');
    var values = new Array();

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                values.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    
    // SHOW THE RESULT IN THE CONSOLE WINDOW.
    console.log(values);
}