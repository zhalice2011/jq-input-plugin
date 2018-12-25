;(function($) {
    $.fn.myPop = function(options = {}) {
        var inputClass = options.inputClass || '';
        var labelClass = options.labelClass || '';
        this.each(function(x, dom) {
            if (dom.tagName !== 'INPUT') return

            var inputDom = $(this)
            var ph = inputDom.data('placeholder') || ''
            var mode = inputDom.data('effect') || '1'
            var name = inputDom.attr('name')
            var value = inputDom.val()

            var labelDom = null
            if (inputDom.parent().hasClass('form-item')) {
                labelDom = inputDom.parent().find('.input-label')
            } else {
                inputDom.wrap('<div class="form-item"></div>')
                var label =
                '<label class="input-label" for=' + name + '>' + ph + '</label>'
                labelDom = $(label)
                inputDom.after(labelDom)
            }

            if (value === '') {
                labelDom.css({
                    top: inputDom.height() / 2 - 9,
                    left: dom.offsetLeft + 5,
                })
            } else {
                if (mode === '1') {
                    labelDom.css({
                        top: -9,
                        left: dom.offsetLeft + 5,
                        fontSize: '12px',
                    })
                } else {
                    labelDom.css({
                        fontSize: '14px',
                        left: inputDom.offset().left + inputDom.width() - labelDom.width()
                    })
                }
            }
            inputDom.focus(function() {
                inputDom.addClass('input-text-focus')
                inputDom.addClass(inputClass)
                labelDom.addClass('input-label-focus')
                labelDom.addClass(labelClass)
                inputDom.parent().addClass('form-section-focus')
                if (mode === '1') {
                    labelDom.css({
                        top: -9
                    })
                } else {
                    labelDom.css({
                        fontSize: '14px',
                        left: inputDom.position().left + inputDom.width() - labelDom.width()
                    })
                }

            })
            inputDom.blur(function() {
                inputDom.parent().removeClass('form-section-focus')
                inputDom.removeClass('input-text-focus')
                inputDom.removeClass(inputClass)

                if (inputDom.val() === '') { //
                    labelDom.removeClass('input-label-focus')
                    labelDom.removeClass(labelClass)
                    if (mode === '1') {
                        labelDom.css({
                            top: inputDom.height() / 2 - 9,
                        })
                    } else {
                        labelDom.css({
                            left: dom.offsetLeft + 5,
                        })
                    }
                } else {
                    if (mode === '1') {
                        labelDom.css({
                            top: -9,
                        })
                    } else {
                        labelDom.css({
                            fontSize: '14px',
                            left: inputDom.offset().left + inputDom.width() - labelDom.width()
                        })
                    }
                }
            })
            inputDom.bind("input propertychange",function(e){
                if (e.target.value === '') {
                    labelDom.removeClass('input-label-focus')
                    labelDom.removeClass(labelClass)
                    if (mode === '1') {
                        labelDom.css({
                            top: inputDom.height() / 2 - 9,
                        })
                    } else {
                        labelDom.css({
                            left: dom.offsetLeft + 5,
                        })
                    }

                } else {
                    labelDom.addClass('input-label-focus')
                    if (mode === '1') {
                        labelDom.css({
                            top: -9,
                        })
                    } else {
                        labelDom.css({
                            left: inputDom.offset().left + inputDom.width() - labelDom.width()
                        })
                    }
                }
            })
        })
    }
})(jQuery)
