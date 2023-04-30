console.log(axios);
function getData() {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        Method: 'GET',
        ResponseType: 'JSON',
    })

    promise.then(function (result) {
        let arrItem = result.data.content;
        console.log('result', arrItem)
        let html = '';
        for (let index = 0; index < arrItem.length; index++) {
            let item = arrItem[index];
            html += `
         <div class="col-3">
         <div class="card item-${index}">
         <div class="card-header">
           <img src="${item.image}" alt="">
         </div>
         <div class="card-body">
           <h1 class="name-item">${item.name}</h1>
           <p class="desc-item">${item.description}</p>
            <button id='btnBuy'>Buy Now</button>
           <p class="price">${item.price}$</p>
         </div>
         </div>
         </div>
         `
        }
        document.querySelector('#products-list').innerHTML = html;
    });
    promise.catch(function (err) {
        console.log('err', err)
    })
}
getData()


