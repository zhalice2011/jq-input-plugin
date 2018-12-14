(function( $ ){
    $.fn.myPop = function(options) {
        try {
            this.each(function(x, dom) {

                if (dom.tagName !== 'INPUT') return

                var inputDom = $(this)

                var ph = inputDom.data('placeholder')
                var name = inputDom.attr('name')
                var value = inputDom.val()

                inputDom.wrap('<div class="form-item"></div>')

                var labelDom = null
                var label = '<label class="input-label" for='+name+'>' + ph + '</label>'
                labelDom = $(label)
                if (value === '') {
                    inputDom.after(labelDom)
                }

                inputDom.focus(function(){
                    inputDom.addClass('input-text-focus')
                    labelDom.addClass('input-label-focus')
                    inputDom.parent().addClass('form-section-focus')
                })

                inputDom.blur(function(){
                    inputDom.parent().removeClass('form-section-focus')
                    inputDom.removeClass('input-text-focus')

                    if (inputDom.val() === '') {
                        labelDom.removeClass('input-label-focus')
                    }
                })
            });
        } catch (e) {
            console.log('e :', e);
        }
    };
})( jQuery );
