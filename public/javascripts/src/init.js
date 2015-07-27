$(function(){
    $('#J_startTime').datepicker({
        format: 'yyyy-mm-dd',
        todayHighlight : true,
        weekStart: 7,
        startDate: '-5d'
    });
    $('#J_endTime').datepicker({
        format: 'yyyy-mm-dd',
        weekStart: 7,
        todayHighlight : true
    });
    var tpl = {
        tpl1 :  '###标题\n'+
                '> 注解\n'+
                '\n'+
                '|标题1|标题2|\n' +
                '|----|:---:|\n' +
                '|内容|内容|\n',

        tpl2 :  '###标题\n'+
                '> 注解\n'+
                '\n'+
                '|标题1|标题2|标题3|\n' +
                '|----|:---:|---:|\n' +
                '|内容|内容|内容|\n',
        tpl3 :  '###标题\n'+
                '> 注解\n'+
                '\n'+
                '|标题1|标题2|标题3|标题3|\n' +
                '|----|:---:|---:|---:|\n' +
                '|内容|内容|内容|内容|\n',
        tpl4 :  '###标题\n'+
                '> 注解\n'+
                '\n'+
                '\n'+
                '*  列表\n'+
                '*  列表\n'+
                '\n'+
                '\n'+
                '1. 数字列表\n'+
                '2. 数字列表\n'
    }

    $('.J_tml').on('click',function(e){
        var $target = $(e.target);
        $('#J_context').val(tpl[$target.data('tpl')]).trigger('change');
    })
})