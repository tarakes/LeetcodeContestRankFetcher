document.getElementById("addbtn").addEventListener("click",()=>{
    let leetcode=document.getElementById("fname").value;
    leetcode=leetcode.trim();
    if(leetcode==="")
    alert("please enter a valid id");
    else{
       // let arr=JSON.parse(localStorage.getItem("leetcode_friendlist"));
        listsize++;
        if(temparr){
             temparr=[...temparr,{username:leetcode}];
            
            localStorage.setItem("leetcode_friendlist",JSON.stringify(temparr));
            let node=document.createElement("div");
            node.innerHTML=`<p>${leetcode}</p>`
            document.getElementById("list").appendChild(node);
            document.getElementById("fname").value="";
          }
          else{
             temparr=[{username:leetcode}];
            localStorage.setItem("leetcode_friendlist",JSON.stringify(temparr));
            let node=document.createElement("div");
            node.innerHTML=`<p>${leetcode}</p>`
            document.getElementById("list").appendChild(node);
            document.getElementById("fname").value="";
          }
    }
})


document.getElementById("monitorbtn").addEventListener("click",(e)=>{
    let code=document.getElementById("contest_code").value;
    code=code.trim();
    if(code===""){
        alert("please fill a valid contest id");
        return;
    }
e.target.disabled=true;
fetchapicaller(pageNumber,code);
   setInterval(() => {
    len=0;
    fetchapicaller(1,code);
   }, 5*60*1000);

})
