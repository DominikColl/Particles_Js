const target=document.querySelector('#list');
const links=['https://online.fullsail.edu/login','Google.Com','Github.com','https://drive.google.com/drive/my-drive'];
 populateList=()=>{
     target.innerHTML=`<li><a href=${links[0]}>FSO</a></li><li><a href=${links[1]}>Google</a></li><li><a href=${links[2]}>GitHub</a></li>`
 }
 populateList();