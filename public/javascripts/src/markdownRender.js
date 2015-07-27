$(function(){
    var $JhtmlInner =$('#J_htmlInner');
    $('#J_context').on('change keypress keyup keydown',function(){
        $JhtmlInner.html(marked($(this).val()));
    });

})