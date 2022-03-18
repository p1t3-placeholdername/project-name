var fishURL = "https://cors-anywhere-bc.herokuapp.com/https://www.fishwatch.gov/api/species";
var redSnapperURL = 'https://cors-anywhere-bc.herokuapp.com/https://www.fishwatch.gov/api/species/red-snapper';

//querry fishwatch api
function getFishAPI() {
    var statePic = $("#userState").val();

    fetch(fishURL)
        .then(function (response) {
            console.log("fetched");
            return response.json();
        })
        .then(function (fishData) {
            console.log(statePic);
            $('#nameList').empty();
            $('#regionList').empty();
            $('#btnList').empty();
            $('#regionList').append($('<li/>').attr('id', 'regionHeader').text('NOAA Fisheries Region'));
            $('#btnList').append($('<li/>').attr('id', 'btnHeader'));
            var alaska = 'AK';
            var greater_atlantic = ['MN', 'ND', 'SD', 'WI', 'IL', 'IN', 'MI', 'OH', 'WV', 'VA', 'MD', 'DE', 'NJ', 'PA', 'NY', 'CT', 'RI', 'MA', 'VT', 'NH', 'ME'];
            var pacific_islands = ['american samoa', 'guam', 'HI', 'northern nariana islands'];
            var southeast = ['NM', 'CO', 'TX', 'OK', 'KS', 'NE', 'IA', 'MO', 'AR', 'LA', 'MS', 'TN', 'KY', 'AL', 'GA', 'FL', 'SC', 'NC'];
            var west_coast = ['WA', 'OR', 'CA', 'NV', 'ID', 'MT', 'WY', 'UT', 'AZ'];
            if (greater_atlantic.includes(statePic)) {
                console.log('atlantic');
                var fishRegion = 'Greater Atlantic';
            } else if (southeast.includes(statePic)) {
                console.log('southeast');
                var fishRegion = 'Southeast';
            } else if (west_coast.includes(statePic)) {
                console.log('west coast');
                var fishRegion = 'West Coast';
            } else if (pacific_islands.includes(statePic)) {
                console.log('pacfic islands');
                var fishRegion = 'Pacific Islands';
            } else {
                console.log('alaska');
                var fishRegion = 'Alaska';
            }
            console.log(fishData);
            var alaskaCalifornia = ['AK', 'OR', 'WA', 'CA'];
            // console.log(fishData[0]['Species Name']);
            fishData.forEach(function (fish, i) {
                // console.log(i);
                //id shows as "item_undefined_n"
                // $('#nameList').append($('<li/>').attr("id", 'item_' + i + '_n').addClass('item_' + i).text(fish['Species Name']));

                //west coast statements
                if (fish['NOAA Fisheries Region'] == fishRegion) {
                    var test = fish;
                    // console.log(fish['Source'], fish['Species Name']);
                    if (statePic == 'CA') {
                        if (fish['Source'].includes('Washington to California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from the Bering Sea')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('Alaska to northern Baja')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Washington, Oregon, and California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('off Washington, Oregon, and California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'WA' || statePic == 'OR') {
                        if (fish['Source'].includes('Washington to California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from the Bering Sea')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('Alaska to northern Baja')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Washington, Oregon, and California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('off Washington, Oregon, and California')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    $('.modal-open').on('click', function (event) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        console.log('clicked');
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        $('#population').empty();
                        $('#fishImg').empty();
                        $('#sciName').empty();
                        $('#availability').empty();
                        $('#location').empty();
                        $('#habitat').empty();
                        var clickedBtnFish = event.target;
                        console.log(clickedBtnFish);
                        // console.log(modalObj);
                        // console.log(modalObj['Species Name']);
                        $('#fishFacts').text(modalObj['Species Name']);
                        // console.log(modalObj['Population Status']);
                        // saveName = '';
                        var saveName = '';
                        var species = '';
                        var sciName = '';
                        var popStat = '';
                        var availability = '';
                        var location = '';
                        var habitat = '';
                        var saveName = species
                        var saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        var noSpace = species.replace(/ /g, '');
                        species = modalObj['Species Name'];
                        sciName = modalObj['Scientific Name'];
                        popStat = modalObj['Population'];
                        availability = modalObj['Availability'].replace('<p>', '').replace('</p>', '');
                        location = modalObj['Location'];
                        habitat = modalObj['Habitat'];
                        $('#population').append($('<li/>').text(modalObj['Population']));
                        $('#sciName').append($('<li/>').text(modalObj['Scientific Name']));
                        $('#availability').append($('<li/>').text(availability));
                        $('#location').append(location);
                        $('#habitat').append(modalObj['Habitat']);
                        var srcUrl = modalObj['Species Illustration Photo']['src'];
                        var altText = modalObj['Species Illustration Photo']['alt'];
                        $('#fishImg').append($('<img/>').attr('src', srcUrl, 'alt', altText));
                        // console.log(JSON.parse(localStorage.getItem(modalObj['Species Name'])).Species);
                        var savedObj = JSON.parse(localStorage.getItem(modalObj['Species Name']) || "{}").Species;
                        console.log(savedObj);
                        if (savedObj === modalObj['Species Name']) {
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                        } else {
                            $('#unfavorite').css('display', 'none')
                            $('#favorite').css('display', 'block')
                        }
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        saveName = species;
                        saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        noSpace = species.replace(/ /g, '');
                        // add favoriting fish for local storage
                        $('#favorite').on('click', favoriting)
                        $('#unfavorite').on('click', unfavoriting)
                        function favoriting(event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            // localStorage.clear();
                            console.log('click');
                            console.log(species);
                            console.log(modalObj['Species Name']);
                            console.log(clickedBtnFish);
                            //needs to apply new style to button to show favorite
                            $(clickedBtnFish).addClass('favorited')
                            //add something to save favorited status for when buttons displayed
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                            console.log(saveName);
                            console.log(saveObj);
                            // $('#favoriteFish').append($('<button/>',
                            // { text: species, id: noSpace+'Btn', class: 'modal-open' }));
                            localStorage.setItem(saveName, JSON.stringify(saveObj));
                            // console.log($('#'+noSpace+'Btn'));
                            // localStorage.setItem(noSpace+'Btn', ($('#'+noSpace+'Btn')));
                            // $('#' + noSpace + 'Btn').on('click', function (ev) {
                            //     ev.preventDefault();
                            //     ev.stopImmediatePropagation();
                            //     console.log('click');
                            //     toggleModal();
                            // })
                        }
                        function unfavoriting(ev) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            console.log('click');
                            $('#unfavorite').css('display', 'none');
                            $('#favorite').css('display', 'block');
                            var saveName = modalObj['Species Name'];
                            localStorage.removeItem(saveName, modalObj['Species Name']);
                            var noSpace = saveName.replace(/ /g, '')
                            $('#' + noSpace + 'Btn').remove();
                        }
                        toggleModal();
                    });

                    const overlay = document.querySelector('.modal-overlay');
                    overlay.addEventListener('click', toggleModal());
                    var closemodal = $('.modal-close');
                    closemodal.on('click', toggleModal());

                    document.onkeydown = function (evt) {
                        evt = evt || window.event
                        var isEscape = false
                        if ("key" in evt) {
                            isEscape = (evt.key === "Escape" || evt.key === "Esc")
                        } else {
                            isEscape = (evt.keyCode === 27)
                        }
                        if (isEscape && document.body.classList.contains('modal-active')) {
                            toggleModal()
                        }
                    };
                    function toggleModal() {
                        const body = document.querySelector('body')
                        const modal = document.querySelector('.modal')
                        modal.classList.toggle('opacity-0')
                        modal.classList.toggle('pointer-events-none')
                        body.classList.toggle('modal-active')
                    }
                }
                //Alaska Statements
                if (fish['NOAA Fisheries Region'] == fishRegion) {
                    var test = fish;
                    // console.log(fish['Source'], fish['Species Name']);
                    if (statePic == 'AK') {
                        if (fish['Source'].includes('in the Bering Sea')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('in Alaska')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Alaska')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }

                    $('.modal-open').on('click', function (event) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        console.log('clicked');
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        $('#population').empty();
                        $('#fishImg').empty();
                        $('#sciName').empty();
                        $('#availability').empty();
                        $('#location').empty();
                        $('#habitat').empty();
                        var clickedBtnFish = event.target;
                        console.log(clickedBtnFish);
                        // console.log(modalObj);
                        // console.log(modalObj['Species Name']);
                        $('#fishFacts').text(modalObj['Species Name']);
                        // console.log(modalObj['Population Status']);
                        // saveName = '';
                        var saveName = '';
                        var species = '';
                        var sciName = '';
                        var popStat = '';
                        var availability = '';
                        var location = '';
                        var habitat = '';
                        var saveName = species
                        var saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        var noSpace = species.replace(/ /g, '');
                        species = modalObj['Species Name'];
                        sciName = modalObj['Scientific Name'];
                        popStat = modalObj['Population'];
                        availability = modalObj['Availability'].replace('<p>', '').replace('</p>', '');
                        location = modalObj['Location'];
                        habitat = modalObj['Habitat'];
                        $('#population').append($('<li/>').text(modalObj['Population']));
                        $('#sciName').append($('<li/>').text(modalObj['Scientific Name']));
                        $('#availability').append($('<li/>').text(availability));
                        $('#location').append(location);
                        $('#habitat').append(modalObj['Habitat']);
                        var srcUrl = modalObj['Species Illustration Photo']['src'];
                        var altText = modalObj['Species Illustration Photo']['alt'];
                        $('#fishImg').append($('<img/>').attr('src', srcUrl, 'alt', altText));
                        // console.log(JSON.parse(localStorage.getItem(modalObj['Species Name'])).Species);
                        var savedObj = JSON.parse(localStorage.getItem(modalObj['Species Name']) || "{}").Species;
                        console.log(savedObj);
                        if (savedObj === modalObj['Species Name']) {
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                        } else {
                            $('#unfavorite').css('display', 'none')
                            $('#favorite').css('display', 'block')
                        }
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        saveName = species;
                        saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        noSpace = species.replace(/ /g, '');
                        // add favoriting fish for local storage
                        $('#favorite').on('click', favoriting)
                        $('#unfavorite').on('click', unfavoriting)
                        function favoriting(event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            // localStorage.clear();
                            console.log('click');
                            console.log(species);
                            console.log(modalObj['Species Name']);
                            console.log(clickedBtnFish);
                            //needs to apply new style to button to show favorite
                            $(clickedBtnFish).addClass('favorited')
                            //add something to save favorited status for when buttons displayed
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                            console.log(saveName);
                            console.log(saveObj);
                            // $('#favoriteFish').append($('<button/>',
                            // { text: species, id: noSpace+'Btn', class: 'modal-open' }));
                            localStorage.setItem(saveName, JSON.stringify(saveObj));
                            // console.log($('#'+noSpace+'Btn'));
                            // localStorage.setItem(noSpace+'Btn', ($('#'+noSpace+'Btn')));
                            // $('#' + noSpace + 'Btn').on('click', function (ev) {
                            //     ev.preventDefault();
                            //     ev.stopImmediatePropagation();
                            //     console.log('click');
                            //     toggleModal();
                            // })
                        }
                        function unfavoriting(ev) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            console.log('click');
                            $('#unfavorite').css('display', 'none');
                            $('#favorite').css('display', 'block');
                            var saveName = modalObj['Species Name'];
                            localStorage.removeItem(saveName, modalObj['Species Name']);
                            var noSpace = saveName.replace(/ /g, '')
                            $('#' + noSpace + 'Btn').remove();
                        }
                        toggleModal();
                    });

                    const overlay = document.querySelector('.modal-overlay');
                    overlay.addEventListener('click', toggleModal());
                    var closemodal = $('.modal-close');
                    closemodal.on('click', toggleModal());

                    document.onkeydown = function (evt) {
                        evt = evt || window.event
                        var isEscape = false
                        if ("key" in evt) {
                            isEscape = (evt.key === "Escape" || evt.key === "Esc")
                        } else {
                            isEscape = (evt.keyCode === 27)
                        }
                        if (isEscape && document.body.classList.contains('modal-active')) {
                            toggleModal()
                        }
                    };
                    function toggleModal() {
                        const body = document.querySelector('body')
                        const modal = document.querySelector('.modal')
                        modal.classList.toggle('opacity-0')
                        modal.classList.toggle('pointer-events-none')
                        body.classList.toggle('modal-active')
                    }
                }

                //Southeast Statements
                if (fish['NOAA Fisheries Region'] == fishRegion) {
                    var test = fish;
                    // console.log(fish['Source'], fish['Species Name']);
                    if (statePic == 'TX' || statePic == 'LA' || statePic == 'MS') {
                        if (fish['Source'].includes('to Texas')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }

                    }
                    if (statePic == 'AL') {
                        if (fish['Source'].includes('to Texas')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Alabama')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }

                    }
                    if (statePic == 'FL' || statePic == 'GA') {
                        if (fish['Source'].includes('to Texas')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Alabama')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from South Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'SC') {
                        if (fish['Source'].includes('to Texas')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Alabama')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('off Sourth Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from South Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'NC') {
                        if (fish['Source'].includes('to Texas')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Alabama')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }

                    }

                    $('.modal-open').on('click', function (event) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        console.log('clicked');
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        $('#population').empty();
                        $('#fishImg').empty();
                        $('#sciName').empty();
                        $('#availability').empty();
                        $('#location').empty();
                        $('#habitat').empty();
                        var clickedBtnFish = event.target;
                        console.log(clickedBtnFish);
                        // console.log(modalObj);
                        // console.log(modalObj['Species Name']);
                        $('#fishFacts').text(modalObj['Species Name']);
                        // console.log(modalObj['Population Status']);
                        // saveName = '';
                        var saveName = '';
                        var species = '';
                        var sciName = '';
                        var popStat = '';
                        var availability = '';
                        var location = '';
                        var habitat = '';
                        var saveName = species
                        var saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        var noSpace = species.replace(/ /g, '');
                        species = modalObj['Species Name'];
                        sciName = modalObj['Scientific Name'];
                        popStat = modalObj['Population'];
                        availability = modalObj['Availability'].replace('<p>', '').replace('</p>', '');
                        location = modalObj['Location'];
                        habitat = modalObj['Habitat'];
                        $('#population').append($('<li/>').text(modalObj['Population']));
                        $('#sciName').append($('<li/>').text(modalObj['Scientific Name']));
                        $('#availability').append($('<li/>').text(availability));
                        $('#location').append(location);
                        $('#habitat').append(modalObj['Habitat']);
                        var srcUrl = modalObj['Species Illustration Photo']['src'];
                        var altText = modalObj['Species Illustration Photo']['alt'];
                        $('#fishImg').append($('<img/>').attr('src', srcUrl, 'alt', altText));
                        // console.log(JSON.parse(localStorage.getItem(modalObj['Species Name'])).Species);
                        var savedObj = JSON.parse(localStorage.getItem(modalObj['Species Name']) || "{}").Species;
                        console.log(savedObj);
                        if (savedObj === modalObj['Species Name']) {
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                        } else {
                            $('#unfavorite').css('display', 'none')
                            $('#favorite').css('display', 'block')
                        }
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        saveName = species;
                        saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        noSpace = species.replace(/ /g, '');
                        // add favoriting fish for local storage
                        $('#favorite').on('click', favoriting)
                        $('#unfavorite').on('click', unfavoriting)
                        function favoriting(event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            // localStorage.clear();
                            console.log('click');
                            console.log(species);
                            console.log(modalObj['Species Name']);
                            console.log(clickedBtnFish);
                            //needs to apply new style to button to show favorite
                            $(clickedBtnFish).addClass('favorited')
                            //add something to save favorited status for when buttons displayed
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                            console.log(saveName);
                            console.log(saveObj);
                            // $('#favoriteFish').append($('<button/>',
                            // { text: species, id: noSpace+'Btn', class: 'modal-open' }));
                            localStorage.setItem(saveName, JSON.stringify(saveObj));
                            // console.log($('#'+noSpace+'Btn'));
                            // localStorage.setItem(noSpace+'Btn', ($('#'+noSpace+'Btn')));
                            // $('#' + noSpace + 'Btn').on('click', function (ev) {
                            //     ev.preventDefault();
                            //     ev.stopImmediatePropagation();
                            //     console.log('click');
                            //     toggleModal();
                            // })
                        }
                        function unfavoriting(ev) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            console.log('click');
                            $('#unfavorite').css('display', 'none');
                            $('#favorite').css('display', 'block');
                            var saveName = modalObj['Species Name'];
                            localStorage.removeItem(saveName, modalObj['Species Name']);
                            var noSpace = saveName.replace(/ /g, '')
                            $('#' + noSpace + 'Btn').remove();
                        }
                        toggleModal();
                    });

                    const overlay = document.querySelector('.modal-overlay');
                    overlay.addEventListener('click', toggleModal());
                    var closemodal = $('.modal-close');
                    closemodal.on('click', toggleModal());

                    document.onkeydown = function (evt) {
                        evt = evt || window.event
                        var isEscape = false
                        if ("key" in evt) {
                            isEscape = (evt.key === "Escape" || evt.key === "Esc")
                        } else {
                            isEscape = (evt.keyCode === 27)
                        }
                        if (isEscape && document.body.classList.contains('modal-active')) {
                            toggleModal()
                        }
                    };
                    function toggleModal() {
                        const body = document.querySelector('body')
                        const modal = document.querySelector('.modal')
                        modal.classList.toggle('opacity-0')
                        modal.classList.toggle('pointer-events-none')
                        body.classList.toggle('modal-active')
                    }
                }

                //greater atlantic statements
                if (fish['NOAA Fisheries Region'] == fishRegion) {
                    var test = fish;
                    // console.log(fish['Source'], fish['Species Name']);

                    if (statePic == 'ME' || statePic == 'NH') {
                        if (fish['Source'].includes('from New England')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Maine')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'MA' || statePic == 'RI' || statePic == 'NY') {
                        if (fish['Source'].includes('from New England')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Maine')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('Southern Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'CT') {
                        if (fish['Source'].includes('from New England')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Maine')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('from Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('Southern Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'NJ' || statePic == 'PA' || statePic == 'DE' || statePic == 'MD' || statePic == 'DC') {
                        if (fish['Source'].includes('from Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to New Jersey')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('and New Jersey')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Virginia')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to North Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to South Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }
                    if (statePic == 'VA') {
                        if (fish['Source'].includes('from Massachusetts')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to Virginia')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to North Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to South Carolina')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                        if (fish['Source'].includes('to the Gulf')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }

                    $('.modal-open').on('click', function (event) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        console.log('clicked');
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        $('#population').empty();
                        $('#fishImg').empty();
                        $('#sciName').empty();
                        $('#availability').empty();
                        $('#location').empty();
                        $('#habitat').empty();
                        var clickedBtnFish = event.target;
                        console.log(clickedBtnFish);
                        // console.log(modalObj);
                        // console.log(modalObj['Species Name']);
                        $('#fishFacts').text(modalObj['Species Name']);
                        // console.log(modalObj['Population Status']);
                        // saveName = '';
                        var saveName = '';
                        var species = '';
                        var sciName = '';
                        var popStat = '';
                        var availability = '';
                        var location = '';
                        var habitat = '';
                        var saveName = species
                        var saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        var noSpace = species.replace(/ /g, '');
                        species = modalObj['Species Name'];
                        sciName = modalObj['Scientific Name'];
                        popStat = modalObj['Population'];
                        availability = modalObj['Availability'].replace('<p>', '').replace('</p>', '');
                        location = modalObj['Location'];
                        habitat = modalObj['Habitat'];
                        $('#population').append($('<li/>').text(modalObj['Population']));
                        $('#sciName').append($('<li/>').text(modalObj['Scientific Name']));
                        $('#availability').append($('<li/>').text(availability));
                        $('#location').append(location);
                        $('#habitat').append(modalObj['Habitat']);
                        var srcUrl = modalObj['Species Illustration Photo']['src'];
                        var altText = modalObj['Species Illustration Photo']['alt'];
                        $('#fishImg').append($('<img/>').attr('src', srcUrl, 'alt', altText));
                        // console.log(JSON.parse(localStorage.getItem(modalObj['Species Name'])).Species);
                        var savedObj = JSON.parse(localStorage.getItem(modalObj['Species Name']) || "{}").Species;
                        console.log(savedObj);
                        if (savedObj === modalObj['Species Name']) {
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                        } else {
                            $('#unfavorite').css('display', 'none')
                            $('#favorite').css('display', 'block')
                        }
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        saveName = species;
                        saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        noSpace = species.replace(/ /g, '');
                        // add favoriting fish for local storage
                        $('#favorite').on('click', favoriting)
                        $('#unfavorite').on('click', unfavoriting)
                        function favoriting(event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            // localStorage.clear();
                            console.log('click');
                            console.log(species);
                            console.log(modalObj['Species Name']);
                            console.log(clickedBtnFish);
                            //needs to apply new style to button to show favorite
                            $(clickedBtnFish).addClass('favorited')
                            //add something to save favorited status for when buttons displayed
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                            console.log(saveName);
                            console.log(saveObj);
                            // $('#favoriteFish').append($('<button/>',
                            // { text: species, id: noSpace+'Btn', class: 'modal-open' }));
                            localStorage.setItem(saveName, JSON.stringify(saveObj));
                            // console.log($('#'+noSpace+'Btn'));
                            // localStorage.setItem(noSpace+'Btn', ($('#'+noSpace+'Btn')));
                            // $('#' + noSpace + 'Btn').on('click', function (ev) {
                            //     ev.preventDefault();
                            //     ev.stopImmediatePropagation();
                            //     console.log('click');
                            //     toggleModal();
                            // })
                        }
                        function unfavoriting(ev) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            console.log('click');
                            $('#unfavorite').css('display', 'none');
                            $('#favorite').css('display', 'block');
                            var saveName = modalObj['Species Name'];
                            localStorage.removeItem(saveName, modalObj['Species Name']);
                            var noSpace = saveName.replace(/ /g, '')
                            $('#' + noSpace + 'Btn').remove();
                        }
                        toggleModal();
                    });

                    const overlay = document.querySelector('.modal-overlay');
                    overlay.addEventListener('click', toggleModal());
                    var closemodal = $('.modal-close');
                    closemodal.on('click', toggleModal());

                    document.onkeydown = function (evt) {
                        evt = evt || window.event
                        var isEscape = false
                        if ("key" in evt) {
                            isEscape = (evt.key === "Escape" || evt.key === "Esc")
                        } else {
                            isEscape = (evt.keyCode === 27)
                        }
                        if (isEscape && document.body.classList.contains('modal-active')) {
                            toggleModal()
                        }
                    };
                    function toggleModal() {
                        const body = document.querySelector('body')
                        const modal = document.querySelector('.modal')
                        modal.classList.toggle('opacity-0')
                        modal.classList.toggle('pointer-events-none')
                        body.classList.toggle('modal-active')
                    }
                }

                //pacific statements
                if (fish['NOAA Fisheries Region'] == fishRegion) {
                    var modalObj = fish;
                    // console.log(fish['Source'], fish['Species Name']);
                    if (statePic == 'HI') {
                        if (fish['Source'].includes('Hawaii')) {
                            console.log('test');
                            $('#regionList').append($('<li/>').attr("id", 'item_' + i + '_r').addClass('item_' + i).text(fish['NOAA Fisheries Region']));
                            $('#btnList').append($('<li/>').attr("id", 'item_' + i + '_btn', 'class', 'modal_open', 'item_' + i).append($('<button/>',
                                { text: fish['Species Name'], id: 'btn_' + i, class: 'modal-open' }).addClass('item_' + i)));
                            $('item_' + i + '_btn').text('test');
                        }
                    }

                    $('.modal-open').on('click', function (event) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        console.log('clicked');
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        $('#population').empty();
                        $('#fishImg').empty();
                        $('#sciName').empty();
                        $('#availability').empty();
                        $('#location').empty();
                        $('#habitat').empty();
                        var clickedBtnFish = event.target;
                        console.log(clickedBtnFish);
                        // console.log(modalObj);
                        // console.log(modalObj['Species Name']);
                        $('#fishFacts').text(modalObj['Species Name']);
                        // console.log(modalObj['Population Status']);
                        // saveName = '';
                        var saveName = '';
                        var species = '';
                        var sciName = '';
                        var popStat = '';
                        var availability = '';
                        var location = '';
                        var habitat = '';
                        var saveName = species
                        var saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        var noSpace = species.replace(/ /g, '');
                        species = modalObj['Species Name'];
                        sciName = modalObj['Scientific Name'];
                        popStat = modalObj['Population'];
                        availability = modalObj['Availability'].replace('<p>', '').replace('</p>', '');
                        location = modalObj['Location'];
                        habitat = modalObj['Habitat'];
                        $('#population').append($('<li/>').text(modalObj['Population']));
                        $('#sciName').append($('<li/>').text(modalObj['Scientific Name']));
                        $('#availability').append($('<li/>').text(availability));
                        $('#location').append(location);
                        $('#habitat').append(modalObj['Habitat']);
                        var srcUrl = modalObj['Species Illustration Photo']['src'];
                        var altText = modalObj['Species Illustration Photo']['alt'];
                        $('#fishImg').append($('<img/>').attr('src', srcUrl, 'alt', altText));
                        // console.log(JSON.parse(localStorage.getItem(modalObj['Species Name'])).Species);
                        var savedObj = JSON.parse(localStorage.getItem(modalObj['Species Name']) || "{}").Species;
                        console.log(savedObj);
                        if (savedObj === modalObj['Species Name']) {
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                        } else {
                            $('#unfavorite').css('display', 'none')
                            $('#favorite').css('display', 'block')
                        }
                        console.log(modalObj['Species Name']);
                        console.log(species);
                        saveName = species;
                        saveObj = {
                            Species: species,
                            ScientificName: sciName,
                            Population: popStat,
                            Availability: availability,
                            Location: location,
                            Habitat: habitat
                        }
                        console.log(saveObj);
                        noSpace = species.replace(/ /g, '');
                        // add favoriting fish for local storage
                        $('#favorite').on('click', favoriting)
                        $('#unfavorite').on('click', unfavoriting)
                        function favoriting(event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            // localStorage.clear();
                            console.log('click');
                            console.log(species);
                            console.log(modalObj['Species Name']);
                            console.log(clickedBtnFish);
                            //needs to apply new style to button to show favorite
                            $(clickedBtnFish).addClass('favorited')
                            //add something to save favorited status for when buttons displayed
                            $('#favorite').css('display', 'none')
                            $('#unfavorite').css('display', 'block')
                            console.log(saveName);
                            console.log(saveObj);
                            // $('#favoriteFish').append($('<button/>',
                            // { text: species, id: noSpace+'Btn', class: 'modal-open' }));
                            localStorage.setItem(saveName, JSON.stringify(saveObj));
                            // console.log($('#'+noSpace+'Btn'));
                            // localStorage.setItem(noSpace+'Btn', ($('#'+noSpace+'Btn')));
                            // $('#' + noSpace + 'Btn').on('click', function (ev) {
                            //     ev.preventDefault();
                            //     ev.stopImmediatePropagation();
                            //     console.log('click');
                            //     toggleModal();
                            // })
                        }
                        function unfavoriting(ev) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            console.log('click');
                            $('#unfavorite').css('display', 'none');
                            $('#favorite').css('display', 'block');
                            var saveName = modalObj['Species Name'];
                            localStorage.removeItem(saveName, modalObj['Species Name']);
                            var noSpace = saveName.replace(/ /g, '')
                            $('#' + noSpace + 'Btn').remove();
                        }
                        toggleModal();
                    });

                    const overlay = document.querySelector('.modal-overlay');
                    overlay.addEventListener('click', toggleModal());
                    var closemodal = $('.modal-close');
                    closemodal.on('click', toggleModal());

                    document.onkeydown = function (evt) {
                        evt = evt || window.event
                        var isEscape = false
                        if ("key" in evt) {
                            isEscape = (evt.key === "Escape" || evt.key === "Esc")
                        } else {
                            isEscape = (evt.keyCode === 27)
                        }
                        if (isEscape && document.body.classList.contains('modal-active')) {
                            toggleModal()
                        }
                    };
                    function toggleModal() {
                        const body = document.querySelector('body')
                        const modal = document.querySelector('.modal')
                        modal.classList.toggle('opacity-0')
                        modal.classList.toggle('pointer-events-none')
                        body.classList.toggle('modal-active')
                    }
                }
                // $('table').addClass('rounded-lg p-2 text-xl bg-emerald-300 border-solid border-2 border-gray-900');
                // $('button').addClass('rounded-lg p-1 text-l bg-emerald-300 border-solid border-2 border-gray-900');

                // })

                //button creates modal with info from fish api
                //display fish image
            });

        });
}

//modal control
var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function (event) {
        event.preventDefault()
        toggleModal()
    })
}
const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)
var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}
document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
    }
};
function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

// function getredSnapperAPI() {
//     fetch(redSnapperURL)
//         .then(function (snapperResponse) {
//             console.log("fetched snapper");
//             return snapperResponse.json();
//         })
//         .then(function (redSnapperData) {
//             console.log(redSnapperData);
//             console.log(redSnapperData[0]['Source']);
//             if (redSnapperData[0]['Source'].includes('Texas')) {
//                 console.log('logic success');
//             }
//         });
// }

$("#fishBtn").on("click", getFishAPI);
// $("#redSnapperBtn").on("click", getredSnapperAPI);