let input2=document.getElementById("input2")
let pass= document.getElementById("pass")
let btn=document.getElementById("btn")
function changepass() {
    let chr = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y','z','A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y','Z']
    let num =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let spl =["!","@","#","$","%","^","&","*","(",")"]
    let newpass=""
    
    // let randomchr1 = Math.floor(Math.random() * chr.length)
    // let randomchr2 = Math.floor(Math.random() * chr.length)
    // let randomchr3 = Math.floor(Math.random() * chr.length)
    // let randomchr4 = Math.floor(Math.random() * chr.length)
    // let randomchr5 = Math.floor(Math.random() * spl.length)
    // let randomchr6 = Math.floor(Math.random() * spl.length)
    // let randomchr7 = Math.floor(Math.random() * num.length)
    // let randomchr8 = Math.floor(Math.random() * num.length)
    // newpass= chr[randomchr1] + chr[randomchr2] + chr[randomchr3] + chr[randomchr4] + spl[randomchr5] + spl[randomchr6] + num[randomchr7] + num[randomchr8]
    for(let i=0;i<4 ;i++){
        let randomchr=Math.floor(Math.random() * chr.length)
        newpass=newpass+chr[randomchr] 
        
    }
    for(let i=0;i<2 ;i++){
        let randomchr=Math.floor(Math.random() * num.length)
        newpass=newpass+num[randomchr] 
    }
    for(let i=0;i<2 ;i++){
        let randomchr=Math.floor(Math.random() * spl.length)
        newpass=newpass+spl[randomchr] 
    }
    pass.innerHTML= newpass
    // console.log(newpass)
}
btn.addEventListener("click", () => { changepass() })