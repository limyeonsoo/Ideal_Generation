$(document).ready(function(){
    $("#all_select_btn").click(function(){
        console.log("clicked");
        if($("#all_select_btn").prop("checked")){
            $("input[name=chk]").prop("checked",true);
        }else{
            $("input[name=chk]").prop("checked",false);
        }
    })
})
