//Define global variables
const QuoteGen = {
   processDataCalledTimes: 0,
   verifyDataCounter: 0,
   selectedNum: null,
   gear: null,
   gearName: null,
   catIDs: null,
   responses: null,
   searchIDs: null
}


//Define list of accepted eBay category ID's
const acceptedCatIDs = ["30093", "69573", "30097", "172511", "31388", "3323", "29967", "15230", "162480", "83857", "29994", "43440", "64345", "50506", "167930", "179697", "170066", "29965", "43479", "64353", "30078", "30090"]

//Process returned json data
function processData(result, id) {

  let x = 0

  let searchResultsElements = $('.results-container').children().not('.item-header-tabs, .total-view-flex, .item-view, .GET-QUOTE')

    let runCounter = QuoteGen.processDataCalledTimes += 1
    let items = result.findCompletedItemsResponse[0].searchResult[0].item || []
    for (let j=0; j < items.length; ++j) {
        let item = items[j], title = item.title, pic = item.galleryURL, viewitem = item.viewItemURL, soldPrice = Math.round(item.sellingStatus[0].convertedCurrentPrice[0]["__value__"]), itemName = title.toString()
        let test1 = "with", test2 = "With", test3 = "WITH", test4 = "W/", test6 = "EXTREME", test5 = "w/"
        let pass1 = "box", pass2 = "case", pass3 = "Box", pass4 = "Case", pass5 = "BOX", pass6 = "SHUTTER", pass7= "Shutter"

        //Filter out results based on title contents. Accepted results must contain pass string if they container test string
        if (null != title && null != viewitem && soldPrice != null) {
          if (itemName.includes(test1) || itemName.includes(test2) || itemName.includes(test3) || itemName.includes(test4) || itemName.includes(test5)) {
            if (itemName.includes(pass1) || itemName.includes(pass2) || itemName.includes(pass3) || itemName.includes(pass4) || itemName.includes(pass5) || itemName.includes(pass6) || itemName.includes(pass7) ) {
              searchResultsElements.each(function(index, item){
                  if(index == id) {
                    let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                      &lt;div id="card${index}-${x}" class="card"&gt;
                      &lt;div class="card-front"&gt;
                      &lt;div class="img-container" id="js-bg-img-${index}-${x}"&gt;
                      &lt/div&gt;
                      &lt;div class="container"&gt;
                      &lt;p aria-label="item title"&gt;${itemName}&lt;/p&gt;
                      &lt;p class="p-bottom"&gt;Sold Price:&lt;span aria-label="sold price" class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
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
                  let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                    &lt;div id="card${index}-${x}" class="card"&gt;
                    &lt;div class="card-front"&gt;
                    &lt;div class="img-container" id="js-bg-img-${index}-${x}"&gt;
                    &lt/div&gt;
                    &lt;div class="container"&gt;
                    &lt;p aria-label="item title"&gt;${itemName}&lt;/p&gt;
                    &lt;p class="p-bottom"&gt;Sold Price:&lt;span aria-label="sold price" class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
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
       }
    }
    //Once all data has been procesed store results in objects and get the prices
    if (runCounter === QuoteGen.selectedNum) {
      createEquipObjects()
      handleVerticalTabs()
      getPrices()

    }
}


//Show results, or quote based on clicked button
function handleVerticalTabs() {

  $('.searchResults').css('display', 'none')
  $('.GET-QUOTE').css('display', 'none')

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

      if (text != '.GET-QUOTE') {
        $(text).css('display', 'flex')
        if ($('.total').hasClass('hide') != true && $('.item').hasClass('hide') != true) {
          $('.total').addClass('hide')
          $('.item').addClass('hide')
        }
      } else {
        $(text).css('display', 'block')
      }

  })

}

//Create EquipObject for each search item
function createEquipObjects() {
  for(i=0; i<QuoteGen.gear.length; i++){
    QuoteGen.gear[i] = new EquipObject
    QuoteGen.gear[i].name = QuoteGen.gearName[i]
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
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  let sum = obj.prices.reduce(reducer)
  let avg = sum / obj.prices.length
  return avg
}

//Calculate total buy and trade price for all items
function getTotalPrice(condition, calc) {
  var totalPrice;

  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const trdPrices = [this.getTrdPrice(condition)]
  const buyPrices = [this.getBuyPrice(condition)]

  if(gear.length > 1) {
    for(i=1; i<gear.length; i++) {
      let trdPrice = QuoteGen.gear[i].getTrdPrice(condition)
      let buyPrice = QuoteGen.gear[i].getBuyPrice(condition)
      trdPrices.push(trdPrice)
      buyPrices.push(buyPrice)
    }
  }

  switch (calc) {
    case 'buy':
      totalPrice = buyPrices.reduce(reducer)
      break;

    case 'trd':
      totalPrice = trdPrices.reduce(reducer)
      break;
  }
  return totalPrice

}

//Caclulate buy price based on condition
function getBuyPrice(condition) {
  let avg = calculateAvg(this)
  switch (condition) {
    case "pom":
      buyPrice = Math.round(avg * .30)
      break

    case "ulw":
      buyPrice = Math.round(avg * .275)
      break

    case "umw":
      buyPrice = Math.round(avg * .25)
      break

    case "uhw":
      buyPrice = Math.round(avg * .225)
      break

    case "usf":
      buyPrice = Math.round(avg * .20)
      break

    default:
      return Math.round(avg * .30)
  }

  return buyPrice
}

//Cacluulate trade price based on condtion
function getTrdPrice(condition) {
  let avg = calculateAvg(this)
    switch (condition) {
      case "pom":
        trdPrice = Math.round(avg * .35)
        break;

      case "ulw":
         trdPrice =  Math.round(avg * .30);
         break

      case "umw":
         trdPrice =  Math.round(avg * .275)
         break

      case "uhw":
         trdPrice =  Math.round(avg * .25)
         break

      case "usf":
         trdPrice = Math.round(avg * .225)
         break

      default:
         trdPrice = Math.round(avg * .35)
         break
    }
    return trdPrice
  }



function showPrices() {

  let gearPrevious = gear

  $('.total').removeClass('hide')
  $('.item').removeClass('hide')
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
    //Insert total prices into the DOM
    $('.total-buy-prices-grid').html(`<span class="conditions">Mint</span><span class="conditions">Light Wear</span><span class="conditions">Medium Wear</span><span class="conditions">Heavy Wear</span><span class="conditions">Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${QuoteGen.gear[0].getTotalPrice('pom', 'buy')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('ulw', 'buy')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('umw', 'buy')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('uhw','buy')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('usf','buy')}</span>`)
    $('.total-trade-prices-grid').html(`<span class="conditions">Mint</span><span class="conditions">Light Wear</span><span class="conditions">Medium Wear</span><span class="conditions">Heavy Wear</span><span class="conditions">Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${QuoteGen.gear[0].getTotalPrice('pom', 'trd')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('ulw','trd')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('umw', 'trd')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('uhw','trd')}</span><span class="price">${QuoteGen.gear[0].getTotalPrice('usf','trd')}</span>`)

    //Insert per item prices into the DOM
    for (i=0; i<QuoteGen.selectedNum; i++) {
      $('.item-view').append(`<div class="grid-container"><div aria-expanded="false" aria-controls="buy${i}" class="item-view-title">${QuoteGen.gear[i].name} Buy Prices</div><div id="buy${i}" aria-hidden="true" class="item-buy-prices-grid prices-grid hide"><span class="conditions">Mint</span><span class="conditions">Light Wear</span><span class="conditions">Medium Wear</span><span class="conditions">Heavy Wear</span><span class="conditions">Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${QuoteGen.gear[i].getBuyPrice("pom")}</span><span class="price">${QuoteGen.gear[i].getBuyPrice("ulw")}</span><span class="price">${QuoteGen.gear[i].getBuyPrice("umw")}</span><span class="price">${QuoteGen.gear[i].getBuyPrice("uhw")}</span><span class="price">${QuoteGen.gear[i].getBuyPrice("usf")}</span></div></div>`)
      $('.item-view').append(`<div class="grid-container"><div aria-expanded="false" aria-controls="trade${i}" class="item-view-title">${QuoteGen.gear[i].name} Trade Prices</div><div id="trade${i}" aria-hidden="true" class="item-trade-prices-gird prices-grid hide"><span class="conditions">Mint</span><span class="conditions">Light Wear</span><span class="conditions">Medium Wear</span><span class="conditions">Heavy Wear</span><span class="conditions">Semi-functional</span> <span class="conditions-short">P.O.M</span>
      <span class="conditions-short">U.L.W</span>
      <span class="conditions-short">U.M.W</span>
      <span class="conditions-short">U.H.W</span><span class="conditions-short">U.S.F</span><span class="price">${QuoteGen.gear[i].getTrdPrice("pom")}</span><span class="price">${QuoteGen.gear[i].getTrdPrice("ulw")}</span><span class="price">${QuoteGen.gear[i].getTrdPrice("umw")}</span><span class="price">${QuoteGen.gear[i].getTrdPrice("uhw")}</span><span class="price">${QuoteGen.gear[i].getTrdPrice("usf")}</span></div></div>`)
    }

    //Show total view when clicked
    $('.total').on('click', function(e){
      e.stopPropagation()
      if ($('.total-view-flex').hasClass('hide')) {
        $('.total-view-flex').removeClass('hide')
        $('.total').addClass('active')
        $('.item').removeClass('active')
        $('.item-view').addClass('hide')
      }
    })

    //Show item view when clicked
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

//Hide and show per item prices
function handleAccordionClick() {
  let priceGridElements = $('.item-view').children().not('.item-view-title, .grid-container')

  $('.item-view-title').on('click', function(e){
    e.stopPropagation()
    if($(this).next().hasClass('hide') == false) {
      $(this).next().addClass('hide')
    } else {
        $(this).next().removeClass('hide')
    }

  })
}

//Flip card over when clicked and remove price from array used for quote calcultion
function handleCardClick() {
  let i = 0;

  $('.results-container').on('click', '.card', function(e){
    i++

    e.stopPropagation()
    $(this).toggleClass('card-rotate')
    let clickedPrice = parseInt($(e.currentTarget).find('span.price').text())
    let id = this.id
    let idIndex = parseInt(id[6])
    let div = $(this).closest('div.searchResults')
    let divID = div[0].id

    var divIndex = parseInt(divID.replace(/\D+/, ""))
    let priceIndex = QuoteGen.gear[divIndex].prices.indexOf(clickedPrice)
    if ($(this).hasClass('card-rotate') === true) {
      QuoteGen.gear[divIndex].prices.splice(priceIndex, 1)
    } else {
        QuoteGen.gear[divIndex].prices.splice(idIndex, 0, clickedPrice)
    }
  })
  $('.calc-button').on('click', function(){
    showPrices()
  })

  $('.item-header-tabs').on('click', '.restart-button', function(e){
      e.stopPropagation()
      location.reload()
  })


}


function SearchObject(url, id, term) {
  this.url = url
  this.id = id
  this.term = term
}

function getPrices() {

  toggleDisplay('.step-2')
  toggleDisplay('.step-3')

  const prices = []
  let searchResultsElements = $('.results-container').children().not('.item-header-tabs, .total-view-flex, .item-view, .GET-QUOTE')

  for(i=0; i<searchResultsElements.length; i++){
    const pricesPerItem = []
    let item = searchResultsElements[i]
    $(item).find('span.price').each(function(){
      priceElement = $(this).text()
      pricesPerItem.push(parseInt(priceElement))
    })

  QuoteGen.gear[i].prices = pricesPerItem
  }
  handleCardClick()
}



//Verify each search result returns data from accepted category
async function verifyData(searchObj) {

  try {
    let response = await fetchJsonp(searchObj.url)
    let data = await response.json()
    QuoteGen.responses.push(data)
    QuoteGen.searchIDs.push(searchObj.id)
    let items = data.findCompletedItemsResponse[0].searchResult[0].item || []
    let item = items[0]
    let categoryID = item.primaryCategory[0].categoryId[0]
    QuoteGen.catIDs.push(categoryID)

  } catch(e){
      if(e instanceof TypeError){
        //Show user error message if a search returned no results
        $('.type-error').append(`<p>Search number ${searchObj.id + 1} returned no results</p>`)
        $('.type-error').css('display', 'block')
        throw new Error('1 or more searches returned no results. Modify and search again.')
      }
  }

  let runCounter = QuoteGen.verifyDataCounter += 1

  if(runCounter === QuoteGen.selectedNum) {
    //Check that all category ID's from the search exist in the list of accepted ID's
    let isSuperset = QuoteGen.catIDs.every(function (val) {
      return acceptedCatIDs.indexOf(val) >= 0
    })


    if(isSuperset == true) {

      for(let x=0; x<QuoteGen.gearName.length; x++){

        let term = QuoteGen.gearName[x]
        term = term.replace(/\s+/g, '-')
        term = term.replace(/\./g, '-')

        $('.item-header-tabs').append(`<button class="tab-item">${QuoteGen.gearName[x].toUpperCase()}</button>`)
        $('#resultsContainer').append(`<div class="searchResults ${term.toUpperCase()}" id="result${x}" aria-live="polite"></div>`)
      }

      $('.item-header-tabs').append('<button type="button" class="tab-item calc-button">GET QUOTE</button>')
      $('.item-header-tabs').append('<button type="button" class="restart-button">RESTART</button>')

      //If all returned data is accepted process that data for display to user
      for(i=0; i<QuoteGen.responses.length; i++){
        processData(QuoteGen.responses[i], QuoteGen.searchIDs[i])
      }

    } else {
        $('.cat-error').append('<p>You can only search for photographic equipment!</p>')
        $('.cat-error').css('display', 'block')
    }

  } else {
      console.log(`runCounter in else: ${runCounter}`)
  }

}


function getSearchTerms(){

  $('.search-button').on('click', function(e){
    e.preventDefault()
    let i = 0;
    QuoteGen.verifyDataCounter = 0
    $('.item-header-tabs').empty()
    QuoteGen.gear = []
    QuoteGen.gearName = []
    QuoteGen.catIDs = []
    QuoteGen.responses = []
    QuoteGen.searchIDs = []

    //Create search object for each input value
    $('.search-box').each(function($inputObj){

      let item = $(this).val()
      if(item.length > 1) {
        let search = new SearchObject(buildRequestUrl(item), i, item)
        QuoteGen.gear.push(item)
        QuoteGen.gearName.push(item)

        verifyData(search)
        i++
      } else {
          $('.empty-error').css('display', 'block')

      }

    })

  })

  $('#empty-close').on('click', function(e){
    $('div.empty-error').css('display', 'none')
  })


 }

 function buildRequestUrl(item) {
     baseURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=RoryGarc-priceGen-PRD-55d8a3c47-c767674d&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=";
     endURL = "&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true&paginationInput.entriesPerPage=12&paginationInput.pageNumber=1";
     let requestUrl = baseURL.concat(item.split(' ').join('+'), endURL)
     return requestUrl
 }

//Create the number of search inputs selected by the user
function createInputs(numTerms) {
  toggleDisplay('.step-1')
  toggleDisplay('.step-2')
  let id = "id"
  for (let i=0; i<numTerms; ++i) {
    $('.instruction-2').after(`<div class="inner-input"><input class="search-box" type="text" aria-label="Photo gear search" title="Equipment Search Box" required placeholder="Search photo gear" list="inv_list"></div>`)
    $('.search-box').autocomplete({
      source: ["Sony a7S II", "Sony a7S Body", "Sony a7 Body", "Sony a7 II Body", "Sony a7 III", "Sony a9 Body", "Sony a7R Body", "Sony a7R II Body", "Sony a7R II Body", "Canon EOS 5D Body", "Canon EOS 5D Mark II Body", "Canon EOS 5D Mark III Body", "Nikon D500 Body", "Nikon D810 Body", "Nikon D850 Body" ]

  })
}

  getSearchTerms()
}

//Set the display property of different sections
function toggleDisplay(className) {
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

  $('#type-close').on('click', function(e){
    $('div.type-error').css('display', 'none')
  })

  $('#cat-close').on('click', function(e){
    $('div.cat-error').css('display', 'none')
  })

//Get the number of search terms to create
  $('.num-opt').click(function(e){
    e.preventDefault()
    QuoteGen.selectedNum = parseInt(this.id)
    $(this).attr('aria-selected', "true")
    createInputs(QuoteGen.selectedNum)
  })
}

$(startQuote)
