/*
* @Author: Lenovo
* @Date:   2018-03-06 11:35:52
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-07 13:45:45
*/
// 获取下拉列表
var oli=document.querySelectorAll(".wrap_left1>li");
var oul=document.querySelectorAll(".wrap_left1>li>ul");
var con=document.querySelectorAll(".cont>div");
var title=document.querySelector(".title span:first-child");
console.log(title);
console.log(oli);
for(var i=0;i<oli.length;i++){ 
  // console.log(i);
 	oli[i].index=i;
	oli[i].onclick=function(e){
		
		// console.log(this)
		  	// e.stopPropagation();
		  	// e.stopImmediatePropagation();
		  	// 判断是否隐藏下拉菜单
			if(this.children[2].style.display=="block"){
				this.children[2].style.display="none";
			}else{
				this.children[2].style.display="block";
			}
			// console.log(this);
			// 切换标题
			var tem_title=this.children[1].innerHTML
			title.innerHTML=tem_title;
			// 清除子元素冒泡
               for(let i=0;i<oul.length;i++){ 
                  oul[i].onclick=function(e){
                  	// console.log(this)
                      e.stopPropagation();
                  }
                
              };
 
			
              for(let i=1;i<con.length;i++){ 
                  con[i].className='hidden';
                
              };
              // console.log(this.index)
              con[this.index].className='show';
          

	}
}


