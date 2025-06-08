


//button listner for oakes college
 $("#oakesBtn").on("click", function (){
        $("#mapImage").attr("src", "img/ucsc_campus_oakes.png");
        $("#output").html(`
            <p><strong>Oakes Cafe</strong> – Located at the Oakes Commons building. Serves Yerba Mate flavors including 
            Enlighten Mint, Bluephoria, Berry Lemonade, Lemon Elation, Tropical Uprising, and Revel Berry.</p>

            <p><strong>Oakes Academic Building</strong> – Located between the Oakes Library and the 
            bottom floor restroom. Offers Pepsi drinks and snacks, but no Yerba Mate.</p>

            <p><strong>Oakes Laundry Room</strong> – Located at the Oakes laundry room. Sells Pepsi, 
            energy drinks, and snacks, but no Yerba Mate.</p>
        `);
     })
//button listner for McHenry library 
     $("#henryBtn").on("click", function() {
        $("#mapImage").attr("src", "img/ucsc_campus_henry.png");
        $("#output").html(`
     <p><strong>McHenry Library Global Village Cafe</strong> - Cafe serves coffee, sandwiches, pastries and also a 
     variety of Yerba Mate drinks to choose but busy during in peak hours in the morning and afternoon.</p>

     <p><strong>McHenry Library Vending Machines</strong> - McHenry Library has two vending machines located on the main
     floor next to the printer and copyers with snacks and Yerba Mate available, down stairs at the Digital Scholarship Commons 
     are two vending machines, one snack and one Pepsi but do not carry Yerba Mate.</p>
      `);   
    })    
//button listner for Stevenson College 
     $("#stevensonBtn").on("click", function (){
     $("#mapImage").attr("src", "img/ucsc_campus_stevensons.png");
     $("#output").html(`
         <p><strong>Steven Coffee House</strong> -  Located at the main Stevenson College building serves Yerba Mate
         and also serves coffee, soft drinks, boba tea with the Stevenson rec room down the hall.</p>
       
        <p><strong>Stevenson Rec Room</strong> - In the same building as the Stevenson Coffee House has
        two vending  machines but serves only Pepsi and other energy drinks and also a snack vending machine.</p>

        <p><strong>Stevenson Vending Machine</strong> -  Located outside of the Stevenson admin building and the
        Stevenson library varies with its selection of energy and soft drinks.
        Yerba Mate is stocked but varies between other soft and energy drinks but
        also has a selection of snacks to choose from.</p>
        `);  
     })
