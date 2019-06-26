var selectedNum;
let processDataCalledTimes = 0;

function processData(result, id) {
  let x = 0

  let searchResultsElements = $('.results-container').children()

    processDataCalledTimes++
    let items = result.findCompletedItemsResponse[0].searchResult[0].item || []
    for (let j=0; j < items.length; ++j) {
        let item = items[j], title = item.title, pic = item["galleryURL"], viewitem = item.viewItemURL, soldPrice = Math.round(item.sellingStatus[0].convertedCurrentPrice[0]["__value__"]), itemName = title.toString()
        let test1 = "with", test2 = "With", test3 = "WITH", test4 = "W/", test6 = "EXTREME", test5 = "w/"
        let pass1 = "box", pass2 = "case", pass3 = "Box", pass4 = "Case", pass5 = "BOX", pass6 = "SHUTTER", pass7= "Shutter"

        if (null != title && null != viewitem && soldPrice != null) {
          if (itemName.includes(test1) || itemName.includes(test2) || itemName.includes(test3) || itemName.includes(test4) || itemName.includes(test5)) {
            if (itemName.includes(pass1) || itemName.includes(pass2) || itemName.includes(pass3) || itemName.includes(pass4) || itemName.includes(pass5) || itemName.includes(pass6) || itemName.includes(pass7) ) {
              searchResultsElements.each(function(item, index){
                  if(index == id) {
                    let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                      &lt;div id="card${x}" class="card"&gt;
                        &lt;div class="card-front"&gt;
                          &lt;img class="pic" alt="item picture" src="${pic}" style="width:100%"&gt;
                          &lt;div class="container"&gt;
                            &lt;span&gt;${itemName}&lt;br&gt;&lt;/span&gt;
                            &lt;p&gt;&lt;br&gt;Sold Price:&lt;span class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="card-back"&gt;
                          &lt;div class="back-message"&gt;Item excluded from calculaton. Click again to include in final calculation.&lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;`
                    htmlString = $('<div />').html(htmlString).text()
                    $(item).append(htmlString)
                  }
              })
              x++
            }
          } else {
              searchResultsElements.each(function(index, item){
                if(index == id) {
                  let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                    &lt;div id="card${x}" class="card"&gt;
                      &lt;div class="card-front"&gt;
                        &lt;img class="pic" alt="item picture" src="${pic}" style="width:100%"&gt;
                        &lt;div class="container"&gt;
                          &lt;span&gt;${itemName}&lt;br&gt;&lt;/span&gt;
                          &lt;p&gt;&lt;br&gt;Sold Price:&lt;span class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class="card-back"&gt;
                        &lt;div class="back-message"&gt;Item excluded from calculaton. Click again to include in final calculation.&lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;`
                  htmlString = $('<div />').html(htmlString).text()
                  $(item).append(htmlString)
                }
              })
              x++
           }
       }
    }

    if (processDataCalledTimes === parseInt(selectedNum)) {

      getPrices()
    }
}

var trdPrice;
var buyPRice;

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
  toggleDisplay('.total-view-flex')
  toggleDisplay('.step-4')
  toggleDisplay('.step-3')
  toggleDisplay('.views')

  $('.total-buy-prices-grid').append(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${gear[0].getTotalPrice('pom', 'buy')}</span><span class="price">${gear[0].getTotalPrice('ulw', 'buy')}</span><span class="price">${gear[0].getTotalPrice('umw', 'buy')}</span><span class="price">${gear[0].getTotalPrice('uhw','buy')}</span><span class="price">${gear[0].getTotalPrice('usf','buy')}</span>`)
  $('.total-trade-prices-grid').append(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${gear[0].getTotalPrice('pom', 'trd')}</span><span class="price">${gear[0].getTotalPrice('ulw','trd')}</span><span class="price">${gear[0].getTotalPrice('umw', 'trd')}</span><span class="price">${gear[0].getTotalPrice('uhw','trd')}</span><span class="price">${gear[0].getTotalPrice('usf','trd')}</span>`)

  for (i=0; i<selectedNum; i++) {
    $('.item-view-flex').append(`<h2 class="item-view-title">${gear[i].name} Buy Prices</h2><div class="item-buy-prices-grid prices-grid"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${gear[i].getBuyPrice("pom")}</span><span class="price">${gear[i].getBuyPrice("ulw")}</span><span class="price">${gear[i].getBuyPrice("umw")}</span><span class="price">${gear[i].getBuyPrice("uhw")}</span><span class="price">${gear[i].getBuyPrice("usf")}</span></div>`)
    $('.item-view-flex').append(`<h2 class="item-view-title">${gear[i].name} Trade Prices</h2><div class="item-trade-prices-gird prices-grid"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${gear[i].getTrdPrice("pom")}</span><span class="price">${gear[i].getTrdPrice("ulw")}</span><span class="price">${gear[i].getTrdPrice("umw")}</span><span class="price">${gear[i].getTrdPrice("uhw")}</span><span class="price">${gear[i].getTrdPrice("usf")}</span></div>`)
  }

  $('.restart').on('click', function(e){
    e.stopPropagation()
    location.reload()
  })

  $('.total').on('click', function(e){
    e.stopPropagation()
    if ( $('.total-view-flex').attr('style') === 'display: none' ) {
      toggleDisplay('.item-view-flex')
      toggleDisplay('.total-view-flex')
    }
  })

  $('.item').on('click', function(e){
    e.stopPropagation()
    if ( $('.item-view-flex').attr('style') === 'display: none' ) {
      toggleDisplay('.total-view-flex')
      toggleDisplay('.item-view-flex')
    }
  })
}

