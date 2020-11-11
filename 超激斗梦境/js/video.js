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

    // ====================头部start==================
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
    // ====================头部end==================

    //====================视频区的动画start==========
    let contentBfLeft = document.getElementById('contentBfLeft');
    let showVideo = document.getElementById('showVideo');
    let playVideo = document.getElementById('playVideo');
    let contentBfLeftList ;
    let contentBfRight = document.getElementById('contentBfRight');
    let contentBfRightList ;
    let contentAfLi = document.getElementById('contentAf').getElementsByTagName('li');
    let wrongBtn = document.getElementById('wrong');
    let contentBfLeftHtml ='';
    let contentBfRightHtml ='';
    let contentBfNum;
    let playVideoStart = document.getElementById('playVideoStart');
    let contentBfMask = document.getElementsByClassName('mask')[0];
    let contentBfLeftLi
    let contentBfLeftLine = document.getElementById('contentBfLeftLine');
    let contentBfRightLine = document.getElementById('contentBfRightLine');
    
   

    let OfficialVideoLeft = [
        {discribe:"灰羽 - 初始",videoS:"../video/videoPage/vofficialAfter1.mp4",playV:"https://fight.v.netease.com/2020/0904/0ae7f30f1c80169bfcc20f399f168537qt.mp4"},
        {discribe:"灰羽 - 阴影之王（转职）",videoS:'../video/videoPage/vofficialAfter2.mp4',playV:"https://fight.v.netease.com/2020/0904/1142acef39b68a891df79057955ef544qt.mp4"},
        {discribe:"灰羽 - 阴影木偶师（转职）",videoS:"https://fight.v.netease.com/2020/0904/c9b36e321146807c5ef61bf88fc624e4.mp4",
        playV:"https://fight.v.netease.com/2020/0904/c014685c7f425d946471e80f9fc1c28dqt.mp4"},
        {discribe:"芙兰 - 初始",videoS:'../video/videoPage/vofficialAfter4.mp4',
        playV:"https://fight.v.netease.com/2020/0904/301edce6593c2f0f563f2010a9143b99qt.mp4"},
        {discribe:"妮可 - 海妖（转职）",videoS:'../video/videoPage/vofficialAfter9.mp4',
        playV:"https://fight.v.netease.com/2020/0904/0f927bc71150048346380831cc053a1dqt.mp4"},
        {discribe:"薇格 - 初始",videoS:'../video/videoPage/vofficialAfter10.mp4',
        playV:"https://fight.v.netease.com/2020/0904/833355a820b75dfc522a74682a3c89c3qt.mp4"},
        {discribe:"薇格 - 铁拳（转职）",videoS:'../video/videoPage/vofficialAfter11.mp4',
        playV:"https://fight.v.netease.com/2020/0904/d4f23f12a324266f040db94b2135fd28qt.mp4"},
        {discribe:"薇格 - 雪崩暴走（转职）",videoS:'../video/videoPage/vofficialAfter12.mp4',
        playV:"https://fight.v.netease.com/2020/0904/833355a820b75dfc522a74682a3c89c3qt.mp4 "},
    ]
    let OfficialVideoRight =[
        {discribe:"芙兰 - 枪炮手（转职）",videoS:'../video/videoPage/vofficialAfter5.mp4',
        playV:"https://fight.v.netease.com/2020/0904/0f927bc71150048346380831cc053a1dqt.mp4"},
        {discribe:"芙兰 - 鹰眼（转职）",videoS:'../video/videoPage/vofficialAfter6.mp4',
        playV:"https://fight.v.netease.com/2020/0904/3e4e68cfa508742a5a5bfe2445564644qt.mp4"},
        {discribe:"妮可 - 初始",videoS:'../video/videoPage/vofficialAfter7.mp4',
        playV:"https://fight.v.netease.com/2020/0904/971d325c6438251216268183a0e06b85qt.mp4"},
        {discribe:"妮可 - 蓝鹰（转职）",videoS:'../video/videoPage/vofficialAfter8.mp4',
        playV:"https://fight.v.netease.com/2020/0910/7a2af513eed2908272ab38eb0536c4b4qt.mp4"},
        {discribe:"詹姆斯 - 初始",videoS:'../video/videoPage/vofficialAfter13.mp4',
        playV:"../video/videoPage/vofficialPlay13.mp4"},
        {discribe:"詹姆斯 - 赤面鬼（转职）",videoS:'../video/videoPage/vofficialAfter14.mp4',
        playV:"../video/videoPage/vofficialPlay14.mp4"},
        {discribe:"詹姆斯 - 幻影之刃（转职）",videoS:'../video/videoPage/vofficialAfter15.mp4',
        playV:"../video/videoPage/vofficialPlay15.mp4"},
    ]
    //官方方面的视频，用js实现,点击初始化界面
    for(let i = 0 ;i < contentAfLi.length ; i++){
        contentAfLi[i].onclick = ()=>{
            switch(i){
                case 0:
                    addOfficia();//初始化官方视频模块
                    break;
                case 1:
                    god();//初始化大神攻略模块
                    break;
                case 2:
                    liveBroadcast();//初始化直播在线模块
                    break;
            }
        }
    }

    //========界面初始化=========
    addOfficia();
    //初始化官方视频模块
    function addOfficia(){
        contentBfLeftHtml = '';
        contentBfRightHtml = '';
        for(let i = 0 ;i < OfficialVideoLeft.length ;i++){
            if(i % 4 == 0 && i != 0){
                break;
            }
            contentBfNum = i >= 0 && i <= 9 ? '0'+(i+1) : i;
            contentBfLeftHtml += 
            `<li>
                <div id="title">
                    <img src="../images/video/btn.png">
                    <span>`+contentBfNum+`</span>
                    <b>`+OfficialVideoLeft[i].discribe+`</b>
                </div>
                <div id="contentBfLeftLine">
                    <div id="contentBfLeftLineA"></div>
                </div>
            </li>`   
        }
        for(let i = 0 ;i < OfficialVideoRight.length ;i++){
            if(i % 4 == 0 && i != 0){
                break;
            }
            contentBfNum = i >= 0 && i <= 9 ? '0'+(i+5) : i+5;
            contentBfRightHtml += 
            ` <li>
                <div id="contentBfRightLine">
                    <div id="contentBfRightLineA"></div>
                </div>
                <div id="title">
                    <span>`+contentBfNum+`</span>
                    <b>`+OfficialVideoRight[i].discribe+`</b>
                    <img src="../images/video/btnRight.png">
                </div>
            </li>`   
        }
        //将li添加到页面
        contentBfLeft.innerHTML = contentBfLeftHtml;
        contentBfRight.innerHTML = contentBfRightHtml;

        //获取左右两边ul的li对象
        contentBfLeftList =  document.getElementById('contentBfLeft').getElementsByTagName('li');
        contentBfRightList = document.getElementById('contentBfRight').getElementsByTagName('li');
        showVideoB();
    }

    //初始化大神攻略模块
    function  god(){

    }

    //初始化直播在线模块
    function liveBroadcast(){

    }

    //==========播放视频===========
    //点击li切换视频
    let whitch = 0; //手动播放第几个视频
    let flag = 0;
    if(flag == 0){
        playVideo.onclick =()=>{
            playVideoStart.innerHTML = `
            <video autoplay controls>
                <source src=`+OfficialVideoLeft[whitch].playV+`>
            </video>`
            wrongBtn.style.opacity = 1;
            playVideo.style.opacity = 0; 
            contentBfMask.style.width =  100 + '%';
        }
        flag = 1;
    }
    function showVideoB(){
        //左边的li
        for(let i = 0 ; i < contentBfLeftList.length ; i++){
            contentBfLeftList[i].onclick = ()=>{                
                showVideo.innerHTML = `
                <video autoplay muted loop>
                    <source src=`+OfficialVideoLeft[i].videoS+`>
                </video>
                `
                 //手动点击播放视频
                whitch = i;
                playVideo.onclick =()=>{
                    playVideoStart.innerHTML = `
                    <video autoplay controls>
                        <source src=`+OfficialVideoLeft[whitch].playV+`>
                    </video>`
                    wrongBtn.style.opacity = 1;
                    playVideo.style.opacity = 0; 
                    contentBfMask.style.width =  100 + '%';
                }
            }
        }
       
        //右边的li
        for(let i = 0 ; i < contentBfRightList.length ; i++){
            contentBfRightList[i].onclick = ()=>{                
                showVideo.innerHTML = `
                <video autoplay muted loop>
                    <source src=`+OfficialVideoRight[i].videoS+`>
                </video>`
                whitch = i;
                //手动点击播放视频
                playVideo.onclick = ()=>{
                    playVideoStart.innerHTML = `
                    <video autoplay controls>
                        <source src=`+OfficialVideoRight[whitch].playV+`>
                    </video>`
                    wrongBtn.style.opacity = 1;
                    playVideo.style.opacity = 0; 
                    contentBfMask.style.width =  100 + '%';
                }
            }
        }
    }    
    //========手动点击关闭视频==========
    wrongBtn.onclick = ()=>{
        playVideoStart.innerHTML = '';
        playVideo.style.opacity = 1; 
        wrongBtn.style.opacity = 0;
        contentBfMask.style.width =  0 + '%';
    }     

    //contentBfLeftLineA鼠标移动动画
    // for(let i = 0 ;i < contentBfRightLine.length; i++){

    // }
    // let contentBfLeftLineWidth;
    // let auto;
    // contentBfLeftLineA.style.width = 0 + 'px' ;
    // contentBfLeftLineA.onmouseover = ()=>{
    //     contentBfLeftLineWidth = contentBfLeftLineA.style.width;
    //     auto = setInterval(()=>{
    //         if(contentBfLeftLineWidth > 50){
    //             clearInterval(auto);
    //         }
    //         contentBfLeftLineA.style.width = contentBfLeftLineWidth + 'px';
    //         contentBfLeftLineWidth++;
    //     },10)    
    // }
    //====================视频区的动画end==========
}



