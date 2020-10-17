const locationArr:Array<any> = [];
const restArr:Array<any> = [];
const eventsArr:Array<any> = [];


class Locations{
    name:any;
    city:string;
    zip:number;
    add:any;
    img:any;

    constructor(name, city, zip, add, img) {
        this.name= name;
        this.city= city;
        this.zip= zip;
        this.add= add;
        this.img= img;
        
        locationArr.push(this);
    }

    render(i){
        return ` 
        <div class="col-11 col-md-5 col-lg-3">
            <!-- Card -->
            <div class="card" id="card${i} ">

                <!-- Card image -->
                <div class="img-div d-flex justify-contner-center">
                    <img class="card-img-top img-fluid" id="img${i}" src="${this.img}" alt="${this.name}">
                </div>

                <!-- Card content -->
                <div class="card-body" id= "myCardBody${i}">
                    <p class="picHeader" id="picHeader${i}">${this.name}</p>
                    <p class="picInfo" id="picInfo${i}">${this.add}<br> ${this.city} ${this.zip}</p>
                
                </div>

            </div>
            <!-- Card -->
        </div>
    `
    }
}

class Rests extends Locations{
    tel:number;
    cuis:string;
    web:any;

    constructor(name, city, zip, add, img, tel, cuis, web) {
        super(name, city, zip, add, img);
        this.tel=tel;
        this.cuis=cuis;
        this.web=web; 
        
        restArr.push(this); 
    }
    //function to display restaurant info
    displayer(i){
        return `
            <p class="restInfo" id="restInfo${i}">
                Tel: ${this.tel}<br>
                type of Cuisine:${this.cuis}<br>
                Website: <a href="http://${this.web}">${this.web}</a>
            </p>
        `
    }
     
}
class Events extends Locations{
    evDate:number;
    evTime:number;
    price:number;

    constructor(name, city, zip, add, img, evDate, evTime, price) {
        super(name, city, zip, add, img);
        this.evDate=evDate;
        this.evTime=evTime;
        this.price=price;

        eventsArr.push(this);
    }
        //function to display event info
    displayer2(i){
        
        return `
            <p class="evInfo" id="evInfo${i}">
                Date: ${this.evDate} at ${this.evTime}.<br>
                Ticket price: ${this.price}EUR.
            </p>
        `
    }
};

new Locations("st. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg");
new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
new Rests("Lemon Leaf Thai restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.jpg", +4315812308, "Thai", "www.lemonleaf.at");
new Rests("Sixta", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.jpg", +4315852856, "Viennese", "www.sixta-restaurant.at");
new Events("Kris Kristofferson", "Vienna", 1150, "Halle F Roland Rainer Platz 1", "img/kris.jpg", "15.11.2021", "20:00", "58,50");
new Events("Lenny Cravitz", "Vienna", 1150, "Halle d Roland Rainer Platz 1", "img/lenny.jpg", "09.12.2029", "19:30", "47,80");



for(let i in locationArr){
    
    $('.myRow').append(locationArr[i].render(i));
    $(".card-body").css("visibility", "hidden");

}

for(let i in restArr){
    
    $(`#myCardBody${Number(i)+2}`).append(restArr[i].displayer(i));

}
for(let i in eventsArr){
    
    $(`#myCardBody${Number(i)+4}`).append(eventsArr[i].displayer2(i));

}
$(".card").mouseenter(function() {
    $(this).find(".card-body").css("visibility","visible");
});

$(".card").mouseleave(function() {
    $(".card-body").css("visibility", "hidden");
});

