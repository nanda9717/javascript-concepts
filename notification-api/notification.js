function notifyMe(){
    alert("About to notify!");
    // Ask for permission
    Notification.requestPermission()
        .then((userPermission)=>{
            if(userPermission === 'default'){
                alert("Please provide permission.");
            }else if(userPermission === 'denied'){
                alert("You denied the permission.")
            }else{
                new Notification('New mail', {body: 'You have a new mail'});
            }
            console.log(userPermission);
        });
}