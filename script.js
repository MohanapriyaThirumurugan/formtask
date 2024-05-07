// const frm=document.createElement("form");
// frm.setAttribute("id","myform")
// labl=document.createElement("label")
// labl.innerText="Frist Name";
// labl.setAttribute("id","firstname")
// const inpt=document.createElement("input")
// inpt.setAttribute("type","text")
// inpt.setAttribute("id","firstname")
// inpt.setAttribute("class","form-control")
// // inpt.setAttribute("required")
// frm.append(labl,inpt)
// document.body.append(frm);
// //lastName
// labl1=document.createElement("label")
// labl1.innerText="Last Name";
// labl1.setAttribute("for","Lasttname")
// const inpt1=document.createElement("input")
// inpt1.setAttribute("type","text")
// inpt1.setAttribute("id","LastName")
// inpt1.setAttribute("class","form-control")
// frm.append(labl1,inpt1)
// document.body.append(frm)

// // Adresses
// labl2=document.createElement("label")
// labl2.innerText="Adresses";
// labl2.setAttribute("for","adresses")
// const inpt2=document.createElement("input")
// inpt2.setAttribute("type","textArea")
// inpt2.setAttribute("id","adresses")
// inpt2.setAttribute("class","form-control")
// frm.append(labl2,inpt2)
// document.body.append(frm)

// //pincode
// labl3=document.createElement("label")
// labl3.innerText="pincode";
// labl3.setAttribute("for","adresses")
// const inpt3=document.createElement("input")
// inpt3.setAttribute("type","text")
// inpt3.setAttribute("id","pincode")
// inpt3.setAttribute("class","form-control")
// frm.append(labl3,inpt3)
// document.body.append(frm)

// //grnder
// const labl4=document.createElement("label")
// labl4.innerText="Gender";
// labl4.setAttribute("for","gender")
// const inpt5=document.createElement("input")
// inpt5.setAttribute("type","radio")
// inpt5.setAttribute("id","rr")
// inpt5.setAttribute("class","form-control")
// inpt5.setAttribute("Name","gender")
// lab=document.createElement("label")
// lab.innerText="male"
// const inpt4=document.createElement("input")
// inpt4.setAttribute("type","radio")
// inpt4.setAttribute("id","mm")
// inpt4.setAttribute("class","form-control")
// inpt5.setAttribute("Name","gender")
// lab1=document.createElement("label")
// lab1.innerText="Female"
// frm.append(labl4,inpt5,lab,inpt5,inpt4,lab1)
// document.body.append(frm)


// // food
// const f1=document.createElement("label")
// f1.setAttribute("for","food")
// f1.innerText="good choice"
// const foo1=document.createElement("input")
// foo1.setAttribute("type","radio")
// foo1.setAttribute("id","food1")
// foo1.setAttribute("value","pizza")
// const f1lab=document.createElement("label")
// f1lab.innerText="pizza"
// f1lab.setAttribute("for","pizza")
// // burger
// const foo2=document.createElement("input")
// foo2.setAttribute("type","radio")
// foo2.setAttribute("id","food2")
// foo2.setAttribute("value","burger")
// const f2lab=document.createElement("label")
// f2lab.innerText="burger"
// f2lab.setAttribute("for","burger")
// // pasta
// const foo3=document.createElement("input")
// foo3.setAttribute("type","radio")
// foo3.setAttribute("id","food3")
// foo3.setAttribute("value","pasta")
// const f3lab=document.createElement("label")
// f3lab.innerText="pasta"
// f3lab.setAttribute("for","pasta")
// //icecream
// const foo4=document.createElement("input")
// foo4.setAttribute("type","radio")
// foo4.setAttribute("id","food4")
// foo4.setAttribute("value","ice cream")
// const f4lab=document.createElement("label")
// f4lab.innerText="icecream<br>"
// f4lab.setAttribute("for","icecream")
// frm.append(f1,foo1,f1lab,foo2,f1lab,foo3,f3lab,foo4,f4lab)
// document.body.append(frm)

// //choice state
// const ste1=document.createElement("label")
// ste1.setAttribute("for","state")
// ste1.innerText="state"
// const state=document.createElement("input")
// state.setAttribute("type","text")
// state.setAttribute("id" ,"state")
// state.setAttribute("class","from-control")
// frm.append(ste1,state)
// document.body.append(frm)
// // choice of country
// const contry=document.createElement("label")
// contry.innerHTML="country"
// contry.setAttribute("for","country")
// const con1=document.createElement("input")
// con1.setAttribute("type","text")
// con1.setAttribute("id","country")
// con1.setAttribute("class","from-control")
// frm.append(contry,con1)
// document.body.append(frm)

