    var favArray = [];
    var petID;
    var area;
    var gender;
    var age;
    var size;
    var breed;
    var apiKey = 'a77d12da6b9ce71fa08cfe8f09710b6a';
    var pet = "dog";
    var url;
    var counter = 0;
    var dejaVu = false;

    $(document).on("click", ".dropdown-item", function(event) {
        event.preventDefault();
        var toucher = $(this).parent().children();
        toucher.removeClass("active");
        $(this).addClass("active");


    })

    $("#submit-input").on("click", function(event){
        event.preventDefault();
        
        area = $("#zipCode").val().trim();
        breed = $("#breed-input").val().trim();
        gender = $("#gender-input").children(".active").text();
            if (gender === "Male"){
                gender = "M";
            }
            else if (gender==="Female"){
                gender = "F";
            }
            else {
                gender="";
            }
        age = $("#age-input").children(".active").text();
            if(age==="Any"){
                age ="";
            }
        size = $("#size-input").children(".active").text();
            if(size==="Any"){
                size="";
            }
        $('form').empty();
        console.log(area);
        console.log(breed);
        console.log(gender);
        console.log(age);
        console.log(size);
        

        // Within $.ajax{...} is where we fill out our query
        scramble();
    })
    
    $("#approve").on("click", function(){
        favArray.push(petID);
        scramble();
    })

    $("#disapprove").on("click", function() {
        scramble();
    })

    function scramble() {
        apiKey = 'a77d12da6b9ce71fa08cfe8f09710b6a'
        url = 'http://api.petfinder.com/pet.find';
        pet = "dog";
        $.ajax({
            url: url,
            method: "GET",
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: apiKey,
                animal: pet,
                breed: breed,
                size: size,
                sex: gender,
                age: age,
                location: area,
                count: 1,
                offset: counter,
                output: 'basic',
                format: 'json'
            }}).then(function (response){
                console.log(response);
                checkPets(response);
                // if(!dejaVu){
                    $("#petImage").attr("src", response.petfinder.pets.pet.media.photos.photo[2].$t);
                    $("#petName").html(response.petfinder.pets.pet.name.$t);
                    $("#scrollBox").html(response.petfinder.pets.pet.description.$t);
                    $("#petGender").html(response.petfinder.pets.pet.sex.$t)
                    $("#petAge").html(response.petfinder.pets.pet.age.$t)
                    var contact = $("<div>");
                    contact.append($("<p>").text(response.petfinder.pets.pet.contact.phone.$t), $("<p>").text(response.petfinder.pets.pet.contact.email.$t));
                    $("#contactInfo").html(contact)
                    petID = response.petfinder.pets.pet.id.$t;
                    counter ++;
                // }
                // else {
                //     counter++;
                // }
            })
    }

    function checkPets (response) {
        dejaVu = false;
        for (var i = 0; i<favArray.length; i ++){
            if (favArray[i]===response.petfinder.pets.pet.id.$t) {
                dejaVu = true;
            }
        }
    }
  