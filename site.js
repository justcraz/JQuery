// TASK 1.1
// $(function() {
//     $(document).ready(function() {
//         var html = $('h1').text();
//         alert(html);
//     });
// });

// TASK 1.2
// $(function() {
//     $(document).ready(function() {
//         var html = $('.gg').text();
//         alert(html);
//     });
// });

// TASK 1.3
// $(function() {
//     $(".slide-btn").hide();
// });

// TASK 1.4
// $(function() {
//     $(".features-grid p").hide();
// });

// TASK 1.5
// $(function() {
//     $(".categorie").show(2000);
// });

// TASK 1.6
// $(function() {
//     $(document).ready(function() {
//         var html = $('.top-nav li').text();
//         alert(html);
//     });
// });

// TASK 1.7
// $(function() {
//     $("h2").hide(3500).show(2000);
// });

// TASK 1.8
// $(function() {
//     $(".triangle").hide(1000).show(2000);
// });

// TASK 1.9
// $(function() {
//     $(document).ready(function() {
//         var html = $('.categorie a').text();
//         alert(html);
//     });
// });

// TASK 1.10
// $(function() {
//     $(document).ready(function() {
//         var html = $('.blog-post label').text();
//         alert(html);
//     });
// });

// TASK 1.11
// $(function() {
//     $(document).ready(function() {
//         var html = $('.post-head').text();
//         alert(html);
//     });
// });

// TASK 1.12
// $(function() {
//     $(".logo").hide(3500);
// });


// THE END FIRST TASK //
// TASK 2.1
// $(function() {
//     $(".slide-text h1").fadeOut(3000).fadeIn(3000);
// });

// TASK 2.3
// $(function() {
//     $(".features").slideUp(2000).slideDown(1000);;
// });

// TASK 2.4
// $(function() {
//     $("#blogs").fadeOut(1500).slideUp(2000)
//         .slideDown(3000).fadeIn(6000);
// });

// TASK 2.7
// $(function() {
//     $(".top-nav").hide("slow", function() {
//         var html = $('.post-head').text();
//         alert("Меню було сховано");
//     })
// });


// THE END TWO TASK //
// TASK 3.1
$(function() {
    $(document).ready(function() {
        $('.slide-btn').click(function() {
            alert('Була натиснута кнопка з класом slide-btn');
        });
    });
});

// TASK 3.2
// $(function() {
//     $('.features-grids').click(function() {
//         $(".head-moto-img").slideUp(3000);
//     });
// });

// TASK 3.3
// $(function() {
//     $('.features-grids').click(function() {
//         $(".head-moto-img").slideToggle(2000);
//     });
// });

// TASK 3.4
// $(function() {
//     $('#img_1').click(function() {
//         $("#img_1").fadeOut(2000).fadeIn(2000);
//     });
// });

// $(function() {
//     $('#img_2').click(function() {
//         $("#img_2").fadeOut(2000).fadeIn(2000);
//     });
// });

// $(function() {
//     $('#img_3').click(function() {
//         $("#img_3").fadeOut(2000).fadeIn(2000);
//     });
// });

// $(function() {
//     $('#img_4').click(function() {
//         $("#img_4").fadeOut(2000).fadeIn(2000);
//     });
// });

// TASK 3.5
$(function() {
    $('.top-nav').mouseover(function() {
        $(".down").slideUp();
        $('.top-nav').mouseout(function() {
            $(".down").slideDown();
        });
    });
});

// TASK 3.7
$(function() {
    $('#p').click(function() {
        $(".head-moto-img").slideUp(2000);
    });
});

//THE END THREE TASK//
// TASK 4.1
$(function() {
    $('.w').click(function() {
        alert(this.outerHTML);
    });

    //  TASK 4.2
    // $(function() {
    //     $(document).ready(function() {
    //         const value = document.querySelector('#email').value;
    //         alert(value);
    //     });
    // });

});
// TASK 4.3
$(function() {
    $('.link-moto').click(function() {
        const href = document.querySelector('#moto').href;
        alert(href);
    });
});

$(function() {
    $('.link-moto1').click(function() {
        const href = document.querySelector('#moto1').href;
        alert(href);
    });
});

$(function() {
    $('.link-moto2').click(function() {
        const href = document.querySelector('#moto2').href;
        alert(href);
    });
});

//TASK 4.4
// $(function() {
//     $("#img_1").on("click", function() {
//         alert($("#img_4").attr("src"));
//     });
// });

// $(function() {
//     $("#img_2").on("click", function() {
//         alert($("#img_2").attr("src"));
//     });
// });

// $(function() {
//     $("#img_3").on("click", function() {
//         alert($("#img_3").attr("src"));
//     });
// });

// $(function() {
//     $("#img_4").on("click", function() {
//         alert($("#img_1").attr("src"));
//     });
// });

// TASK 4.5
$(function() {
    $("#p").on("click", function() {
        $(".head-moto-img").slideToggle(2000, function() {
            $("#p").text("Зараз функція недоступна.Спробуйте пізніше")
        })
    });
});

// TASK 5.1 ВИКОНАНО В HTML CODES  РОЗКОМЕНТУВАТИ //

// TASK 5.2 ВИКОНАНО В HTML CODES // 

// TASK 5.3 ВИКОНАНО В HTML CODES //

// TASK 5.4 
// $(function() {

//     $("#img_1, #img_2, #img_3, #img_4").click(function() {

//         clone = $(this).clone()
//         clone.appendTo('.koshik-wrapper')
//         clone.AddClass('full-koshik')

//     });
// });

// TASK 6.1 
// $(function() {
//     $('.slide-btn').click(function() {
//         $('.slide-btn').height(100);
//     })
// });

// TASK 6.5
$(document).ready(function() {
    var a = false;
    $img = $('#img_1')

    $('#img_1').click(function() {
        if (a) {
            $img.animate({ width: "130px", height: "100px" }, 100);
            a = false;
        } else {
            $img.animate({ width: "100%", height: "100%" }, 100);
            a = true;
        }
    });
});

// TASK 6.6 
// $(function() {
//     $('#img_2').mouseover(function() {
//         $("#img_2").width(50);
//         $('#img_2').mouseout(function() {
//             $("#img_2").width(150);
//         });
//     });
// });

// TASK 7.3
$(function() {
    $('#bag').prop('checked', true);
});

// TASK 7.4
$(function() {
    $('#inch_yes').prop('checked', true);
});