// //summit
// const btn=document.createElement("label")
// btn.innerHTML="submit"
// const sum=document.createElement("button")
// sum.setAttribute("type","text")
// sum.setAttribute("class","control-form")
// sum.setAttribute("onclick","submitform()")
// frm.append(btn,sum)
// document.body.append(frm)


// function submitForm() {
//     // Get form values
//     var firstName = document.getElementById('firstname').value;
//     var lastName = document.getElementById('LastName').value;
//     var address = document.getElementById('adresses').value;
//     var pincode = document.getElementById('pincode').value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
//     var food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(ele => ele.value);
//     var state = document.getElementById('state').value;
//     var country = document.getElementById('country').value;

//     // Append values to the table
//     var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.rows.length);
//     var cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];

//     for (var i = 0; i < cells.length; i++) {
//         var cell = newRow.insertCell(i);
//         cell.innerHTML = cells[i];
//     }

//     // Clear form fields
//     document.getElementById('myForm').reset();
// }

// // Test Suite
// function runTests() {
//     // Test form submission
//     submitForm();

//     // Check if the table row is added
//     var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
//     if (table.rows.length === 1) {
//         console.log('Test Passed: Table row added successfully');
//     } else {
//         console.error('Test Failed: Table row not added');
//     }
// }

// // Run the test suite
// runTests();



// get the form value
//   const name1=document.getElementById("First").value
//   const lastname=document.getElementById("Last").value
//   const pin=document.getElementById("pincode").value
//   const state=document.getElementById("sta").value
//   const country=document.getElementById("con") .value
//   const button=document.getElementById("button").value
//   button.addEventlistener =("click",foo)

function foo(){
    console.log("function block");
  const name1=document.getElementById("First").value
  const lastname=document.getElementById("Last").value
  const pin=document.getElementById("pincode").value
  const state=document.getElementById("sta").value
  const country=document.getElementById("con") .value
  // const food=Array.from(document.querySelectorAll('input.[name="food"]:checked')).map(result=>result.value).join(',')
  const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(result => result.id).join(',');
 //console.log(food);
 console.log((document.querySelectorAll('input[name="food"]:checked')));
  const gen=document.getElementsByName("gender");
  let gender;
  for(let i=0 ;i<gen.length;i++){
        if(gen[i].checked){
           gender=gen[i].value
        }
  }
  console.log(gen);
    // if(!name1||!lastname||!pin){
    //     alert("enter the value pls")
    // }
    const row=1
  var display=document.getElementById("datatable")
   const newrow= display.insertRow(row)
   const cell =newrow.insertCell(0);
   const cell1=newrow.insertCell(1);
   const cell2=newrow.insertCell(2); 
   const cell3=newrow.insertCell(3);
   const cell4=newrow.insertCell(4);
   const cell5=newrow.insertCell(5);
   const cell6=newrow.insertCell(6);
  
   cell.innerHTML=name1;
   cell1.innerHTML=lastname;
   cell2.innerHTML=pin;
   cell3.innerHTML=state;
   cell4.innerHTML=country;
   cell5.innerHTML=food;
   cell6.innerHTML=gender;

   row++


  }
  

  
//   var display=document.getElementById(datatable)
//   const newrow= display.insertRow(row)
//    const cell1=newrow.insertCell(0);
//    const cell2=newrow.insertCell(1);
//    const cell3=newrow.insertCell(2);
//    const cell4=newrow.insertCell(3);
//    const cell5=newrow.insertCell(4);
//    //const cell6=newrow.insertCell(5);
  
//    cell1.innerHTML=name1;
//    cell2.innerHTML=lastname;
//    cell3.innerHTML=pin;
//    cell4.innerHTML=state;
//    cell5.innerHTML=country;

//  row++




/* <input type="checkbox" id="biryani" name="food" value="Biryani">
<input type="checkbox" id="naan" name="food" value="Naan">
const foodPreferences = Array.from(document.querySelectorAll('input[name="food"]:checked'))
    .map(checkbox => checkbox.value)
    .join(', '); */


{/* <input type="radio" name="drink" value="Tea">
<input type="radio" name="drink" value="Coffee">
const drinkRadios = document.querySelector('input[name="drink"]:checked');
const selectedDrink = drinkRadios ? drinkRadios.value : null; */}






