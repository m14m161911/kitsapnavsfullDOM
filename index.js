let content = [
    `To know Christ, make him known, and help others to do the same.`,
    `The passion to know, love and become like Jesus Christ. Phil. 3:10, Matt. 10:24,25 <br>
    The truth and sufficiency of the Scriptures for the whole of life. II Tim 3:16,17, II Pet. 1:3,4 <br>
    The transforming power of the Gospel. Rom. 1:16 <br>
    The leading and empowering of the Holy Spirit. Acts 1:8, II Cor. 3:18 <br>
    Expectant faith and persevering prayer rooted in the promises of God. Rom 4:19,20, Heb. 11:6 <br>
    The dignity and value of every person. Is. 51:1,2; 60:22 <br>
    Love and grace expressed among us in community. John 13:34,35,Col. 3:12-17 <br>
    Families and relational networks in discipling the nations. I Thess. 1 <br>
    Interdependent relationships in the Body of Christ in advancing the Gospel. Phil 1:3-14 <br>`,
    `We see a vital movement of the Gospel, fueled by prevailing prayer, flowing freely through relational networks and
    out into the nations. Workers for the Kingdom are next door to everywhere!  What characterizes this movement? A heart for 
    the whole person ... climates of grace ... compassion for the vulnerable and broken ... sacrificial unity embracing diversity ... 
    cultural relevance and sensitivity ... interdependence with others in the wider family of God ... transformed men and women, 
    fragrant with humility and the aroma of Christ. They are marked by a deep engagement with and obedience to the Scriptures as 
    the Word of God. They believe the promises of God. Both personally and in committed communities, they seek to know and pursue 
    the purposes of God. Laborers and leaders are emerging, with an increasing passion for Jesus Christ. They demonstrate faith and 
    courage as they live and move among their friends and families. As spiritual parents, they model authenticity and relevance. 
    Ordinary people, in many walks of life, are joyfully leading integrated lives. They live as fruitful insiders among the lost. 
    There is perseverance in the face of hardship and suffering. Around the world, many are coming to faith. As they become 
    established in discipleship, some grow to be foundational for further generations. The Gospel spreads naturally and powerfully, 
    as believers share Christ ... life upon life ... family to family. Crossing cultures into new cities and nations, teams of mobile 
    pioneers intentionally proclaim and embody the good news of Jesus Christ, in such a way that transformed communities multiply. 
    These communities are bringing joy and hope to their surrounding environments as relationships are healed and justice increases. 
    Indeed, the lost and unreached burn in their hearts, as they move the Gospel into the nations. The leaders of this movement, 
    developed and empowered for God’s service, live out a growing commitment to Christlikeness. They are dependent upon the Holy Spirit. 
    New generations of leaders are emerging, rooted incarnationally in their local and national contexts. An international leadership 
    community brings focus, alignment and energy to their movement. These leaders are clearly committed to long-term impact in 
    generational ministry.`
]

window.onload = function(){
    // bring in root div from html
    let root = document.querySelector('#root');
    console.log(root);

    // create grid and add to html root
    let container = document.createElement("div");
    container.setAttribute('class', 'grid-container');
    console.log(container);

    root.appendChild(container);

    // add heading section to grid
    let heading = document.createElement("div");
    heading.setAttribute('class', 'item1');
    console.log(heading);
    container.appendChild(heading);

    // add menu to grid
    let menu = document.createElement("div");
    menu.setAttribute('class', 'item2');
    console.log(menu);
    container.appendChild(menu);

    // add main section to grid
    let main = document.createElement("div");
    main.setAttribute('class', 'item3');
    console.log(main);
    container.appendChild(main);

    // add right section to grid
    let right = document.createElement("div");
    right.setAttribute('class', 'item4');
    console.log(right);
    container.appendChild(right);

    // add footer section to grid
    let foot = document.createElement("div");
    foot.setAttribute('class', 'item5');
    console.log(foot);
    container.appendChild(foot);

    // add image to heading
    let image = document.createElement('img');
    image.src = 'assets/images/KitsapNavigators.jpg';
    image.setAttribute('width', '50%');
    image.setAttribute('alt', 'Kitsap Navigators Logo');
    console.log(image)
    heading.appendChild(image)

    // add buttons to menu
    let button1 = document.createElement('button');
    button1.innerHTML = 'Navigators Calling';
    console.log(button1);
    menu.appendChild(button1);
    let button2 = document.createElement('button');
    button2.innerHTML = 'Navigators Values';
    console.log(button2);
    menu.appendChild(button2);
    let button3 = document.createElement('button');
    button3.innerHTML = 'Navigators Vision';
    console.log(button3);
    menu.appendChild(button3);

    // make buttons work
    button1.addEventListener('click', function(){
        main.innerHTML = content[0];
    })
    button2.addEventListener('click', function(){
        main.innerHTML = content[1];
    })
    button3.addEventListener('click', function(){
        main.innerHTML = content[2];
    })
}