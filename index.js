var selectedNum;
let processDataCalledTimes = 0;



function processData(result, id, term) {



  let x = 0

  let searchResultsElements = $('.results-container').children().not('.item-header-tabs, .total-view-flex, .item-view, .GET-QUOTE')

  console.log('search results elements',  searchResultsElements)

    processDataCalledTimes++
    let items = result.findCompletedItemsResponse[0].searchResult[0].item || []
    for (let j=0; j < items.length; ++j) {
        let item = items[j], title = item.title, pic = item.galleryURL, viewitem = item.viewItemURL, soldPrice = Math.round(item.sellingStatus[0].convertedCurrentPrice[0]["__value__"]), itemName = title.toString()
        let test1 = "with", test2 = "With", test3 = "WITH", test4 = "W/", test6 = "EXTREME", test5 = "w/"
        let pass1 = "box", pass2 = "case", pass3 = "Box", pass4 = "Case", pass5 = "BOX", pass6 = "SHUTTER", pass7= "Shutter"
        console.log(`term ${term} pic ${pic}`)

        if (null != title && null != viewitem && soldPrice != null) {
          if (itemName.includes(test1) || itemName.includes(test2) || itemName.includes(test3) || itemName.includes(test4) || itemName.includes(test5)) {
            if (itemName.includes(pass1) || itemName.includes(pass2) || itemName.includes(pass3) || itemName.includes(pass4) || itemName.includes(pass5) || itemName.includes(pass6) || itemName.includes(pass7) ) {
              searchResultsElements.each(function(item, index){
                  if(index == id) {
                    console.log('test and pass found')
                    let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                      &lt;div id="card${x}" class="card"&gt;
                      &lt;div class="card-front"&gt;
                      &lt;div class="img-container" id="js-bg-img-${index}-${x}"&gt;
                      &lt/div&gt;
                      &lt;div class="container"&gt;
                      &lt;p&gt;${itemName}&lt;/p&gt;
                      &lt;p class="p-bottom"&gt;Sold Price:&lt;span class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class="card-back"&gt;
                      &lt;div class="back-message"&gt;Item excluded from calculaton. Click again to include in final calculation.&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;`
                  htmlString = $('<div />').html(htmlString).text()
                  $(item).append(htmlString)
                  $(`#js-bg-img-${index}-${x}`).css('background-image', `url(${pic})`)


                  }
              })
              x++
            }
          } else {
              searchResultsElements.each(function(index, item){
                if(index == id) {

                  let gearTerm = term

                  gearTerm = gearTerm.replace(/\s+/g, '-')

                  let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                    &lt;div id="card${x}" class="card"&gt;
                    &lt;div class="card-front"&gt;
                    &lt;div class="img-container" id="js-bg-img-${index}-${x}"&gt;
                    &lt/div&gt;
                    &lt;div class="container"&gt;
                    &lt;p&gt;${itemName}&lt;/p&gt;
                    &lt;p class="p-bottom"&gt;Sold Price:&lt;span class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="card-back"&gt;
                    &lt;div class="back-message"&gt;Item excluded from calculaton. Click again to include in final calculation.&lt;/div&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;`
                  htmlString = $('<div />').html(htmlString).text()
                  $(item).append(htmlString)
                  console.log(`term2 ${term} pic2 ${pic}`)
                  $(`#js-bg-img-${index}-${x}`).css('background-image', `url(${pic})`)

                }
              })
              x++
           }
       }
    }

    if (processDataCalledTimes === parseInt(selectedNum)) {

      handleVerticalTabs()
      getPrices()

    }
}

var trdPrice;
var buyPRice;

/*function handleViewButtons() {
  $('.view-buttons').on('click', 'button', function(e){
    let viewSelect = $(e.currentTarget).text()
    $(e.currentTarget).addClass('active')
    if(viewSelect == 'Total View'){
      if($('.item-view').hasClass('hide') == false) {
        $('.item-view').addClass('hide')
        $('.total-view-flex').removeClass('hide')
      }
    } else {
        if($('.item-view').hasClass('hide') == true) {
          $('.item-view').removeClass('hide')
          $('.total-view-flex').addClass('hide')
        }
    }
  })
}*/

