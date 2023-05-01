console.log(axios);



window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)
    

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
                <a id='buyNow' href='/view/detail.html?productid=${index+1}'>Buy Now</a>
               <p class="price">${item.price}$</p>
             </div>
             </div>
             </div>
             `
            }
            document.querySelector('#products-list').innerHTML = html;

            for(index=0;index<arrItem.length;index++){
                if(arrItem[index].id == myParam){
                    document.querySelector('#image-detail').src = arrItem[index].image;
                    document.querySelector('#product-name-detail').innerHTML = arrItem[index].name;
                    document.querySelector('#product-desc-detail').innerHTML = arrItem[index].description;
                    document.querySelector('#price-detail').innerHTML = arrItem[index].price +'$';
                    console.log('sss',myParam);
                    
                }
            }           
            console.log('id',arrItem[0].id)
            console.log('PARAS',myParam)
        });
        promise.catch(function (err) {
            console.log('err', err)
        })
    }
    getData()
    
} 

    let number = 0;
document.querySelector('#btnIncrease').onclick = function(){
    number = number+1;
    document.querySelector('#quantity-numer').innerHTML = number;
};

document.querySelector('#btnDecrease').onclick = function(){
    number = number-1;
    document.querySelector('#quantity-numer').innerHTML = number;
}







