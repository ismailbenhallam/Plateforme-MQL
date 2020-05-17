function load_content( e ) {
    var id = e.target.id;
    if(id) {
        document.getElementById("main").innerHTML='<object type="text/html" data="'+id+'.html" ></object>';
    }
    else {
        console.log('nothing');
    }
     
}