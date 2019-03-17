var tweetInput = document.getElementById('tweet-input');
var charRemaining = document.getElementById('char-remaining');
var tweetBtn = document.getElementById('tweet-btn');
var tweetList = document.getElementById('tweet-list');
var retweetBox = document.getElementById('dialog');


var max_value;
let tweetListArr = [{
    id: 1,
    user: {
        name: 'Tim Cook',
        avartar: 'https://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_bigger.jpg'
    },
    content: 'It’s not too late to get moving for #heartmonth! Thanks to everyone who joined our #TodayatApple Health & Fitness Walk in Brooklyn yesterday. #closeyourrings',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: '',
    like: 10,
    retweetTimes: 302,
    imageUrl: 'https://pbs.twimg.com/media/D1KPPOqU0AAEoVX.jpg'
},
{
    id: 2,
    user: {
        name: 'Sundar Pichai',
        avartar: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_bigger.jpg'
    },
    content: 'I love Pi-loi team',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: '',
    like: 11,
    retweetTimes: 582,
    imageUrl: 'https://pbs.twimg.com/media/D1H_sjeUYAAvi7-.jpg'
}, {
    id: 3,
    user: {
        name: 'Minh Thang',
        avartar: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_bigger.jpg'
    },
    content: 'Wowwwwww!!!',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: 1,
    like: 12,
    retweetTimes: 582,
    imageUrl: 'https://pbs.twimg.com/media/D1H_sjeUYAAvi7-.jpg'
}];

tweetBtn.addEventListener('click', function () {
    charRemaining.innerHTML = 140 + " Characters Remaining";
    let newTwsid = parseInt(getLastedId()) + 1;
    console.log(tweetInput.value)
    tweetList.innerHTML += `
    <div class="panel panel-default">
    <div class="panel-body" id="tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png"> 
            </a>
            <div class="media-body">
            <p id='body'>${insertHashtag(tweetInput.value)}</p>
            <p class="font-italic" id='body'>${moment(d).fromNow()}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${newTwsid}" onclick="reTws(${newTwsid})" href="#" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})" href="#"> Like <span class="glyphicon glyphicon-star"></span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" href="#" style="color:red"> Remove <span class="glyphicon glyphicon-remove"></span></a> </li>
                </ul>
            </div>
        </div>
        </div>
    </div>`

    tweetListArr.push({
        id: newTwsid,
        user: {
            name: 'Me',
            avartar: 'https://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_bigger.jpg'
        },
        content: tweetInput.value,
        publishAt: new Date(),
        retweetId: null,
        like: 0,
        retweetTimes: 0,
        imageUrl: ''
    })
    tweetInput.value = "";
});

tweetInput.addEventListener('input', function () {
    max_value = 140 - tweetInput.value.length;
    charRemaining.innerHTML = max_value + " Characters Remaining";

    if (max_value < 0) {
        charRemaining.style.color = 'red';
        tweetBtn.disabled = true;
    } else {

        charRemaining.style.color = 'black';
        tweetBtn.disabled = false;
    }
    
});

let getLastedId = () => {
    return tweetListArr[tweetListArr.length - 1].id;
}