function handleVerticalTabs() {

  $('.searchResults').css('display', 'none')
  $('.GET-QUOTE').css('display', 'none')

    console.log('running handle click')
    $('.item-header-tabs').on('click', 'button', function(e){

      e.stopPropagation()

      $('.searchResults').css('display', 'none')
      $('.GET-QUOTE').css('display', 'none')

      $('.tab-item').removeClass('active')

      $(e.currentTarget).addClass('active')

      let text = $(e.currentTarget).text()
      text = text.replace(/\s+/g, '-')

      text = text.replace(/\./g, '-')

      text = '.' + text

      console.log('text', text)
      if (text != '.GET-QUOTE') {
        console.log('text is not get-quote text is', text)
        $(text).css('display', 'flex')
        if ($('.view-buttons').hasClass('hide') != true) {
          $('.view-buttons').addClass('hide')
        }
      } else {
        console.log('run else')
        $(text).css('display', 'block')
      }

  })

}

function createEquipObjects() {
  for(i=0; i<gear.length; i++){
    gear[i] = new EquipObject
    gear[i].name = gearName[i]
    console.log(`gear[${i}.name] is ${gear[i].name}`)
  }

}

function EquipObject(name, prices) {
  this.name = name
  this.prices = prices
  this.getTrdPrice = getTrdPrice
  this.getBuyPrice = getBuyPrice
  this.getTotalPrice = getTotalPrice
}

function calculateAvg(obj) {
  console.log('obj in calc average', obj)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  let sum = obj.prices.reduce(reducer)
  let avg = sum / obj.prices.length
  return avg
}

function getTotalPrice(condition, calc) {
  var totalPrice;

  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const trdPrices = [this.getTrdPrice(condition)]
  const buyPrices = [this.getBuyPrice(condition)]

  if(gear.length > 1) {
    for(i=1; i<gear.length; i++) {
      let trdPrice = gear[i].getTrdPrice(condition)
      let buyPrice = gear[i].getBuyPrice(condition)
      trdPrices.push(trdPrice)
      buyPrices.push(buyPrice)
    }
  }

  switch (calc) {
    case 'buy':
      console.log('buyprices', buyPrices)
      totalPrice = buyPrices.reduce(reducer)
      break;

    case 'trd':
      console.log('trdprices', trdPrices)

      totalPrice = trdPrices.reduce(reducer)
      break;
  }
  return totalPrice

}

function getBuyPrice(condition) {
  let avg = calculateAvg(this)
  console.log('avg', avg)
  switch (condition) {
    case "pom":
      buyPrice = Math.round(avg * .30);
      console.log('type of avg', typeof avg)
      break;

    case "ulw":
      buyPrice = Math.round(avg * .275);
      break;

    case "umw":
      buyPrice = Math.round(avg * .25);
      break;

    case "uhw":
      buyPrice = Math.round(avg * .225);
      break;

    case "usf":
      buyPrice = Math.round(avg * .20);
      break;

    default:
      return Math.round(avg * .30);
  }

  return buyPrice;
}

function getTrdPrice(condition) {
  let avg = calculateAvg(this)
    switch (condition) {
      case "pom":
        trdPrice = Math.round(avg * .35);
        break;

      case "ulw":
         trdPrice =  Math.round(avg * .30);
         break;

      case "umw":
         trdPrice =  Math.round(avg * .275);
         break;

      case "uhw":
         trdPrice =  Math.round(avg * .25);
         break;

      case "usf":
         trdPrice = Math.round(avg * .225);
         break;

      default:
         trdPrice = Math.round(avg * .35);
         break;
    }
    return trdPrice;
  }



