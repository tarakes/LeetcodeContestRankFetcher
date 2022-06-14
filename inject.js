let myobj={};
let listsize=0;
let len=0;
let pageNumber=1;
let temparr=JSON.parse(localStorage.getItem("leetcode_friendlist"));
if(temparr)
listsize=temparr.length;

if(temparr){
    for(let i=0;i<temparr.length;i++){
        let node=document.createElement("div");
        node.innerHTML=`<p>${temparr[i].username}</p>`;
        document.getElementById("list").appendChild(node);
    }
}


async function fetchapi(pageno,contest){
   
    fetch(`https://leetcode.com/contest/api/ranking/${contest}/?pagination=${pageno}&region=global`)
    .then(res=>res.json())
    .then((data)=>{
let rankarr=data.total_rank;
let locallist=JSON.parse(localStorage.getItem("leetcode_friendlist"));
for(let i=0;i<rankarr.length;i++){
    for(let j=0;j<locallist.length;j++)
    {
        if(locallist[j].username===rankarr[i].username){
            len++;
        //    console.log(locallist[j].username);
   let row=document.getElementById(locallist[j].username);
            //if row does not exist create a new row
            if(!row){
                let table = document.getElementById("ranklist");
let newrow = table.insertRow(1);
newrow.setAttribute("id",rankarr[i].username);
let cell1 = newrow.insertCell(0);
let cell2 = newrow.insertCell(1);
let cell3=   newrow.insertCell(2);


cell1.innerHTML = rankarr[i].username;
cell2.innerHTML = rankarr[i].rank;
cell3.innerHTML=  rankarr[i].score;
            }else{ 
                row.cells[1]=rankarr[i].rank;
                row.cells[2]=rankarr[i].score;
            
        }
    }
}
}
if(len<listsize)
{
 
    fetchapi(pageno+1,contest);
}

    })

   
}


function fetchapicaller(pagenumber,contestcodenum){
    fetchapi(pagenumber,contestcodenum);
}