//button listenr for Cowell College 
     $("#cowellBtn").on("click", function (){
     $("#mapImage").attr("src", "img/ucsc_campus_cowell.png");
     $("#output").html(`
        <p><strong>Cowell Coffee College</strong> - The coffee shop doesn't serve Yerba Mate but handmade
        espresso drinks, teas and serves a selection of pastries.</p>

        <p><strong>Cowell Vending Machine</strong> - Located at the Cowell/Stevenson College hall
        offering Pepsi soft and energy drinks and also snacks.</p>

        <p><strong>Parkman Laundry Room</strong> - Located at the Cowell laundry room
        offering Pepsi soft and energy drinks and also snacks.</p>

        <p><strong>Cowell Apt 1 Laundry Room</strong> - Located next to the Cowell laundry room and computer room,
        serves Pepsi soft and energy drinks and also snacks.</p>
        `)
     })
     //buttin listener for Crown College 
     $("#crownBtn").on("click", function (){
     $("#mapImage").attr("src", "img/ucsc_campus_crown.png");
     $("#output").html(`
        <p><strong>Banana Joe's Late Night</strong> - Located at Crown College offers
        Yerba Mate and also late night pizza, burgers, snacks, coffee and more. </p>

        <p><strong>Crown College Lounge</strong> - Vending machine located inside at the Crown Lounge, serving
        snacks, such as chips, candy and granola but doesn't offer Yerba Mate. </p>

        <p><strong>Crown Fireside Lounge</strong> -  Located at the Crown College Fireside Lounge, offers
       Pepsi soft and energy drinks and also a snack vending machine but doesn't stock Yerba Mate. </p>

       <p><strong> Crown/Merrill Laundry Room</strong> - Located at the Crown/Merrill laundry room
        offering Pepsi soft and energy drinks and also snacks but doesn't offer Yerba Mate. </p>
        `)
     })
     //Button listener for Kresge College 
     $("#kresgeBtn").on("click", function(){
     $("#mapImage").attr("src", "img/ucsc_campus_kresge.png");
     $("#output").html(`
        <p><strong>Owl’s Nest</strong> - Located at the Kresge College across from the Kresge Academic building serving a
        variety of coffee, soft drinks, snacks, bagels and sandwiches but most importantly Yerba Mate.</p>
        `)
     })
     //Button listner for Rachel Carson College
     $("#rachelBtn").on("click", function(){
     $("#mapImage").attr("src", "img/ucsc_campus_carson.png");
     $("#output").html(`
        <p><strong>Rachel Carson Dorms A/L and B/L</strong> - Both dorm buildings at Rachel Carson offer vending machines stocking
      snacks and drinks, selection of stock may vary but dorm building A/1 has a better selection of drinks but most importantly Yerba Mate.</p>
        `)
    })
    //Button listener for Lewis/Nine College 
    $("#lewisBtn").on("click", function(){
    $("#mapImage").attr("src", "img/ucsc_campus_nine.png");
    $("#output").html(`
       <p><strong>University Center Bistro & Cafe</strong> - Located at the top floor John R. Lewis dining hall
        is the University Center Cafe, serving Yerba Mate, coffee, snacks and other items throughout the day.</p>

      <p><strong>Social Science 1 Building</strong> - Pepsi Vending located the at the social science building 1,
       does not serve Yerba Mate only soft and energy drinks.</p>

       <p><strong>Social Science 2 Building</strong> - Snack Vending located at the social
       science building 2, dosen't serve Yerba Mate or other drinks but has chips, granola and other snacks.</p>

       <p><strong> College 9/L Laundry Room</strong> - Located at the College Nine laundry room apartment building
       offers a snack vending machine and also a Pepsi drink vending machine for energy and soft drinks but no
       Yerba Mate.</p>

       <p><strong> College Nine Rec lounge</strong> - Located at the College Nine rec lounge, has both a snack and
       a drink vending machine. Often stocked with Yerba Mate and also other drinks such as Weird Tea and other
       energy drinks.</p>   
        `)
    })
    //Button listener for Porter College 
    $("#porterBtn").on("click", function(){
    $("#mapImage").attr("src", "img/ucsc_campus_porter.png");
    $("#output").html(`
          <p><strong> Porter Market</strong> - Located at the Porter Commons building the Porter Market offers Yerba Mate
     as well ready to go meals, a variety of hand made espresso drinks, snacks and sandwiches.</p>

     <p><strong>Porter Laundry Room</strong> - Vending machine located at the Porter College laundry room carries a
     small selection of snacks and soft drinks. Varies on stock with Pepsi soft and energy drinks but may be stocked
     with either Yerba Mate, Boba or Weird Tea.</p>
        `)
    })
    //Button listener for Jack Baskin Engineering College
    $("#baskinBtn").on("click", function(){
    $("mapImage").attr("src", "img/ucsc_campus_baskin.png");
    $("#output").html(`
        <p><strong>Science & Engineering Library</strong> - This library has two sets of vending machines located on the top and bottom floors of the library.
      Top floor has two vending machines stocking both snacks and drinks, stocking Yerba Mate, energy drinks and also boba.
      Bottom floor vending machines have a Pepsi vending machine and also a snack vending machine.</p>

     <p><strong> Natural Sciences Building</strong> - This building has two vending machines, the vending machine
     located on the east side of the building has two snack vending machines stocked with snacks and drinks but most
     Most importantly, Yerba Mate. The other vending machine is a Pepsi vending machine on the 2nd floor on the west side of the building.</p>

     <p><strong>Thiamin Labs</strong> - Located on the ground floor has two vending machines and
     a Pepsi vending machine, stocking snakes, soft and energy drinks but has Yerba Mate stocked,
     who cares about the other stuff.</p>

     <p><strong>Sinsheimer Labs</strong> - Vending machine located on the main lobby floor, has three vending machines
     with one Pepsi and two snack vending machines with one of the vending machines stocking Yerba Mate and other energy drinks.</p>

     <p><strong>Physical Sciences Building</strong> - Located on the 2nd floor, this building has both snack and drink vending machines
     offers both snacks and drinks, but most importantly Yerba Mate.</p>

     <p><strong>Baskin Engineering Building</strong> - Baksin has several vending machines that serves both snacks and also drink
     but most importantly Yerba Mate and other energy drinks, why wait in line at the Perk Coffee Bar?</p>

     <p><strong>Perk Coffee Bar</strong> - Located at the main lobby area of the Baskin Engineering Building, offers coffee, soft drinks,
     snacks available to order, does serve Yerba Mate and other items but busy throughout the day.</p>
        `)
    })
    //Button listener for ARCenter and Media Theaters
    $("#arcBtn").on("click", function(){
    $("#mapImage").attr("src", "img/ucsc_campus_media.png");
    $("#output").html(`
     <p><strong>AR Center</strong> - Has vending machines at room 116, offering a snack and a Pepsi vending machine
      but does not have Yerba Mate stocked.</p>

     <p><strong>Media Theater Vending Machines</strong> - Media Theaters have two sets of vending machines, two located at
      the front of the Media Theater with a snack and drink vending machine, stocking Yerba Mate, another set of vending machines
      at the break area of the theater main stage but only has a snack and Pepsi vending machines.</p>

     <p><strong>Music Classroom</strong> - Three vending machines located on the first floor of the Music Classroom with
      drinks and snacks available. But most importantly Yerba Mate!!!.</p>
        `)

    })