function showPrices() {

  console.log('gear in showPrices is', gear)

  let gearPrevious = gear;

  $('.view-buttons').removeClass('hide')
  $('.searchResults').css('display', 'none')
  $('.tab-item').removeClass('active')
  $('.get-quote').removeClass('hide')
  $('.total-view-flex').removeClass('hide')
  $('.item-view').empty()
  $('.total').addClass('active')

  if($('.item-view').hasClass('hide') == false ){
    $('.item-view').addClass('hide')
    $('.item').removeClass('active')
  }

    $('.total-buy-prices-grid').html(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${gear[0].getTotalPrice('pom', 'buy')}</span><span class="price">${gear[0].getTotalPrice('ulw', 'buy')}</span><span class="price">${gear[0].getTotalPrice('umw', 'buy')}</span><span class="price">${gear[0].getTotalPrice('uhw','buy')}</span><span class="price">${gear[0].getTotalPrice('usf','buy')}</span>`)
    $('.total-trade-prices-grid').html(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${gear[0].getTotalPrice('pom', 'trd')}</span><span class="price">${gear[0].getTotalPrice('ulw','trd')}</span><span class="price">${gear[0].getTotalPrice('umw', 'trd')}</span><span class="price">${gear[0].getTotalPrice('uhw','trd')}</span><span class="price">${gear[0].getTotalPrice('usf','trd')}</span>`)

    for (i=0; i<selectedNum; i++) {
      $('.item-view').append(`<h2 class="item-view-title">${gear[i].name} Buy Prices</h2><div class="item-buy-prices-grid prices-grid hide"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${gear[i].getBuyPrice("pom")}</span><span class="price">${gear[i].getBuyPrice("ulw")}</span><span class="price">${gear[i].getBuyPrice("umw")}</span><span class="price">${gear[i].getBuyPrice("uhw")}</span><span class="price">${gear[i].getBuyPrice("usf")}</span></div>`)
      $('.item-view').append(`<h2 class="item-view-title">${gear[i].name} Trade Prices</h2><div class="item-trade-prices-gird prices-grid hide"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${gear[i].getTrdPrice("pom")}</span><span class="price">${gear[i].getTrdPrice("ulw")}</span><span class="price">${gear[i].getTrdPrice("umw")}</span><span class="price">${gear[i].getTrdPrice("uhw")}</span><span class="price">${gear[i].getTrdPrice("usf")}</span></div>`)
    }

    $('.total').on('click', function(e){
      e.stopPropagation()
      if ($('.total-view-flex').hasClass('hide')) {
        $('.total-view-flex').removeClass('hide')
        $('.total').addClass('active')
        $('.item').removeClass('active')
        $('.item-view').addClass('hide')
      }
    })

    $('.item').on('click', function(e){
      e.stopPropagation()
      if ( $('.item-view').hasClass('hide')) {
        $('.item-view').removeClass('hide')
        $('.item').addClass('active')
        $('.total').removeClass('active')
        $('.total-view-flex').addClass('hide')
      }
    })

    handleAccordionClick()

}

function handleAccordionClick() {
  let priceGridElements = $('.item-view').children().not('h2')
  console.log('priceGridElements', priceGridElements)

  $('.item-view-title').on('click', function(e){
    e.stopPropagation()
    console.log('click registered')
    priceGridElements.each(function(){
      if($(this).hasClass('hide') != true) {
        $(this).addClass('hide')
      }
    })
    $(this).next().removeClass('hide')
  })
}

function handleCardClick() {
  let i = 0;

  $('.results-container').on('click', '.card', function(e){
    i++

    e.stopPropagation()
    $(this).toggleClass('card-rotate')
    let clickedPrice = parseInt($(e.currentTarget).find('span.price').text())
    console.log('typeof clicked price', typeof clickedPrice)
    let id = this.id
    console.log('id is', id)
    let idIndex = parseInt(id.replace(/\D+/, ""))
    console.log('idIndex', idIndex)
    let div = $(this).closest('div.searchResults')
    console.log('div', div)
    let divID = div[0].id
    console.log('divID', divID)

    var divIndex = parseInt(divID.replace(/\D+/, ""))
    console.log('divIndex', divIndex)
    let priceIndex = gear[divIndex].prices.indexOf(clickedPrice)
    console.log('priceIndex', priceIndex)
    if ($(this).hasClass('card-rotate') === true) {
      console.log('has class card rotate true')
      gear[divIndex].prices.splice(priceIndex, 1)
    } else {
        console.log('has class card rotate false')
        console.log('id index in else case for adding price back', idIndex)
        console.log('gear prices before add price back', gear[divIndex].prices)
        gear[divIndex].prices.splice(idIndex, 0, clickedPrice)
    }
  })
  $('.calc-button').on('click', function(){
    showPrices()
  })

  $('.item-header-tabs').on('click', '.restart-button', function(e){
      console.log('button click')
      e.stopPropagation()
      location.reload()
  })


}

