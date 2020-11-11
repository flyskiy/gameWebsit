window.onload = ()=>{
    let headList = document.getElementById('list');
    let headListMenu = document.getElementById('listMenu');
    let listMenuContent = document.getElementById('listMenuContent');
    let headListOverHeight;
    let headListOutHeight;
    let headListOverAuto ;
    let headListOutAuto;
    let listMenuContentHeight;
    let x;
    let y;
    let divx1;
    let divy1;
    let divx2;
    let divy2;

    headListMenu.style.height = 0 + "px";
    listMenuContent.style.height = 0 + 'px';
    headList.onmouseover =  ()=>{
        clearInterval(headListOverAuto);
        clearInterval(headListOutAuto);
        listMenuContent.style.opacity = 1;
        headListOverHeight = parseInt(headListMenu.style.height);
        listMenuContentHeight = parseInt(listMenuContent.style.height);
        
        headListOverAuto = setInterval(()=>{
            if(headListOverHeight > 330){
                clearInterval(headListOverAuto);
            }
            headListMenu.style.height = headListOverHeight + 'px';
            listMenuContent.style.height = listMenuContentHeight + 'px';
            headListOverHeight += 15;
            listMenuContentHeight += 15;
        },1)
    }

    headListMenu.onmouseout = function(event){
        clearInterval(headListOverAuto);
        clearInterval(headListOutAuto);
        x=event.clientX;
        y=event.clientY;
        divx1 = headListMenu.offsetLeft;
        divy1 = headListMenu.offsetTop;
        divx2 = headListMenu.offsetLeft + headListMenu.offsetWidth;
        divy2 = headListMenu.offsetTop + headListMenu.offsetHeight;

        if(x < divx1 || x > divx2 || y < divy1 || y > divy2){
            headListOutHeight = parseInt(headListMenu.style.height);
            listMenuContentHeight = parseInt(listMenuContent.style.height);
            listMenuContent.style.opacity = 0;
            headListOutAuto = setInterval(()=>{
                if(headListOutHeight < 0){
                    clearInterval(headListOutAuto);
                }
                headListMenu.style.height = headListOutHeight + 'px';
                listMenuContent.style.height = listMenuContentHeight + 'px';
                headListOutHeight -= 15;
                listMenuContentHeight -= 15;
                // console.log('减宽度的值'+ headListMenu.style.height);
            },1)
        }   
    }

    headList.onmouseout =  ()=>{
        clearInterval(headListOverAuto);
        clearInterval(headListOutAuto);
        headListOutHeight = parseInt(headListMenu.style.height);
        listMenuContentHeight = parseInt(listMenuContent.style.height);
        x=event.clientX;
        y=event.clientY;

        divx1 = headListMenu.offsetLeft;
        divy1 = headListMenu.offsetTop;
        // console.log('鼠标x轴和y轴：'+divx1+","+divy1);
        divx2 = headListMenu.offsetLeft + headListMenu.offsetWidth;
        divy2 = headListMenu.offsetTop + headListMenu.offsetHeight;
        if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
            listMenuContent.style.opacity = 0;
            headListOutAuto = setInterval(()=>{
                if(headListOutHeight < 0){
                    clearInterval(headListOutAuto);
                }
                headListMenu.style.height = headListOutHeight + 'px';
                listMenuContent.style.height = listMenuContentHeight + 'px';
                headListOutHeight -= 15;
                listMenuContentHeight -= 15;
            },1) 
        }
    }
}