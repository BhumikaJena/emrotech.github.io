let resbtn = document.getElementById('resbtn');
let newpass = document.getElementById('newpass');
let rnewpass = document.getElementById('rnewpass');
let len = document.getElementById('newpass').length;
let val=document.getElementById('newpass').value;
resbtn.addEventListener("click", function (e) {
    if(document.getElementById('newpass').value.search(/[a-z]/) < 0 || document.getElementById('newpass').value.search(/[A-Z]/) < 0 || document.getElementById('newpass').value.search(/[0-9]/) < 0 || document.getElementById('newpass').value.search(/[!@#\$%\^&\*_]/) < 0){
        document.getElementById("error2").style.display = "block";
        document.getElementById("newpass").style.borderColor = 'red';
    }
    else if (newpass.value == rnewpass.value) {
        document.getElementById("formdiv").style.display = "none";
        document.getElementById("bodydiv").innerHTML = `
    <div class="flex items-center justify-center flex-col mt-16">
        <h2 class=" font-bold text-2xl font-sans mb-4">Password Changed</h2>
        <div class="ml-4">
        <pre>
        Your password has been updated! Now get 
        back in the driver seat, racers are 
        waiting for you!
        </pre>
        </div>
        <button class=" bg-black text-white p-3 px-9 w-56 ml-4 rounded-md " id="resbtn">JOIN A RACE</button>
    </div>
          `
    }
    else {
        document.getElementById("error").style.display = "block";
        document.getElementById("rnewpass").style.borderColor = 'red';
    }
});