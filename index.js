const showsList = document.querySelector('.shows-list')
const setSubBtn = document.querySelector('#set-sub')
const subsList = document.querySelector('#subs')

class User {
    constructor() {
      this.subscriptions = [];
    }
    subscribe(streamingService) {
        console.log(this)
        this.subscriptions.push(streamingService)
        return this.subscriptions;
      }
  }

  class Subscription {
    constructor(streamingService) {
      this.streamingService = streamingService;
    }
    watch(showName){
        console.log(`watching show ${showName}`)
    }
    getRecommendationTrending(){
        getMostViewedShowsOfYear()
    }
  }

  class StreamingService {
    constructor(name, shows) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames
      }
      addShow(show){
        this.shows.push(show)
      }
      getMostViewedShowsOfYear(year){

      }
      getMostViewedShowsOfGenre(genre){

      }
  }

  class Show {
    constructor(name, genre, releaseDate) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
      }
      getDuration(){

      }
  }

  class Movie extends Show{
    constructor(name, genre, releaseDate) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
      }
  }

  class Episode extends Show{
    constructor(name, genre, releaseDate) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
      }
  }

  class Series extends Show{
    constructor(name, genre, releaseDate, episodes) {
        this.episodes = episodes;
        super(name);
        super(genre);
        super(releaseDate);
    }
  }

  const subscriptions = [
    {streamingService: 'service 1',
        shows: [
            {title: ''}
        ]
    }
  ]

  //showsList.addEventListener('')

const user = new User()
let currentSubscription;
const yourSub = new Subscription()

setSubBtn.addEventListener('click', () => {
    const subName = subscriptions[subsList.selectedIndex].streamingService;
    currentSubscription = new Subscription(subName);
    user.subscribe(subName);
    console.log(user);
})

