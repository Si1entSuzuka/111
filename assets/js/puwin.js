
window.onload=function(){
var oBox=document.getElementById('box');
var oShare=document.getElementById('share');
var timer=null;  //����һ���յĶ�ʱ��

function startmove(iTarget){
    var speed=0;  //���岽��
    clearInterval(timer); //ÿ�ε��ú�������ִ�йرն�ʱ���Ĵ��룬Ŀ���Ƿ�ֹ��β������¼�ʱ�����ӳ��ֱ��ٵ�Bug
    timer=setInterval(function(){
        if(oBox.offsetLeft<iTarget){  //Ŀ��ֵ���¼����ú����д��룬��������߾�С��Ŀ��ֵʱ��˵����û�ƶ���ָ��λ�ã��ò���=10�������˶�
            speed=10;
        }
        else{    //������ǳ�����Ŀ��ֵ���ò���=-10�������˶�
            speed=-10;
        }
        if(oBox.offsetLeft==iTarget){   //��������߾����Ŀ��ֵʱ���͹رռ�ʱ��
            clearInterval(timer);
        }
        else{
            oBox.style.left=oBox.offsetLeft+speed+'px';   //������ߵľ��룬���ƶ��ľ��룬ע����ϵ�λ�����else��֧Ҳ�����һ��bug:����������ͣ�����󣬼�����������˶������Լ���else��֧
        }
    },30)
}
//��������
oBox.onmouseover=function(){
    startmove(0);
}
oBox.onmouseout=function(){
    startmove(-200);
}

