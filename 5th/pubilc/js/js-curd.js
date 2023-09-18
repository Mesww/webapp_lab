var students = [
    {
    id: 100,
    name:'Mes',
    age:20
},
    {
    id: 101,name:'Bam',age:20
},
    {
    id: 102,name:'Baby',age:20
},
    {
    id: 103,name:'Buby',age:20
}
]

//  read and display data
// !=============FUNCTION=================

// !=============1.Readdata function=================
// ?create function for reload data
function readData() {
    let table_data = ``;
    for (stu of students) {
        table_data += `<tr>`
        table_data += `<td>${stu.name}</td>`;
        table_data += `<td>${stu.age}</td>`;
        table_data += `<td><button class='btn btn-danger btn-delete mx-2' id='${stu.id}'>Delete</button>`;
        table_data += `<button class='btn btn-warning mx-2'>Edit</button></td>`;
        table_data += `</tr>`
    }
    // console.log(table_data);
    
    document.querySelector('#table_body').innerHTML = table_data;
    delete_data();
}

readData();

// !=============2.Delete function=================
function delete_data() {
    // !delete
    const btnDelete = document.querySelectorAll('.btn-delete');

// !bind onclick event to each delete button
btnDelete.forEach(function(btn) {
    btn.onclick = function () {
        // alert(btn.id);
        // !delete data form array
        // !find the real id array

        // ?first logic
        // let arrayId = 0;
        // for (let index = 0; index < students.length; index++) {
        //     if (students[index].id == btn.id) {
        //         arrayId = index;
        //         break;
        //     }
        // }
        // // console.log(arrayId);
        // students.splice(arrayId,1);
        
        // ?second logic
        // ?filtter out the unwanted record
        // let temp = []   
        // for (const stu of students) {
        //     if(stu.id != btn.id){
        //         temp.push(stu);
        //     }
        // }
        // students = temp;
        // ?แบบย่อ
        // students = students.filter(function (stu) {
        //     return stu.id != btn.id;
        // })
        
        Swal.fire({
            title: 'Are you sure to delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                students = students.filter(function (stu) {
                    return stu.id != btn.id;
                });
                readData();
                // Swal.fire('Saved!', '', 'success')
            }
        })

        // !reload and refresh tabledata
        readData();
    }
});    
}

// the modal
const myModal = new bootstrap.Modal(document.querySelector('#modalId'));
// !=============3.add function=================
function add_data(){
    document.querySelector('#add_save_button').onclick = function () {
        // alert('add');
        myModal.hide();
        const add_name = document.querySelector('#name').value;
        const add_age = document.querySelector('#age').value;
        // console.log(name+' '+age);
        const last_index = students[students.length-1].id;
        students.push({id: last_index+1,name:add_name,age:add_age});
        readData();
    }
}
// ?after user click add and save
add_data();