function SearchObject(url, id, term) {
  this.url = url
  this.id = id
  this.term = term
}

let searchUrls = [];

function getPrices() {

  toggleDisplay('.step-2')
  toggleDisplay('.step-3')

  const prices = []
  let searchResultsElements = $('.results-container').children().not('.item-header-tabs, .total-view-flex, .item-view, .GET-QUOTE')
  console.log('searchResultsElements', searchResultsElements)

for(i=0; i<searchResultsElements.length; i++){
  const pricesPerItem = []
  let item = searchResultsElements[i]
  $(item).find('span.price').each(function(){
    priceElement = $(this).text()
    pricesPerItem.push(parseInt(priceElement))
  })


  gear[i].prices = pricesPerItem
  console.log('gear[i].prices', gear[i].prices)
}
  handleCardClick()

}

let getDataCounter = 0;

async function getData(searchObj) {
  let response = await fetchJsonp(searchObj.url)
  let data = await response.json()

  processData(data, searchObj.id, searchObj.term)
}

function buildRequestUrl(item) {

    baseURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=RoryGarc-priceGen-PRD-55d8a3c47-c767674d&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=";
    endURL = "&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true&paginationInput.entriesPerPage=8&paginationInput.pageNumber=1";
    let requestUrl = baseURL.concat(item.split(' ').join('+'), endURL);
    return requestUrl
}

const gear = []
const gearName = []

function getSearchTerms(){
  console.log('get search terms running')

  $('.search-button').on('click', function(e){
    e.preventDefault()
    let i = 0;
    $('.search-box').each(function($inputObj){
      let item = $(this).val()
      let search = new SearchObject(buildRequestUrl(item), i, item)
      gear.push(item)
      console.log('gear in getsearchterms', gear)
      gearName.push(item)
      let term = gearName[i]
      term = term.replace(/\s+/g, '-')
      term = term.replace(/\./g, '-')

      $('.item-header-tabs').append(`<button class="tab-item">${gear[i].toUpperCase()}</button>`)
      $('#resultsContainer').append(`<div class="searchResults ${term.toUpperCase()}" id="result${i}"></div>`)
      createEquipObjects()
      getData(search)
      i++
    })
    $('.item-header-tabs').append('<button type="button" class="tab-item calc-button">GET QUOTE</button>')
    $('.item-header-tabs').append('<button type="button" class="restart-button">RESTART</button>')
  })


 }

function createInputs(numTerms) {
  toggleDisplay('.step-1')
  toggleDisplay('.step-2')
  let id = "id"
  for (let i=0; i<numTerms; ++i) {
    $('.input-container-flex').prepend(`<div class="inner-input"><input class="search-box" type="text" required placeholder="Enter equipment model name" list="inv_list"></div>`)
    $('.search-box').autocomplete({
      source: ["Sony a7S II", "Sony a7S", "Sony a7", "Sony a7 II", "Sony a7 III", "Sony a9", "Sony a7R", "Sony a7R II", "Sony a7R II", "Canon EOS 5D", "Canon EOS 5D Mark II", "Canon EOS 5D Mark III" ]

  })
}

  getSearchTerms()
}

function toggleDisplay(className) {
  console.log('toggle running')
  if ($(className).attr('style') === 'display: none') {
    $(className).removeAttr('style')
  } else {
    $(className).attr('style', 'display: none')
  }
}

function startQuote() {
  $('.restart-2').on('click', function(e){
    e.stopPropagation()
    location.reload()
  })
  $('.num-opt').click(function(e){
    e.preventDefault()
    selectedNum = this.id;
    createInputs(selectedNum)
  })
}





$(startQuote);
