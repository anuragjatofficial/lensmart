let tbody = document.querySelector("tbody");
let card_body = document.getElementById("orderbody");
// let accestoken = localStorage.setItem("accestoken",1);
let accestoken = localStorage.getItem("accestoken");
let card = document.querySelectorAll(".card");
let users = document.querySelectorAll(".users");
let cards = [...card];
let uusers = [...users];
console.log(accestoken);
let head = document.querySelector("head");
let body = document.querySelector("body");
if(!accestoken){
        let style = document.createElement("style");
        style.innerHTML = `body {
              background-color: #2F3242;
            }
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: -250px;
              margin-left: -400px;
            }
            .message-box {
              height: 200px;
              width: 380px;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: -100px;
              margin-left: 50px;
              color: #FFF;
              font-family: Roboto;
              font-weight: 300;
            }
            .message-box h1 {
              font-size: 60px;
              line-height: 46px;
              margin-bottom: 40px;
            }
            .buttons-con .action-link-wrap {
              margin-top: 40px;
            }
            .buttons-con .action-link-wrap a {
              background: #68c950;
              padding: 8px 25px;
              border-radius: 4px;
              color: #FFF;
              font-weight: bold;
              font-size: 14px;
              transition: all 0.3s linear;
              cursor: pointer;
              text-decoration: none;
              margin-right: 10px
            }
            .buttons-con .action-link-wrap a:hover {
              background: #5A5C6C;
              color: #fff;
            }
            
            #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
              animation: float 1s infinite ease-in-out alternate;
            }
            #Polygon-2 {
              animation-delay: .2s; 
            }
            #Polygon-3 {
              animation-delay: .4s; 
            }
            #Polygon-4 {
              animation-delay: .6s; 
            }
            #Polygon-5 {
              animation-delay: .8s; 
            }
            
            @keyframes float {
                100% {
                transform: translateY(20px);
              }
            }
            @media (max-width: 450px) {
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -250px;
                margin-left: -190px;
              }
              .message-box {
                top: 50%;
                left: 50%;
                margin-top: -100px;
                margin-left: -190px;
                text-align: center;
              }
            }`;
            head.append(style);
          body.innerHTML = `
          <svg width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
                  <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
                  <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
                  <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
                  <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
              </g>
          </svg>
          <div class="message-box">
            <h1>403</h1>
            <p>Forbidden</p>
            <p>It seems like you are not authorized to acces this page</p>
            <div class="buttons-con">
              <div class="action-link-wrap">
                <a onclick="history.back(-1)" class="link-button link-back-button">Go Back</a>
                <a href="./index.html" class="link-button">Go to Home Page</a>
              </div>
            </div>
          </div>`          

        //   document.getAnim
}



// event handler
cards.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        window.location.replace("./adminOrders.html")
    })
})
fetch(`https://lensmart-backend3-0.onrender.com/product_status`)
.then((res)=>res.json())
.then((res)=>{
    res.splice(0,res.length-7);
    console.log(res)
    
    renderOrder(res);
})

fetch(`https://lensmart-backend3-0.onrender.com/users`)
.then((res)=>res.json())
.then((res)=>{
    res.splice(0,res.length-10);
    console.log(res)
    
    render(res)
})
// dynamic headers
let change  = document.getElementsByClassName("card-single");
let changes = [...change];
changes.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        if(index===0){
            window.location.replace("./adminUsers.html");
        }
        else if(index===1){
            window.location.replace("./adminOrders.html");
        }
        else if(index===2){
            window.location.replace("./adminProducts.html");
        }else if(index ===3){
            window.location.replace("./admin.html")
        }
    })
})

// for see all buttons
let seeall = document.getElementById("seeall");
let seeorders = document.getElementById("seeorders");
seeall.addEventListener("click",()=>{
    window.location.replace("./adminUsers.html");
})

seeorders.addEventListener("click",()=>{
    window.location.replace("./adminOrders.html");
})

uusers.forEach((ele)=>{
  ele.addEventListener("click",()=>[
    window.location.replace("./adminUsers.html")
  ])
})
// <-- for displaying users in table -->



function render(data){
    let out  = data.map((ele)=>{
        let a = createtbody(ele.email,ele.firstname,ele.lastname,ele.username);
        return a;
    })
    tbody.innerHTML = out.join("");
}


// create cards 

function createtbody(email,firstname,lastname,username){
    let td = `<tr>
        <td>${username}</td>
        <td>${email}</td>
        <td>${firstname} ${lastname}</td>
    </tr>`
    return td;
}

// processing orders
function renderOrder(data){
    let out  = data.map((ele)=>{
        let a = create(ele.frameImg,ele.title,ele.id);
        return a;
    })
    card_body.innerHTML = out.join("");
}


function create(avatar,title,id){
    let td = `<div class="order">
    <div class="info">
        <img src="${avatar}" width="40px" height="40px" alt="">
        <div>
            <h4>${title}</h4>
            <small>#${id}</small>
        </div>
    </div>
    <div class="status">
        <span class="las la-user-circle"></span>
        <span class="las la-shopping-bag"></span>
        <span class="las la-rupee-sign"></span>
    </div>
</div>`
    return td;
}
