window.onload=function(){
    var oBox=document.getElementById('box');
    var timer=null;
    function startmove(iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            //�󲽳���Ϊ�������ƶ���Ϊ�������ƶ���10Ϊ�Զ���
            var speed=(iTarget-oBox.offsetLeft)/10;
            //�Բ���ȡ��������0����ȡ����С��0����ȡ����ԭ���������Խ��Խ�󣬸���Խ��ԽС
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //����left��ֵ
            oBox.style.left=oBox.offsetLeft+speed+'px';
        },30)
    }

    oBox.onmouseenter=function(){
        startmove(0);
    }
    oBox.onmouseleave=function(){
        startmove(-200);
    }
}