window.onload = function () {

  // Меню
  function menu() {
    let hasChild = $('.js-has-child');
    let link = hasChild.children('a');
    link.on('click', function (e) {
      e.preventDefault();
      let linkCurrent = $(this);
      let submenu = linkCurrent.next('ul');
      if (!linkCurrent.hasClass('active')) {
        linkCurrent.addClass('active');
        submenu.slideDown(200).addClass('open');
      }else {
        submenu.slideUp(200).removeClass('open');
        submenu.find('ul').slideUp(0).removeClass('open');
        submenu.find('.js-has-child a').removeClass('active');
        linkCurrent.removeClass('active');
      }
    });
  }
  menu();

  // // Липкое меню.
  // function stikyMenu(header) {
  //   let headerTop = header.offset().top;
  //   headerToggleClass();
  //   $(window).scroll(function () {
  //     headerToggleClass();
  //   });
  //   function headerToggleClass() {
  //     if ($(window).scrollTop() > headerTop + 130) {
  //       header.addClass('sticky');
  //     } else if ($(window).scrollTop() <= headerTop) {
  //       header.removeClass('sticky');
  //     }
  //   }
  // };
  // stikyMenu($('#headerSticky'));

  // // Swiper | Слайдер
  // if ($('#swiper').length) {
  //   const swiper = new Swiper('#swiper', {
  //     slidesPerView: 1,
  //     simulateTouch: false,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });
  // }

  // Air Datepicker | Календарь в блоке "filter"
  new AirDatepicker('#date', {
    range: true,
    multipleDatesSeparator: '-',
    prevHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.15325 4.51427L5.1705 7.27282L4.37512 8L3.49691e-07 4L4.37513 -4.04319e-07L5.1705 0.727179L2.15325 3.48573L9 3.48573L9 4.51427L2.15325 4.51427Z"/>
    </svg>`,
    nextHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.84675 3.48573L3.8295 0.72718L4.62488 8.08639e-07L9 4L4.62487 8L3.8295 7.27282L6.84675 4.51427L-7.893e-07 4.51427L-6.09464e-07 3.48573L6.84675 3.48573Z"/>
    </svg>`,
    showOtherMonths: false,
    selectOtherMonths: false,
  });

  // Air Datepicker | Календарь "дата потребности"
  new AirDatepicker('#dateNeed', {
    prevHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.15325 4.51427L5.1705 7.27282L4.37512 8L3.49691e-07 4L4.37513 -4.04319e-07L5.1705 0.727179L2.15325 3.48573L9 3.48573L9 4.51427L2.15325 4.51427Z"/>
    </svg>`,
    nextHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.84675 3.48573L3.8295 0.72718L4.62488 8.08639e-07L9 4L4.62487 8L3.8295 7.27282L6.84675 4.51427L-7.893e-07 4.51427L-6.09464e-07 3.48573L6.84675 3.48573Z"/>
    </svg>`,
    showOtherMonths: false,
    selectOtherMonths: false,
    autoClose: true,
  });

  // Air Datepicker | Календарь "дата заказа"
  new AirDatepicker('#dateOrder', {
    prevHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.15325 4.51427L5.1705 7.27282L4.37512 8L3.49691e-07 4L4.37513 -4.04319e-07L5.1705 0.727179L2.15325 3.48573L9 3.48573L9 4.51427L2.15325 4.51427Z"/>
    </svg>`,
    nextHtml: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.84675 3.48573L3.8295 0.72718L4.62488 8.08639e-07L9 4L4.62487 8L3.8295 7.27282L6.84675 4.51427L-7.893e-07 4.51427L-6.09464e-07 3.48573L6.84675 3.48573Z"/>
    </svg>`,
    showOtherMonths: false,
    selectOtherMonths: false,
    autoClose: true,
  });

  // Select2 || Стилизация селектов
  $('.js-select-styled ').select2({
    minimumResultsForSearch: Infinity,
    placeholder: function () {
      $(this).data('placeholder');
    }
  });

  // Magnific Popup | Попап окна
  $('.open-popup-link').magnificPopup({
    mainClass: 'mfp-fade',
    callbacks: {
      open: function () {
        $('.popup-close-btn').on('click', function (event) {
          event.preventDefault();
          $.magnificPopup.close();
        });
      }
    }
  });

  // // Табы
	function tabs() {
    const tabs = $('.js-tabs');
		if (tabs.length) {
			tabs.each( function () {
        let triggers = $(this).find('.js-tabs-trigger');
        let contents = $(this).find('.js-tabs-content');
        let time = 0;
        triggers.on('click', function (e) {
          e.preventDefault();
          let trigger = $(this);
          let content = $('.js-tabs-content[data-href="' + trigger.attr('href') +'"]');
          if (!trigger.hasClass('active')) {
            triggers.removeClass('active');
            trigger.addClass('active');
            contents.hide();
            contents.removeClass('open');
            content.fadeIn(time, function () {
              $(this).addClass('open');
            });
          }else {
            return false;
          }
        })
      });
		}
	}
	tabs();

  // // Аккордеон
  // function accordion(accordion, settings) {
  //   if (accordion.length) {
  //     $('.js-accordion').each(function () {
  //       let currentAccordion = $(this);
  //       let trigger = currentAccordion.find('.js-accordion-trigger');
  //       let content = $('.js-accordion-content');
  //       let time = 300;
  //       trigger.on('click', function () {
  //         let currentTrigger = $(this);
  //         let data = currentTrigger.data('content');
  //         if (!currentTrigger.hasClass('active')) {
  //           if (settings) {
  //             content.stop().slideUp(
  //               time,
  //               function () {
  //                 $(this).removeClass('open');
  //               }
  //             )
  //             trigger.removeClass('active');
  //           };
  //           currentTrigger.addClass('active');
  //           currentAccordion.find('#' + data).stop().slideDown(
  //             time,
  //             function () {
  //               $(this).addClass('open')
  //             }
  //           );
  //         } else {
  //           currentTrigger.removeClass('active');
  //           currentAccordion.find('#' + data).stop().slideUp(
  //             time,
  //             function () {
  //               $(this).removeClass('open')
  //             }
  //           );
  //         }
  //       })
  //     })
  //   }
  // }
  // accordion($('.js-accordion'), false);

  // // Sticky Sidebar | Липкий сайдбар
  // if ($('.js-sticky').length) {
  //   var stickySidebar = new StickySidebar('.js-sticky', {
  //     topSpacing: 65,
  //     bottomSpacing: 10,
  //     containerSelector: false,
  //     innerWrapperSelector: '.sidebar__inner',
  //     resizeSensor: true,
  //     stickyClass: 'is-affixed',
  //     minWidth: 0
  //   });
  // }

  // // Кнопка скролла вверх страницы
  // function scrollUp() {
  //   const btn = $('.js-scrollup');
  //   $(window).scroll(function () {
  //     btnShowFade();
  //   });
  //   function btnShowFade() {
  //     if ($(this).scrollTop() > 200) {
  //       btn.addClass('show');
  //     } else {
  //       btn.removeClass('show');
  //     }
  //   }
  //   btnShowFade();
  //   btn.click(function () {
  //     $('body,html').animate({
  //       scrollTop: 0
  //     }, 500);
  //     return false;
  //   });
  // }
  // scrollUp();

  // // Показать еще в фильтрах
  // function showMoreFilters() {
  //   const list = $('.js-more-list');
  //   const btn = $('.js-more-btn');
  //   const count = 4;
  //   list.each(function () {
  //     $(this).find('li').each(function (index) {
  //       if (index > count - 1) {
  //         $(this).fadeOut();
  //       }
  //     })
  //   })
  //   btn.on('click', function () {
  //     $(this).fadeOut();
  //     $(this).parent().find($('.js-more-list li')).fadeIn();
  //   })
  // }
  // showMoreFilters();

  // // Очистить фильтр 
  // function clearFilter() {
  //   let clearBnt = $('.js-filters-clear');
  //   clearBnt.on('click', function () {
  //     $(this).closest('.filters').find('input').prop('checked', false);
  //   })
  // }
  // clearFilter();

  // Изменение количества товара (плюс минус)
  function counter(block) {
    const counter = document.querySelectorAll(block);
    if (counter) {
      counter.forEach(element => {
        const minus = element.querySelector('.js-counter-minus');
        const plus = element.querySelector('.js-counter-plus');
        const inputWrap = element.querySelector('.js-counter-input');
        const input = inputWrap.querySelector('input');
        plus.addEventListener('click', () => {
          if (Number(input.value) < 999) {
            input.value = Number(input.value) + 1;
          }
        })
        minus.addEventListener('click', () => {
          if (Number(input.value) > 0) {
            input.value = Number(input.value) - 1;
          }
        })
        input.addEventListener('keyup', () => {
          input.value = input.value.replace(/[^\d]/g, '');
        })
        input.addEventListener('blur', () => {
          if (input.value == '' || input.value == 0) {
            input.value = 0;
          }
        })
      });
    }
  }
  counter('.js-counter');

  // // noUiSlider || Ползунок выбора
  // if (document.getElementById('noUiSlider')) {
  //   const rangeSlider = document.getElementById('noUiSlider');
  //   const inputMin = document.getElementById('noUiSliderMin');
  //   const inputMax = document.getElementById('noUiSliderMax');
  //   let min = Number(rangeSlider.dataset.min);
  //   let max = Number(rangeSlider.dataset.max);
  //   let nowMin = Number(rangeSlider.dataset.nowmin);
  //   let nowMax = Number(rangeSlider.dataset.nowmax);
  //   console.log(nowMin,nowMax);
  //   noUiSlider.create(rangeSlider, {
  //     start: [nowMin, nowMax],
  //     connect: true,
  //     step: 10,
  //     range: {
  //       'min': min,
  //       'max': max
  //     }
  //   });
  //   rangeSlider.noUiSlider.on('update', function (values, handle) {
  //     if (handle) {
  //       inputMax.value = values[handle];
  //     } else {
  //       inputMin.value = values[handle];
  //     }
  //   });
  //   inputMin.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([this.value, null]);
  //   });
  //   inputMax.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([null, this.value]);
  //   });
  // };

  // Выпадайки при клике по кнопке
  // Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
  // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
  function dropBlock(btn, lock = false) {
    let $this = undefined,
        drop = undefined,
        close = $('.js-drop-close'),
        body = $('body');
    btn.on('click', function () {
      let $this = $(this);
      let drop = $('#' + $this.data('drop'));
      let scrollWidth = (window.innerWidth - $(window).width());
      if (!$this.hasClass('is-active')) {
        $this.addClass('is-active');
        drop.addClass('open');
        if (lock) {
          body.addClass('lock');
          body.css('padding-right', scrollWidth);
        }
      } else {
        $this.removeClass('is-active');
        drop.removeClass('open');
        body.removeClass('lock');
        body.css('padding-right', 0);
      }
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.removeClass('open');
          body.removeClass('lock');
          body.css('padding-right', 0);
        }
      });
    })
    close.on('click', function () {
      $('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
      $('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
      body.css('padding-right', 0);
    })
  }
  dropBlock($('.js-drop-btn'));
  dropBlock($('.js-modal-btn'));
  // dropBlock($('.js-drop-menu'), true);

  // Фильтр поиска
  function filterSearch() {
    let input = $('.sort__search input');
    let drop = $('.sort__search-drop');
    let li = drop.find('li');
    input.on('focus', function () {
      drop.addClass('open');
    });
    $(document).mouseup(function (e) {
      if (!input.is(e.target)
        && input.has(e.target).length === 0
        && !drop.is(e.target)
        && drop.has(e.target).length === 0) {
        drop.removeClass('open');
      }
    });
    li.on('click', function () {
      input.val($(this).text());
      drop.removeClass('open');
    });
    input.on("keyup", function () {
      var value = $(this).val().toUpperCase();
      li.filter(function () {
        $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
      });
    });
  }
  filterSearch();

  // Цвет у пункта в таблице когда отмечен чекбокс
  function checkboxColorItem() {
    let checkbox = $('.table__drop-checkbox input');
    checkbox.on('change', function () {
      console.log($(this).closest('tr'));
      $(this).closest('tr').toggleClass('active');
    })
  }
  checkboxColorItem();

  // Открывание вложенной таблицы при клике на родительский пункт таблицы
  function toggleTable() {
    let item = $('.js-table-item');
    let drop = $('.js-table-drop');
    item.on('click', function () {
      let itemCurrent = $(this);
      let dropCurrent = itemCurrent.next('tr').find('.js-table-drop');
      if (!itemCurrent.hasClass('active')) {
        itemCurrent.addClass('active');
        dropCurrent.addClass('open');
      }else {
        itemCurrent.removeClass('active');
        dropCurrent.removeClass('open');
      }
    })
  }
  toggleTable();

  // Вывод подсказки, если текст не вмещается
  function tooltipShowTextOverflow() {
    let block = $('.js-text-overflow');
    function overflow(e) {
      return e.scrollWidth > e.offsetWidth || e.scrollHeight > e.offsetHeight;
    }
    block.each(function () { 
      let blockCurrent = $(this);
      if (overflow(blockCurrent[0])) {
        let icon = $('<div class="text-overflow-icon"><svg class="icon-info"><use xlink: href= "img/sprite.svg#info"></use></div>');
        let drop = $('<div class="text-overflow-drop"></div>');
        drop.text(blockCurrent.text());
        blockCurrent.parent().append(icon);
        blockCurrent.parent().append(drop);
      }
    });
  }
  tooltipShowTextOverflow();

  // График уровня сервиса
  if ($('#chartStatistics'). length) {
    const chartStatistics = Highcharts.chart('chartStatistics', {

      chart: {
        type: 'line',
      },

      title: false,

      xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      },
      
      yAxis: {
        title: {
          enabled: false
        },
      },

      series: [{
        name: ' UNSERV',
        marker: {
          symbol: 'circle'
        },
        data: [80, 60, 60, 30, 80, 60, 100, 50, 80, 60, 40, 20],
        color: '#D9D9D9',
        dashStyle: 'dash',
      }, {
        name: 'SERV',
        marker: {
          symbol: 'circle'
        },
        data: [20, 40, 30, 50, 60, 40, 80, 60, 90, 60, 70, 60],
        color: '#4163BC',
      }],

      legend: {
        enabled: false,
      },

      plotOptions: {
        line: {
          marker: {
            enabled: false,
          }
        },
        series: {
          states: {
            inactive: {
              opacity: 1,
            }
          }
        }
      },

      tooltip: {
        useHTML: true,
        pointFormat: '{point.y}%',
        borderWidth: 0,
        padding: 0
      },
    });
  }

  // График уровня сервиса зв день
  if ($('#chartStatisticsForDay').length) {
    const chartStatisticsForDay = Highcharts.chart('chartStatisticsForDay', {

      chart: {
        type: 'line',
      },

      title: false,

      xAxis: {
        categories: ['7.00','8.00','9.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'],
      },

      yAxis: {
        title: {
          enabled: false
        },
      },

      series: [{
        name: ' UNSERV',
        marker: {
          symbol: 'circle'
        },
        data: [80, 60, 60, 30, 80, 60, 100, 50, 80, 60, 40, 20, 40, 60, 40 ,10 , 70],
        color: '#D9D9D9',
        dashStyle: 'dash',
      }, {
        name: 'SERV',
        marker: {
          symbol: 'circle'
        },
        data: [20, 40, 30, 50, 60, 40, 80, 60, 90, 60, 70, 60, 30, 50, 20, 30, 60],
        color: '#4163BC',
      }],

      legend: {
        enabled: false,
      },

      plotOptions: {
        line: {
          marker: {
            enabled: false,
          }
        },
        series: {
          states: {
            inactive: {
              opacity: 1,
            }
          }
        }
      },

      tooltip: {
        useHTML: true,
        pointFormat: '{point.y}%',
        borderWidth: 0,
        padding: 0
      },
    });
  }

  // График по категориям за период
  if ($('#piePeriod').length) {
    const piePeriod = Highcharts.chart('piePeriod', {

      chart: {
        type: 'pie',
      },

      title: {
        text: '<span>95</span><br>Поступило заказов',
        align: 'center',
        verticalAlign: 'middle',
        y: 45,
      },

      tooltip: {
        useHTML: true,
        pointFormat: '{point.y}%',
        borderWidth: 0,
        padding: 0
      },

      series: [{
        name: 'Заказы',
        colorByPoint: true,
        innerSize: '80%',
        dataLabels: {
          enabled: false,
        },
        data: [
          {
            name: 'MEL C',
            y: 28,
            color: '#2ED97C',
          },
          {
            name: 'MEL A',
            y: 14,
            color: '#FF4F53',
          },
          {
            name: 'MEL B',
            y: 12,
            color: '#E018E3',
          },
          {
            name: 'AOG',
            y: 7,
            color: '#FFD147',
          },
          {
            name: 'MEL D',
            y: 32,
            color: '#2E9BD9',
          },
          {
            name: 'REP...',
            y: 7,
            color: '#FF8C39',
          }
        ]
      }],
      
    });
  }

  // График по открытые заказы
  if ($('#pieOpen').length) {
    const pieOpen = Highcharts.chart('pieOpen', {

      chart: {
        type: 'pie',
      },

      title: {
        text: '<span>45</span><br>Открытых заказов',
        align: 'center',
        verticalAlign: 'middle',
        y: 45,
      },

      tooltip: {
        useHTML: true,
        pointFormat: '{point.y}%',
        borderWidth: 0,
        padding: 0
      },

      series: [{
        name: 'Заказы',
        colorByPoint: true,
        innerSize: '80%',
        dataLabels: {
          enabled: false,
        },
        data: [
          {
            name: 'MEL C',
            y: 28,
            color: '#2ED97C',
          },
          {
            name: 'MEL A',
            y: 4,
            color: '#FF4F53',
          },
          {
            name: 'MEL B',
            y: 31,
            color: '#E018E3',
          },
          {
            name: 'AOG',
            y: 7,
            color: '#FFD147',
          },
          {
            name: 'MEL D',
            y: 22,
            color: '#2E9BD9',
          },
          {
            name: 'REP...',
            y: 8,
            color: '#FF8C39',
          }
        ]
      }],

    });
  }

  // Открыть пароль в поле password
  function togglePasswordInput() {
    let passwordBlock = $('.js-toggle-password ');
    passwordBlock.on('click', function () {
      let passwordBlockCurrent = $(this);
      if (!passwordBlockCurrent.hasClass('active')) {
        $(this).siblings('input').attr('type', 'text');
        $(this).addClass('active');
      }else {
        $(this).siblings('input').attr('type', 'password');
        $(this).removeClass('active');
      }
    })
  }
  togglePasswordInput();

}