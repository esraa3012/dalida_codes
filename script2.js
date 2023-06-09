window.addEventListener("DOMContentLoaded", () => {
    listingMail(0);
})

more = document.querySelector("#more");
more.addEventListener("click", () => {
    let recordSelected = document.querySelector("#record_select").textContent;
    listingMail(recordSelected);
})

function listingMail(count) {
    const template = document.querySelector("#templatemail");
    fetch("list.php", {
            method: "POST",
            body: JSON.stringify(count),
            contentType: 'application/json'
        })
        .then(function(response) {
            let recordTotalNumber = response.headers.get('Record-number');
            let recordSelectNumber = response.headers.get('Select-number');
            let recordTotalNumberSpan = document.querySelector("#record_total");
            let recordSelectNumberSpan = document.querySelector("#record_select");
            if (Number(recordTotalNumber) <= Number(recordSelectNumber)) {
                recordTotalNumberSpan.textContent = recordTotalNumber;
                recordSelectNumberSpan.textContent = recordTotalNumber;
                more.setAttribute("disabled", "");
            } else {
                recordTotalNumberSpan.textContent = recordTotalNumber;
                recordSelectNumberSpan.textContent = recordSelectNumber;
                more.removeAttribute("disabled");
            }
            return response.json();
        })
        .then((results) => {
            const tableNewsletter = results['data'];
            tableNewsletter.forEach((element, index) => {
                const tbody = document.querySelector("tbody");
                const clone = document.importNode(template.content, true);
                const tr = clone.querySelectorAll("tr");
                const td = clone.querySelectorAll("td");
                td[0].textContent = tableNewsletter[index]['email'];
                td[1].textContent = tableNewsletter[index]['date'];
                td[2].addEventListener("click", function() {
                    const data = td[0].textContent;
                    showPopUp(data, tr[0]); 
                });
                tbody.appendChild(clone);
            });
        });
}


 const searchBar = document.getElementById('search');
 searchBar.addEventListener('input', function() {
     if (searchBar.value) {
         fetch("search.php", {
                 method: "POST",
                 body: JSON.stringify(searchBar.value),
                 contentType: 'application/json'
             })
             .then(function(response) {
                 let recordTotalNumber = response.headers.get('Record-number');
                 let recordSelectNumber = response.headers.get('Select-number');
                 let recordTotalNumberSpan = document.querySelector("#record_total");
                 let recordSelectNumberSpan = document.querySelector("#record_select");
                 more.setAttribute("disabled", "");
                 if (Number(recordTotalNumber) <= Number(recordSelectNumber)) {
                     recordTotalNumberSpan.textContent = recordTotalNumber;
                     recordSelectNumberSpan.textContent = recordTotalNumber;
                 } else {
                     recordTotalNumberSpan.textContent = recordTotalNumber;
                     recordSelectNumberSpan.textContent = recordSelectNumber;
                 }
                 return response.json();
             })
             .then((results) => {
                 const tableNewsletter = results['data'];
                 const template = document.querySelector("#templatemail");
                 if (results.responseServer === true && results.responseDB === true) {
                     removeList();
                     tableNewsletter.forEach((element, index) => {
                         const tbody = document.querySelector("tbody");
                         const clone = document.importNode(template.content, true);
                         const tr = clone.querySelectorAll("tr");
                         const td = clone.querySelectorAll("td");
                         td[0].textContent = tableNewsletter[index]['email'];
                         td[1].textContent = tableNewsletter[index]['date'];
                         td[2].addEventListener("click", function() {
                             const data = td[0].textContent;
                             showPopUp(data, tr[0]); 
                         });
                         tbody.appendChild(clone);
                     });
                 }
             });
     } else {
         removeList();
         more.removeAttribute("disabled");
         listingMail(0);
     }
 })

 function removeList() {
     const tBody = document.querySelector("TBODY");
     while (tBody.firstChild) {
         tBody.removeChild(tBody.firstChild);
     };
 }

 function showPopUp(mail, num) {
     const template = document.querySelector("#template_contact");
     const header = document.querySelector("body");
     const clone = document.importNode(template.content, true);
     const popUpTitle = clone.querySelector("#popup_title");
     const popUpContent = clone.querySelector("#popup_text");
     const popUpYesInput = clone.querySelector("#popup_thanks");
     popUpTitle.textContent = "Delete requested";
     popUpContent.textContent = "Are you sure you want to delete " + mail + " ?";
     popUpYesInput.value = "Yes";
     let popUpNoInput = document.createElement("INPUT");
     popUpNoInput.setAttribute("type", "button");
     popUpNoInput.setAttribute("value", "No");
     popUpNoInput.setAttribute("id", "popup_thanks_no");
     const popUpDiv = clone.querySelector(".button");
     popUpDiv.appendChild(popUpNoInput);

     header.appendChild(clone);


     const popUp = document.getElementById("popup_fond");
     const popUpClose = document.getElementById("popup_close");
     const popUpThx = document.getElementById("popup_thanks");
     const popUpNo = document.getElementById("popup_thanks_no");
     popUpClose.addEventListener('click', function() {
         popUp.remove();
     });
     popUpThx.addEventListener('click', function() {
         popUp.remove();
         ajaxDeletion(mail, num);
     });
     popUpNo.addEventListener('click', function() {
         popUp.remove();
     });
 }

 function ajaxDeletion(mail, num) {
    
     fetch("delete.php", {
             method: "POST",
             body: JSON.stringify(mail),
             contentType: 'application/json'
         })
         .then(response => response.json())
         .then((results) => {
             if (results.responseServer === true && results.responseDB === true) {
                 deletePopUp(mail);
                 num.remove();
                 let recordTotalNumberSpan = document.querySelector("#record_total");
                 let recordSelectNumberSpan = document.querySelector("#record_select");
                 recordTotalNumberSpan.textContent = Number(recordTotalNumberSpan.textContent) - 1;
                 recordSelectNumberSpan.textContent = Number(recordSelectNumberSpan.textContent) - 1;
             }
         });
 }
 function deletePopUp(mail) {
     const template = document.querySelector("#template_contact");
     const header = document.querySelector("body");
     const clone = document.importNode(template.content, true);
     const popUpTitle = clone.querySelector("#popup_title");
     const popUpContent = clone.querySelector("#popup_text");
     popUpTitle.textContent = "Delete done";
     popUpContent.textContent = mail + " has been successfully deleted.";
     header.appendChild(clone);
     let popUp = document.getElementById("popup_fond");
     document.getElementById("popup_close").addEventListener('click', function() {
         popUp.remove();
     });
     document.getElementById("popup_thanks").addEventListener('click', function() {
                 popUp.remove();
     });
 }