function handleCardClick() {
  let i = 0;

  $('.results-container').on('click', '.card', function(e){
    i++
    e.stopPropagation()
    $(this).toggleClass('card-rotate')
    var clickedPrice = $(e.currentTarget).find('span.price').text()

    let id = this.id
    let idIndex = parseInt(id.replace(/\D+/, ""))
    let div = $(this).closest('div.searchResults')
    let divID = div[0].id

    var divIndex = parseInt(divID.replace(/\D+/, ""))
    let priceIndex = gear[divIndex].prices.indexOf(clickedPrice)

    if ($(this).hasClass('card-rotate') === true) {
      gear[divIndex].prices.splice(priceIndex, 1)
    } else {
        gear[divIndex].prices.splice(idIndex, 1, parseInt(clickedPrice))
    }
  })
  $('.calc-button').on('click', function(){
    showPrices()
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
  let searchResultsElements = $('.results-container').children()

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

  processData(data, searchObj.id)
}

function buildRequestUrl(item) {

    baseURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=RoryGarc-priceGen-PRD-55d8a3c47-c767674d&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=";
    endURL = "&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true&paginationInput.entriesPerPage=10&paginationInput.pageNumber=1";
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
      gearName.push(item)
      createEquipObjects()
      getData(search)
      i++
    })
  })
}

function createSearch(numTerms) {
  toggleDisplay('.step-1')
  toggleDisplay('.step-2')
  let id = "id"
  for (let i=0; i<numTerms; ++i) {
    $('.input-container-flex').prepend(`<div class="inner-input-flex"><input class="search-box" type="text" required placeholder="Enter equipment model name"><div>`)
    $('.results-container').append(`<div class="searchResults" id="result${i}"></div>`)
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
  handleRestart()
  $('.num-opt').click(function(e){
    e.preventDefault()
    selectedNum = this.id;
    createSearch(selectedNum)
  })
}

function handleRestart() {
  console.log('handlerestart running')
  $('.restart-button').on('click', function(){
      location.reload()
  })

  $('.restart-2').on('click', function(){
      location.reload()
  })
}



$(startQuote);
