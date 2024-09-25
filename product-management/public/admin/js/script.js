// Buttom Status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0){
    let url = new URL(window.location.href);

    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            
            if (status){    
                url.searchParams.set("status", status);
            }else{
                url.searchParams.delete("status");
            }

            window.location.href = url.href
        })
    })
}
// End Bottom Status

// From Search

const formSearch = document.querySelector("#form-search");
if (formSearch){
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        
        if (keyword){
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        
        window.location.href = url.href;
    });
}


// End Form Search

// Pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
// console.log(buutonPagination);
if (buttonsPagination){
    let url = new URL(window.location.href);

    buttonsPagination.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");
            // console.log(page);
            
            url.searchParams.set("page", page);
            window.location.href = url.href;
            
        });
    })
}

// EndPagination


// Check Box Multi

const checkBoxMulti = document.querySelector("[checkbox-multi]");
if (checkBoxMulti){
    const inputCheckAll = checkBoxMulti.querySelector("input[name='checkall']");
    const inputsId = checkBoxMulti.querySelectorAll("input[name='id']");
    
    inputCheckAll.addEventListener("click", () => {
        if (inputCheckAll.checked){
            inputsId.forEach((input) => {
                input.checked = true;
            });
        }else{
            inputsId.forEach((input) => {
                input.checked = false;
            })
        }
    });

    inputsId.forEach((input) => {
        input.addEventListener("click", () => {
            const countChecked = checkBoxMulti.querySelectorAll("input[name='id']:checked").length;
            
            if (countChecked == inputsId.length) {
                inputCheckAll.checked = true;
            }else{
                inputCheckAll.checked = false; 
            }
        });
    });

}

// End Check Box Multi


// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();
        

        const checkBoxMulti = document.querySelector("[checkbox-multi]");
        const inputsChecked = checkBoxMulti.querySelectorAll("input[name='id']:checked");
        
        const typeChange = e.target.elements.type.value;

        if (typeChange == "delete-all") {
            const isConfirm = confirm("bạn có chắc muốn xóa những sản phẩm này không");

            if (!isConfirm){
                return;
            }
        }

        if (inputsChecked.length > 0) {
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']");

            inputsChecked.forEach((input) => {
                const id = input.value;
                ids.push(id);
            })

            inputIds.value =  ids.join(", ");

            formChangeMulti.submit();
        }else {
            alert("Vui long chon it nhat mot ban ghi!!!");
        }
    }); 
}

// End Form Change Multi

