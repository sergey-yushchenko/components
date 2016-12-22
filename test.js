/**
 * https://rawgit.com/ CDN для тестов
 * https://rawgit.com/sergey-yushchenko/components/master/test.js
 */

var a1 = [1,5,6,17,8,9],
    a2 = [
     {name: "Вася", spec: "PHP", salary: 5e4},
     {name: "Аня", spec: "SEO", salary: 3e4},
     {name: "Петя", spec: "JavaScript", salary: 1e5},
     {name: "Саша", spec: "MySQL", salary: 4e4},
     {name: "Женя", spec: "HTML&CSS", salary: 3e4},    
     {name: "Паша", spec: "JavaScript", salary: 5e4}    
    ];

//     console.warn('_.each');
    $('.item-each').next().hide();
    $('.item-each').click(function () { $(this).next().toggle(); });

    _.each( a1, function (el) { $(".list-01").append("<li class='item'>" + el + "</li>") });

    _.each( a2, function (el) { $(".list-02").append("<li class='item'>" + el.name + "</li>") });

    _.each( a2, function (el) { $(".list-03").append(
      '<ul class="list-04">'
      + "<li class='item'>" + el.name + "</li>" 
      + "<li class='item'>" + el.spec + "</li>" 
      + "<li class='item'>" + el.salary + "</li>"
      + '</ul>'
      + '<hr>'
    ) });
