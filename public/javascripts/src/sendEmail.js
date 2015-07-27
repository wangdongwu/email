$(function(){
    $('#J_subBt').on('click',function(){
        $.post('/contact',{
            name : localStorage.getItem('name'),
            email : localStorage.getItem('email'),
            to : localStorage.getItem('to'),
            subject : localStorage.getItem('name')+'【周报】'+$('#J_startTime').val()+'--'+$('#J_endTime').val(),
            context : $('#J_context').val()
        },function(data){
            var dialog = {};
            if(data.success){
                dialog = $('#J_success').modal({
                    show : true
                });
            }else{
                dialog = $('#J_error').modal({
                    show : true
                });
            }
            dialog.delay(600).modal('hide');
        })
    })
})