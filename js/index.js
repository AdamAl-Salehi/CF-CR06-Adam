var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locationArr = [];
var restArr = [];
var eventsArr = [];
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, add, img) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.add = add;
        this.img = img;
        locationArr.push(this);
    }
    Locations.prototype.render = function (i) {
        return " \n        <div class=\"col-11 col-md-5 col-lg-3\">\n            <!-- Card -->\n            <div class=\"card\" id=\"card" + i + " \">\n\n                <!-- Card image -->\n                <div class=\"img-div d-flex justify-contner-center\">\n                    <img class=\"card-img-top img-fluid\" id=\"img" + i + "\" src=\"" + this.img + "\" alt=\"" + this.name + "\">\n                </div>\n\n                <!-- Card content -->\n                <div class=\"card-body\" id= \"myCardBody" + i + "\">\n                    <p class=\"picHeader\" id=\"picHeader" + i + "\">" + this.name + "</p>\n                    <p class=\"picInfo\" id=\"picInfo" + i + "\">" + this.add + "<br> " + this.city + " " + this.zip + "</p>\n                \n                </div>\n\n            </div>\n            <!-- Card -->\n        </div>\n    ";
    };
    return Locations;
}());
var Rests = /** @class */ (function (_super) {
    __extends(Rests, _super);
    function Rests(name, city, zip, add, img, tel, cuis, web) {
        var _this = _super.call(this, name, city, zip, add, img) || this;
        _this.tel = tel;
        _this.cuis = cuis;
        _this.web = web;
        restArr.push(_this);
        return _this;
    }
    //function to display restaurant info
    Rests.prototype.displayer = function (i) {
        return "\n            <p class=\"restInfo\" id=\"restInfo" + i + "\">\n                Tel: " + this.tel + "<br>\n                type of Cuisine:" + this.cuis + "<br>\n                Website: <a href=\"http://" + this.web + "\">" + this.web + "</a>\n            </p>\n        ";
    };
    return Rests;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, add, img, evDate, evTime, price) {
        var _this = _super.call(this, name, city, zip, add, img) || this;
        _this.evDate = evDate;
        _this.evTime = evTime;
        _this.price = price;
        eventsArr.push(_this);
        return _this;
    }
    //function to display event info
    Events.prototype.displayer2 = function (i) {
        return "\n            <p class=\"evInfo\" id=\"evInfo" + i + "\">\n                Date: " + this.evDate + " at " + this.evTime + ".<br>\n                Ticket price: " + this.price + "EUR.\n            </p>\n        ";
    };
    return Events;
}(Locations));
;
new Locations("st. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg");
new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
new Rests("Lemon Leaf Thai restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.jpg", +4315812308, "Thai", "www.lemonleaf.at");
new Rests("Sixta", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.jpg", +4315852856, "Viennese", "www.sixta-restaurant.at");
new Events("Kris Kristofferson", "Vienna", 1150, "Halle F Roland Rainer Platz 1", "img/kris.jpg", "15.11.2021", "20:00", "58,50");
new Events("Lenny Cravitz", "Vienna", 1150, "Halle d Roland Rainer Platz 1", "img/lenny.jpg", "09.12.2029", "19:30", "47,80");
for (var i in locationArr) {
    $('.myRow').append(locationArr[i].render(i));
    $(".card-body").css("visibility", "hidden");
}
for (var i in restArr) {
    $("#myCardBody" + (Number(i) + 2)).append(restArr[i].displayer(i));
}
for (var i in eventsArr) {
    $("#myCardBody" + (Number(i) + 4)).append(eventsArr[i].displayer2(i));
}
$(".card").mouseenter(function () {
    $(this).find(".card-body").css("visibility", "visible");
});
$(".card").mouseleave(function () {
    $(".card-body").css("visibility", "hidden");
});
