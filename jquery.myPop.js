;(function($) {
    $.fn.myPop = function(options = {}) {
        var inputClass = options.inputClass || '';
        var labelClass = options.labelClass || '';
        this.each(function(x, dom) {
            if (dom.tagName !== 'INPUT') return

            var inputDom = $(this)
            var ph = inputDom.data('placeholder') || ''
            var name = inputDom.attr('name')
            var value = inputDom.val()

            if (inputDom.parent().hasClass('form-item')) {
                const lableNode = $(inputDom.siblings()[0])
                if (value === '') {
                    lableNode.css({
                        top: inputDom.height() / 2 - 9,
                        left: dom.offsetLeft + 5,
                    })
                } else {
                    lableNode.css({
                        top: -9,
                        left: dom.offsetLeft + 5,
                        fontSize: '12px',
                    })
                }
            }

            inputDom.wrap('<div class="form-item"></div>')
            var labelDom = null
            var label =
                '<label class="input-label" for=' + name + '>' + ph + '</label>'
            labelDom = $(label)
            if (value === '') {
                labelDom.css({
                    top: inputDom.height() / 2 - 9,
                    left: dom.offsetLeft + 5,
                })
            } else {
                labelDom.css({
                    top: -9,
                    left: dom.offsetLeft + 5,
                    fontSize: '12px',
                })
            }

            inputDom.after(labelDom)

            inputDom.focus(function() {
                inputDom.addClass('input-text-focus')
                inputDom.addClass(inputClass)
                labelDom.addClass('input-label-focus')
                labelDom.addClass(labelClass)
                inputDom.parent().addClass('form-section-focus')
                labelDom.css({
                    top: -9
                })
            })

            inputDom.blur(function() {
                inputDom.parent().removeClass('form-section-focus')
                inputDom.removeClass('input-text-focus')
                inputDom.removeClass(inputClass)

                if (inputDom.val() === '') { //
                    labelDom.removeClass('input-label-focus')
                    labelDom.removeClass(labelClass)
                    labelDom.css({
                        top: inputDom.height() / 2 - 9,
                    })
                } else {
                    labelDom.css({
                        top: -9,
                    })
                }
            })

            inputDom.bind("input propertychange",function(e){
                if (e.target.value === '') {
                    labelDom.removeClass('input-label-focus')
                    labelDom.removeClass(labelClass)
                    labelDom.css({
                        top: inputDom.height() / 2 - 9,
                    })
                } else {
                    labelDom.addClass('input-label-focus')
                    labelDom.css({
                        top: -9,
                    })
                }
         });
        })
    }
})(jQuery)
