window.onload = ()=>{
    let bfRight = document.getElementsByClassName('content_Bf_right')[0];
    let bfList = document.getElementById('bfList');
    let bfListA = document.getElementById('bfList').getElementsByTagName('a');
    let bfButtonGroup = document.getElementById('bfButtonGroup').getElementsByTagName('span');
    let bfCheck = document.getElementsByClassName('check')[0];
    let bfCheckMask =document.getElementById('checkMask');

    let contentCf = document.getElementsByClassName('content_Cf')[0];
    let videoList = document.getElementById('video_list')
    let cf_li = document.getElementById('video_list').getElementsByTagName('li');
    let Cf_video = document.getElementById('contentCf_video');
    let cf_person = document.getElementById('person');
    let decorate1 = document.getElementById('decorate1');
    let decorate2 = document.getElementById('decorate2');
    let decorate3 = document.getElementById('decorate3');
    let tag = document.getElementById('tag');
    let tagName = document.getElementById('name');
    let tagBtnPlay = document.getElementById('btnPlay');
    let ThirdViedoPlay = document.getElementById('viedoPlay');
    let clickVie = document.getElementById('clickVie');
    let DfBtn = document.getElementById('DfBtn');
    let DfMask2 =document.getElementById('DfMask2');
    let old_coordinate = new Array();   
    //保存内容层第三层的li背景图旧的x轴和y轴
    let new_coordinate = new Array();   
    //保存内容层第三层的li背景图新的x轴和y轴
    let Cf_video_src ;  //保存第三层的视频连接
    let ThirdSrc = new Array() ; //内容层第三层的src的值
    let currentObjectSub;   //内容层第三层的下标
    let cfPlayViedo;
    let width = 0;  //保存内容层第三层li的宽度值
    let timer;   //获取动画的返回值
    let auto = null;//获取动画的返回值
    let auto1;
    let auto2;
    let opacity =0; //动画的透明度
    let opacity1 =0;    //动画的透明度
    let opacity2 =0;    //动画的透明度
    let  opacity3= 1;
    let ThirdPropertyValue = [];    //内容层第三层动画的临时属性
    let f = 0;
    let number = 0;



    // 头部js，start
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
    // 头部js，end
    

    

    //============================内容层第一层js=======================
    let afLine = document.getElementsByClassName('content_Af')[0].getElementsByClassName('line')[0];
    let afLineBottom = 15;
    let flag = 0;
    // console.log('有值：'+afLine);
    function afLineAnimote(){
        setInterval(()=>{
            if(afLineBottom < 4){
                flag = 0;
            }else if(afLineBottom > 15){
                flag = 1;
            }

            afLine.style.bottom = afLineBottom + "px";
            if(flag == 0){
                afLineBottom ++;
            }else if(flag == 1){
                afLineBottom --;
            }
        },40);
    }
    afLineAnimote();
    

    //============================内容层第二层js=======================
    // //绑定鼠标移动进轮播图时，自动轮播停止
    // ul.onmouseover = ()=>{
    //     clearInterval(auto);
    // }

    // // 绑定鼠标移动出轮播图时，自动轮播重新开启
    // ul.onmouseout = ()=>{
    //     autoPlay();
    // }
    let dfMain = document.getElementById('main').getElementsByTagName('li');
    let dfMainTime = [];
    let dfMainTitle = [];
    let dfMainDis = [];
    let dfMainBtn= [];
    let dfMainMaskDiv = [];
    let dfMainAnimote = [];
    let dfMainWidth = [];
    let dfMainValue;
    let dfMainValue1 = [{time:'09.30.',title:'新闻',discribe:'梦境好礼抱回家！终极测试排行榜中奖名单公示'},{time:'09.25.',title:'公告',discribe:'9月25日18:00终极测试服务器关闭公告'},{time:'09.25.',title:'新闻',discribe:'终极测试今日结束，下一次见面会是......'},{time:'09.24.',title:'公告',discribe:'9月25日01:00-05:00终极测试服务器维护公告'},{time:'09.22.',title:'公告',discribe:'9月22日08:00-12:00终极测试服务器维护内容公告'},{time:'09.21.',title:'公告',discribe:'9月22日08:00-12:00终极测试服务器维护公告'}];

    let dfMainValue2 = [{time:'09.30.',title:'新闻',discribe:'梦境好礼抱回家！终极测试排行榜中奖名单公示'},{time:'09.25.',title:'新闻',discribe:'终极测试今日结束，下一次见面会是......'},{time:'09.18.',title:'新闻',discribe:'超激斗梦境《终极测试》梦境试炼专题活动'},{time:'09.15.',title:'新闻',discribe:'超激斗梦境大神主播对抗赛来袭'},{time:'09.11.',title:'新闻',discribe:'给英雄们的一封信'},{time:'09.10.',title:'新闻',discribe:'终极测试今日开服！限时享海量充值好礼'}];
    
    let dfMainValue3 = [{time:'09.25.',title:'公告',discribe:'9月25日18:00终极测试服务器关闭公告'},{time:'09.24.',title:'公告',discribe:'9月22日08:00-12:00终极测试服务器维护内容公告'},{time:'09.21.',title:'公告',discribe:'9月22日08:00-12:00终极测试服务器维护公告'},{time:'09.19.',title:'公告',discribe:'9月20日02:00-06:00终极测试服务器维护公告'},{time:'09.19.',title:'公告',discribe:'9月19日终极测试服务器平衡性调整公告'},{time:'09.19.',title:'公告',discribe:'9月19日中级测试服务器平衡性调整公告'}];

    for(let i = 0; i < dfMain.length ;i++){
        dfMainMaskDiv[i] = document.getElementById('main').getElementsByTagName('li')[i].getElementsByTagName('div')[1];
        dfMainTime[i] = document.getElementById('main').getElementsByTagName('li')[i].getElementsByTagName('span')[0];
        dfMainTitle[i] = document.getElementById('main').getElementsByTagName('li')[i].getElementsByTagName('span')[1];
        dfMainDis[i] = document.getElementById('main').getElementsByTagName('li')[i].getElementsByTagName('span')[2];
        dfMainBtn[i] = document.getElementById('main').getElementsByTagName('li')[i].getElementsByTagName('a')[0];
        dfMainMaskDiv[i].style.width = 0 +'px';
        dfMainMaskDiv[i].style.paddingTop = 0 +'px';
        dfMainMaskDiv[i].style.paddingLeft = 0 +'px';
        dfMainMaskDiv[i].style.paddingRight = 0 +'px';
        dfMainMaskDiv[i].style.paddingBottom= 0 +'px';
    }
    //内容层第二层，nav区域的动画，start
    let dfNav = document.getElementById('nav').getElementsByTagName('li');
    for(let i = 0 ;i< dfNav.length ; i++){
        dfNav[i].onmouseover = ()=>{
            for(let n = 0 ;n < dfNav.length ; n++) {
                dfNav[n].style.background = 'url()';
            }
            dfNav[i].style.background = 'url(../images/cmmons/NavBg.png) 100% 100%';
            dfNav[i].style.backgroundRepeat = 'no-repeat';
            if(i == 0){
                dfMainValue = dfMainValue1;
            }else if(i == 1){
                dfMainValue = dfMainValue2;
            }else if(i==2){
                dfMainValue = dfMainValue3;
            }
           for(let k = 0 ;k < dfMain.length; k++){
               dfMainTime[k].innerText = dfMainValue[k].time;
               dfMainTitle[k].innerText = dfMainValue[k].title;
               dfMainDis[k].innerText = dfMainValue[k].discribe;
           }
        }
    }
    //内容层第二cinav区域的动画，end


    //==========================内容层第二层main区域的动画，start
    //内容层第二层，main区域鼠标移进去的动画
    for(let i = 0;i < dfMain.length ;i++){
        dfMain[i].onmouseover =()=>{
            for(let n = 0 ;n<dfMain.length;n++){
                clearInterval(dfMainAnimote[n]);
            } 
            dfMainTime[i].style.color = '#510606';
            dfMainTitle[i].style.color = '#510606';
            dfMainDis[i].style.color = 'white';
            dfMainBtn[i].style.background = 'url(../images/index/newsBtnAfter.png)';

            dfMainWidth[i] = parseInt(dfMainMaskDiv[i].style.width);
            OverMainAnim(i);
            for(let k=0 ; k<dfMain.length ; k++){
                if(dfMainMaskDiv[i].style.width > 0 || k != i){
                    OutMainAnim(k);
                }
            }
            
        }
    }
    function OverMainAnim(i){
        dfMainAnimote[i] = setInterval(() => {
            if( dfMainWidth[i] > 164){
                clearInterval(dfMainAnimote[i]);
                // console.log('执行了清除div动画')
            }
            dfMainMaskDiv[i].style.width = dfMainWidth[i] + 'px';
            dfMainMaskDiv[i].style.paddingTop = 0 +'px';
            dfMainMaskDiv[i].style.paddingLeft = 72 +'px';
            dfMainMaskDiv[i].style.paddingBottom= 32 +'px';
            if(i != 5 && i != 2){
                dfMainMaskDiv[i].style.paddingRight = 3 +'px';
                
            }else if(i == 2){
                dfMainMaskDiv[i].style.paddingRight = 6 +'px';
            }else{
                dfMainMaskDiv[i].style.paddingRight = 39 +'px';
            }
            dfMainWidth[i] += 4;
        }, 6);
    }
    //内容层第二层，main区域鼠标移出去的动画
    for(let i = 0;i < dfMain.length ;i++){
        dfMain[i].onmouseout =()=>{
            for(let n = 0 ;n<dfMain.length;n++){
                // if(dfMainWidth[i]  0)
                clearInterval(dfMainAnimote[n]);
            } 
            dfMainTime[i].style.color = '#929292';
            dfMainTitle[i].style.color = '#929292';
            dfMainDis[i].style.color = '#b3bac3';
            dfMainBtn[i].style.background = 'url(../images/index/newsBtnBefore.png)';

            dfMainWidth[i] = parseInt(dfMainMaskDiv[i].style.width);
            OutMainAnim(i);
        }
    }
    function OutMainAnim(i){
        dfMainAnimote[i] = setInterval(() => {
            if( dfMainWidth[i] < 0){
                clearInterval(dfMainAnimote[i]);
                // console.log('执行了清除div动画')
            }
            dfMainMaskDiv[i].style.width = dfMainWidth[i] + 'px';
            dfMainMaskDiv[i].style.paddingTop = 0 +'px';
            dfMainMaskDiv[i].style.paddingLeft = 0 +'px';
            dfMainMaskDiv[i].style.paddingBottom= 31 +'px';
            dfMainMaskDiv[i].style.paddingRight = 0 +'px';
            dfMainWidth[i] -= 4;
            // console.log('dfMainWidth[i]的值：'+dfMainWidth[i]);
        }, 6);
    }
    //内容层第二层main区域的动画，end

   
    //内容层第二层查询更多按钮，动画start
    let dfbfCheckSpanOne = document.getElementsByClassName('check')[0].getElementsByTagName('span')[0];
    let dfOverWidth;
    let dfOutWidth;
    let dfMaskCheckAni = [];
    bfCheckMask.style.width = 0 +"px";

    bfCheck.onmouseover =()=>{
        clearInterval(dfMaskCheckAni[1]);
        clearInterval(dfMaskCheckAni[0]);
        dfOverWidth =  parseInt(bfCheckMask.style.width);
        dfbfCheckSpanOne.style.color = 'black';
        dfMaskCheckAni[0] = setInterval(()=>{
            if(dfOverWidth > 360){
                clearInterval(dfMaskCheckAni[0]);
                // console.log('清除了鼠标移进')
            }
            bfCheckMask.style.width = dfOverWidth + 'px';
            dfOverWidth += 5;
            // console.log("变化："+dfOverWidth);
            // console.log('鼠标移进dfOverWidth：'+bfCheckMask.style.width);
        },10)
    }
    bfCheck.onmouseout =()=>{
        clearInterval(dfMaskCheckAni[0]);
        clearInterval(dfMaskCheckAni[1]);
        dfOutWidth = parseInt(bfCheckMask.style.width);
        dfbfCheckSpanOne.style.color = 'white';
        // console.log('鼠标移出dfOutWidth：'+dfOutWidth);
        dfMaskCheckAni[1] = setInterval(()=>{
            if(dfOutWidth < 0){
                clearInterval(dfMaskCheckAni[1]);
            }
            bfCheckMask.style.width = dfOutWidth + 'px';
            dfOutWidth -= 5;
        },10)
    }
    //查询更多按钮，动画end

    //轮播图的动画start
    for(let i = 0 ;i < bfButtonGroup.length;i++){
        bfButtonGroup[i].onclick = ()=>{
            // console.log('这是第'+i+1+'个button');
            clearInterval(auto1);
            bfButtonGroup[0].style.pointerEvents = 'none';
            bfButtonGroup[1].style.pointerEvents = 'none';
            clickdfAnimote(i);
        }
    }
    function clickdfAnimote(num){
        opacity2 = 0;
        opacity3 = 1;
        auto2 = setInterval(() => {
            if(opacity2 > 1){
                bfButtonGroup[0].style.pointerEvents = 'auto';
                bfButtonGroup[1].style.pointerEvents = 'auto';
                // console.log('执行了清除动画的操作');
               clearInterval(auto2);
            }
            if(num == 0){
                bfListA[0].style.opacity = opacity2;
                bfListA[1].style.opacity = opacity3;

                bfButtonGroup[0].style.width = 25 + 'px';
                bfButtonGroup[0].style.background = 'red';
                bfButtonGroup[1].style.width = 13 + 'px';
                bfButtonGroup[1].style.background = 'white';
            }else if(num == 1){
                bfListA[1].style.opacity = opacity2;
                bfListA[0].style.opacity = opacity3;

                bfButtonGroup[1].style.width = 25 + 'px';
                bfButtonGroup[1].style.background = 'red';
                bfButtonGroup[0].style.width = 13 + 'px';
                bfButtonGroup[0].style.background = 'white';
            }
            opacity2 += 0.01;
            opacity3 -= 0.01
            // console.log('执行了');
        }, 10);
    }
    dfAnimote();
    let times=1;
    function dfAnimote(){
        auto1 = setInterval(() => {
            if(opacity2 > 2){
                opacity2 = 0;
                opacity3 = 1;
                times = 0;
                if(number == 0){
                    number = 1;
                }else{
                    number = 0;
                }
            }
            if(number == 0 && times != 1){
                bfListA[0].style.opacity = opacity2;
                bfListA[1].style.opacity = opacity3;

                bfButtonGroup[0].style.width = 25 + 'px';
                bfButtonGroup[0].style.background = 'red';
                bfButtonGroup[1].style.width = 13 + 'px';
                bfButtonGroup[1].style.background = 'white';
            }else if(number == 1 && timer != 1){
                bfListA[1].style.opacity = opacity2;
                bfListA[0].style.opacity = opacity3;

                bfButtonGroup[1].style.width = 25 + 'px';
                bfButtonGroup[1].style.background = 'red';
                bfButtonGroup[0].style.width = 13 + 'px';
                bfButtonGroup[0].style.background = 'white';
            }
            opacity2 += 0.01;
            opacity3 -= 0.01
            // console.log('执行了');
        }, 30);
    }
     //轮播图的动画end

    //============================内容层第三层js====================
     //初始化第三层所有对象
     ThirdValue();  
     
     //内容层第三层，初始化新旧li背景图片的x轴和y轴值
     function ThirdValue(){
        // beepos = {x: 0,y: 0};
        // mouse = {x: 0,y: 0};

        old_coordinate[0] = ['-800','-646'];
        old_coordinate[1] = ['-82','-760'];
        old_coordinate[2] = ['-162','-760'];
        old_coordinate[3] = ['-881','-646'];
        old_coordinate[4] = ['-1','-760'];
        new_coordinate[0] = ['-243','-760'];
        new_coordinate[1] = ['-423','-760'];
        new_coordinate[2] = ['-603','-760'];
        new_coordinate[3] = ['-783','-760'];
        new_coordinate[4] = ['0','-842'];

        Cf_video_src = ['../video/indexPage/contentCf1.webm','../video/indexPage/contentCf2.webm','../video/indexPage/contentCf3.webm','../video/indexPage/contentCf4.webm','../video/indexPage/contentCf5.webm'];
        ThirdSrc[0] = ['../images/index/contentCfPerson1.png','../images/index/contentCfPerson1Dec1.png','../images/index/contentCfPerson1Dec2.png','../images/index/contentCfPerson1Tag.png','../images/index/contentCfPerson1Name.png',''];
        ThirdSrc[1] = ['../images/index/contentCfPerson2.png','../images/index/contentCfPerson2Dec1.png','../images/index/contentCfPerson2Dec2.png','../images/index/contentCfPerson2Tag.png','../images/index/contentCfPerson2Name.png',''];
        ThirdSrc[2] = ['../images/index/contentCfPerson3.png','../images/index/contentCfPerson3Dec1.png','../images/index/contentCfPerson3Dec2.png','../images/index/contentCfPerson3Tag.png','../images/index/contentCfPerson3Name.png',''];
        ThirdSrc[3] = ['../images/index/contentCfPerson4.png','../images/index/contentCfPerson4Dec1.png','../images/index/contentCfPerson3Dec2.png','../images/index/contentCfPerson4Tag.png','../images/index/contentCfPerson4Name.png','../images/index/contentCfPerson4Dec3.png'];
        ThirdSrc[4] = ['../images/index/contentCfPerson5.png','../images/index/contentCfPerson5Dec1.png','../images/index/contentCfPerson5Dec2.png','../images/index/contentCfPerson5Tag.png','../images/index/contentCfPerson5Name.png',''];

        cfPlayViedo = ['https://fight.v.netease.com/2020/0902/ff737c267b7481f2e2713a8625475427.mp4','https://fight.v.netease.com/2020/0902/c81cf5e9d3ff59fb8a5ee350bbf50bc3.mp4','https://fight.v.netease.com/2020/0902/37d94e86dd54d640158491b20a90c980.mp4','https://fight.v.netease.com/2020/0902/29968902390e5770a16d1e515a503574.mp4','https://fight.v.netease.com/2020/0902/553c23ab40e235da35e307eb866766df.mp4'];

    }

    //内容层第三层与人物相关的临时属性值
    function initPer(){
        ThirdPropertyValue[0] = 200;    //person的top值
        ThirdPropertyValue[1] = 1000;    //person的width值
        ThirdPropertyValue[2] = -200    //装饰物1的left值
        ThirdPropertyValue[3] = -243     //装饰物2的right值
        ThirdPropertyValue[4] = -131    //装饰物3的left值
        ThirdPropertyValue[5] =  200     //tag的right值
        ThirdPropertyValue[6] =  15   //name的left值
        ThirdPropertyValue[7] =  100    //btnPlay的right值
    }

        
   
 
    //内容层第三层鼠标移动的动画       
    // contentCf.onmousemove=function (e){
    //     imageMouse.style.left = 0 +'px'; 
    //     imageMouse.style.top =  0 + 'px';
    //     imageMouse.style.opacity = 1;
    //     //40.35
    
    //     imageMouse.style.left =  e.offsetX  + "px";
    //     imageMouse.style.top =  e.offsetY   + "px"; 

    //     contentCf.onmouseout = ()=>{
    //         imageMouse.style.opacity = 0;
    //     }
    // }


    //内容层第三层，内容设置属性
    for(let i= 0 ;i < cf_li.length; i++){
        cf_li[i].onclick = ()=>{
            currentObjectSub = i;   //保存内容层第三层的下标
            initPer();
            OldLi();    //将所有li背景图片的x和y轴设回原值及将li的宽度设回原值
            clickLi(0); //启用、禁用鼠标事件

            Cf_video.innerHTML = '<video autoplay muted loop><source type="video/mp4" src='+Cf_video_src[i]+'></source></video>';//给第三层添加视频(点击li播放视频)

            //第三层li背景图片-精灵图的x和y值
            cf_li[i].style.backgroundPositionX  = new_coordinate[i][0]+"px";
            cf_li[i].style.backgroundPositionY = new_coordinate[i][1]+"px";

        
            //内容第三层，人物及及相关装饰物添加背景图片
            cf_person.style.backgroundImage = 'url('+ThirdSrc[i][0]+')';
            cf_person.style.backgroundPosition = '230' +'px' +'top';
            decorate1.style.backgroundImage  ='url('+ThirdSrc[i][1]+')';
            decorate2.style.backgroundImage  ='url('+ThirdSrc[i][2]+')';
            decorate3.style.backgroundImage = 'url('+ThirdSrc[i][5]+')';
            tag.style.backgroundImage  ='url('+ThirdSrc[i][3]+')';
            tagName.style.backgroundImage = 'url('+ThirdSrc[i][4]+')';
            tagBtnPlay.style.backgroundImage = 'url(../images/index/contentCf_arrow1.png)';
            tagName.style.backgroundImage = 'url('+ThirdSrc[i][4]+')';
            animote(i); //为人物及相关装饰设置动画       
        }
    }


    //内容第三层，人物及及相关装饰物设置动画
    function animote(i){
        cf_li[i].style.width =0+"px";
        width = 0;
        top = 200;
        opacity = 0.01;
        opacity1 = 0.01;

        //设置person的动画
        auto = setInterval(()=>{
            if(ThirdPropertyValue[0] <= 0){
                // cf_person.style.width = 1210 + 'px';
                clickLi(1);
                // personWdith();
                clearInterval(auto);
            }
            cf_person.style.top = ThirdPropertyValue[0]+'px';
            ThirdPropertyValue[0]-=10;

            // console.log('top的值：'+cf_person.style.top);
            if(opacity != 1){
                cf_person.style.opacity  = opacity;
                opacity += 0.05;
            }
            if(parseInt(cf_li[i].style.width) < 180){
                cf_li[i].style.width = width+'px';
                width+=20;
            }
            // console.log('执行了');
        },35);

        timer = setInterval(()=>{
            if(ThirdPropertyValue[2] == 0){
                clearInterval(timer);
            }
            //装饰1的动画
            decorate1.style.left = ThirdPropertyValue[2] +"px";
            ThirdPropertyValue[2] += 10;
            // console.log('装饰物1的left值:'+decorate1.style.left);

            //装饰2的动画
            if(ThirdPropertyValue[3] < -144){
                decorate2.style.right = ThirdPropertyValue[3] +"px";
                ThirdPropertyValue[3] += 10;
                // console.log("装饰物2的right值："+decorate2.style.right);
            }

            //装饰3的动画
            if(ThirdPropertyValue[4] < 31){
                decorate3.style.left = ThirdPropertyValue[4] + "px";
                ThirdPropertyValue[4] += 10;
                // console.log("装饰物3的left值："+decorate3.style.left);
            }

            //tag的动画
            if(ThirdPropertyValue[5] > 130){
                tag.style.right = ThirdPropertyValue[5] + "px";
                ThirdPropertyValue[5] -= 10;
                // console.log("tag的right值："+tag.style.right);
            }

            ////tagName的动画
            if(ThirdPropertyValue[6] < 106 ){
                tagName.style.right = ThirdPropertyValue[6] + "px";
                ThirdPropertyValue[6] += 10;
                // console.log("tagName的right值："+tagName.style.right);
            }

            //tagBtnPlay的动画
            if(ThirdPropertyValue[7] > 50){
                tagBtnPlay.style.right = ThirdPropertyValue[7] + "px";
                ThirdPropertyValue[7] -= 10;
                // console.log("tagBtnPlay的right值："+tagBtnPlay.style.right);
            }

            //所有动画的透明度动画
            if(opacity != 1){
                decorate1.style.opacity = opacity1;
                decorate2.style.opacity = opacity1;
                decorate3.style.opacity = opacity1;
                tag.style.opacity = opacity1;
                tagBtnPlay.style.opacity = opacity1; 
                opacity1 += 0.05;
            }
        },10)
    }

    //内容第三层，点击内容区域播放视频
    clickVie.onclick = ()=>{
        ThirdViedoPlay.innerHTML =  '<video autoplay  loop controls id="Cvideo"><source type="video/mp4" src='+cfPlayViedo[currentObjectSub]+'></source></video>';
        ThirdViedoPlay.style.width = document.body.clientWidth;
        ThirdViedoPlay.style.height =  document.body.clientHeight;
        
    }
    
    ThirdViedoPlay.onclick = ()=>{
        ThirdViedoPlay.innerHTML=""        
    }

    //内容层第三层，默认触发第一个事件
    cf_li[0].onclick();

    //内容层第三层，原li背景图片的x轴和y轴及原li的宽度
    function OldLi(){
        for(let i = 0 ;i < cf_li.length;i++){
            cf_li[i].style.width = 81+"px";
            cf_li[i].style.backgroundPositionX  = old_coordinate[i][0]+"px";
            cf_li[i].style.backgroundPositionY = old_coordinate[i][1]+"px";
            // console.log("下标"+i);
        }
    }

    //内容层第三层，将所有的li设置为禁用/启用鼠标事件
    function clickLi(state){
        if(state == 0){
            //禁用鼠标事件
            for(let i = 0 ;i < cf_li.length;i++){
                cf_li[i].style.pointerEvents = 'none';
            }
        }else{
            //启用鼠标事件
            for(let i = 0 ;i < cf_li.length;i++){
                cf_li[i].style.pointerEvents = 'auto';
            }
        }
    }

    //=====================第四层动画==========================
    let DfMask = document.getElementsByClassName('DfMask')[0];
    let dfMoreBtn  = document.getElementById('dfMorebtn');
    function DfPlayVie(){
        let dfShowVideo = document.getElementById('dfShowVideo');
        DfMask2.style.backgroundImage = 'url(../images/index/contentDf_bg.png)';
        DfBtn.style.backgroundImage = 'url(../images/index/contentDfCloseButton.png)';
        // alert('执行了');

        
        dfShowVideo.innerHTML = 
        `<video autoplay muted loop controls = "true"  id="DfVideo">
            <source type="video/mp4" src='https://fight.v.netease.com/2020/0902/ff737c267b7481f2e2713a8625475427.mp4' id="DfVideoSource">
        </source>`
        DfVideo.style.width = 1349 + "px";
        DfVideo.style.height = 917 + "px";
        DfMask.style.zIndex = 1;
        f = 1;
    }

    DfBtn.onclick = ()=>{
        if(f == 0){
            let num=1;
            DfMask2.style.backgroundImage = 'url(../images/index/dfMask2.svg)';
            DfBtn.style.pointerEvents = 'none';
            dfMoreBtn.style.opacity = 0;
            auto = setInterval(() => {
                if(num >= 123){
                    DfPlayVie();
                    DfBtn.style.pointerEvents = 'auto';
                    clearInterval(auto);
                }
                DfMask2.style.transform = "scale("+ num +")";
                num +=1 ;
                // console.log('倍数:'+num);
            }, 20);
        }else if(f == 1){
            //关闭视频播放
            dfShowVideo.innerHTML = 
            ` <video autoplay muted loop id="DfVideo">
                <source type="video/mp4" src='../video/indexPage/contentDF1.mp4' id="DfVideoSource">
                </source>
            </video> `;
            DfBtn.style.backgroundImage = 'url(../images/index/contentDfPlayButton.png)';
            document.documentElement.style.overflowY = 'auto' ;
            DfMask2.style.backgroundImage = 'url(../images/index/contentDf_bg.png)'
            // alert('第二次点击');
            DfMask.style.zIndex = 1;
            DfMask2.style.transform = "scale("+1+")";
            DfMask.style.zIndex = 3;
            dfMoreBtn.style.opacity = 1;
            f=0;
        }
        
    }
}