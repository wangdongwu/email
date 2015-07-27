$(function(){
    var name =  localStorage.getItem('name'),
        to =  localStorage.getItem('to');

    if(!to){
        $('#loginModal').modal({
            keyboard: false,
            show : true,
            backdrop : 'static'
        });
    }else{
        $('#J_email_con').removeClass('hide');
        $('#J_show_email').text(name);
        $('#J_name').val(name);
        $('#J_to').val(to);
    }

    $('#J_login').on('click',function(){
        name = $('#J_login_name').val();
        to = $('#J_login_to').val();

        localStorage.setItem('name',name);
        localStorage.setItem('to',to);

        if(name && to){
            $('#J_show_email').text(name);
            $('#loginModal').modal('hide');
            $('#J_email_con').removeClass('hide');
        }else{
            $('#J_email_con').addClass('hide');
        }

    });

    $('#J_login_name').val(name);
    $('#J_login_to').val(to);

})